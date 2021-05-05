import React from 'react'
// Link
import { HashLink } from 'react-router-hash-link';
//styles
import "./serviceEl.scss"


function ServiceEl(props) {

    const { title, text, background, href, mark } = props.service;
	
    return (   
        <>
            <div className={`service service-${mark}`}>
                <img className="service-background" src={background} alt={`${mark}-img`}/>
                <div className="service-content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <HashLink to={href}>подробнее...</HashLink>
                </div>
            </div>
        </>
    )

}

export default ServiceEl;