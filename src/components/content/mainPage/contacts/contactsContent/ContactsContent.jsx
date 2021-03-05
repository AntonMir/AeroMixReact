import React from 'react';
// components
import ContactsHeader from '@contactsContent/contactsHeader/ContactsHeader.jsx';
import ContactsBody from '@contactsContent/contactsBody/ContactsBody.jsx';
// styles
import "./contactsContent.scss";


function ContactsContent() {

    return (
        <div className="contacts-content">
            <ContactsHeader />  
            <ContactsBody />  
        </div>
    )
}

export default ContactsContent;