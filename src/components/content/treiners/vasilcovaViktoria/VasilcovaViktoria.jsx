import React from 'react';
import { Link } from 'react-router-dom'
// img
import vasilcovaViktoria from '@img/treiners/vasilcovaViktoria.jpg'
// styles
import "./vasilcovaViktoria.scss";


export default function VasilcovaViktoria() {

    return (
        <section className="vasilcovaViktoria">

            <div className="vasilcovaViktoria-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Тренеры</Link>
                <p> &gt; </p>
                <span>Виктория Васильцова</span>
            </div>

            <div className="vasilcovaViktoria-content">
        
                <div className="vasilcovaViktoria-info">
                    <h1>Виктория Михайловна Васильцова</h1>
                    <p>
                        Тренер - постановщик программ по спортивной аэробике, 
                        кандидат в мастера спорта по спортивной аэробике.
                    </p>
                    <p>
                        Неоднократный призер и победитель региональных и международных 
                        соревнований по спортивной аэробике. 
                    </p>
                    <p>
                        С 2013 по 2015 - член основного состава сборной команды 
                        Московской области по спортивной аэробике
                    </p>
                    <p>
                        Закончила Отделение хореографии Центральной детской школы искусств г. Химки. 
                        В настоящее время является студенткой 1-го курса Института естествознания 
                        и спортивных технологий Московского городского педагогического университета 
                        (факультет «Спортивная тренировка»).
                    </p>
                    
                        <Link to="/timetable">Узнать расписание</Link>
                </div>
                {/* ./vasilcovaViktoria-info */}
                <span className="vasilcovaViktoria-img">
                    <img src={vasilcovaViktoria} alt="vasilcovaViktoria"/>
                </span>
            </div>
            {/* ./vasilcovaViktoria-content */}

        </section>
	)
}