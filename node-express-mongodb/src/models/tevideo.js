/**
 * 教学视频
 */
const mongoose = require('../common/db.js');
const Schema = mongoose.Schema;

var TevideoSchema = new Schema({
	chapterName : {
    	type: String,
    },
    chapterTitle: {
    	type: String 
    },
    sectionlist: {
    	type: Array,
    	sectionName: {
    		type: String
    	},
    	sectionTitle: {
    		type: String
    	},
    	fatherId: {
    		type: String
    	},
    	time: {
    		type: String
    	}
    }
});
module.exports = mongoose.model('Tevideo',TevideoSchema);