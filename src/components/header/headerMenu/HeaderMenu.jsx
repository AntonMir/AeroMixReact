import React, { Component } from 'react';
// Link
import { Link } from 'react-router-dom';
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
					<li><span className="header-menu-el" onClick={this.showAboutClubMenu}>
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
					</span></li> 
					<li><Link className="header-menu-el" onClick={this.closeAll} to="/">Услуги</Link></li>
					<li><Link className="header-menu-el" onClick={this.closeAll} to="/pricetable">Цены</Link></li>
					<li><Link className="header-menu-el" onClick={this.closeAll} to="/timetable">Расписание</Link></li>
					<li><Link className="header-menu-el" onClick={this.closeAll} to="/#contacts">Контакты</Link></li>
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
					<li><Link className="about-club-menu-el" onClick={this.closeAll} to="/aboutclub">О клубе</Link></li>
					<li><Link className="about-club-menu-el" onClick={this.closeAll} to="/">Новости</Link></li>
					<li><Link className="about-club-menu-el" onClick={this.closeAll} to="/">Акции</Link></li>
					<li><Link className="about-club-menu-el" onClick={this.closeAll} to="/">Тренеры</Link></li>
					<li><Link className="about-club-menu-el" onClick={this.closeAll} to="/">Залы и оборудование</Link></li>
					<li><Link className="about-club-menu-el" onClick={this.closeAll} to="/">Комната отдыха</Link></li>
					<li><Link className="about-club-menu-el" onClick={this.closeAll} to="/">Сборная</Link></li>
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