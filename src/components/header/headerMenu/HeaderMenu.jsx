import React, { Component } from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import arrowBot from '@img/header/arrowBot.svg';
import arrowTop from '@img/header/arrowTop.svg';
import aboutClubArrow from '@img/header/aboutClubArrow.png';
// styles
import "./headerMenu.scss";

class HeaderMenu extends Component {
	constructor(props) {
		super(props)
		this.state= {
			headerMenu: false, 
			aboutClubMenu: false,
		}
		this.showHeaderMenu = this.showHeaderMenu.bind(this);
		this.showAboutClubMenu = this.showAboutClubMenu.bind(this);		
		this.closeAll = this.closeAll.bind(this);		
	}

	showHeaderMenu() {
		if(window.outerWidth <= 1500) this.setState({ headerMenu: !this.state.headerMenu });
		if(this.state.aboutClubMenu === true) this.setState({ aboutClubMenu: false });;
	}

	showAboutClubMenu() {
		this.setState({ aboutClubMenu: !this.state.aboutClubMenu });
	}

	closeAll() {
		this.setState({ headerMenu: false });
		this.setState({ aboutClubMenu: false });
	}

	render() {
		return (
            <>
				<ul className={`${!this.state.headerMenu ? "header-menu" : "header-menu visible"}`}>
					<li>
						<span className="header-menu-el" onClick={this.showAboutClubMenu}>
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
						</span>
					</li> 
					<li>
						
						{window.location.pathname === '/' 
							? <HashLink className="header-menu-el" onClick={this.closeAll} smooth to="/#services">
								Услуги
							</HashLink>
							:<HashLink className="header-menu-el" onClick={this.closeAll} to="/#services">
								Услуги
							</HashLink>
						}
					</li>
					<li>
						<HashLink className="header-menu-el" onClick={this.closeAll} to="/pricetable#top">
							Цены
						</HashLink>
					</li>
					<li>
						<HashLink className="header-menu-el" onClick={this.closeAll} to="/timetable#top">
							Расписание
						</HashLink>
					</li>
					<li>
						{window.location.pathname === '/' 
							? <HashLink className="header-menu-el" onClick={this.closeAll} smooth to="/#contacts">
								Контакты
							</HashLink>
							:<HashLink className="header-menu-el" onClick={this.closeAll} to="/#contacts">
								Контакты
							</HashLink>
						}
					</li>
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
					<li>
						<HashLink className="about-club-menu-el" onClick={this.closeAll} to="/aboutclub#top">
							О клубе
						</HashLink>
					</li>
					<li>
						{window.location.pathname === '/' 
							? <HashLink className="about-club-menu-el" onClick={this.closeAll} smooth to="/#news">
								Новости
							</HashLink>
							:<HashLink className="about-club-menu-el" onClick={this.closeAll} to="/#news">
								Новости
							</HashLink>
						}
					</li>
					<li>
						{window.location.pathname === '/' 
							? <HashLink className="about-club-menu-el" onClick={this.closeAll} smooth to="/#promo">
								Акции
							</HashLink>
							:<HashLink className="about-club-menu-el" onClick={this.closeAll} to="/#promo">
								Акции
							</HashLink>
						}
					</li>
					<li>
						{window.location.pathname === '/' 
							? <HashLink className="about-club-menu-el" onClick={this.closeAll} smooth to="/#treiners">
								Тренеры
							</HashLink>
							:<HashLink className="about-club-menu-el" onClick={this.closeAll} to="/#treiners">
								Тренеры
							</HashLink>
						}
					</li>
					<li>
						{window.location.pathname === '/' 
							? <HashLink className="about-club-menu-el" onClick={this.closeAll} smooth to="/#halls">
								Залы и оборудование
							</HashLink>
							:<HashLink className="about-club-menu-el" onClick={this.closeAll} to="/#halls">
								Залы и оборудование
							</HashLink>
						}
					</li>
					<li>
						<HashLink className="about-club-menu-el" onClick={this.closeAll} to="/restroom#top">
							Комната отдыха
						</HashLink>
					</li>
					{/* <li>
						<HashLink className="about-club-menu-el" onClick={this.closeAll} smooth to="/">
							Сборная
						</HashLink>
					</li> */}
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

export default HeaderMenu;