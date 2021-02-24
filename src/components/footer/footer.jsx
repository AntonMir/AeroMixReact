import React from 'react';
// img
import footerLogo from '@assets/img/footerLogo.png';
// components
import FooterNav from '@footer/footerNav/FooterNav.jsx'
import FooterContacts from '@footer/footerContacts/FooterContacts.jsx'
// style
import "./footer.scss";

export default function Footer() {
	return (
	    <section className="footer">

			<img className="footer-logo" src={footerLogo} alt=""/>

			<div className="footer-content">
				<FooterNav />
				<FooterContacts />
			</div>

			<div className="footer-end-info">
				<p>Все права защищены. 2018-2021 г</p>
				<p>Сайт разработан:</p>
			</div>

        </section>
	)
}