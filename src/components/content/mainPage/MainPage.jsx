import React from 'react'
//styles
import "./mainPage.scss"
//redux
// import { connect } from 'react-redux'
// components
import Main from '@mainPage/main/Main.jsx'
import Promotions from '@mainPage/promotions/Promotions.jsx'

export default function MainPage(props) {
	// console.log(props)
	return (
		<section className="mainPage">
			<p>Main Page</p>

			<Main />
			{/* <News /> */}
			<Promotions />
			{/* <Services /> */}
			{/* <Treiners /> */}
			{/* <Halls /> */}
			{/* <Contacts /> */}

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