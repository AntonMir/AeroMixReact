import React from 'react';
// h-carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import dance1 from '@img/halls/hall3/dance1.jpg'
import dance2 from '@img/halls/hall3/dance2.jpg'
import hall1 from '@img/halls/hall3/hall1.jpg'

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
          <button onClick={onClick} disabled={isEdge} className="g3-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <>
            <div className="g3-carousel-header">
                <h1>Галерея</h1>
            </div>

            <div className="g3-carousel-wrapper">
            
                <Carousel 
                className="g3-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="g3-car-el">
                        <img src={dance1} alt=""/>
                    </Item>

                    <Item className="g3-car-el">
                        <img  src={dance2} alt=""/>
                    </Item>

                    <Item className="g3-car-el">
                        <img  src={hall1} alt=""/>
                    </Item>
                    
                </Carousel>

            </div>
        </>
    );
}