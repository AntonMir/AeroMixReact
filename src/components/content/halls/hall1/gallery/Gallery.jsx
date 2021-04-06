import React from 'react';
// h-carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import childrenTraining1 from '@img/halls/hall1/childrenTraining1.jpg'
import childrenTraining2 from '@img/halls/hall1/childrenTraining2.jpg'
import childrenTraining3 from '@img/halls/hall1/childrenTraining3.jpg'
import dance1 from '@img/halls/hall1/dance1.jpg'
import main from '@img/halls/hall1/main.jpg'

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
          <button onClick={onClick} disabled={isEdge} className="g1-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <>
            <div className="g1-carousel-header">
                <h1>Галерея</h1>
            </div>

            <div className="g1-carousel-wrapper">
            
                <Carousel 
                className="g1-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="g1-car-el">
                        <img src={childrenTraining1} alt=""/>
                    </Item>

                    <Item className="g1-car-el">
                        <img  src={childrenTraining2} alt=""/>
                    </Item>

                    <Item className="g1-car-el">
                        <img  src={childrenTraining3} alt=""/>
                    </Item>

                    <Item className="g1-car-el">
                        <img  src={dance1} alt=""/>
                    </Item>

                    <Item className="g1-car-el">
                        <img  src={main} alt=""/>
                    </Item>

                </Carousel>

            </div>
        </>
    );
}