
//静态服务器地址
const srcUrl = '/img/'; 
const videoUrl = '/video/'; 
const txtUrl = '/txt/'; 
const pdfUrl = '/pdf/'; 

const AJAX_ADMIN = '/node'; //index的ajax请求地址
//const AJAX_CQ_ADMIN='/cq-admin';
//const AJAX_INDEX = '/cq-ocmsadmin'; //index的ajax请求地址
const TIPS_TIEM = 2000;
import axios from 'axios';


//封装简写的vue请求
class $v {
	/*
     * vue: 当前是以this.vue.$http或者this.vue.http方式请求(Vue、this)
     * url:请求链接
     * data:请求参数
     * success:请求成功回调 
     * error:请求失败时是否报错(true时不报错),error三种形式:1.为function时调用 2.为true时不弹出提示错误，而是控制台输出  3.为false时弹出提示错误
     */
    static get(url, json, success, error,) {
        let config = {};
        if(typeof(json) == 'object') {
            if(json.params) {
                config = json;
            }else {
                config.params = json;
            }
            Object.assign(config.params, $v.commonParam());
        }
        if(typeof(json) == 'function') {
            error = error || success;
            success = json;
            config.params = $v.commonParam();
        }
        if(typeof(error) == 'string') {
            error = false;
        }
        //发送请求
        return axios.get(url, config)
        .then((d) => {
            //console.log(d.config);
            let data = d.data;
            //调用处理结果函数
            $v.resultHandle(data, success, error,)
        })
        .catch((error) => {
            $v.errorHandle(error);
        })
    }
    
    static delete(url, json, success, error,) {
        let config = {};
        if(typeof(json) == 'object') {
            if(json.params) {
                config = json;
            }else {
                config.params = json;
            }
            Object.assign(config.params, $v.commonParam());
        }
        if(typeof(json) == 'function') {
            error = error || success;
            success = json;
            config.params = $v.commonParam();
        }
        if(typeof(error) == 'string') {
            error = false;
        }
        //发送请求
        return axios.delete(url, config)
        .then((d) => {
            //console.log(d.config);
            let data = d.data;
            //调用处理结果函数
            $v.resultHandle(data, success, error,)
        })
        .catch((error) => {
            $v.errorHandle(error);
        })
    }
    
    static post(url, json, success, error,) {
        let data = {};
        let config = {};
        if(typeof(json) == 'object') {
            if(json.data) {
                data = json.data;
                delete json.data;
                config = json;
            }else {
                data = json;
            }
        }
        if(typeof(json) == 'function') {
            error = error || success;
            success = json;
        }
        if(typeof(error) == 'string') {
            error = false;
        }
        //发送请求
        return axios.post($v.commonParam(url), data, config)
        .then((d) => {
            //console.log(d.config);
            let data = d.data;
            //调用处理结果函数
            $v.resultHandle(data, success, error,)
        })
        .catch((error) => {
            $v.errorHandle(error);
        })
    }
    
    static put(url, json, success, error) {
        let data = {};
        let config = {};
        if(typeof(json) == 'object') {
            if(json.data) {
                data = json.data;
                delete json.data;
                config = json;
            }else {
                data = json;
            }
        }
        if(typeof(json) == 'function') {
            error = error || success;
            success = json;
        }
        if(typeof(error) == 'string') {
            error = false;
        }
        //发送请求
        return axios.put($v.commonParam(url), data, config)
        .then((d) => {
            //console.log(d.config);
            let data = d.data;
            //调用处理结果函数
            $v.resultHandle(data, success, error)
        })
        .catch((error) => {
            $v.errorHandle(error);
        })
    }
    
    //设置出入公共参数
    static commonParam(url) {
        let sessionId = '';
        let lang = '';
        if(!url) {
            let data = {};
            data.sessionId = sessionId;
            data.lang = lang;
            return data;
        }
        if(url) {
            let _str = url.split('?').length > 1 ? '&' : '?';
            return url + `${_str}sessionId=${sessionId}&lang=${lang}`;
        }
        
    }
    
    //处理ajax请求成功结果
    static resultHandle(data, success, error,) {
        try{
           
        }catch(e) {
            
        }
//      success ? success(data) : '';return;
        if (data.meta.result == 'SUCCESS') {
            success ? success(data) : '';
        }
        if (data.meta.result == 'FAIL') {
            if(typeof(error) == 'function') {
                error(data, (errMsg) => {
                    Message.error({ 
                        message: errMsg ? errMsg : data.meta.message, 
                        duration: TIPS_TIEM,
                        customClass: 'ajax_error_tip_text_box',
                    });
                });
                return;
            }
            if(error) {
                console.log(data);
            }else {
                Message.error({ 
                    message: data.meta.message, 
                    duration: TIPS_TIEM,
                    customClass: 'ajax_error_tip_text_box',
                });
            }
        }
        if (data.meta.result == 'AUTH_ERROR') { //登录过期
            try{
                //sessionStorage.clear()
            }catch(e) {
                console.log('error: ' + e)
            }
            sessionStorage.setItem('path', location.pathname);
            location.href = '/login';
        }
    }
    
    static errorHandle(error) {
        try{
        	
        }catch(e) {
            
        }
        console.log('error:' + error.message);
    }
}

//日期
class DateFormat {
    static get(val) {
        let y = val.getFullYear();
        let m = val.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = val.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d + ' ' + "00:00:00";
    }
    static getDate(val) {
        let y = val.getFullYear();
        let m = val.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = val.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    }
    static getNew(val) {
        let y = val.getFullYear();
        let m = val.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = val.getDate();
        d = d < 10 ? ('0' + d) : d;
        let hour = val.getHours();
        hour = hour < 10 ? ('0' + hour) : hour;
		let minute = val.getMinutes();
		minute = minute < 10 ? ('0' + minute) : minute;
		let second = val.getSeconds();
		second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + hour + ':' + minute + ':' + second;
    }
}

export {
	srcUrl,
	txtUrl,
	DateFormat,
	AJAX_ADMIN,
	$v,
	TIPS_TIEM
}
