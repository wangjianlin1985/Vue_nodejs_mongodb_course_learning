/**
 * 课程大纲
 */
const mongoose = require('../common/db.js');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

var OutlineSchema = new Schema({
	courseName: {
		type: String,
	},
	courseNameEn: {
		type: String,
	},
	courseCode: {
		type: String,
	},
	period: {
		type: String,
	},
	credit: {
		type: String,
	},
	penner: {
		type: String,
	},
	discussants: {
		type: String,
	},
	auditor: {
		type: String,
	},
	textUrl: {
		type: String,
	}
});
module.exports = mongoose.model('Outline',OutlineSchema);