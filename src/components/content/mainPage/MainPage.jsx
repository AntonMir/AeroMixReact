import React from 'react';
// components
import Main from '@mainPage/main/Main.jsx';
import Promotions from '@mainPage/promotions/Promotions.jsx';
import Contacts from '@mainPage/contacts/Contacts.jsx';
import Services from '@mainPage/services/Services.jsx';
import Treiners from '@mainPage/treiners/Treiners.jsx';
import Halls from '@mainPage/halls/Halls.jsx';
//styles
import "./mainPage.scss";


function MainPage() {

	return (
		<section className="mainPage">

			<Main />
			{/* <News /> */}
			<Promotions />
			<Services />
			<Treiners />
			<Halls />
			<Contacts />

			{/* <img src={img} alt="" srcset=""/> */}
			
			{/* <div>PRОPS:
				{
					props.status.map(item => {
						return <p>{item}</p>
					})
				}
			</div> */}

		</section>
	)
}

// const mapContent = state => {
//     return {
//         status: state.status
//     }
// }
// export default connect(mapContent)(Content)

export default  MainPage;