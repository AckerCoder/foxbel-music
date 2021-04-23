import React from 'react';

import NavigationBar from '../../components/navigation-bar/navigation-bar.component'
import MainPanel from '../../components/main-panel/main-panel.component';

import './homepage.styles.scss';

const HomePage = ()=>{
    return(
        <div className="homepage">
            <NavigationBar/>
            <MainPanel/>
        </div>
    )
}

export default HomePage;