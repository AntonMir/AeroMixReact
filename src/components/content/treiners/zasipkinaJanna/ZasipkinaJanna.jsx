import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import zasipkinaJanna from '@img/treiners/zasipkinaJanna.jpg'
// styles
import "./zasipkinaJanna.scss";


export default function ZasipkinaJanna() {

    return (
        <section className="zasipkinaJanna">

            <div className="zasipkinaJanna-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#treiners">Тренеры</HashLink>
                <p> &gt; </p>
                <span>Жанна Вячеславовна Засыпкина</span>
            </div>

            <div className="zasipkinaJanna-content">
        
                <div className="zasipkinaJanna-info">
                    <h1>Жанна Вячеславовна Засыпкина</h1>
                    <p>
                        Тренер - преподаватель по детской спортивной аэробике и 
                        по оздоровительной аэробике для взрослых и детей. 
                    </p>
                    <p>
                        Стаж работы – 20 лет.  Воспитала 7 мастеров спорта, 15 кандидатов 
                        в мастера спорта, более 50 спортсменов с 1, 2 и 3 взрослыми разрядами 
                        по спортивной аэробике.
                        Судья 1-ой категории по спортивной аэробике.  
                    </p>
                    <p>
                        С середины 90-х годов активно занималась развитием  детской спортивной аэробики 
                        в России. Принимала участие в гимнастических фестивалях в Финляндии, Японии и Дании. 
                        С 2006 по 2018 – ведущий тренер –преподаватель по детской спортивной аэробике в 
                        МОУ ЦДОД «Виктория» г. Химки. 
                    </p>
                    <p>
                        Множество грамот «Лучший тренер-преподаватель», в 2014 году - правительственная 
                        награда от Губернатора Московской области, в 2012 году - благодарственной 
                        письмо за результативную работу от Главы Городского округа Химки Московской области. 
                    </p>
                    
                        <HashLink to="/timetable#top">Узнать расписание</HashLink>
                </div>
                {/* ./zasipkinaJanna-info */}
                <span className="zasipkinaJanna-img">
                    <img src={zasipkinaJanna} alt="zasipkinaJanna"/>
                </span>
            </div>
            {/* ./zasipkinaJanna-content */}

        </section>
	)
}