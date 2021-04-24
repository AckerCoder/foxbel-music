import React from 'react';
import {connect} from 'react-redux';
import './header.styles.scss';

import SearchBar from '../search-bar/search-bar.component';

const Header = ({user})=>(
    <div className="header">
        <SearchBar/>
        <span className="user">{user}</span>
    </div>
)

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps)(Header);