import React from 'react'
//styles
import "./content.scss"
//redux
// import { connect } from 'react-redux'


export default function Content(props) {
	console.log(props)
	return (
		<>
			
				Content__________________________________________________________
				
			{/* <img src={img} alt="" srcset=""/> */}
			
			{/* <div>PRОPS:
				{
					props.status.map(item => {
						return <p>{item}</p>
					})
				}
			</div> */}
		</>
	)
}

// const mapContent = state => {
//     return {
//         status: state.status
//     }
// }

// export default connect(mapContent)(Content)