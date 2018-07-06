// Limits playlist to only have 1 song per artist
var playlist = {}

function updatePlaylist(playlist, artist, song) {
  return playlist[artist] = song;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist;
}
