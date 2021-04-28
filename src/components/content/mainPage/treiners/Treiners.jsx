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
import './treiners.scss';

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
          <button onClick={onClick} disabled={isEdge} className="t-pointer">
            {pointer}
          </button>
        )
    }

    return (
        <section className="treiners" id="treiners">
            
            <div className="t-carousel-header">
                <h1>Тренеры</h1>
            </div>

            <div className="t-carousel-wrapper">
            
                <Carousel 
                    className="t-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    {treiners.map(treiner => {
                        return (
                            <Item className="t-car-el" key={treiner.id}>
                                <img className="t-logo" src={treiner.img} alt={treiner.alt}/>
                                <h1>{treiner.name}</h1>
                                <p>{treiner.text}</p>
                                <HashLink to={treiner.href}>подробнее</HashLink>
                            </Item>
                        )
                    })}
                                                                           
                </Carousel>
            </div>

            <img className="treiners-green-wave" alt="" src={treinersGreenWave} />
        </section>
    );
}