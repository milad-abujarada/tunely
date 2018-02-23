var mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost/tunely");
const Song = require('./song').Song;
const Album = require('./album');

module.exports.Album = Album;
