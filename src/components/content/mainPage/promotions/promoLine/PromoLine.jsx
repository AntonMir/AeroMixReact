import React from 'react';
// components
import PromoEl from './promoEl/PromoEl.jsx';
// styles
import "./promoLine.scss";


function PromoLine(props) {

    const { promoList } = props;
        
    return (
		
        <div className="promotions-line">
            {promoList.map(promo => { return <PromoEl key={promo.id} promo={promo}/>})}
        </div>

	)
}

export default PromoLine;
