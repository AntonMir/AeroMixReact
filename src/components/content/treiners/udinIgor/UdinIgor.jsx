import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import udinIgor from '@img/treiners/udinIgor.jpg'
// styles
import "./udinIgor.scss";


export default function UdinIgor() {

    return (
        <section className="udinIgor">

            <div className="udinIgor-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Игорь Юдин</span>
            </div>

            <div className="udinIgor-content">
        
                <div className="udinIgor-info">
                    <h1>Игорь Юдин</h1>
                    <p>
                        Тренер по йоге.  Занимается йогой с 2009 года, с 2012 г. 
                        практикует и преподает йогу Айенгара. 
                    </p>
                    <p>
                        В юности занимался спортом, состоял в олимпийском резерве. 
                        В йогу пришёл в более сознательном возрасте, как сам признаётся, 
                        почти случайно, когда захотелось чего-то более глубокого, 
                        чем «быстрее, сильнее и выше». 
                    </p>
                    <p>
                        Занятия йогой для Игоря — это непростой труд, потому что, 
                        согласно философии йоги, «нет неправильных вещей, а есть вещи, 
                        стоящие не на своих местах». И процесс расстановки для него с 
                        каждым годом становится всё увлекательнее.
                    </p>
                    <p>
                        Задача как преподавателя — настроить ученика на конкретную работу 
                        с телом и умом и осознание этой работы. Научить наблюдать свои ощущения, 
                        как физические, так и ментальные, аккуратно и вдумчиво исследовать 
                        возможности своего тела.
                    </p>
                    
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./udinIgor-info */}
                <span className="udinIgor-img">
                    <img src={udinIgor} alt="udinIgor"/>
                </span>
            </div>
            {/* ./udinIgor-content */}

        </section>
	)
}