import React from 'react';
// h-carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import hallOne from '@img/mainPage/halls/hallOne.jpg'
import hallTwo from '@img/mainPage/halls/hallTwo.jpg'
import hallThere from '@img/mainPage/halls/hallThere.jpg'
import restroom from '@img/mainPage/halls/restroom.jpg'
// styles
import './halls.scss';

// кол-во слайдов в зависимости от ширины вьюпорта
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 968, itemsToShow: 3 },
];


export default function Halls() {

    // настройка формы стрелок (брать элементы юникода)
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '❮' : '❯'
        return (
          <button onClick={onClick} disabled={isEdge} className="h-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <>
            <div className="h-carousel-header">
                <h1>Залы и оборудование</h1>
            </div>

            <div className="h-carousel-wrapper">
            
                <Carousel 
                className="h-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="h-car-el">
                        <img className="h-logo" src={hallOne} alt=""/>
                        <h1>Зал № 1</h1>
                        <p>Для занятий хореографией, йогой, акробатикой.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="h-car-el">
                        <img className="h-logo" src={hallTwo} alt=""/>
                        <h1>Зал № 2</h1>
                        <p>Предназначен, в большей степени, для силовых тренировок.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="h-car-el">
                        <img className="h-logo" src={hallThere} alt=""/>
                        <h1>Зал № 3</h1>
                        <p>Большой зал в котором проходит постановка и отработка аэробных и показательных программ.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="h-car-el">
                        <img className="h-logo" src={restroom} alt=""/>
                        <h1>Комната отдыха</h1>
                        <p>Есть все, что нужно для комфортного отдыха.</p>
                        <a href="/">подробнее</a>
                    </Item>

                </Carousel>
            </div>
        </>
    );
}