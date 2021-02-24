import React from 'react'
// components
import ContactsDetails from '@contacts/contactsContent/contactsBody/contactsDetails/ContactsDetails.jsx'
import ContactsSocials from '@contacts/contactsContent/contactsBody/contactsSocials/ContactsSocials.jsx'
import ContactsAddres from '@contacts/contactsContent/contactsBody/contactsAddres/ContactsAddres.jsx'
import ContactsWorkTime from '@contacts/contactsContent/contactsBody/contactsWorkTime/ContactsWorkTime.jsx'
// styles
import "./contactsBody.scss"

export default function ContactsBody(props) {

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


