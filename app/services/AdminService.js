let BaseService = require('../base/BaseService');
let Condition = require('../utils/Condition');
let md5 = require('md5');

class AdminService extends BaseService{

    constructor() {
        super('adminDao');
    }

    //  管理员登录
    async checkAdmin(adminUser, adminPassword){
        adminPassword = md5(adminPassword);
        let condition = Condition.create().eq('adminUser', adminUser).eq('adminPassword', adminPassword);
        let res = await this.dao.selectList(condition);
        if (res.length > 0) {
            return res[0];
        }else{
            return null;
        }
    }

    //  添加管理员
    async addAdmin(adminUser, adminPassword) {
        adminPassword = md5(adminPassword);
        let admin = {
            adminUser: adminUser,
            adminPassword: adminPassword
        };
        let res = await this.dao.insert(admin);
        return res;
    }
}

module.exports = AdminService;