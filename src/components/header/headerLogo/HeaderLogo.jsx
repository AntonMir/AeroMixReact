import React from 'react';
// <a> = <Link>
import { Link } from 'react-router-dom';
// img
import logo from '@img/header/logo.png';
// styles
import "./headerLogo.scss";


function HeaderLogo(props) {
	
    return (
        <Link className="header-logo"to="/">
            <img src={logo}  alt='logo'/>
        </Link>
    )
	
}

export default HeaderLogo;