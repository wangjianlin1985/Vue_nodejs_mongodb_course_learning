
const express = require('express');
const app = require('express')();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('./common/redis');
const passport = require('./controller/passport');
const expressValidator = require('express-validator');
const i18n = require('./i18n');
const routerErr = require('./common/404');
const Promise = require('bluebird');
const { getCurrTime } = require('./common/utils');
const { AJAX_NODE } = require('./common/const');

///=======morgan自定义日志日期时间===========//
morgan.token('curr_date', function getCurrDate(req, res) {
    return getCurrTime();
})
app.use(morgan('[:curr_date] :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'));
//app.use(morgan('short'));



///=======解析post请求获取的参数===========//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



///=======中间件调用cookie===========//
app.use(cookieParser());



///=======中间件调用session中的redis===========//
app.use(session());



///=======passport验证初始化===========//
app.use(passport.initialize());
app.use(passport.session());



///=======express-validator初始化===========//
app.use(expressValidator());



///=======托管静态文件===========//
app.use(express.static(__dirname + "/assets"));



///=======i18n初始化===========//
app.use(i18n.init);
app.use(AJAX_NODE, (req, res, next) => {
    // 判断是否传递lang字段，设置语言
    if(req.query.lang) {
        setLocale(req.query.lang);
    }
    next();
})


///=======路由信息 （接口地址）开始 存放在./routes目录下===========//
let createApi = require('./routers/create');
let uploadApi = require('./routers/upload');
let informApi = require('./routers/inform');
let outlineApi = require('./routers/outline');
let pbvideoApi = require('./routers/pbvideo');
let coursewareApi = require('./routers/courseware');
let TevideoApi = require('./routers/tevideo');
let TecodeApi = require('./routers/tecode');


app.use(AJAX_NODE, createApi);
app.use(AJAX_NODE, uploadApi);
app.use(AJAX_NODE, informApi);
app.use(AJAX_NODE, outlineApi);
app.use(AJAX_NODE, pbvideoApi);
app.use(AJAX_NODE, coursewareApi);
app.use(AJAX_NODE, TevideoApi);
app.use(AJAX_NODE, TecodeApi);



///=======处理404路由===========//
app.use(routerErr);



///=======处理公共返回(res.send)的数据格式，放在'路由信息'后面===========//
let { resSuccess, resFail } = require('./common/resFormat');

app.use(AJAX_NODE, resSuccess);
app.use(AJAX_NODE, resFail);



//监听端口
const server = app.listen(4000, '127.0.0.1', function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("访问地址为 http://%s:%s", host, port);
})