
const express = require('express');
const router = express.Router();
const Tevideo = require('../models/tevideo');

//新增章数据
router.post('/tevideo/addChapterData', (req, res, next) => {
	// req.query.a -> get
	// req.body.a -> post
    let tevideo = new Tevideo({
        chapterName : req.body.chapterName,
        chapterTitle: req.body.chapterTitle,
        sectionlist: req.body.sectionlist,
    });
    tevideo.save().then((d) => {
       res.locals.d = d;
       next()
    }).catch((err) => {
        next(err.message);
    })
})
//新增节数据
router.post('/tevideo/addSectionData', (req, res, next) => {
	Tevideo.update({"_id":req.body.fatherId}, {$push: { sectionlist: req.body}}).then((d) => {
		console.log(d)
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})
//编辑章数据
router.post('/tevideo/upChapterData', (req, res, next) => {
	let updatas = {$set: req.body}
    Tevideo.update({"_id":req.body.chapterId}, updatas).then((cd)=>{
        			res.locals.d = cd;
        			next()
		}).catch((err) => {
	    	console.log(err)
	        next(err.message);
   })  
})
//编辑节数据
router.post('/tevideo/upSectionData', (req, res, next) => {
	let updatas = {$set: {"sectionlist.$" : {"sectionName": req.body.sectionName,"sectionTitle":req.body.sectionTitle,"videoUrl":req.body.videoUrl,"time":req.body.time,"fatherId":req.body.fatherId}}}
    Tevideo.update({"_id":req.body.fatherId,"sectionlist.time": req.body.time}, updatas).then((cd)=>{
        			res.locals.d = cd;
        			next()
		}).catch((err) => {
	    	console.log(err)
	        next(err.message);
   })  
})

//删除章数据
router.post('/tevideo/delChapterData', (req, res, next) => {
	let conditions = {_id: req.body.chapterId};
    Tevideo.remove(conditions).then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
    	console.log(err)
        next(err.message);
    })
})
//删除节数据
router.post('/tevideo/delSectionData', (req, res, next) => {
	let updatas = {$pull: {"sectionlist" : {"time": req.body.time}}}
    Tevideo.update({"_id":req.body.fatherId,"sectionlist.time": req.body.time}, updatas).then((cd)=>{
        			res.locals.d = cd;
        			next()
		}).catch((err) => {
	    	console.log(err)
	        next(err.message);
   })
})
//查询数据
router.get('/tevideo/getData', (req, res, next) => {
    Tevideo.find().then((d) => {
        res.locals.d = d;
        next();
    }).catch((err) => {
        next(err.message);
    })
})

module.exports = router;