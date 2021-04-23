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
                <Link className="menu-link" to="/">Recientes</Link>
                <Link className="menu-link" to="/">Artistas</Link>
                <Link className="menu-link" to="/">Albums</Link>
                <Link className="menu-link" to="/">Canciones</Link>
                <Link className="menu-link" to="/">Estaciones</Link>
                <h3>Playlist</h3>
                <Link className="menu-link" to="/">Metal</Link>
                <Link className="menu-link" to="/">Para bailar</Link>
                <Link className="menu-link" to="/">Rock 90s</Link>
                <Link className="menu-link" to="/">Baladas</Link>
            </div>
        )
    }
}

export default NavigationBar;