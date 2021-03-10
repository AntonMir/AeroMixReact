import React from 'react'
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
                    <a href={href}>подробнее</a>
                </div>
            </div>
        </>
    )

}

export default ServiceEl;