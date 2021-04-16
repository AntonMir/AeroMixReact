import React from 'react';
import { Link } from 'react-router-dom'
// img
import levinaAlexandra from '@img/treiners/levinaAlexandra.jpg'
// styles
import "./levinaAlexandra.scss";


export default function LevinaAlexandra() {

    return (
        <section className="levinaAlexandra">

            <div className="levinaAlexandra-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Тренеры</Link>
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
                    
                        <Link to="/timetable">Узнать расписание</Link>
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