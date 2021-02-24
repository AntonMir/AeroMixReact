import React, { Component } from 'react'
// Link
import { Link } from 'react-router-dom'
// img
import arrowBot from '@assets/img/arrowBot.svg'
import arrowTop from '@assets/img/arrowTop.svg'
import aboutClubArrow from '@assets/img/aboutClubArrow.png'
// styles
import "./headerMenu.scss"

export default class HeaderMenu extends Component {
	constructor(props) {
		super(props)
		this.state= {
			headerMenu: false, 
			aboutClubMenu: false,
		}
		this.showHeaderMenu = this.showHeaderMenu.bind(this);
		this.showAboutClubMenu = this.showAboutClubMenu.bind(this);		
	}

	showHeaderMenu() {
		if(window.outerWidth <= 1500) this.setState({ headerMenu: !this.state.headerMenu });
		if(this.state.aboutClubMenu === true) this.setState({ aboutClubMenu: false });;
	}

	showAboutClubMenu() {
		this.setState({ aboutClubMenu: !this.state.aboutClubMenu });
	}

	render() {
		return (
            <>
				<ul className={`${!this.state.headerMenu ? "header-menu" : "header-menu visible"}`}>
					<li><Link className="header-menu-el" to="/" onClick={this.showAboutClubMenu}>
						О клубе 
						<img 
							src={arrowTop} 
							alt="arrow" 
							className={`${this.state.aboutClubMenu ? "visible" : "hidden"} header-menu-arrow`}
						/>
						<img 
							src={arrowBot} 
							alt="arrow" 
							className={`${this.state.aboutClubMenu ? "hidden" : "visible"} header-menu-arrow`}
						/>
					</Link></li> 
					<li><Link className="header-menu-el" to="/">Услуги</Link></li>
					<li><Link className="header-menu-el" to="/">Цены</Link></li>
					<li><Link className="header-menu-el" to="/">Расписание</Link></li>
					<li><Link className="header-menu-el" to="/">Контакты</Link></li>
				</ul>

				<img 
					src={aboutClubArrow} 
					alt="arrow" 
					className={`${this.state.headerMenu === true 
									? (this.state.aboutClubMenu ===true 
										? "about-club-menu-arrow visible" 
										: "about-club-menu-arrow") 
									: "about-club-menu-arrow hidden"}`}
				/>

				<ul 
					className={`${this.state.aboutClubMenu === true 
									? (window.outerWidth <= 1500 
										? (this.state.headerMenu === true 
											? (this.state.aboutClubMenu === true 
												? "about-club-menu visible" 
												: "about-club-menu") 
											: "about-club-menu") 
										: "about-club-menu visible") 
									: "about-club-menu"}`}
				>
					<li><Link className="about-club-menu-el" to="/">О клубе</Link></li>
					<li><Link className="about-club-menu-el" to="/">Новости</Link></li>
					<li><Link className="about-club-menu-el" to="/">Акции</Link></li>
					<li><Link className="about-club-menu-el" to="/">Тренеры</Link></li>
					<li><Link className="about-club-menu-el" to="/">Залы и оборудование</Link></li>
					<li><Link className="about-club-menu-el" to="/">Комната отдыха</Link></li>
					<li><Link className="about-club-menu-el" to="/">Сборная</Link></li>
				</ul>

				<div className="burger-menu-btn" onClick={this.showHeaderMenu}>
					<div className={`${!this.state.headerMenu ? "" : "burger-menu-btn-top"}`}></div>
					<div className={`${!this.state.headerMenu ? "" : "burger-menu-btn-centr"}`}></div>
					<div className={`${!this.state.headerMenu ? "" : "burger-menu-btn-bot"}`}></div>
				</div>

			</>
		)
	}
}