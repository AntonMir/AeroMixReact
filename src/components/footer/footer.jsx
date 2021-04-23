import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import footerLogo from '@img/footer/footerLogo.png';
// components
import FooterNav from '@footer/footerNav/FooterNav.jsx';
import FooterContacts from '@footer/footerContacts/FooterContacts.jsx';
// style
import "./footer.scss";


function Footer() {
	
	return (
	    <section className="footer">
			<HashLink smooth to="/#top">
				<img className="footer-logo" src={footerLogo} alt="footerLogo"/>
			</HashLink>
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

export default Footer;