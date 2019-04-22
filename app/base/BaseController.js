let ReturnDTO = require("../utils/ReturnDTO");
let HttpCode = require("../utils/HttpCode");

class BaseController {
    success(res, data = {}) {
        res.json(ReturnDTO.create(HttpCode.OK, data));
    }
    fail(res, data = {}) {
        res.json(ReturnDTO.create(HttpCode.UN_KNOW_ERROR, data));
    }
    render(req, res, path, data = {}) {
        res.render(path, data);
    }

    /**
     * Get all params
     * @param req
     * @returns {{}}
     */
    params(req) {
        return {...req.params, ...req.body, ...req.query};
    }

    ref(name) {
        if (!beanContainer.services[name.toLowerCase()]){
            throw new Error(`Can't found ${name}.`);
        }
        return beanContainer.services[name.toLowerCase()];
    }
}

module.exports = BaseController;