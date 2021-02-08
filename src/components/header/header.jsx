import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// img
import phone from '@assets/img/phone.svg'
import logo from '@assets/img/logo.png'
import addres from '@assets/img/addres.svg'
// styles
import "./header.scss"


export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state= {
			headerMenu: false,
		}
		this.showHeaderMenu = this.showHeaderMenu.bind(this);
	}

	

	showHeaderMenu() {
		this.setState({ headerMenu: !this.state.headerMenu })
	}

	

	render() {
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


				<ul className={`${!this.state.headerMenu ? "header-menu" : "header-menu visible"}`}>
				{/* <ul className="header-menu visible"> */}
					<li><Link className="header-menu-el" to="/">О клубе</Link></li>
					<li><Link className="header-menu-el" to="/">Услуги</Link></li>
					<li><Link className="header-menu-el" to="/">Цены</Link></li>
					<li><Link className="header-menu-el" to="/">Расписание</Link></li>
					<li><Link className="header-menu-el" to="/">Контакты</Link></li>
				</ul>

				<div className="burger-menu-btn" onClick={this.showHeaderMenu}>
					<div className={`${!this.state.headerMenu ? "" : "burger-menu-btn-top"}`}></div>
					<div className={`${!this.state.headerMenu ? "" : "burger-menu-btn-centr"}`}></div>
					<div className={`${!this.state.headerMenu ? "" : "burger-menu-btn-bot"}`}></div>
				</div>
			</header>
		)
	}
}