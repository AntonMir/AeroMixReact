import React from 'react';
import { Link } from 'react-router-dom'
// img
import pilates from '@img/services/adults/pilates.jpg'
// styles
import "./pilates.scss";


export default function Pilates() {

    return (
        <section className="serv-page-adults-pilates">

            <div className="serv-page-adults-pilates-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Услуги</Link>
                <p> &gt; </p>
                <Link to="#treiners">Взрослые</Link>
                <p> &gt; </p>
                <span>Пилатес</span>
            </div>

            <div className="serv-page-adults-pilates-content">
        
                <div className="serv-page-adults-pilates-info">
                    <h1>Пилатес</h1>
                    <p>
                        Пила́тес — система физических упражнений в медленном темпе, 
                        которые задействуют глубоко лежащие мышцы и требуют значительных усилий. 
                        Основа — динамические нагрузки без надрыва и перенапряжений.
                    </p>
                    <p>
                        <span>Польза от пилатеса:</span><br/>
                        - способствует оздоровлению суставов,  укреплению мышц<br/>
                        - снимает напряжения и боли в теле, увеличивает гибкость тела<br/>
                        - корректирует вес<br/>
                        - улучшает осанку<br/>
                        - нормализует сон<br/>
                        - учит лучше чувствовать своё тело<br/>
                        - помогают восстановить мышцы после травм, предупреждая<br/>
                        зарастание повреждённых мышц соединительной тканью
                    </p>
                    <p>
                        <span>Вспомогательное оборудование: </span>
                        изотонические кольца или гимнастические мячи (фитболы), 
                        создающие дополнительное сопротивление при выполнении упражнений и
                        способствующие тонусу мышц.
                    </p>
                    
                    <Link to="#contacts">Записаться на тренировку</Link>

                </div>
                {/* ./serv-page-adults-pilates-info */}

                <span className="serv-page-adults-pilates-img">
                    <img src={pilates} alt="serv-page-adults-pilates"/>
                </span>

            </div>
            {/* ./serv-page-adults-pilates-content */}

        </section>
	)
}