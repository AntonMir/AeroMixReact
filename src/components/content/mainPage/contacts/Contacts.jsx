import React from 'react'
// components
import ContactsContent from '@mainPage/contacts/contactsContent/ContactsContent.jsx'
import Requisites from '@mainPage/contacts/requisites/Requisites.jsx'
import Map from '@mainPage/contacts/map/Map.jsx'
// styles
import "./contacts.scss"


export default function Contacts(props) {

    return (
		<section className="contacts">

			<ContactsContent />

			<Requisites />

			<Map />

		</section>
	)
}