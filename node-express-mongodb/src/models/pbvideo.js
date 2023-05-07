/**
 * 课程宣传
 */
const mongoose = require('../common/db.js');
const Schema = mongoose.Schema;

var PbvideoSchema = new Schema({
	title: {
		type: String,
	},
	subTitle: {
		type: String,
	},
	videoUrl: {
		type: String,
	},
});
module.exports = mongoose.model('Pbvideo',PbvideoSchema);