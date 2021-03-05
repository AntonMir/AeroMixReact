import React from 'react';
// img
import phone from '@img/header/phone.svg';
// styles
import "./headerPhone.scss";


function HeaderPhone(props) {

    return (
        <div className="header-phone">
            <img src={phone} alt='phone'/>
            +7-985-001-75-05
        </div>
    )
	
}

export default HeaderPhone;