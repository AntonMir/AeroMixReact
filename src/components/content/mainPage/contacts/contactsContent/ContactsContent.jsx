import React from 'react'
// components
import ContactsHeader from '@contacts/contactsContent/contactsHeader/ContactsHeader.jsx'
import ContactsBody from '@contacts/contactsContent/contactsBody/ContactsBody.jsx'
// styles
import "./contactsContent.scss"

export default function ContactsContent(props) {

    return (
		<div className="contacts-content">

            <ContactsHeader />  
            
            <ContactsBody />  

        </div>
	)
}


