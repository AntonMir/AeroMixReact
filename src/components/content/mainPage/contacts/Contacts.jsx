import React from 'react';
// components
import ContactsContent from '@contacts/contactsContent/ContactsContent.jsx';
import Requisites from '@contacts/requisites/Requisites.jsx';
import Map from '@contacts/map/Map.jsx';
// styles
import "./contacts.scss";


function Contacts() {

    return (
		<section className="contacts" id={"contacts"}>

			<ContactsContent />
			<Requisites />
			<Map />

		</section>
	)
}

export default Contacts;