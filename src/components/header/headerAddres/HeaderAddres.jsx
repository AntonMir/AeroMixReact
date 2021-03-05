import React from 'react';
// img
import addres from '@img/header/addres.svg';
// styles
import "./headerAddres.scss";

function HeaderAddres(props) {
	
    return (
        <div className="header-addres">
            <img src={addres} alt='addres'/>
            г. Химки, ул. Академика Грушина, 8
        </div>
    )
	
}

export default HeaderAddres;