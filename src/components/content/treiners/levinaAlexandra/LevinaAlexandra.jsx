import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import levinaAlexandra from '@img/treiners/levinaAlexandra.jpg'
// styles
import "./levinaAlexandra.scss";


export default function LevinaAlexandra() {

    return (
        <section className="levinaAlexandra">

            <div className="levinaAlexandra-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Александра Левина</span>
            </div>

            <div className="levinaAlexandra-content">
        
                <div className="levinaAlexandra-info">
                    <h1>Александра Левина</h1>
                    <p>
                        Преподаватель джаз-фанка и хип-хопа. 
                    </p>
                    <p>
                        Участница команды LIL’FAM, которая является победителем и 
                        призером многочисленных соревнований в России, Испании, Германии и США.
                    </p>
                    
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./levinaAlexandra-info */}
                <span className="levinaAlexandra-img">
                    <img src={levinaAlexandra} alt="levinaAlexandra"/>
                </span>
            </div>
            {/* ./levinaAlexandra-content */}

        </section>
	)
}