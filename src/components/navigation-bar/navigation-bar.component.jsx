import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/foxbel-music.png';

import './navigation-bar.styles.scss';

class NavigationBar extends React.Component{
    render(){
        return(
            <div className="navigation-bar">
                <img className="logo" src={Logo} alt="logo"/>
                <h3>Mi Libreria</h3>
                <Link className="menu-link">Recientes</Link>
                <Link className="menu-link">Artistas</Link>
                <Link className="menu-link">Albums</Link>
                <Link className="menu-link">Canciones</Link>
                <Link className="menu-link">Estaciones</Link>
                <h3>Playlist</h3>
                <Link className="menu-link">Metal</Link>
                <Link className="menu-link">Para bailar</Link>
                <Link className="menu-link">Rock 90s</Link>
                <Link className="menu-link">Baladas</Link>
            </div>
        )
    }
}

export default NavigationBar;