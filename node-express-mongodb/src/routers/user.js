
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Job = require('../models/job');
const passport = require('../controller/passport');

// 注册
router.get('/user/signup', passport.authenticate('local.signup'), (req, res, next) => {
    res.locals.d = $t('signupSuccess');
    next();
})


router.get('/user/put', (req, res, next) => {
    let user = new User({
        username : 'Tracy McGrady',                 //用户账号
        userpwd: 'abcd',                            //密码
//      userid: 2,
//      userage: 40,                                //年龄
//      logindate : new Date()                      //最近登录时间
    });
    let job = new Job({
        jobname: '老师'
    })
    user.save().then((d) => {
        job.job = d._id;
        job.save().then((d) => {
            console.log("Res:" + d);
            // res.send(d);
            res.locals.d = d;
            next();
        }).catch((err) => {
            next(err.message);
        })
        return null;
        // console.log("Res:" + d);
    }).catch((err) => {
        next(err.message);
        // console.log("Error:" + err);
    })
})

router.get('/user/del', (req, res, next) => {
    User.remove().then((d) => {
        res.locals.d = d;
        next();
    })
})

//router.get('/user/set', (req, res) => {
//  req.session.user = '小明';
//  res.send('设置成功')
//})
//router.get('/user/get', (req, res) => {
//  res.send(req.session.user)
//})

router.get('/user/login', passport.authenticate('local.login'), (req, res, next) => {
    console.log(1111);
    res.locals.d = '登录成功';
    next();
})
router.get('/user/id', (req, res, next) => {
    console.log(req.session.passport)
    console.log(req.user)
    res.locals.d = req.session.passport;
    next();
})
router.get('/user/get', (req, res, next) => {
    next('err');
})
router.get('/user/get2', (req, res, next) => {
    res.locals.d = {
        a: $t('home') + 2,
        b: $t('home') + 2
    }
    next();
//  setLocale('zh')
//  res.send($t('home'))
})

const { check, validationResult, query } = require('express-validator/check');
router.get('/user/validator', [check('userid').not()], (req, res, next) => {
    console.log('userid:' + req.query.userid)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.mapped())
    }
    res.locals.d = errors.mapped();
    next();
})

module.exports = router;
