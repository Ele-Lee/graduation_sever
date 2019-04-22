let BaseController = require('../base/BaseController');

let sliderService = refServices('sliderService');

class Slider extends BaseController {

    constructor() {
        super();
    }

    async list(req, res) {
        let page = await sliderService.selectAll();
        super.success(res, page);
    }

    async delete(req, res) {
        let slider = await sliderService.deleteById(req.param('picId'));
        if (slider) {
            super.success(res, '删除成功！');
        }else{
            super.fail(res, '删除失败');
        }
    }

    async add(req, res) {
        let slider = await sliderService.addSlider(req.param('title'), req.param('picLink'),
            req.param('linkUrl'), req.param('orders'));
        if (slider) {
            super.success(res, '添加成功！');
        }else{
            super.fail(res, '添加失败');
        }
    }

}

module.exports = new Slider();