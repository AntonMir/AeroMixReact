import React from 'react';
// h-carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import chess from '@img/halls/restroom/chess.jpg'
import nightRestroom1 from '@img/halls/restroom/nightRestroom1.jpg'
import nightRestroom2 from '@img/halls/restroom/nightRestroom2.JPG'
import pajamas from '@img/halls/restroom/pajamas.jpg'
import restroom1 from '@img/halls/restroom/restroom1.jpg'
import restroom2 from '@img/halls/restroom/restroom2.jpg'
import restroom3 from '@img/halls/restroom/restroom3.jpg'
import restroom4 from '@img/halls/restroom/restroom4.jpg'


// styles
import './gallery.scss';

// кол-во слайдов в зависимости от ширины вьюпорта
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 968, itemsToShow: 3 },
];


export default function Galery() {

    // настройка формы стрелок (брать элементы юникода)
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '❮' : '❯'
        return (
          <button onClick={onClick} disabled={isEdge} className="gr-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <>
            <div className="gr-carousel-header">
                <h1>Галерея</h1>
            </div>

            <div className="gr-carousel-wrapper">
            
                <Carousel 
                className="gr-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="gr-car-el">
                        <img src={chess} alt=""/>
                    </Item>

                    <Item className="gr-car-el">
                        <img  src={restroom2} alt=""/>
                    </Item>

                    <Item className="gr-car-el">
                        <img  src={restroom3} alt=""/>
                    </Item>

                    <Item className="gr-car-el">
                        <img  src={restroom4} alt=""/>
                    </Item>
                    
                    <Item className="gr-car-el">
                        <img  src={pajamas} alt=""/>
                    </Item>

                    <Item className="gr-car-el">
                        <img  src={restroom1} alt=""/>
                    </Item>

                    <Item className="gr-car-el">
                        <img  src={nightRestroom1} alt=""/>
                    </Item>

                    <Item className="gr-car-el">
                        <img  src={nightRestroom2} alt=""/>
                    </Item>

                </Carousel>

            </div>
        </>
    );
}