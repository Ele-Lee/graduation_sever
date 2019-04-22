let BaseService = require('../base/BaseService');
let Condition = require('../utils/Condition');

class SliderService extends BaseService {
    constructor() {
        super('sliderDao');
    }

    //  添加轮播图
    async addSlider(title, picLink, linkUrl, orders) {
        let slider = {
            title: title,
            picLink: picLink,
            linkUrl: linkUrl,
            orders: orders
        };
        let res = await this.dao.insert(slider);
        return res;
    }
}

module.exports = SliderService;
