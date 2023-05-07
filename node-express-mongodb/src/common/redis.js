
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const options = {
    host: '127.0.0.1',
    port: 6379,
    // ttl: 60 * 60 * 24 * 30,   //Session的有效期为30天
    ttl: 10 //60s
};


module.exports = () => {
    return session({
        resave:false, 
        saveUninitialized: true,
        store: new RedisStore(options),
        secret: 'express is powerful'
    })
}
