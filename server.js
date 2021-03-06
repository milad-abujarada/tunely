// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
const bodyParser = require('body-parser');
// generate a new express app and call it 'app'
var app = express();
const models = require('./models');
// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
/************
 * DATABASE *
 ************/

/* hard-coded data */
//var albums = [];
/*albums.push();
albums.push();
albums.push();
albums.push();*/



/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */
app.get('/api/albums', function album_index(req, res){
  models.Album.find({}, function(error, albums){
    res.json(albums);
  });  
});

app.post('/api/albums', function(req, res){
  //console.log(req.body);
  genres = req.body.genres.split(",");
  let newAlbum = models.Album();
  newAlbum.artistName = req.body.artistName;
  newAlbum.name = req.body.name;
  newAlbum.releaseDate = req.body.releaseDate;
  newAlbum.genres = genres;
  newAlbum.save(function(error, album){
    res.json(album);
  });
});

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */


app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});




/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
