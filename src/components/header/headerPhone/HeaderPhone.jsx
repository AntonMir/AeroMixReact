import React from 'react'
// img
import phone from '@assets/img/phone.svg'
// styles
import "./headerPhone.scss"

export default function HeaderPhone(props) {
	
    return (
        <div className="header-phone">
            <img src={phone} alt='phone'/>
            +7-985-001-75-05
        </div>
    )
	
}