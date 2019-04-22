let BaseController = require('../base/BaseController');

let hotService = refServices('hotService');

class Hot extends BaseController {
    constructor() {
        super();
    }

    //  获取热词列表
    async list(req, res) {
        let page = await hotService.selectAll();
        super.success(res, page);
    }

    //  删除某热词
    async delete(req, res) {
        let hot = await hotService.deleteById(req.param('hot_id'));
        if (hot) {
            super.success(res, '删除成功！');
        }else{
            super.fail(res, '删除失败');
        }
    }

    //  增加热词
    async add(req, res) {
        let admin = await hotService.addHot(req.param('content'), req.param('count'));
        if (admin) {
            super.success(res, '添加成功！');
        }else{
            super.fail(res, '添加失败');
        }
    }
}

module.exports = new Hot();