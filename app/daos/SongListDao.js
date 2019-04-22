let BaseDao = require('../base/BaseDao');

class SongListDao extends BaseDao {
    constructor() {
        // 设置主键名称，默认id。autoPK主键是否自增长
        super({primaryKey: 'dissid', tableName: 'songList', autoPK: true});
    }
}

module.exports = SongListDao;