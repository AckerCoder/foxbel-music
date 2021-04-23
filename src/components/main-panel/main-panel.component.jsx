import axios from 'axios';
import React from 'react';
import './main-panel.styles.scss';



class MainPanel extends React.Component{


    state = {
        songs: []
    };

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0`).then(res => {
            console.log(res.data.tracks.data);
            this.setState({songs: res.data.tracks.data})
        })
    }
    render(){
        return(
            <div className='main-panel'>
                {
                    this.state.songs.map(
                        (song, i) => (
                            <div className="container" key={i}>
                                <img src={song.album.cover} alt={song.title_short}/>
                                <span className="title">{song.title_short}</span>
                                <span className="artist">{song.artist.name}</span>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}

export default MainPanel;