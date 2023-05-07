

const _ = require('lodash');


//获取当前时间(yyyy-mm-dd hh:mm:ss)
exports.getCurrTime = () => {
    let time = new Date();
    return '' + time.getFullYear() + '-' +
        _.padStart(time.getMonth() + 1, 2, '0') + '-' +
        _.padStart(time.getDate(), 2, '0') + ' ' +
        _.padStart(time.getHours(), 2, '0') + ':' +
        _.padStart(time.getMinutes(), 2, '0') + ':' +
        _.padStart(time.getSeconds(), 2, '0');
}


//对象深拷贝
function copy(obj1, obj2) {
    let obj = obj2 || {};
    for(var i in obj1){
        if(typeof obj1[i] === "object") {
            obj[i] = Array.isArray(obj1[i]) ? [] : {};
            copy(obj1[i], obj[i]);
        }else {
            obj[i] = obj1[i];
        }
    }
    return obj;
}
exports.copy = copy