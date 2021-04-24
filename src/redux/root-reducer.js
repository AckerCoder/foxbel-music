import {combineReducers} from 'redux';

import trackList from './track-list/track-list.reducer';
import toogleButton from './media-player/media-player.reducer'

export default combineReducers({
    trackList: trackList,
    toogleButton: toogleButton
})