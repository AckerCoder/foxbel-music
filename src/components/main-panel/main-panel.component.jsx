import axios from 'axios';
import { connect } from 'react-redux';

import React from 'react';
import './main-panel.styles.scss';
import {setCurrentTrackList, setPlayList} from '../../redux/track-list/track-list.actions';

import PlayList from '../play-list/play-list.component';
import Header from '../header/header.component';
import MainTrack from '../main-track/main-track.component';
class MainPanel extends React.Component{
    componentDidMount(){
        const {setCurrentTrackList} = this.props;
        const {setPlayList} = this.props
        axios.get(`http://localhost:8080/https://api.deezer.com/chart/0`).then(res => {
            console.log("ESTE ES EL INICIAL: ", res.data.tracks.data)
            setCurrentTrackList(res.data.tracks.data)
            setPlayList(res.data.tracks.data);
        })
    }
    render(){
        return(
            <div className='main-panel'>
                <Header/>
                <MainTrack/>
                <PlayList/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>({
    setCurrentTrackList: trackList => dispatch(setCurrentTrackList(trackList)),
    setPlayList: trackList => dispatch(setPlayList(trackList))
})


export default connect(null, mapDispatchToProps)(MainPanel);