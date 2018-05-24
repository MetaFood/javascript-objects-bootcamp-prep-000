var playlist = {dave: 'satellite'};
function updatePlaylist(playlist, artist, title) {
  playlist[artist] = song;
  return playlist;
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}