let BaseController = require('../base/BaseController');

let adminService = refServices('adminService');

class Admin extends BaseController {

    constructor() {
        super();
    }

    index(req, res) {
        super.render(req, res, 'admin', {message: req.session.adminName || 'login'})
    };

    //  验证登录
    async login(req, res) {
        let admin = await adminService.checkAdmin(req.param('adminUser'), req.param('adminPassword'));
        if (admin) {
            super.success(res, '登录成功！');
        }else{
            super.fail(res, '登录失败');
        }
    }

    //  获取管理员列表
    async list(req, res) {
        let page = await adminService.selectAll();
        super.success(res, page);
    }

    //  删除某管理员
    async delete(req, res) {
        let admin = await adminService.deleteById(req.param('adminId'));
        if (admin) {
            super.success(res, '删除成功！');
        }else{
            super.fail(res, '删除失败');
        }
    }

    //  增加管理员
    async add(req, res) {
        let admin = await adminService.addAdmin(req.param('adminUser'), req.param('adminPassword'));
        if (admin) {
            super.success(res, '添加成功！');
        }else{
            super.fail(res, '添加失败');
        }
    }

}

module.exports = new Admin();