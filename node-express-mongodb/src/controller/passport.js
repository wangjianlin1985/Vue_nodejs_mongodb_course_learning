
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//const User = require('../models/user');

// 注册
passport.use('local.signup', new LocalStrategy(
    {
        usernameField:'username',
        passwordField:'userpwd',
        passReqToCallback:true  // 此处为true，下面函数的参数才能有req
    },
    (req, username, userpwd, done) => {
        req.checkBody('username').notEmpty();
        req.checkBody('userpwd').notEmpty();
        let err = req.validationErrors();
        // 验证不通过， 缺少字段
        if(err) {
            return done($t('err'));
        }
        // 验证username是否重复
        User.findOne({username: username}, (err, user) => {
            if(err) {
                return done(err.message);
            }
            // 验证不通过， username重复
            if(user) {
                return done($t('nameRepeat'));
            }
            // 存入注册信息
            let newuser = new User();
            newuser.username = username;
            newuser.userpwd = newUser.encryptPassword(userpwd);
            newuser.save().then((d) => {
                res.locals.d = d;
                done(null, {signId: '1111111111'});
            }).catch((err) => {
                done(err.message);
            })
        })
    }
))

// 系统级异常，同next(err)
//done('err');
// 验证不通过
//done(null, false, '验证不通过');
// 验证通过，传递给passport.serializeUser中
//done(null, {id: 'id'});

// 登录
passport.use('local.login', new LocalStrategy(
    {
        usernameField:'name',
        passwordField:'password',
        passReqToCallback:true  //此处为true，下面函数的参数才能有req
    }, 
    (req, name, password, done) => {
        console.log('req.query.name:');
        console.log(req.query.name);
        console.log('req.query.password:');
        console.log(req.query.password);
        console.log('name:');
        console.log(name);
        console.log('password:');
        console.log(password);
        // 系统级异常，同next(err)
        //done('passport');
        // 验证不通过
        //done(null, false, '验证不通过');
        // 验证通过，传递给passport.serializeUser中
        done(null, {id: 'id12345'});
    }
))

passport.serializeUser(function(user, done) {
    console.log('user')
    console.log(user)
    console.log('passport.serializeUser');
    done(null, '123qwe');// 在req.session.passport中
});

passport.deserializeUser(function(user, done) {
    console.log('user')
    console.log(user)
    console.log('passport.deserializeUser');
    done(null, {id: 'id12345'});// 在req.user中
});

module.exports = passport;