import React from 'react';
// link
import { Link } from 'react-router-dom';
// style
import "./footerNav.scss";


function FooterNav() {

	return (
        <div className="foonter-nav">
            <ul className="footer-nav-first">
                <li>
                    <Link className="footer-nav-item" to="/aboutclub">О клубе</Link>
                </li>
                <li>
                    <Link className="footer-nav-item" to="/">Тренеры</Link>
                </li>
                <li>
                    <Link className="footer-nav-item" to="/">Залы и оборудование</Link>
                </li>
                <li>
                    <Link className="footer-nav-item" to="/">Комната отдыха</Link>
                </li>
            </ul>
            <ul className="footer-nav-second">
                <li>
                    <Link className="footer-nav-item" to="/">Услуги</Link>
                </li>
                <li>
                    <Link className="footer-nav-item" to="/">Цены</Link>
                </li>
                <li>
                    <Link className="footer-nav-item" to="/">Расписание</Link>
                </li>
                <li>
                    <Link className="footer-nav-item" to="/">Контакты</Link>
                </li>
            </ul>
            <ul className="footer-nav-third">
                <li>
                    <Link className="footer-nav-item" to="/">Новости</Link>
                </li>
                <li>
                    <Link className="footer-nav-item" to="/">Сборная</Link>
                </li>
                <li>
                    <Link className="footer-nav-item" to="/">Акции</Link>
                </li>
            </ul>
        </div>
	)
}

export default FooterNav;