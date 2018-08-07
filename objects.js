// var playlist={
//   a: "b"
// }

// function updateplaylist(playlist, artistName, songTitle){
//   return Object.assign({}, playlist, {[artistname]:songTitle})
// }

// function removeFromPlaylist(playlist, artistname){
//   delete playlist.artistname
//   return playlist
// }

var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artist, song) {
  // Remember, because one of this function's arguments
  // is `playlist`, the `playlist` _inside_ the function
  // is not the same as the top-level `playlist` outside
  // the function
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
