import React from 'react';
// styles
import "./promoEl.scss";


function PromoEl(props) {

    const { title, text, background, id } = props.promo;

    return (
		
        <div className="promotion-item">
            <div className="promotion-indicator">Акция</div>
            <img className="promotion-background" src={background} alt="background-img"/>
            <div className="promotion-info">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
          
	)
}

export default PromoEl;

