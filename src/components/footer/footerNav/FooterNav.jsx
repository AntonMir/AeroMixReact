import React from 'react';
// HashLink
import { HashLink } from 'react-router-hash-link';
// style
import "./footerNav.scss";


function FooterNav() {

	return (
        <div className="foonter-nav">
            <ul className="footer-nav-first">
                <li>
                    <HashLink className="footer-nav-item" to="/aboutclub#top">О клубе</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" smooth to="/#treiners">Тренеры</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" smooth to="/#halls">Залы и оборудование</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" to="/restroom#top">Комната отдыха</HashLink>
                </li>
            </ul>
            <ul className="footer-nav-second">
                <li>
                    <HashLink className="footer-nav-item" smooth to="/#services">Услуги</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" to="/pricetable#top">Цены</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" to="/timetable#top">Расписание</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" smooth to="/#contacts">Контакты</HashLink>
                </li>
            </ul>
            <ul className="footer-nav-third">
                <li>
                    <HashLink className="footer-nav-item" smooth to="/#news">Новости</HashLink>
                </li>
                {/* <li>
                    <HashLink className="footer-nav-item" to="/">Сборная</HashLink>
                </li> */}
                <li>
                    <HashLink className="footer-nav-item" smooth to="/#promo">Акции</HashLink>
                </li>
            </ul>
        </div>
	)
}

export default FooterNav;