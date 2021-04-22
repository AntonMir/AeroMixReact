import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import joga1 from '@img/services/adults/joga1.jpg'
import joga2 from '@img/services/adults/joga2.jpg'
// styles
import "./joga.scss";


export default function Joga() {

    return (
        <section className="serv-page-adults-joga">

            <div className="serv-page-adults-joga-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Йога</span>
            </div>

            <div className="serv-page-adults-joga-content">
        
                <div className="serv-page-adults-joga-info">
                    <h1>Йога</h1>
                    <p>
                        Наш малоподвижный образ жизни не способствует поддержанию 
                        хорошей физической формы, делая тело зажатым и слабым. 
                        Регулярные занятия йогой Айенгара обеспечивают практикующим 
                        улучшение здоровья и внешности. 
                    </p>
                    <p>
                        <span>Ряд особенностей этого вида йоги: </span>
                        действие позы не только на физическом, но и внутреннем, 
                        физиологическом уровне, выравнивание тела в процессе практики, 
                        использование разнообразных вспомогательных материалов - сделают 
                        практику каждого оптимальной и позволят заниматься йогой всем желающим. 
                    </p>
                    <p>
                        <span>Практика йоги</span>
                        , особенно перевёрнутых поз, усиливает мозговое кровообращение, 
                        способствуя повышению
                        умственной работоспособности и улучшению памяти. 
                        Мозг работает практически без привязки к «биологическим часам», 
                        в любое время суток, креативно и с фантазией, ум становится 
                        острым и напоминает стрелу, направленную точно в цель.
                    </p>
                    
                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-joga-info */}
                
                <span className="serv-page-adults-joga-img-wrapper">
                    <span className="serv-page-adults-joga-img">
                        <img src={joga1} alt="serv-page-adults-joga"/>
                    </span>

                    <span className="serv-page-adults-joga-img">
                        <img src={joga2} alt="serv-page-adults-joga"/>
                    </span>
                </span>

            </div>
            {/* ./serv-page-adults-joga-content */}

        </section>
	)
}