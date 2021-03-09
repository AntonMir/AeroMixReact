import React from 'react';
// img
import contactsNumber from '@img/mainPage/contacts/contacts-number.svg';
import contactsEmail from '@img/mainPage/contacts/contacts-email.svg';
// styles
import "./contactsDetails.scss";


function ContactsDetails() {

    return (
        <div className="contacts-details">
            <h2>Свяжитесь с нами</h2>
            <p className="contacts-number">
                <img src={contactsNumber} alt=""/>
                +7-985-001-75-05
            </p>
            
            <p className="contacts-email">
                <img src={contactsEmail} alt=""/>
                SK-aeromix@yandex.ru
            </p>
        </div>
	)
}

export default ContactsDetails;


