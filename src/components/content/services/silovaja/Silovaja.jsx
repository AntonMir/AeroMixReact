import React from 'react';
import { Link } from 'react-router-dom'
// img
// import silovaja from '@img/services/silovaja.jpg'
// styles
import "./silovaja.scss";


export default function Silovaja() {

    return (
        <section className="serv-page-silovaja">

            <div className="serv-page-silovaja-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Услуги</Link>
                <p> &gt; </p>
                <Link to="#treiners">Взрослые</Link>
                <p> &gt; </p>
                <span>Силовая тренировка</span>
            </div>

            <div className="serv-page-silovaja-content">
        
                <div className="serv-page-silovaja-info">
                    <h1>Силовая тренировка</h1>
                    <p>
                        Силовая тренировка - это комплексное занятие, направленное 
                        на развитие различных групп мышц. 
                    </p>
                    <p>
                        <h3>Объединяет принципиально разные виды нагрузок:</h3>
                        - кардио нагрузки (беговые и прыжковые упражнения)<br/>
                        - занятия с утяжелителями (воздействие на разные группы мышц)<br/>
                        - упражнения с доп. оборудованием (бодибары, кольца, мячи,  и т.п.)
                    </p>
                    <p>
                        <h3>Польза от силовых тренеровок:</h3>
                        - повышается иммунитет<br/>
                        - замедляются процессы старения<br/>
                        - улучшаются физиологические и биохимические процессы в организме <br/>
                        - формирование мышечного корсета и красивой осанки<br/>
                        - организм становится более стойким к негативным воздействиям
                    </p>
                   
                    
                        <Link to="#contacts">Записаться на тренировку</Link>
                </div>
                {/* ./serv-page-silovaja-info */}

                {/* <span className="serv-page-silovaja-img">
                    <img src={silovaja} alt="serv-page-silovaja"/>
                </span> */}

            </div>
            {/* ./serv-page-silovaja-content */}

        </section>
	)
}