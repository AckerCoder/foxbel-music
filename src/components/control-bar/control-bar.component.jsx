import React from 'react';

import './control-bar.styles.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faStepBackward, faStepForward} from '@fortawesome/free-solid-svg-icons';

const ControlBar = ()=>(
    <div className="control-bar">
        <div className="info">
            <img src="" alt=""/>
            <span className="title"></span>
            <span className="artist-album"></span>
        </div>
        <div className="controls">
            <FontAwesomeIcon className="icon" icon={faStepBackward}/>
            <div className="circle-play">
                <FontAwesomeIcon className="icon" icon={faPlay}/>
            </div>
            <FontAwesomeIcon className="icon" icon={faStepForward}/>
        </div>
    </div>
)

export default ControlBar;