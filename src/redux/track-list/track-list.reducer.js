import { playTrack, setPlayList } from './track-list.utils';

const INITIAL_STATE = {
    trackList: [],
    playList: [],
    mediaPlayer: ()=>{console.log("hello world")},
    indexCurrentSong: 0
}

const trackList = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_TRACKLIST':
            return {
                ...state,
                trackList: action.payload
            }
        case 'PLAY_TRACK':
            return{
                ...state,
                mediaPlayer: playTrack(action.payload, state.playList)
            }    
        case 'SET_PLAY_LIST':
            return{
                ...state,
                playList: setPlayList(state.trackList)
            }
      
        default:
            return state;
    }
}

export default trackList;