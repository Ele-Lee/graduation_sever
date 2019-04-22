let BaseController = require('../base/BaseController');

let singerService = refServices('singerService');

class Singer extends BaseController {
    constructor() {
        super();
    }

    //  获取歌手列表
    async list(req, res) {
        let singer = await singerService.selectAll();
        super.success(res, singer);
    }

    //  获取一歌手
    async get(req, res) {
        let singer = await singerService.getSinger(req.param('singer_id'));
        super.success(res, singer);
    }

    //  删除歌手
    async delete(req, res) {
        let singer = await singerService.deleteById(req.param('singer_id'));
        if (singer) {
            super.success(res, '删除成功！');
        }else{
            super.fail(res, '删除失败');
        }
    }

    //  添加歌手
    async add(req, res) {
        let singer = await singerService.addSinger(req.param('singer'), req.param('Findex'),
            req.param('Fsinger_mid'), req.param('Fother_name'), req.param('avatar'),);
        if (singer) {
            super.success(res, '添加成功！');
        }else{
            super.fail(res, '添加失败');
        }
    }
}

module.exports = new Singer();