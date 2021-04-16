import React from 'react';
import { Link } from 'react-router-dom'
// img
import zasipkinaOksana from '@img/treiners/zasipkinaOksana.jpg'
// styles
import "./zasipkinaOksana.scss";


export default function ZasipkinaOksana() {

    return (
        <section className="zasipkinaOksana">

            <div className="zasipkinaOksana-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Тренеры</Link>
                <p> &gt; </p>
                <span>Оксана Вячеславовна Засыпкина</span>
            </div>

            <div className="zasipkinaOksana-content">
        
                <div className="zasipkinaOksana-info">
                    <h1>Оксана Вячеславовна Засыпкина</h1>
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
                    
                        <Link to="/timetable">Узнать расписание</Link>
                </div>
                {/* ./zasipkinaOksana-info */}
                <span className="zasipkinaOksana-img">
                    <img src={zasipkinaOksana} alt="zasipkinaOksana"/>
                </span>
            </div>
            {/* ./zasipkinaOksana-content */}

        </section>
	)
}