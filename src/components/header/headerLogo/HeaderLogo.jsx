import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import logo from '@img/header/logo.png';
// redux
import { store } from '@store/store.js'
import { closeHeader } from '@store/actions.js'
// styles
import "./headerLogo.scss";


function closeHeaderNav() {
    store.dispatch(closeHeader(true))
}

function HeaderLogo(props) {
	
    return (
        <HashLink smooth className="header-logo "to="/#top" onClick={closeHeaderNav}>
            <img src={logo}  alt='logo'/>
        </HashLink>
    )
	
}

export default HeaderLogo;