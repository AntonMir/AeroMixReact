import React from 'react';
// h-carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import childrenTraining1 from '@img/halls/hall2/childrenTraining1.jpg'
import childrenTraining2 from '@img/halls/hall2/childrenTraining2.jpg'
import hall1 from '@img/halls/hall2/hall1.jpg'
import training1 from '@img/halls/hall2/training1.jpg'
import training2 from '@img/halls/hall2/training2.jpg'

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
          <button onClick={onClick} disabled={isEdge} className="g2-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <>
            <div className="g2-carousel-header">
                <h1>Галерея</h1>
            </div>

            <div className="g2-carousel-wrapper">
            
                <Carousel 
                className="g2-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="g2-car-el">
                        <img src={childrenTraining1} alt=""/>
                    </Item>

                    <Item className="g2-car-el">
                        <img  src={childrenTraining2} alt=""/>
                    </Item>

                    <Item className="g2-car-el">
                        <img  src={hall1} alt=""/>
                    </Item>

                    <Item className="g2-car-el">
                        <img  src={training1} alt=""/>
                    </Item>

                    <Item className="g2-car-el">
                        <img  src={training2} alt=""/>
                    </Item>

                </Carousel>

            </div>
        </>
    );
}