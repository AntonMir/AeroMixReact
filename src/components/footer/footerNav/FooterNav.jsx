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
                    <HashLink className="footer-nav-item" to="/#treiners">Тренеры</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" to="/#halls">Залы и оборудование</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" to="/restroom#top">Комната отдыха</HashLink>
                </li>
            </ul>
            <ul className="footer-nav-second">
                <li>
                    <HashLink className="footer-nav-item" to="/#services">Услуги</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" to="/pricetable#top">Цены</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" to="/timetable#top">Расписание</HashLink>
                </li>
                <li>
                    <HashLink className="footer-nav-item" to="/#contacts">Контакты</HashLink>
                </li>
            </ul>
            <ul className="footer-nav-third">
                <li>
                    <HashLink className="footer-nav-item" to="/#news">Новости</HashLink>
                </li>
                {/* <li>
                    <HashLink className="footer-nav-item" to="/">Сборная</HashLink>
                </li> */}
                <li>
                    <HashLink className="footer-nav-item" to="/#promo">Акции</HashLink>
                </li>
            </ul>
        </div>
	)
}

export default FooterNav;