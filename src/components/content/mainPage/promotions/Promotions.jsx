import React from 'react';
// components
import PromoLine from './promoLine/PromoLine.jsx';
// Список акций
// ./src/data - там можно удалять и добавлять акций, инструкция в promo.js
import promotionList from '@data/promo.js'
// styles
import "./promotions.scss";


function Promotions() {

    return (
		<section className="promotions" id="promo">
            
            <h1 className="promotions-header">Акции</h1>

            {promotionList.map((promoLine, index) => { return <PromoLine key={index} promoList={promoLine} />})}

		</section>
	)
}

export default Promotions;