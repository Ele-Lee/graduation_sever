let BaseService = require('../base/BaseService');
let Condition = require('../utils/Condition');

class SongListService extends BaseService {
    constructor() {
        super('songListDao');
    }

    //  添加歌单
    async addSongList(dissname, name, imgurl, createtime,) {
        let songList = {
            adminUser: adminUser,
            adminPassword: adminPassword
        };
        let res = await this.dao.insert(songList);
        return res;
    }
}

module.exports = SongListService;