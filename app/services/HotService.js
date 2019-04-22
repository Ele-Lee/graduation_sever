let BaseService = require('../base/BaseService');

let Condition = require('../utils/Condition');

class HotService extends BaseService {

    constructor() {
        super('hotDao');
    }

    //  添加热词
    async addHot(content, count) {
        let hot = {
            content: content,
            count: count
        };
        let res = await this.dao.insert(hot);
        return res;
    }
}

module.exports = HotService;