class OneParam {
    constructor(field, operator, value) {
        [this.field, this.value, this.operator] = [field, value, operator];
    }

    toSql() {
        return `${this.field} ${this.operator} ?`;
    }

    toValue() {
        return [this.value];
    }
}

class Between {
    constructor(field, min, max) {
        [this.field, this.min, this.max] = [field, min, max];
    }

    toSql() {
        return `${this.field} between ? and ?`;
    }

    toValue() {
        return [this.min, this.max];
    }
}
class In {
    constructor(field, values) {
        [this.field, this.values] = [field, values];
    }

    toSql() {
        return `${this.field} in (${this.values.map(() => '?').join(', ')})`;
    }

    toValue() {
        return this.values;
    }
}

class Condition {
    constructor() {
        this._conditionObjs = [];
        this._orderByObj = [];
        this._limit = null;
    }

    static create() {
        return new Condition();
    }

    in(field, values) {
        this._conditionObjs.push(new In(field, values));
        return this;
    }

    eq(field, value) {
        this._conditionObjs.push(new OneParam(field, '=', value));
        return this;
    }

    like(field, value) {
        this._conditionObjs.push(new OneParam(field, 'like', value));
        return this;
    }

    gt(field, value) {
        this._conditionObjs.push(new OneParam(field, '>', value));
        return this;
    }

    lt(field, value) {
        this._conditionObjs.push(new OneParam(field, '<', value));
        return this;
    }

    ge(field, value) {
        this._conditionObjs.push(new OneParam(field, '>=', value));
        return this;
    }

    le(field, value) {
        this._conditionObjs.push(new OneParam(field, '<=', value));
        return this;
    }

    between(field, min, max) {
        this._conditionObjs.push(new Between(field, min, max));
        return this;
    }

    or(condition) {
        if (!(condition instanceof Condition))
            throw new Error('Argument must be an instance of Condition.');
        this._conditionObjs.push({join: 'or', condition});
        return this;
    }

    and(condition) {
        if (!(condition instanceof Condition))
            throw new Error('Argument must be an instance of Condition.');
        this._conditionObjs.push({join: 'and', condition});
        return this;
    }

    limit(start, num) {
        this._limit = {start, num};
        return this;
    }

    orderBy(field, desc = false) {
        this._orderByObj.push({field, desc});
        return this;
    }

    toSql(where = true) {
        let conditionStatement = '';
        this._conditionObjs.forEach(cond => {
            let join = cond.hasOwnProperty('join') ? cond.join : 'and';
            let statement = cond.hasOwnProperty('join') ? `(${cond.condition.toSql(false)})` : cond.toSql();
            if (conditionStatement === '') {
                if (join === 'or')
                    throw new Error("Can't use 'or' as the first condition.");
                conditionStatement = statement;
            } else {
                conditionStatement += ` ${join} ${statement}`;
            }
        });

        conditionStatement = (where && this._conditionObjs.length > 0 ? 'where ' : '') + conditionStatement;

        let orderStatement = (this._orderByObj.length > 0 ? ' order by ' : '') +
            this._orderByObj.map(order => `${order.field} ${order.desc ? 'desc' : 'asc'}`).join(', ');

        let limitStatement = this._limit ? ` limit ${this._limit.start}, ${this._limit.num}` : '';
        return `${conditionStatement}${orderStatement}${limitStatement}`;
    }

    toValue() {
        if (this._conditionObjs.length === 0) {
            return null;
        }
        return this._conditionObjs.map(cond => cond.hasOwnProperty('join') ? cond.condition.toValue() : cond.toValue()).reduce((a, b) => [...a, ...b]);
    }

}

module.exports = Condition;