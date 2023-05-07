/**
 * 教学实例
 */
const mongoose = require('../common/db.js');
const Schema = mongoose.Schema;

var TecodeSchema = new Schema({
	title: {
		type: String,
	},
	content: {
		type: String,
	},
	textUrl: {
		type: String,
	},
});
module.exports = mongoose.model('Tecode',TecodeSchema);