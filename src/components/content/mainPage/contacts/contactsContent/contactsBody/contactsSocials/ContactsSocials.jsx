import React from 'react'
// Link
import { Link } from 'react-router-dom'
// img
import insta from '@assets/img/insta-black.svg'
import vk from '@assets/img/vk-black.svg'
import facebook from '@assets/img/facebook-black.svg'
import odnoklasniki from '@assets/img/odnoklasniki-black.svg'
// styles
import "./contactsSocials.scss"


export default function ContactsSocials(props) {

    return (
        <div className="contacts-socials">
            <h2>Cоц. сети</h2>
            <div className="contacts-socials-items">
                <Link to="/"><img src={insta} alt="insta"/></Link>
                <Link to="/"><img src={vk} alt="vk"/></Link>
                <Link to="/"><img src={facebook} alt="facebook"/></Link>
                <Link to="/"><img src={odnoklasniki} alt="odnoklasniki"/></Link>
            </div>
        </div>
	)
}


