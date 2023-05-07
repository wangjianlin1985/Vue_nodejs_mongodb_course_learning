
const express = require('express');
const router = express.Router();
const Pbvideo = require('../models/pbvideo');

//新增数据
router.post('/pbvideo/addData', (req, res, next) => {
	// req.query.a -> get
	// req.body.a -> post
    let pbvideo = new Pbvideo({
        title : req.body.title,
        subTitle: req.body.subTitle,
        videoUrl: req.body.videoUrl,
    });
    pbvideo.save().then((d) => {
       res.locals.d = d;
       next()
    }).catch((err) => {
        next(err.message);
    })
})
//编辑数据
router.post('/pbvideo/upData', (req, res, next) => {
	let conditions = {_id: req.body.publictlyId};
	let updatas = {$set: req.body}
    Pbvideo.update(conditions,updatas).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//删除数据
router.post('/pbvideo/delData', (req, res, next) => {
	let conditions = {_id: req.body.publictlyId};
    Pbvideo.remove(conditions).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

//查询数据
router.get('/pbvideo/getData', (req, res, next) => {
    Pbvideo.find().then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

module.exports = router;