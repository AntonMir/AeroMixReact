import React from 'react'
import { Link } from 'react-router-dom'
// img
import phone from '@assets/img/phone.svg'
import logo from '@assets/img/logo.png'
import addres from '@assets/img/addres.svg'
// styles
import "./header.scss"


export default function Header(props) {

	function showHeaderMenu() {
		// показывает меню навигации
	}

	return (
		<header className='header' id="header">

			<span className="header-background"></span>

			<div className="header-addres">
				<img src={addres} alt='addres'/>
				г. Химки, ул. Академика Грушина, 8
			</div>

			<div className="header-phone">
				<img src={phone} alt='phone'/>
				+7-985-001-75-05
			</div>

			<Link className="header-logo"to="/">
				<img src={logo}  alt='logo'/>
			</Link>


			<ul className="header-menu">
				<li><Link className="header-menu-el" to="/">О клубе</Link></li>
				<li><Link className="header-menu-el" to="/">Услуги</Link></li>
				<li><Link className="header-menu-el" to="/">Цены</Link></li>
				<li><Link className="header-menu-el" to="/">Расписание</Link></li>
				<li><Link className="header-menu-el" to="/">Контакты</Link></li>
			</ul>

			<div className="burger-menu-btn" onClick={showHeaderMenu()}>
				<div></div>
				<div></div>
				<div></div>
			</div>

		</header>
	)
}