import React from 'react'
// img
import addres from '@assets/img/addres.svg'
// styles
import "./headerAddres.scss"

export default function HeaderAddres(props) {
	
    return (
        <div className="header-addres">
            <img src={addres} alt='addres'/>
            г. Химки, ул. Академика Грушина, 8
        </div>
    )
	
}