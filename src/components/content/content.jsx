//styles
import "./content.scss"
//redux
import { connect } from 'react-redux'


function Content(props) {
	console.log(props)
	return (
		<>
			<h1>
				Content
			</h1>
			<div>
				{
					props.status.map(item => {
						return <p>{item}</p>
					})
				}
			</div>
		</>
	)
}

const mapContent = state => {
    return {
        status: state.status
    }
}

export default connect(mapContent)(Content)