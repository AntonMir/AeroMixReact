import React from 'react';
// carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
import Item from "@data/items.js";
// img
import zasipkinaOksana from '@img/mainPage/treiners/zasipkinaOksana.jpg'
import zasipkinaJanna from '@img/mainPage/treiners/zasipkinaJanna.jpg'
import levinaAlexandra from '@img/mainPage/treiners/levinaAlexandra.jpg'
import vasilcovaViktoria from '@img/mainPage/treiners/vasilcovaViktoria.jpg'
import bondarenkoLidija from '@img/mainPage/treiners/bondarenkoLidija.jpg'
import bojkovaKristina from '@img/mainPage/treiners/bojkovaKristina.jpg'
import udinIgor from '@img/mainPage/treiners/udinIgor.jpg'
// wave img
import treinersGreenWave from '@img/mainPage/treiners/greenWave.svg'
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
        <div className="treiners">
            
            <div className="t-carousel-header">
                <h1>Тренеры</h1>
            </div>

            <div className="t-carousel-wrapper">
            
                <Carousel 
                    className="t-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                    <Item className="t-car-el">
                        <img className="t-logo" src={zasipkinaOksana} alt=""/>
                        <h1>Оксана Вячеславовна Засыпкина</h1>
                        <p>Тренер по детской спортивной аэробике и по оздоровительной аэробике для взрослых и детей.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="t-car-el">
                        <img className="t-logo" src={zasipkinaJanna} alt=""/>
                        <h1>Жанна Вячеславовна Засыпкина</h1>
                        <p>Тренер по детской спортивной аэробике и по оздоровительной аэробике для взрослых и детей.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="t-car-el">
                        <img className="t-logo" src={levinaAlexandra} alt=""/>
                        <h1>Александра Левина</h1>
                        <p>Преподаватель джаз-фанка и хип-хопа.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="t-car-el">
                        <img className="t-logo" src={vasilcovaViktoria} alt=""/>
                        <h1>Виктория Михайловна Васильцова</h1>
                        <p>Тренер-постановщик программ по спортивной аэробике, кандидат в мастера спорта по спортивной аэробике.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="t-car-el">
                        <img className="t-logo" src={bondarenkoLidija} alt=""/>
                        <h1>Лидия Бондаренко</h1>
                        <p>Тренер по бачате. Является 11-ти кратной чемпионкой Украины по спортивным бальным танцам.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="t-car-el">
                        <img className="t-logo" src={bojkovaKristina} alt=""/>
                        <h1>Кристина Бажкова</h1>
                        <p>Преподаватель танцевальных фитнес тренировок Zumba fitness.</p>
                        <a href="/">подробнее</a>
                    </Item>

                    <Item className="t-car-el">
                        <img className="t-logo" src={udinIgor} alt=""/>
                        <h1>Игорь Юдин</h1>
                        <p>Тренер по йоге.  Занимается йогой с 2009 года, с 2012 г. практикует и преподает йогу Айенгара.</p>
                        <a href="/">подробнее</a>
                    </Item>
                                                       
                </Carousel>
            </div>

            <img className="treiners-green-wave" alt="" src={treinersGreenWave} />
        </div>
    );
}