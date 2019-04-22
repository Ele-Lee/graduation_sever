let BaseDao = require('../base/BaseDao');

class SingerDao extends BaseDao {
    constructor() {
        // 设置主键名称，默认id。autoPK主键是否自增长
        super({primaryKey: 'singer_id', tableName: 'singer', autoPK: true});
    }
}

module.exports = SingerDao;