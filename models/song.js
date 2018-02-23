const mongoose = require('mongoose');

let songSchema = new mongoose.Schema({
	name: String,
	trackNumber: Number
});

let Song = mongoose.model('Song', songSchema);

module.exports.songSchema = songSchema;
module.exports.Song = Song;