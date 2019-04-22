let fs = require('fs');
let path = require('path');

let getName = (name) => name.substring(0, name.lastIndexOf('.'));

function beanRegistry (_path, symbol) {
    console.log(`beanRegistry, path: ${path}, symbol: ${symbol}`);

    let dir = path.join(__dirname, '..', _path);

    // 单例初始化
    if (!global.beanContainer) {
        global.beanContainer = {};
    }

    // global ref method
    let ref = 'ref' + symbol.substring(0, 1).toUpperCase() + symbol.substring(1);
    global[ref] = (name) => beanContainer[symbol][name.toLowerCase()];

    let container = global.beanContainer[symbol] = {};

    fs.readdirSync(dir).forEach(fileName => {
        let file = path.join(dir, fileName);
        let name = getName(fileName);
        console.log(`register ${name}`);
        let obj = require(file);
        container[name.toLowerCase()] = new obj;
    });
}

module.exports = beanRegistry;