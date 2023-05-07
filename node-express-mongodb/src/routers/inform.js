
const express = require('express');
const router = express.Router();
const Inform = require('../models/inform');
const passport = require('../controller/passport');

//新增数据
router.post('/inform/addData', (req, res, next) => {
	// req.query.a -> get
	// req.body.a -> post
    let inform = new Inform({
        title : req.body.title,
        content: req.body.content,
        publisher: req.body.publisher,
        time: req.body.time,
        timel: req.body.timel,
    });
    inform.save().then((d) => {
       res.locals.d = d;
       next()
    }).catch((err) => {
        next(err.message);
    })
})

//编辑数据
router.post('/inform/upData', (req, res, next) => {
	let conditions = {_id: req.body.informId};
	let updatas = {$set: req.body}
    Inform.update(conditions,updatas).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//删除数据
router.post('/inform/delData', (req, res, next) => {
	let conditions = {_id: req.body.informId};
    Inform.remove(conditions).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//查询数据
router.get('/inform/getData', (req, res, next) => {
    Inform.find({}).sort({'time':-1}).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

module.exports = router;
