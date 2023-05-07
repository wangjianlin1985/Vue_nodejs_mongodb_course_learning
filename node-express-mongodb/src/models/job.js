/**
 * 职位信息
 */
const mongoose = require('../common/db.js');
const Schema = mongoose.Schema;

var JobSchema = new Schema({
    jobname : { type: String },
    job: {//关联user表
        type: String, ref: 'User'
    }
});


module.exports = mongoose.model('Job',JobSchema);