import React from 'react';
// carousel elements
import Carousel, { consts } from 'react-elastic-carousel'
// components
import Item from '@news/newsEl/NewsEl.jsx'
// data
import newsList from '@data/news.js';
// styles
import './news.scss';

// кол-во слайдов в зависимости от ширины вьюпорта
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    // { width: 1200, itemsToShow: 3 },
];


export default function News() {

    // настройка формы стрелок (брать элементы юникода)
    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '❮' : '❯'
        return (
          <button onClick={onClick} disabled={isEdge} className="n-pointer">
            {pointer}
          </button>
        )
    }


    return (
        <>
            <div className="n-carousel-header">
                <h1>Новости</h1>
            </div>

            <div className="n-carousel-wrapper">
            
                <Carousel 
                    className="n-carousel"
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >

                {newsList.map(newsEl => {
                    return <Item newsEl={newsEl} key={newsEl.id} />
                })}
                                    
                </Carousel>
            </div>
        </>
    );
}