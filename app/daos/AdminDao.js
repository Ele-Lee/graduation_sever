let BaseDao = require('../base/BaseDao');

class AdminDao extends BaseDao{
    constructor() {
        // 设置主键名称，默认id。autoPK主键是否自增长
        super({primaryKey: 'adminId', tableName: 'admin', autoPK: true});
    }
}

module.exports = AdminDao;