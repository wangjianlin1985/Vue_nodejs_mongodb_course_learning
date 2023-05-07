
const express = require('express');
const router = express.Router();
const Outline = require('../models/outline');
const passport = require('../controller/passport');

//新增数据
router.post('/outline/addData', (req, res, next) => {
	// req.query.a -> get
	// req.body.a -> post
    let outline = new Outline({
        courseName : req.body.courseName,
        courseNameEn: req.body.courseNameEn,
        courseCode: req.body.courseCode,
        period: req.body.period,
        credit: req.body.credit,
        penner: req.body.penner,
        discussants: req.body.discussants,
        auditor: req.body.auditor,
        textUrl: req.body.textUrl,
    });
    outline.save().then((d) => {
       res.locals.d = d;
       next()
    }).catch((err) => {
        next(err.message);
    })
})

//编辑数据
router.post('/outline/upData', (req, res, next) => {
	let conditions = {_id: req.body.courseId};
	let updatas = {$set: req.body}
    Outline.update(conditions,updatas).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//删除数据
router.post('/outline/delData', (req, res, next) => {
	let conditions = {_id: req.body.courseId};
    Outline.remove(conditions).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//查询数据
router.get('/outline/getData', (req, res, next) => {
    Outline.find().then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

module.exports = router;