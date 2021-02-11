import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// img
import phone from '@assets/img/phone.svg'
import logo from '@assets/img/logo.png'
import addres from '@assets/img/addres.svg'
import arrowBot from '@assets/img/arrowBot.svg'
import arrowTop from '@assets/img/arrowTop.svg'
import aboutClubArrow from '@assets/img/aboutClubArrow.png'
// styles
import "./header.scss"


export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state= {
			headerMenu: false,
			aboutClubMenu: false,
		}
		this.showHeaderMenu = this.showHeaderMenu.bind(this);
		this.showAboutClubMenu = this.showAboutClubMenu.bind(this);
		console.log('headerMenu', this.state.headerMenu);
		console.log('aboutClubMenu', this.state.aboutClubMenu);
		
	}

	showHeaderMenu() {
		if(window.outerWidth <= 1500) this.setState({ headerMenu: !this.state.headerMenu });
		if(this.state.aboutClubMenu === true) this.setState({ aboutClubMenu: false });
		console.log('headerMenu', this.state.headerMenu);
		console.log('aboutClubMenu', this.state.aboutClubMenu);
	}

	showAboutClubMenu() {
		this.setState({ aboutClubMenu: !this.state.aboutClubMenu });
		console.log('headerMenu', this.state.headerMenu);
		console.log('aboutClubMenu', this.state.aboutClubMenu);
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
					<li><Link className="header-menu-el" to="/" onClick={this.showAboutClubMenu}>
						О клубе 
						<img src={arrowTop} alt="arrow" className={`${this.state.aboutClubMenu ? "visible" : "hidden"} header-menu-arrow`}/>
						<img src={arrowBot} alt="arrow" className={`${this.state.aboutClubMenu ? "hidden" : "visible"} header-menu-arrow`}/>
					</Link></li> 
					<li><Link className="header-menu-el" to="/">Услуги</Link></li>
					<li><Link className="header-menu-el" to="/">Цены</Link></li>
					<li><Link className="header-menu-el" to="/">Расписание</Link></li>
					<li><Link className="header-menu-el" to="/">Контакты</Link></li>
				</ul>

				<img src={aboutClubArrow} alt="arrow" className={`${this.state.headerMenu === true ? (this.state.aboutClubMenu ===true ? "about-club-menu-arrow visible" : "about-club-menu-arrow") : "about-club-menu-arrow hidden"}`}/>

				<ul className={`${this.state.aboutClubMenu === true 
									? ( window.outerWidth <= 1500 
											? (this.state.headerMenu === true 
													? (this.state.aboutClubMenu === true 
															? "about-club-menu visible" 
															: "about-club-menu") 
													: "about-club-menu" ) 
											: "about-club-menu visible" ) 
									: "about-club-menu"}`}>

					<li><Link className="about-club-menu-el" to="/">О клубе</Link></li>
					<li><Link className="about-club-menu-el" to="/">Новости</Link></li>
					<li><Link className="about-club-menu-el" to="/">Акции</Link></li>
					<li><Link className="about-club-menu-el" to="/">Тренеры</Link></li>
					<li><Link className="about-club-menu-el" to="/">Залы и оборудование</Link></li>
					<li><Link className="about-club-menu-el" to="/">Комната отдыха</Link></li>
					<li><Link className="about-club-menu-el" to="/">Сборная</Link></li>
					<li><Link className="about-club-menu-el" to="/">Галерея</Link></li>
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