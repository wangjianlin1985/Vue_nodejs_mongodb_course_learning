/**
 * 课程通知
 */
const mongoose = require('../common/db.js');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

var InformSchema = new Schema({
	title: {
		type: String,
	},
	content: {
		type: String,
	},
	publisher: {
		type: String,
	},
	time: {
		type: String,
	},
	timel: {
		type: String,
	}
});
module.exports = mongoose.model('Inform',InformSchema);