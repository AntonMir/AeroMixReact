import React from 'react'
// Link
import { Link } from 'react-router-dom'
// img
import logo from '@assets/img/logo.png'
// styles
import "./headerLogo.scss"

export default function HeaderLogo(props) {
	
    return (
        <Link className="header-logo"to="/">
            <img src={logo}  alt='logo'/>
        </Link>
    )
	
}