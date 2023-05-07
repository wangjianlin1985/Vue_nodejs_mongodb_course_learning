
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    // 设置存放路径
    destination: function (req, file, cb) {
    	if(file.mimetype == "video/mp4"){
    		cb(null, path.resolve(__dirname, '../assets/video'));
    	} else if (file.mimetype == "application/vnd.ms-powerpoint" || file.mimetype == "application/pdf"){
    		cb(null, path.resolve(__dirname, '../assets/pdf'));
    	} else {
    		cb(null, path.resolve(__dirname, '../assets/txt'));
    	}
    },
    // 设置生成文件名
    filename: function (req, file, cb) {
        const md5 = crypto.createHash('md5');
        // 源文件名字
        let originalname = file.originalname;
        // 后缀名
        let suffix = originalname.substr(originalname.lastIndexOf('.'));
        // 生成字符串
        let str = Math.floor(Math.random()*10000) * Math.floor(Math.random()*10000) + String(Date.now());
        // 生成md5文件名
        let name = md5.update(str).digest('hex') + suffix;
        cb(null, name);
    }
})
const upload = multer({ storage });

// 单文件上传
router.post('/upload', upload.single('file'), function (req, res, next) {
    // req.file 是 `file` 文件的信息
    // req.body 将具有文本域数据，如果存在的话
    //res.send(req.file);
    res.locals.d = req.file;
    next();
})

module.exports = router;