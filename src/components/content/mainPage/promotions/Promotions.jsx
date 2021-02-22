import React from 'react'
// Link
// import { Link } from 'react-router-dom'
// img

// styles
import "./promotions.scss"


export default function Promotions(props) {

  
    return (
		<section className="promotions">
            
                <h1 className="promotion-header">Акции</h1>

                <div className="promotion-item-wrapper">

                    <div className="promotion-item">
                        <div className="promotion-indicator">Акция</div>
                        <div className="promotion-info">
                            <h1>С друзьями выгоднее</h1>
                            <p>Приведи друга получи скидку 500 рублей на стоимость ежемесячного абонемента</p>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <div className="promotion-indicator">Акция</div>
                        <div className="promotion-info">
                            <h1>С друзьями выгоднее</h1>
                            <p>Приведи друга получи скидку 500 рублей на стоимость ежемесячного абонемента</p>
                        </div>
                    </div>

                    <div className="promotion-item">
                        <div className="promotion-indicator">Акция</div>
                        <div className="promotion-info">
                            <h1>С друзьями выгоднее</h1>
                            <p>Приведи друга получи скидку 500 рублей на стоимость ежемесячного абонемента</p>
                        </div>
                    </div>

                </div>
     

		</section>
	)
}