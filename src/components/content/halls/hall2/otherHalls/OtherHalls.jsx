import React from 'react';
// h-carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import hallOne from '@img/mainPage/halls/hallOne.jpg'
import hallThere from '@img/mainPage/halls/hallThere.jpg'
import restroom from '@img/mainPage/halls/restroom.jpg'
// styles
import './otherHalls.scss';

// кол-во слайдов в зависимости от ширины вьюпорта
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 968, itemsToShow: 3 },
];


export default function OtherHalls() {

    // настройка формы стрелок (брать элементы юникода)
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '❮' : '❯'
        return (
          <button onClick={onClick} disabled={isEdge} className="h2-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <>
            <div className="h2-carousel-header">
                <h1>Другие залы</h1>
            </div>

            <div className="h2-carousel-wrapper">
            
                <Carousel 
                className="h2-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="h2-car-el">
                        <img className="h2-logo" src={hallOne} alt=""/>
                        <h1>Зал № 1</h1>
                        <p>Для занятий хореографией, йогой, акробатикой.</p>
                        <a href="/hallone">подробнее</a>
                    </Item>

                    <Item className="h2-car-el">
                        <img className="h2-logo" src={hallThere} alt=""/>
                        <h1>Зал № 3</h1>
                        <p>Большой зал в котором проходит постановка и отработка аэробных и показательных программ.</p>
                        <a href="/hallthree">подробнее</a>
                    </Item>

                    <Item className="h2-car-el">
                        <img className="h2-logo" src={restroom} alt=""/>
                        <h1>Комната отдыха</h1>
                        <p>Есть все, что нужно для комфортного отдыха.</p>
                        <a href="/restroom">подробнее</a>
                    </Item>

                </Carousel>
            </div>
        </>
    );
}