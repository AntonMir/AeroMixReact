import React from 'react';
// link
import { Link } from 'react-router-dom';
// img
import phone from '@assets/img/footerPhone.svg'
import addres from '@assets/img/footerAddres.svg'
import insta from '@assets/img/insta.svg'
import vk from '@assets/img/vk.svg'
import facebook from '@assets/img/facebook.svg'
import odnoklasniki from '@assets/img/odnoklasniki.svg'
// style
import "./footerContacts.scss";

export default function FooterContacts() {
	return (
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
	)
}