import React from 'react'
// Link
import { Link } from 'react-router-dom'
// img
import contactsNumber from '@assets/img/contacts-number.svg'
import contactsEmail from '@assets/img/contacts-email.svg'
import insta from '@assets/img/insta-black.svg'
import vk from '@assets/img/vk-black.svg'
import facebook from '@assets/img/facebook-black.svg'
import odnoklasniki from '@assets/img/odnoklasniki-black.svg'
// styles
import "./contacts.scss"


export default function Contacts(props) {

    return (
		<section className="contacts">

			<div className="contacts-content">

				<div className="contacts-header">
					<h1>Контакты</h1>
					<p>Будем рады видеть вас в AeroMix</p>
				</div>

				<div className="contactsInfo">

					<div className="contacts-attr-socials-wrapper">

						<div className="contacts-attr">
							<h2>Свяжитесь с нами</h2>
							<p className="contacts-number"><img src={contactsNumber} alt=""/>+7-985-001-75-05</p>
							<p className="contacts-email"><img src={contactsEmail} alt=""/>SK-aeromix@yandex.ru</p>
						</div>

						<div className="contacts-socials">
							<h2>Cоц. сети</h2>
							<div className="contacts-socials-items">
								<Link to="/"><img src={insta} alt="insta"/></Link>
								<Link to="/"><img src={vk} alt="vk"/></Link>
								<Link to="/"><img src={facebook} alt="facebook"/></Link>
								<Link to="/"><img src={odnoklasniki} alt="odnoklasniki"/></Link>
							</div>
						</div>
					
					</div>
					{/* ./contacts-attr-socials-wrapper */}

					<div className="contacts-addres-worktime-wrapper">

						<div className="contacts-addres">
							<h2>Адрес</h2>
							<p>г. Химки, ул. Академика Грушина д. 8</p>
						</div>

						<div className="contacts-worktime">
							<h2>Режим работы</h2>
							<p>пн.- сб. 09.00 - 21.00</p>
							<p>вс. -выходной</p>
						</div>
					
					</div>
					{/* ./contacts-addres-worktime-wrapper */}

				</div>
				{/* contactsInfo */}
				
			</div>
			{/* ./contacts-content */}

			<details className="contacts-requisites">
				<summary>Реквизиты</summary>
				<p>ООО «СК АЭРОМИКС»</p>
				<p>ИНН: 5047235906</p>
				<p>КПП: 504701001</p>
				<p>ОГРН: 1195081090434</p>
				<p>Юридический адрес: 141401, Московская обл., г. Химки, ул. Академика Грушина, д.8</p>
				<p>Фактический адрес: 141401, Московская обл., г. Химки, ул. Академика Грушина, д.8</p>
			</details>

			<iframe 
				className="google-map" 
				title="googte-maps" 
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2236.3155072149725!2d37.454522569344164!3d55.909229509580676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b539036975ad6b%3A0xcc0186af2345ac1d!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCT0YDRg9GI0LjQvdCwLCA4!5e0!3m2!1sru!2sru!4v1614150754410!5m2!1sru!2sru" 
				loading="lazy"
			/>

		</section>
	)
}