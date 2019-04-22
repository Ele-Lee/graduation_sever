let BaseDao = require('../base/BaseDao');

class SongDao extends BaseDao {
    constructor() {
        // 设置主键名称，默认id。autoPK主键是否自增长
        super({primaryKey: 'songid', tableName: 'song', autoPK: true});
    }
}

module.exports = SongDao;