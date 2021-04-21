import React from 'react';
import { Link } from 'react-router-dom'
// img
import bachata from '@img/services/adults/bachata.svg'
// styles
import "./bachata.scss";


export default function Bachata() {

    return (
        <section className="serv-page-adults-bachata">

            <div className="serv-page-adults-bachata-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Услуги</Link>
                <p> &gt; </p>
                <Link to="#treiners">Взрослые</Link>
                <p> &gt; </p>
                <span>Бачата</span>
            </div>

            <div className="serv-page-adults-bachata-content">
        
                <div className="serv-page-adults-bachata-info">
                    <h1>Бачата</h1>
                    <p>
                        Бачата -  один из самых простых по хореографии латиноамериканский танец. 
                    </p>
                    <p>
                        <span>Главная особенность стиля </span>
                        — чувственный романтизм, пластика, гармония и импровизация! 
                    </p>
                    <p>
                        <span>Основы танца </span>
                        — трехступенчатые движения бедра.<br/>
                        Колени должны быть слегка согнуты, чтобы исполнитель мог 
                        легко взмахнуть бедрами. Двигать бедрами важно, потому что это 
                        часть души бачаты. Большая часть движений приходится на нижнюю 
                        часть тела до бедер, а верхняя часть тела движется намного меньше.
                    </p>
                    <p>
                        Танцевальные движения или разновидность шага во время исполнения 
                        зависят от музыки: ритмов разных инструментов, настройки, 
                        настроения и интерпретации.
                    </p>
                    <p>
                        Танец исполняется под грустную музыку, т.к. она лучше всего 
                        передает романтические чувства партнеров, их любовные переживания. 
                        Мелодия трогает душу, помогает танцорам двигаться чувственно и нежно.
                    </p>
                    
                    <Link to="#contacts">Записаться на тренировку</Link>

                </div>
                {/* ./serv-page-adults-bachata-info */}

                <span className="serv-page-adults-bachata-img">
                    <img src={bachata} alt="serv-page-adults-bachata"/>
                </span>

            </div>
            {/* ./serv-page-adults-bachata-content */}

        </section>
	)
}