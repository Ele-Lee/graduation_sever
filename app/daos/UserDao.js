let BaseDao = require('../base/BaseDao');

class UserDao extends BaseDao {
    constructor(){
        // 设置主键名称，默认id。autoPK主键是否自增长
        super({primaryKey: 'userId', tableName: 'user', autoPK: true});
    }
}
module.exports = UserDao;