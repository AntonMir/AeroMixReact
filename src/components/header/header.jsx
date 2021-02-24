import React from 'react'
// components
import HeaderAddres from '@header/headerAddres/HeaderAddres.jsx'
import HeaderPhone from '@header/headerPhone/HeaderPhone.jsx'
import HeaderLogo from '@header/headerLogo/HeaderLogo.jsx'
import HeaderMenu from '@header/headerMenu/HeaderMenu.jsx'
// styles
import "./header.scss"

export default function Header(props) {
	
	return (
		<header className='header' id="header">
			<span className="header-background"/>
			<HeaderAddres />
			<HeaderPhone />
			<HeaderLogo />
			<HeaderMenu />
		</header>
	)	
}