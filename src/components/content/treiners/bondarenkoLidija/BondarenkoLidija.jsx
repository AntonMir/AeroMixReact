import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import bondarenkoLidija from '@img/treiners/bondarenkoLidija.jpg'
// styles
import "./bondarenkoLidija.scss";


export default function BondarenkoLidija() {

    return (
        <section className="bondarenkoLidija">

            <div className="bondarenkoLidija-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Лидия Бондаренко</span>
            </div>

            <div className="bondarenkoLidija-content">
        
                <div className="bondarenkoLidija-info">
                    <h1>Лидия Бондаренко</h1>
                    <p>
                        Тренер по бачате. 
                    </p>
                    <p>
                        Несмотря на юный возраст, Лида – очень титулованная спортсменка: 
                        начала заниматься спортивными бальными танцами в 4 года.
                    </p>
                    <p>
                        Является 11-ти кратной чемпионкой Украины по спортивным бальным танцам.
                    </p>
                    <p>
                        Многократный призер Чемпионатов Европы и различных международных соревнований.
                    </p>
                    
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./bondarenkoLidija-info */}
                <span className="bondarenkoLidija-img">
                    <img src={bondarenkoLidija} alt="bondarenkoLidija"/>
                </span>
            </div>
            {/* ./bondarenkoLidija-content */}

        </section>
	)
}