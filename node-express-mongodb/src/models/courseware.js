/**
 * 课程课件
 */
const mongoose = require('../common/db.js');
const Schema = mongoose.Schema;

var CoursewareSchema = new Schema({
	title: {
		type: String,
	},
	contentUrl: {
		type: String,
	},
	sortId: {
		type: String,
	},
});
module.exports = mongoose.model('Courseware',CoursewareSchema);