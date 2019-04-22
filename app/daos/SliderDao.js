let BaseDao = require('../base/BaseDao');

class SliderDao extends BaseDao{
    constructor() {
        // 设置主键名称，默认id。autoPK主键是否自增长
        super({primaryKey: 'picId', tableName: 'slider', autoPK: true});
    }
}

module.exports = SliderDao;