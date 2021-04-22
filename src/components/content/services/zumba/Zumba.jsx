import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import zumba from '@img/services/adults/zumba.svg'
// styles
import "./zumba.scss";


export default function Zumba() {

    return (
        <section className="serv-page-adults-zumba">

            <div className="serv-page-adults-zumba-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Зумба</span>
            </div>

            <div className="serv-page-adults-zumba-content">
        
                <div className="serv-page-adults-zumba-info">
                    <h1>Зумба</h1>
                    <p>
                        Зумба - это фитнес-вечеринка, где зажигательные 
                        латиноамериканские ритмы сочетаются с простой хореографией, 
                        что позволяет обеспечить эффективную тренировку всего тела. 
                    </p>
                    <p>
                        <span>Зумба - это интервальная тренировка</span>
                        , в которой чередуются 
                        <span> танцевальные движения высокой и низкой интенсивности. </span>
                        Таким образом, в процессе не требуется отдых, и вы можете 
                        двигаться на высоком пульсе все 40–50 минут занятия. 
                    </p>
                    <p>
                        <span>Польза от зумбы: </span><br/>
                        - отлично прокачивается сердечно сосудистая система<br/>
                        - повышается выносливость организма<br/>
                        - укрепляются мышцы тела<br/>
                        - многие танцевальные шаги и движения задействуют пресс<br/>
                        - прыжки и выпады укрепляют бёдра и ягодицы<br/>
                        - прокачивается гибкость и координация<br/>
                        -  тело становится более пластичным и послушным
                    </p>
                    <p>
                        <span>
                            Занятие проходит под ритмы сальсы, румбы, меренге, 
                            фламенко и других направлений.
                        </span>
                    </p>
                                        
                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-zumba-info */}

                <span className="serv-page-adults-zumba-img">
                    <img src={zumba} alt="serv-page-adults-zumba"/>
                </span>

            </div>
            {/* ./serv-page-adults-zumba-content */}

        </section>
	)
}