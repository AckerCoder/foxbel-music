import React from 'react';
import {connect} from 'react-redux';

import './login-page.styles.scss';
import {Link} from 'react-router-dom';

import Logo from '../../assets/foxbel-music@3x.png';
import {setUser} from '../../redux/user/user.actions'

const LoginPage = ()=>{
    const handleChange = (event)=>{
        console.log(event.target.value)
        setUser(event.target.value)
    }
    return(
        <div className="login-page">
            <div className="cover">
                <img src={Logo} alt=""/>
            </div>
            <div className="form">
                <h1>Bienvenido :) ¿Cómo te llamas?</h1>
                <form>
                    <input className="text-field" type="text" onChange={handleChange}/>
                    <Link to="/">Ingresar</Link>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    setUser: (newUser) => dispatch(setUser(newUser)),
})
export default connect(null, mapDispatchToProps)(LoginPage);