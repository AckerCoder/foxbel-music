import React from 'react';
import {connect} from 'react-redux';
import './main-track.styles.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import { playTrack } from '../../redux/track-list/track-list.actions';


const MainTrack = ({trackList, playList, mediaPlayer}) => {
    return(
        <div className='main-track'>

            <img className="image-song" src={trackList?trackList[0]?trackList[0].album.cover:"":""} alt=""/>
            <div className="play-button" onClick={()=>{playTrack(0,playList)}}>
                <FontAwesomeIcon className="play-icon" icon={faPlay}/>
            </div>
            <div className="description">
                <img className="image-background" src={trackList?trackList[0]?trackList[0].artist.picture_big:"":""} alt=""/>
                <div className="info">
                    <div className="artist-song">
                        <span className="artist">{trackList?trackList[0]?trackList[0].artist.name:"":""} </span>
                        <span className="song">{trackList?trackList[0]?trackList[0].title_short:"":""}</span>
                    </div>
                    <div className="album-followers">
                        <span className="album">{trackList?trackList[0]?trackList[0].album.title:"":""}</span>
                        <span className="followers">&nbsp; &nbsp; &nbsp; 35611321 seguidores</span>
                    </div>
                    <p>{trackList?trackList[0]?trackList[0].artist.name:"":""}, un artista sin igual. Compone sus canciones y <br/> cautiva millones de escenarios</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state=>({
    trackList: state.trackList.trackList,
    playList: state.trackList.playList,
    mediaPlayer: state.trackList.mediaPlayer
})
const mapDispatchToProps = dispatch=>({
    playTrack: (index, playList) => dispatch(playTrack(index, playList)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MainTrack);