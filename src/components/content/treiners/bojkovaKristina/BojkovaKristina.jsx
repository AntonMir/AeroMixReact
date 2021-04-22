import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import bojkovaKristina from '@img/treiners/bojkovaKristina.jpg'
// styles
import "./bojkovaKristina.scss";


export default function BojkovaKristina() {

    return (
        <section className="bojkovaKristina">

            <div className="bojkovaKristina-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Кристина Бажкова</span>
            </div>

            <div className="bojkovaKristina-content">
        
                <div className="bojkovaKristina-info">
                    <h1>Кристина Бажкова</h1>
                    <p>
                        <span>Направление:</span><br/>
                        - танцевальные фитнес тренировки Zumba fitness<br/>
                        - силовые тренеровки Strong by Zumba
                    </p>
                    <p>
                        <span>Квалификация:</span><br/>
                        Участница Zin Jam сессий, семинаров, мастер-классов от международных презентеров.<br/>
                        Экс-участница Ансамбля Современного Эстрадного Танца FreeStyle.<br/>
                        Экс член сборной по волейболу и баскетболу 
                    </p>
                    <p>
                        С 2013 по 2015 - член основного состава сборной команды 
                        Московской области по спортивной аэробике
                    </p>
                    <p>
                        <span>Образование:</span><br/>
                        Международный лицензированный инструктор программ Zumba Fitness
                    </p>
                    
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./bojkovaKristina-info */}
                <span className="bojkovaKristina-img">
                    <img src={bojkovaKristina} alt="bojkovaKristina"/>
                </span>
            </div>
            {/* ./bojkovaKristina-content */}

        </section>
	)
}