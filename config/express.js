let express = require('express');
let load = require('express-load');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let helmet = require('helmet');
let morgan = require('morgan');
let session = require('express-session');
let beanRegistry = require('../utils/beanRegistry');

module.exports = function () {

    let app = express();

    //Set port to env.Port or default to 8080
    app.set('port', process.env.PORT || 3000);

    //set view engine
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    //middleware for security
    app.use(helmet());


    // 简单日志
    app.use(morgan("short"));

    // to support JSON-encoded bodies
    app.use(bodyParser.json());

    // to support URL-encoded bodies
    app.use(bodyParser.urlencoded({ extended: true }));

    // to support cookie
    app.use(cookieParser());

    // to support session
    app.use(session({
        secret: 'harris',
        name: 'session_id',
        resave: true,
        saveUninitialized: false,
        cookie: { maxAge: 60 * 60 * 1000 },
    }));

    //Use the public folder for static files
    app.use(express.static('./public'));

    // process exception
    // app.use();

    // discover and register dao
    beanRegistry('app/daos', 'daos');

    // discover and register service
    beanRegistry('app/services', 'services');

    //configure mvc
    load('controllers', { cwd: 'app' })
        .then('routes')
        .into(app);

    return app;
};
