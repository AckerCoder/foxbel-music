import React from 'react';
import {connect} from 'react-redux';
import './main-track.styles.scss';

const MainTrack = ({trackList, playList}) => {
    return(
        <div className='main-track'>
            <img className="image-song" src={trackList[0]?trackList[0].album.cover:""} alt=""/>
            <div className="description">
                <img className="image-background" src={trackList[0]?trackList[0].artist.picture_big:""} alt=""/>
                <div className="artist-song">
                    <span className="artist">{trackList[0]?trackList[0].artist.name:""}  </span>
                    <span className="song">{trackList[0]?trackList[0].title_short:""}</span>
                </div>
                <div className="album-followers">
                    <span className="album">{trackList[0]?trackList[0].album.title:""}</span>
                    <span className="followers">&nbsp; &nbsp; &nbsp; 35611321 seguidores</span>
                </div>
                <p>{trackList[0]?trackList[0].artist.name:""}, un artista sin igual. Compone sus canciones y <br/> cautiva millones de escenarios</p>
            </div>
        </div>
    )
}

const mapStateToProps = state=>({
    trackList: state.trackList.trackList,
    playList: state.trackList.playList
})

export default connect(mapStateToProps)(MainTrack);