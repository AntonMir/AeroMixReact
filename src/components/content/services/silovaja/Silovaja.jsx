import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import silovaja from '@img/services/adults/silovaja.jpg'
// styles
import "./silovaja.scss";


export default function Silovaja() {

    return (
        <section className="serv-page-adults-silovaja">

            <div className="serv-page-adults-silovaja-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Силовая тренировка</span>
            </div>

            <div className="serv-page-adults-silovaja-content">
        
                <div className="serv-page-adults-silovaja-info">
                    <h1>Силовая тренировка</h1>
                    <p>
                        Силовая тренировка - это комплексное занятие, направленное 
                        на развитие различных групп мышц. 
                    </p>
                    <p>
                        <span>Объединяет принципиально разные виды нагрузок:</span><br/>
                        - кардио нагрузки (беговые и прыжковые упражнения)<br/>
                        - занятия с утяжелителями (воздействие на разные группы мышц)<br/>
                        - упражнения с доп. оборудованием (бодибары, кольца, мячи,  и т.п.)
                    </p>
                    <p>
                        <span>Силовая тренеровка:</span><br/>
                        - улучшает работу кровеносной системы<br/>
                        - повышает иммунитет<br/>
                        - замедляет процессы старения<br/>
                        - улучшает физиологические и биохимические процессы в организме<br/>
                        - формирует мышечный корсет и красивую осанку<br/>
                        - организм становится более стойким к негативным воздействиям
                    </p>
                    
                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-silovaja-info */}

                <span className="serv-page-adults-silovaja-img">
                    <img src={silovaja} alt="serv-page-adults-silovaja"/>
                </span>

            </div>
            {/* ./serv-page-adults-silovaja-content */}

        </section>
	)
}