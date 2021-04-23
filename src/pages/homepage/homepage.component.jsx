import React from 'react';

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import MainPanel from '../../components/main-panel/main-panel.component';
import ControlBar from '../../components/control-bar/control-bar.component'

import './homepage.styles.scss';

const HomePage = ()=>{
    return(
        <div className="homepage">
            <NavigationBar/>
            <MainPanel/>
            <ControlBar/>
        </div>
    )
}

export default HomePage;