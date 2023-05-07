
const express = require('express');
const router = express.Router();
const Courseware = require('../models/courseware');

//新增数据
router.post('/courseware/addData', (req, res, next) => {
	// req.query.a -> get
	// req.body.a -> post
    let courseware = new Courseware({
        title : req.body.title,
        contentUrl: req.body.contentUrl,
        sortId: req.body.sortId,
    });
    courseware.save().then((d) => {
       res.locals.d = d;
       next()
    }).catch((err) => {
        next(err.message);
    })
})

//编辑数据
router.post('/courseware/upData', (req, res, next) => {
	let conditions = {_id: req.body.coursewareId};
	let updatas = {$set: req.body}
    Courseware.update(conditions,updatas).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//删除数据
router.post('/courseware/delData', (req, res, next) => {
	let conditions = {_id: req.body.coursewareId};
    Courseware.remove(conditions).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//查询数据
router.get('/courseware/getData', (req, res, next) => {
    Courseware.find({}).sort({'sortId': 1}).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

module.exports = router;
