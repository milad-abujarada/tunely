var mongoose = require("mongoose");
var Song = require('./song').songSchema;
var Schema = mongoose.Schema;

let albumSchema = new Schema({
	artistName: String,
	name: String,
	releaseDate: String,
	genres: [String],
	songs: [Song]
});

let Album = mongoose.model('Album', albumSchema);
module.exports = Album;
