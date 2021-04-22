import React from 'react';
// img
import phone from '@img/footer/footerPhone.svg';
import addres from '@img/footer/footerAddres.svg';
import insta from '@img/footer/insta.svg';
import vk from '@img/footer/vk.svg';
import facebook from '@img/footer/facebook.svg';
import odnoklasniki from '@img/footer/odnoklasniki.svg';
// style
import "./footerContacts.scss";


function FooterContacts() {

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
                    <a href="https://www.instagram.com/aeromix_khimki/?igshid=ps1jn2xrnkno"><img src={insta} alt="insta"/></a>
                    <a href="https://vk.com/id570697624"><img src={vk} alt="vk"/></a>
                    <a href="https://www.facebook.com/aeromix.aeromix"><img src={facebook} alt="facebook"/></a>
                    <a href="https://ok.ru/profile/573787347062"><img src={odnoklasniki} alt="odnoklasniki"/></a>
                </div>
            </div>

        </div>
	)
}

export default FooterContacts;