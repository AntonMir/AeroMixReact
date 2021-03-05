import React from 'react';
// components
import ContactsDetails from '@contactsBody/contactsDetails/ContactsDetails.jsx';
import ContactsSocials from '@contactsBody/contactsSocials/ContactsSocials.jsx';
import ContactsAddres from '@contactsBody/contactsAddres/ContactsAddres.jsx';
import ContactsWorkTime from '@contactsBody/contactsWorkTime/ContactsWorkTime.jsx';
// styles
import "./contactsBody.scss";


function ContactsBody() {

    return (
        <div className="contactsBody">

            <div className="contacts-details-socials-wrapper">
                <ContactsDetails />
                <ContactsSocials />
            </div>

            <div className="contacts-addres-worktime-wrapper">
                <ContactsAddres />
                <ContactsWorkTime />
            </div>

        </div>
	)
}

export default ContactsBody;