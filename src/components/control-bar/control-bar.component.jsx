import React, {useState} from 'react';
import {connect} from 'react-redux';
import './control-bar.styles.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faStepBackward, faStepForward, faVolumeOff} from '@fortawesome/free-solid-svg-icons';
import {play} from "../../redux/media-player/media-player.actions"

const ControlBar = ({trackList,indexCurrentSong})=>{
    const [volume, setVolume] = useState(1)

    const handleChange = (event)=>{
        setVolume(event);
        window.Howler.volume(event);
    }

    return(
        <div className="control-bar">
            {
                trackList?
                trackList.length?
                <div className="info">
                    <img src={trackList[indexCurrentSong].album.cover} alt=""/>
                    <div className="title-artist-album">
                        <span className="title">{trackList[indexCurrentSong].title}</span>
                        <span className="artist-album">{trackList[indexCurrentSong].artist.name} - {trackList[indexCurrentSong].album.title}</span>
                    </div>
                </div>
                :<div></div>
                :<div></div>
            }
            <div className="controls">
                <FontAwesomeIcon className="icon" icon={faStepBackward}/>
                <div className="circle-play">
                    <FontAwesomeIcon className="icon" icon={faPlay}/>
                </div>
                <FontAwesomeIcon className="icon" icon={faStepForward}/>
            </div>
            <div className="volumeSeeker">
                <FontAwesomeIcon className="icon" icon={faVolumeOff} />
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={volume}
                    onChange={event => {
                    setVolume(event.target.valueAsNumber)
                    handleChange(event.target.valueAsNumber)
                    }}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state=>({
    trackList: state.trackList.trackList,
    playList: state.trackList.playList,
    mediaPlayer: state.trackList.mediaPlayer,
    indexCurrentSong: state.trackList.indexCurrentSong,
})

const mapDispatchToProps = dispatch=>({
    play: () => dispatch(play()),
})
export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);