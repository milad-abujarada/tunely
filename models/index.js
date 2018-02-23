var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");
const Album = require('./album');

module.exports.Album = Album;
