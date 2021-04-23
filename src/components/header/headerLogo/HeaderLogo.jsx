import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import logo from '@img/header/logo.png';
// styles
import "./headerLogo.scss";


function HeaderLogo(props) {
	
    return (
        <HashLink smooth className="header-logo "to="/#top">
            <img src={logo}  alt='logo'/>
        </HashLink>
    )
	
}

export default HeaderLogo;