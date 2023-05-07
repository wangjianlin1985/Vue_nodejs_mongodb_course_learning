/**
 * 用户信息
 */
const mongoose = require('../common/db.js');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

var UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    userpwd: {
        type: String
    },
    logindate: {
        type: Date,
        default: Date.now()
    },
});

UserSchema.methods.encryptPassword = (userpwd) => {
    return bcrypt.hashSync(userpwd, salt);
}

module.exports = mongoose.model('User',UserSchema);