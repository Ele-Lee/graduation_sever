let BaseController = require('../base/BaseController');

let userService = refServices('userService');

class User extends BaseController {

    constructor() {
        super();
    }

    index(req, res) {
        super.render(req, res, 'user', {message: req.session.username || 'login'})
    };

    async login(req, res) {
        let user = await userService.checkUser(req.param('username'), req.param('password'));
        if (user) {
            super.success(res, '登录成功！');
        }else{
            super.fail(res, '登录失败');
        }
    }

    async list(req, res) {
        let page = await userService.selectAll();
        super.success(res, page);
    }

    async delete(req, res) {
        let user = await userService.deleteById(req.param('userId'));
        if (user == 1) {
            super.success(res, '删除成功！');
        }else{
            super.fail(res, '删除失败');
        }
    }

    async add(req, res) {
        let user = await userService.addUser(req.param('userName'), req.param('userPassword'), req.param('sex'),
        req.param('phone'), req.param('avatar'));
        if (user == 1) {
            super.success(res, '添加成功！');
        }else{
            super.fail(res, '添加失败');
        }
    }

}

module.exports = new User();