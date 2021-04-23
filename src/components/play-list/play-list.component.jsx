import React from 'react';
import {connect} from 'react-redux';

import './play-list.styles.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import { playTrack } from '../../redux/track-list/track-list.actions';

const PlayList = ({trackList, playList, playTrack}) => (
    <div className="playlist">
        {
                    trackList?trackList.map(
                        (track, i) => (
                            <div className="container" key={i}>
                                <img src={track.album.cover} alt={track.title_short}/>
                                <div className="play-button" onClick={(i,playList)=>{playTrack(trackList.indexOf(track),playList)}}>
                                    <FontAwesomeIcon className="play-icon" icon={faPlay}/>
                                </div>
                                <span className="title">{track.title_short}</span>
                                <span className="artist">{track.artist.name}</span>
                            </div>
                        )
                    ):<div className="container"></div>
                }
    </div>
)

const mapStateToProps = state=>({
    trackList: state.trackList.trackList,
    playList: state.trackList.playList
})

const mapDispatchToProps = dispatch=>({
    playTrack: (index, playList) => dispatch(playTrack(index, playList)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayList);