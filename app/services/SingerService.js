let BaseService = require('../base/BaseService');
let Condition = require('../utils/Condition');

class SingerService extends BaseService {
    constructor() {
        super('singerDao');
    }

    //  添加歌手
    async addSinger(singer, Findex, Fsinger_mid, Fother_name, avatar) {
        let info = {
            singer: singer,
            Findex: Findex,
            Fsinger_mid: Fsinger_mid,
            Fother_name: Fother_name,
            avatar: avatar
        };
        let res = await this.dao.insert(info);
        return res;
    }

    async getSinger(singer_id) {
        let condition = Condition.create().eq('singer_id', singer_id);
        let res = await this.dao.selectList(condition);
        if (res.length > 0) {
            return res[0];
        }else{
            return null;
        }
    }
}

module.exports = SingerService;
