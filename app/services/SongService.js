let BaseService = require('../base/BaseService');
let Condition = require('../utils/Condition');

class SongService extends BaseService {
    constructor() {
        super('songDao');
    }

    //  添加歌曲
    async addSong(songid, songmid, songname, albumid, singer, singerid, lyric, songurl, picurl, listenCount) {
        let song = {
            songid: songid,
            songmid: songmid,
            songname: songname,
            albumid: albumid,
            singer: singer,
            singerid: singerid,
            lyric: lyric,
            songurl: songurl,
            picurl: picurl,
            listenCount: listenCount
        };
        let res = await this.dao.insert(song);
        return res;
    }

    //  获取一首歌曲
    async getSong(songid) {
        let condition = Condition.create().eq('songid', songid);
        let res = await this.dao.selectList(condition);
        if (res.length > 0) {
            return res[0];
        }else{
            return null;
        }
    }

    //  获取模糊搜索的歌曲
    async likeSong(songname) {
        songname = '%'+ songname + '%';
        let condition = Condition.create().like('songname', songname);
        let res = await this.dao.selectList(condition);
        if (res.length > 0) {
            return res;
        }else{
            return null;
        }
    }

    //  获取某歌手的歌曲
    async getSongBySinger(singerid) {
        let condition = Condition.create().eq('singerid', singerid);
        let res = await this.dao.selectList(condition);
        if (res.length > 0) {
            return res;
        }else{
            return null;
        }
    }
}

module.exports = SongService;