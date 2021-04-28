import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// h-carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import hallOne from '@img/mainPage/halls/hallOne.jpg'
import hallTwo from '@img/mainPage/halls/hallTwo.jpg'
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
          <button onClick={onClick} disabled={isEdge} className="h3-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <>
            <div className="h3-carousel-header">
                <h1>Другие залы</h1>
            </div>

            <div className="h3-carousel-wrapper">
            
                <Carousel 
                className="h3-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="h3-car-el">
                        <img className="h3-logo" src={hallOne} alt="h3-logo"/>
                        <h1>Зал № 1</h1>
                        <p>Для занятий хореографией, йогой, акробатикой.</p>
                        <HashLink to="/hallone#top">подробнее</HashLink>
                    </Item>

                    <Item className="h3-car-el">
                        <img className="h3-logo" src={hallTwo} alt="h3-logo"/>
                        <h1>Зал № 2</h1>
                        <p>Предназначен, в большей степени, для силовых тренировок.</p>
                        <HashLink to="/halltwo#top">подробнее</HashLink>
                    </Item>

                    <Item className="h3-car-el">
                        <img className="h3-logo" src={restroom} alt="h3-logo"/>
                        <h1>Комната отдыха</h1>
                        <p>Есть все, что нужно для комфортного отдыха.</p>
                        <HashLink to="/restroom#top">подробнее</HashLink>
                    </Item>

                </Carousel>
            </div>
        </>
    );
}