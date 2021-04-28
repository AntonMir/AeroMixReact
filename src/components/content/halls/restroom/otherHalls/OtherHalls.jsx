import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// h-carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import hallOne from '@img/mainPage/halls/hallOne.jpg'
import hallTwo from '@img/mainPage/halls/hallTwo.jpg'
import hallThere from '@img/mainPage/halls/hallThere.jpg'
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
          <button onClick={onClick} disabled={isEdge} className="hr-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <>
            <div className="hr-carousel-header">
                <h1>Другие залы</h1>
            </div>

            <div className="hr-carousel-wrapper">
            
                <Carousel 
                className="hr-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="hr-car-el">
                        <img className="hr-logo" src={hallOne} alt="hr-logo"/>
                        <h1>Зал № 1</h1>
                        <p>Для занятий хореографией, йогой, акробатикой.</p>
                        <HashLink to="/hallone#top">подробнее</HashLink>
                    </Item>

                    <Item className="hr-car-el">
                        <img className="hr-logo" src={hallTwo} alt="hr-logo"/>
                        <h1>Зал № 2</h1>
                        <p>Предназначен, в большей степени, для силовых тренировок.</p>
                        <HashLink to="/halltwo#top">подробнее</HashLink>
                    </Item>

                    <Item className="hr-car-el">
                        <img className="hr-logo" src={hallThere} alt="hr-logo"/>
                        <h1>Зал № 3</h1>
                        <p>Большой зал в котором проходит постановка и отработка аэробных и показательных программ.</p>
                        <HashLink to="/hallthree#top">подробнее</HashLink>
                    </Item>

                </Carousel>
            </div>
        </>
    );
}