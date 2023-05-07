
const express = require('express');
const router = express.Router();
const Tecode = require('../models/tecode');

//新增数据
router.post('/tecode/addData', (req, res, next) => {
	// req.query.a -> get
	// req.body.a -> post
    let tecode = new Tecode({
        title : req.body.title,
        content: req.body.content,
        textUrl: req.body.textUrl,
    });
    tecode.save().then((d) => {
       res.locals.d = d;
       next()
    }).catch((err) => {
        next(err.message);
    })
})
//编辑数据
router.post('/tecode/upData', (req, res, next) => {
	let conditions = {_id: req.body.codeId};
	let updatas = {$set: req.body}
    Tecode.update(conditions,updatas).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})
//删除数据
router.post('/tecode/delData', (req, res, next) => {
	let conditions = {_id: req.body.codeId};
    Tecode.remove(conditions).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//查询数据
router.get('/tecode/getData', (req, res, next) => {
    Tecode.find().then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

module.exports = router;