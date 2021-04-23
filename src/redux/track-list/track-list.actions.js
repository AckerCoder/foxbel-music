export const setCurrentTrackList = trackList => ({
    type: 'SET_CURRENT_TRACKLIST',
    payload: trackList
});

export const playTrack = track => ({
     type: 'PLAY_TRACK',
     payload: track
});

export const setPlayList = (index ,playList) => ({
    type: 'SET_PLAY_LIST',
});
