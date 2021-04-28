import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// wave img
import treinersGreenWave from '@img/mainPage/treiners/greenWave.svg'
// data
import treiners from '@data/treiners.js'
// styles
import './treinersCarousel.scss';

// кол-во слайдов в зависимости от ширины вьюпорта
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 968, itemsToShow: 3 },
];


export default function Treiners() {

    // настройка формы стрелок (брать элементы юникода)
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '❮' : '❯'
        return (
          <button onClick={onClick} disabled={isEdge} className="all-t-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <div className="all-treiners">
            
            <div className="all-t-carousel-header">
                <h1>Все тренеры</h1>
            </div>

            <div className="all-t-carousel-wrapper">
            
                <Carousel 
                    className="all-t-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    {treiners.map(treiner => {
                        return (
                            <Item className="all-t-car-el" key={treiner.id}>
                                <img className="all-t-logo" src={treiner.img} alt={treiner.alt}/>
                                <h1>{treiner.name}</h1>
                                <p>{treiner.text}</p>
                                <HashLink to={treiner.href}>подробнее</HashLink>
                            </Item>
                        )
                    })}
                                                                           
                </Carousel>
            </div>

            <img className="all-treiners-green-wave" alt="" src={treinersGreenWave} />
        </div>
    );
}