/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ],
             songs: [
                     { _id: '5665ff1678209c64e51b4e6a',
                       trackNumber: 1,
                       name: 'Famous' },
                     { _id: '5665ff1678209c64e51b4e64',
                       trackNumber: 7,
                       name: 'All of the Lights' },
                     {
                       _id: '5665ff1678209c64e51b4e64',
                       name:'Guilt Trip',
                       trackNumber: 3 },
                     { 
                      _id: '5665ff1678209c64e51b4e6a',
                      name: 'Paranoid',
                      trackNumber: 4 },
                     { 
                      _id: '5665ff1678209c64e51b4e64',
                      name: 'Ultralight Beam',
                      trackNumber: 5 },
                     { 
                      _id: '5665ff1678209c64e51b4e64',
                      name: 'Runaway',
                      trackNumber: 6 },
                     { 
                      _id: '5665ff1678209c64e51b4e6a',
                      name: 'Stronger',
                      trackNumber: 7 }
                    ]
             });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ],
             songs: [
                     { _id: '5665ff1678209c64e51b4e6a',
                       trackNumber: 1,
                       name: 'Famous' },
                     { _id: '5665ff1678209c64e51b4e64',
                       trackNumber: 7,
                       name: 'All of the Lights' },
                     {
                       _id: '5665ff1678209c64e51b4e64',
                       name:'Guilt Trip',
                       trackNumber: 3 },
                     { 
                      _id: '5665ff1678209c64e51b4e6a',
                      name: 'Paranoid',
                      trackNumber: 4 },
                     { 
                      _id: '5665ff1678209c64e51b4e64',
                      name: 'Ultralight Beam',
                      trackNumber: 5 },
                     { 
                      _id: '5665ff1678209c64e51b4e64',
                      name: 'Runaway',
                      trackNumber: 6 },
                     { 
                      _id: '5665ff1678209c64e51b4e6a',
                      name: 'Stronger',
                      trackNumber: 7 }
                    ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ],
             songs: [
                     { _id: '5665ff1678209c64e51b4e6a',
                       trackNumber: 1,
                       name: 'Famous' },
                     { _id: '5665ff1678209c64e51b4e64',
                       trackNumber: 7,
                       name: 'All of the Lights' },
                     {
                       _id: '5665ff1678209c64e51b4e64',
                       name:'Guilt Trip',
                       trackNumber: 3
                     }
                    ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ],
             songs: [
                     { _id: '5665ff1678209c64e51b4e6a',
                       trackNumber: 1,
                       name: 'Famous' },
                     { _id: '5665ff1678209c64e51b4e64',
                       trackNumber: 7,
                       name: 'All of the Lights' },
                     {
                       _id: '5665ff1678209c64e51b4e64',
                       name:'Guilt Trip',
                       trackNumber: 3 }
                    ]
           });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');
  sampleAlbums.forEach(function(album){
    renderAlbum(album);
  });
  getAlbumsFromServer();
  $("#singlebutton").on("click", function(){
    let form = $("form"); 
    var formdata =form.serialize();
    form.trigger("reset");
    $.ajax({
      url:'/api/albums',
      method: 'POST',
      data:formdata
    }).done(function(savedAlbum){
      renderAlbum(savedAlbum);
    })
  })
});





// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
  let songsList = buildSongsHtml(album.songs);
  var albumHtml =
  "          <div class='row album' data-album-id='" + "HARDCODED ALBUM ID" + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 album-art'>" +
  "                     <img class='img-fluid' src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name:</h4>" +
  "                        <span class='album-name'>" + album.name /*HARDCODED ALBUM NAME*/ + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" + album.artistName /*HARDCODED ARTIST NAME*/+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + album.releaseDate /*HARDCODED ALBUM RELEASE */+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <span class='album-releaseDate'>" + songsList /*HARDCODED ALBUM RELEASE */+ "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +
  "          </div>" +
  "          <!-- end one album -->";
 /* "        <!-- one album -->" +
  "        <div class='row album' data-album-id='" + "HARDCODED ALBUM ID" + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "              <!-- begin album internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 album-art'>" +
  "                     <img class='img-fluid' src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Album Name:</h4>" +
  "                        <span class='album-name'>" + "HARDCODED ALBUM NAME" + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Artist Name:</h4>" +
  "                        <span class='artist-name'>" +  "HARDCODED ARTIST NAME"+ "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Released date:</h4>" +
  "                        <span class='album-releaseDate'>" + "HARDCODED ALBUM RELEASE" + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of album internal row -->" +
  "          </div>" +
  "          <!-- end one album -->";
*/
    
  // render to the page with jQuery
  $("#albums").append(albumHtml);
};

function getAlbumsFromServer(){
  let results;
  $.ajax({
    url: 'http://localhost:3000/api/albums'
  }).done(function(results) {
    results.forEach(function(album){
      renderAlbum(album);
    });
  });
};

function buildSongsHtml(songs){
  let songsList = "";
  for (let i = 0; i < songs.length; i++){
    songsList += " - " + "(" + i + ")" + songs[i].name; 
  };
  console.log(songsList);
  return '<h4 class="inline-header">Songs:</h4> <span>' + songsList + '</span>'
}
