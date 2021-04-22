import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import ofp1 from '@img/services/children/ofp1.jpg'
import ofp2 from '@img/services/children/ofp2.jpg'
// styles
import "./ofp.scss";


export default function Ofp() {

    return (
        <section className="serv-page-children-ofp">

            <div className="serv-page-children-ofp-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>ОФП</span>
            </div>

            <div className="serv-page-children-ofp-content">
        
                <div className="serv-page-children-ofp-info">
                    <h1>Общефизическая подготовка (ОФП)</h1>
                    <p>
                        Общая физическая подготовка (ОФП) включает несложные, 
                        но эффективные, упражнения на развитие координации, 
                        баланса, силы, гибкости и ловкости. 
                    </p>
                    <p>
                        Упражнения доступны для детей различного телосложения 
                        и разного уровня подготовленности.
                    </p> 
                    <p>
                        <span>Основная цель ОФП: </span><br/>
                        - укрепление здоровья<br/>
                        - формирование мышечного корсета<br/>
                        - формирование правильной осанки<br/>
                        - повышение иммунитета<br/>
                        ОФП обязательна для профессиональных спортсменов.<br/>
                        Незаменима она и для приверженцев здорового 
                        образа жизни.
                    </p>
                    <p>
                        <span>ОФП положительно влияет </span>
                        на развитие организма в целом, повышает иммунитет и дарит 
                        радость и удовольствие от занятий спортом.
                    </p>
                    
                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-children-ofp-info */}
                
                <span className="serv-page-children-ofp-img-wrapper">
                    <span className="serv-page-children-ofp-img">
                        <img src={ofp1} alt="serv-page-children-ofp"/>
                    </span>

                    <span className="serv-page-children-ofp-img">
                        <img src={ofp2} alt="serv-page-children-ofp"/>
                    </span>
                </span>

            </div>
            {/* ./serv-page-children-ofp-content */}

        </section>
	)
}