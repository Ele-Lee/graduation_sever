let BaseController = require('../base/BaseController');

let songService = refServices('songService');

class Song extends BaseController {
    constructor() {
        super();
    }

    //  获取歌曲列表
    async list(req, res) {
        let page = await songService.selectAll();
        super.success(res, page);
    }

    //  获取一首歌曲
    async get(req, res) {
        let song = await songService.getSong(req.param('songid'));
        super.success(res, song);
    }

    //  删除歌曲
    async delete(req, res) {
        let song = await songService.deleteById(req.param('songid'));
        if (song) {
            super.success(res, '删除成功！');
        }else{
            super.fail(res, '删除失败');
        }
    }

    //  添加歌曲
    async add(req, res) {
        let song = await songService.addSong(req.param('songid'), req.param('songmid'),
            req.param('songname'), req.param('albumid'), req.param('singer'), req.param('singerid'),
            req.param('lyric'), req.param('songurl'),req.param('picurl'), req.param('listenCount'));
        if (song) {
            super.success(res, '添加成功！');
        }else{
            super.fail(res, '添加失败');
        }
    }

    //  获取模糊搜索的歌曲
    async like(req, res) {
        let song = await songService.likeSong(req.param('songname'));
        super.success(res, song);
    }

    //  获取某歌手的歌曲
    async getSongBySinger(req, res) {
        let song = await songService.getSongBySinger(req.param('singerid'));
        super.success(res, song);
    }

}

module.exports = new Song();