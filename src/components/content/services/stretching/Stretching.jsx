import React from 'react';
import { Link } from 'react-router-dom'
// img
import stretching from '@img/services/adults/stretching.jpg'
// styles
import "./stretching.scss";


export default function Stretching() {

    return (
        <section className="serv-page-adults-stretching">

            <div className="serv-page-adults-stretching-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Услуги</Link>
                <p> &gt; </p>
                <Link to="#treiners">Взрослые</Link>
                <p> &gt; </p>
                <span>Стретчинг</span>
            </div>

            <div className="serv-page-adults-stretching-content">
        
                <div className="serv-page-adults-stretching-info">
                    <h1>Стретчинг</h1>
                    <p>
                        Стретчинг – это комплекс упражнений на растяжку мышц тела, 
                        развитие гибкости и эластичности связок и суставов.
                    </p>
                    <p>
                        <span>Польза от стретчинга: </span><br/>
                        - оздоравливает все системы и органы<br/>
                        - улучшает работу кровеносной системы<br/>
                        - укрепляет организм в целом<br/>
                        - формированию красивой осанки<br/>
                        - уменьшение травматизма на бытовом уровне
                    </p>
                    <p>
                        <span>Главным отличием стретчинга является: </span><br/>
                        статичность поз и плавность движений, которые гарантируют 
                        безопасность и отсутствие травматизма.
                        Для занятий нет ограничений по возрасту или уровню 
                        физической подготовки. 
                    </p>
                    
                    <Link to="#contacts">Записаться на тренировку</Link>

                </div>
                {/* ./serv-page-adults-stretching-info */}

                <span className="serv-page-adults-stretching-img">
                    <img src={stretching} alt="serv-page-adults-stretching"/>
                </span>

            </div>
            {/* ./serv-page-adults-stretching-content */}

        </section>
	)
}