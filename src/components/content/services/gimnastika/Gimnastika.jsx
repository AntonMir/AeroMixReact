import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import gimnastika1 from '@img/services/children/gimnastika1.jpg'
import gimnastika2 from '@img/services/children/gimnastika2.jpg'
// styles
import "./gimnastika.scss";


export default function Gimnastika() {

    return (
        <section className="serv-page-children-gimnastika">

            <div className="serv-page-children-gimnastika-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Детская гимнастика</span>
            </div>

            <div className="serv-page-children-gimnastika-content">
        
                <div className="serv-page-children-gimnastika-info">
                    <h1>Развивающая гимнастика для малышей</h1>
                    <p>
                        Развивающая гимнастика несет исключительно оздоровительную 
                        функцию, направлена на укрепление здоровья детей, 
                        доступна для детей любого телосложения и физического 
                        подготовки, и  дарит радость и удовольствие от занятий спортом.
                    </p>
                    <p>
                        Занятия развивающей гимнастикой особо важны в детском возрасте, 
                        поскольку способствуют правильному гармоничному физическому 
                        и психологическому развитию подрастающего организма. 
                    </p> 
                    <p>
                        <span>Гимнастика способствует: </span><br/>
                        - формированию мышечного корсета<br/>
                        - правильной осанки<br/>
                        -  координации<br/>
                        -  выносливости ребенка<br/>
                        - гибкости ребенка <br/>
                        - развитию  моральных качеств, таких  как сила воли, трудолюбие, целеустремленность, самоанализ, уверенность и стрессоустойчивость.

                    </p>
                    <p>
                        Еще одним важным преимуществом занятий для детей является 
                        возможность обеспечения <span>качественного раннего физического
                        развития ребенка</span>, начиная с его первых устойчивых шагов. 
                        Врачи активно рекомендуют занятия гимнастикой и 
                        отмечают ее положительное влияние на здоровье детей.
                    </p>
                    
                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-children-gimnastika-info */}
                
                <span className="serv-page-children-gimnastika-img-wrapper">
                    <span className="serv-page-children-gimnastika-img">
                        <img src={gimnastika1} alt="serv-page-children-gimnastika"/>
                    </span>

                    <span className="serv-page-children-gimnastika-img">
                        <img src={gimnastika2} alt="serv-page-children-gimnastika"/>
                    </span>
                </span>

            </div>
            {/* ./serv-page-children-gimnastika-content */}

        </section>
	)
}