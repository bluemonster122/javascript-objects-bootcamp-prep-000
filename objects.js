// Limits playlist to only have 1 song per artist
var playlist = {}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
}