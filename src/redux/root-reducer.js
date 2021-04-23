import {combineReducers} from 'redux';

import trackList from './track-list/track-list.reducer';

export default combineReducers({
    trackList: trackList
})