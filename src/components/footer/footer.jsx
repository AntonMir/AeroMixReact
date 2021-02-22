import React from 'react';
// link
import { Link } from 'react-router-dom';
// img
import footerLogo from '@assets/img/footerLogo.png';
import phone from '@assets/img/footerPhone.svg'
import addres from '@assets/img/footerAddres.svg'
import insta from '@assets/img/insta.svg'
import vk from '@assets/img/vk.svg'
import facebook from '@assets/img/facebook.svg'
import odnoklasniki from '@assets/img/odnoklasniki.svg'
// style
import "./footer.scss";


export default function Footer() {
	return (
	    <section className="footer">

			<img className="footer-logo" src={footerLogo} alt=""/>

			<div className="footer-content">
				<div className="foonter-nav">
					<ul className="footer-nav-first">
						<li>
							<Link className="footer-nav-item" to="/">О клубе</Link>
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
				{/* ./foonter-nav */}

				<div className="footer-contacts">

					<span>
						<div className="footer-addres">
							<img src={addres} alt='addres'/>
							г. Химки, ул. Академика Грушина, 8
						</div>

						<div className="footer-phone">
							<img src={phone} alt='phone'/>
							+7-985-001-75-05
						</div>
					</span>

					<div className="footer-socials">
						<p>Мы в соц. сетях</p>
						<div className="footer-socials-items">
							<Link to="/"><img src={insta} alt="insta"/></Link>
							<Link to="/"><img src={vk} alt="vk"/></Link>
							<Link to="/"><img src={facebook} alt="facebook"/></Link>
							<Link to="/"><img src={odnoklasniki} alt="odnoklasniki"/></Link>
						</div>
					</div>

				</div>
				{/* ./contacts */}

			</div>
			{/* ./footer-content */}

			<div className="footer-end-info">
				<p>Все права защищены. 2018-2021 г</p>
				<p>Сайт разработан:</p>
			</div>

        </section>
	)
}