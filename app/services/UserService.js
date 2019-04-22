let BaseService = require('../base/BaseService');
let Condition = require('../utils/Condition');
let md5 = require('md5');

class UserService extends BaseService {

    constructor() {
        super('userDao');
    }

    //  用户登录
    async checkUser(username, password){
        password = md5(password);
        let condition = Condition.create().eq('userName', username).eq('userPassword', password);
        let res = await this.dao.selectList(condition);
        if (res.length > 0) {
            return res[0];
        }else{
            return null;
        }
    }

    //  添加用户
    async addUser(username, password, sex, phone, avatar) {
        password = md5(password);
        let user = {
            userName: username,
            userPassword: password,
            sex: sex,
            phone: phone,
            avatar: avatar
        };
        let res = await this.dao.insert(user);
        return res;
    }


    async testTran(){
        super.surroundTransaction(async conn => {
            await conn.insert({username: '1'});
            // throw new Error('test');
            await conn.insert({username: '2'});
        })
    }

}

module.exports = UserService;