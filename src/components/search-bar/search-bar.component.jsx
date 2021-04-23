import React from 'react';
import {connect} from 'react-redux';

import axios from "axios";

import './search-bar.styles.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { setPlayList, setCurrentTrackList } from '../../redux/track-list/track-list.actions';


const SearchBar = ({setCurrentTrackList, setPlayList}) => {

    const handleChange = (event) => {
        axios.get(`http://localhost:8080/https://api.deezer.com/search/track?q=eminem`).then(res => {
            console.log("ESTE ES EL QUE RECIBIMOS DE SEARCH: ",res.data.data);
            setCurrentTrackList(res.data.data)
            setPlayList(res.data.data);
        })
    }
    
    return(
        <div className="search-bar" key="search" value="track">
                <input type="serch" placeholder="Buscar" onChange={handleChange}/>
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    setCurrentTrackList: trackList => dispatch(setCurrentTrackList(trackList)),
    setPlayList: trackList => dispatch(setPlayList(trackList))
})

export default connect(null, mapDispatchToProps)(SearchBar);