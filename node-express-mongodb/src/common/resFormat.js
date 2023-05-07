
const { copy } = require('./utils');

// 返回数据统一格式
const format = {
    data: null,
    meta: {
        message: '',
        result: '',
    }
}
exports.format = format;

// 成功返回数据格式
exports.resSuccess = (req, res, next) => {
    const d = copy(format, {});
    d.data = res.locals.d || null;
    d.meta.message = 'ok';
    d.meta.result = 'SUCCESS';
    res.send(d);
}

// 失败返回数据格式
exports.resFail = (err, req, res, next) => {
    const d = copy(format, {});
    d.data = null;
    d.meta.message = err || '';
    d.meta.result = 'FAIL';
    res.send(d);
}
