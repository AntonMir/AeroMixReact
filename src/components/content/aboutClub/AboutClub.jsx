import React from 'react';
import { Link } from 'react-router-dom'
// img
import competition from '@img/aboutClub/competition.jpg';
import training from '@img/aboutClub/training.jpg';
import children from '@img/aboutClub/children.jpg';

// styles
import "./aboutClub.scss";


function AboutClub() {

    return (
        <section className="about-club">

            <div className="website-position-nav">
                <Link>Главная</Link>
                <p> &gt; </p>
                <Link>О клубе</Link>
            </div>

            <div className="about-club-content">

                <div className="about-club-info">
                    <h1>Спортивный клуб «Аэромикс»</h1>
                    
                    <img className="about-club-children-img" src={children} alt="children"/>

                    <p>
                        Спортивный клуб «Аэромикс» был создан людьми, 
                        которые с середины 90-х годов активно занимались 
                        развитием и популяризацией детской спортивной 
                        аэробики в России.
                    </p>
                    <p>
                        В клубе работают профессионалы высокого уровня, 
                        имеющие 25-ти летний стаж тренерской работы в детской спортивной аэробике. 
                        За период профессиональной деятельности наши воспитанники становились 
                        победителями и призерами региональных, межрегиональных, 
                        всероссийских и международных соревнований.
                    </p>
                    <p>
                        Лучшие спортсмены входили и входят в состав сборной команды 
                        Московской области по спортивной аэробике. 
                        Среди спортсменов - 16 мастеров спорта, 
                        более 35-ти кандидатов в мастера спорта, 
                        более 100 человек с 1, 2 и 3 взрослыми разрядами по спортивной аэробике.
                    </p>
                </div>

                <img className="about-club-img-competition" src={competition} alt="competition"/>

                <img className="about-club-img-training" src={training} alt="training"/>

                <div className="about-club-act-list">
                    <p>
                    В клубе проводятся спортивные занятия для различных возрастных категорий детей: <br/> 
                        2 – 3 года: Развивающая гимнастика<br/>
                        3 – 5 года: Общая физическая подготовка<br/>
                        6 - 17 лет: Спортивная аэробика<br/>
                    Для подростков с 9-ти до 16-ти лет есть разнообразные танцевальные направления 
                        (дэнсхолл, джаз-фанк, зумба).

                    </p>
                    <p>
                        Для взрослых предлагаются занятия оздоровительной аэробикой, 
                        включающие силовые тренировки, стретчинг, пилатес, йогу, бачату, 
                        зумбу, тай бо, дэнсхолл. 
                    </p>
                </div>

            </div>
            {/* ./about-club-content */}
            
        </section>
	)
}

export default AboutClub;


