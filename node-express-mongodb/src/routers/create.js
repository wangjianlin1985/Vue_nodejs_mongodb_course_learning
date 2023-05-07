const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

router.post('/create/file', (req, res, next) => {
	const md5 = crypto.createHash('md5');
    // 后缀名
    let suffix = '.html';
    // 生成字符串
    let str = Math.floor(Math.random()*10000) * Math.floor(Math.random()*10000) + String(Date.now());
    // 生成md5文件名
    let name = md5.update(str).digest('hex') + suffix;
	fs.open(path.resolve(__dirname, '../assets/txt/' + name), 'w', 0644, (e, file) => {
	    if(e) throw e;
	    fs.write(file, req.body.txt, 0, 'utf8', (e) => {
	        if(e) throw e;
	        fs.closeSync(file);
		    res.locals.d = name;
		    next();
	    })
	});
})

module.exports = router;