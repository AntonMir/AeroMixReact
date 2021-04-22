import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import tableTennis1 from '@img/services/adults/tableTennis1.jpg'
import tableTennis2 from '@img/services/adults/tableTennis2.jpg'
import tableRobot from '@img/services/adults/tableRobot.jpg'
// styles
import "./tableTennis.scss";


export default function TableTennis() {

    return (
        <section className="serv-page-adults-tableTennis">

            <div className="serv-page-adults-tableTennis-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Настольный теннис</span>
            </div>

            <div className="serv-page-adults-tableTennis-content">
        
                <div className="serv-page-adults-tableTennis-info">
                    <h1>Настольный теннис</h1>
                    <p>
                        Настольный теннис - олимпийский вид спорта, спортивная 
                        игра с мячом, в которой используют специальные ракетки 
                        и игровой стол, разграниченный сеткой пополам. 
                    </p>
                    <p>
                        Игра может проходить между двумя соперниками или двумя 
                        парами соперников.
                    </p>
                    <p>
                        <span>Задача игроков: </span>
                        удерживать мяч в игре при помощи ракеток — каждый игрок 
                        после одного отскока мяча на своей половине стола должен 
                        отправить мяч на половину стола соперника. 
                        Очко начисляется игроку или паре игроков, когда соперник 
                        не может вернуть мяч в соответствии с правилами. 
                        Каждая партия продолжается до 11 очков, матч состоит из 
                        нечётного количества партий, и играется на большинство 
                        побед в партиях.
                    </p>
                    <p>
                        <span>Польза от настольного тенниса:</span><br/>
                        - энергичная игра, которая позволяет всегда быть в тонусе 
                        и держать себя в форме<br/>
                        - улучшается дыхательная и сердечнососудистая система<br/>
                        - развивается внимательность, координация и реакция<br/>
                        - снимается усталость глаз и  улучшается зрения<br/>
                        - постепенное улучшается кровообращения что позволяет 
                        стабилизировать артериальное давление
                    </p>
                    <p>
                        Регулярные игры в настольный теннис способствуют улучшению 
                        здоровья в целом, а также позволяют поддерживать себя 
                        в форме и получать множество положительных эмоций 
                        во время игры.
                    </p>
                    <p>
                        На 2017 год настольный теннис входил в число самых популярных 
                        видов спорта на планете и имел более 850 миллионов поклонников. 
                        Международной федерации настольного тенниса состояло 226 стран. 
                    </p>
                    
                </div>
                {/* ./serv-page-adults-tableTennis-info */}
                
                <span className="serv-page-adults-tableTennis-img-wrapper">
                    <span className="serv-page-adults-tableTennis-img">
                        <img src={tableTennis1} alt="serv-page-adults-tableTennis"/>
                    </span>

                    <span className="serv-page-adults-tableTennis-img">
                        <img src={tableTennis2} alt="serv-page-adults-tableTennis"/>
                    </span>
                </span>

            </div>
            {/* ./serv-page-adults-tableTennis-content */}


            <div className="serv-page-adults-tableTennis-robot-content">

                                
                <span className="serv-page-adults-tableTennis-robot-img">
                    <img src={tableRobot} alt="serv-page-adults-tableTennis-robot"/>
                </span>

                <div className="serv-page-adults-tableTennis-robot-info">
                    <h1>Робот</h1>
                    <p>
                        Робот может применяться для игры или обучения детьми и 
                        взрослыми любого возраста и способностей, любого уровня 
                        подготовки.
                    </p>
                    <p>
                        <span>Тренируясь с роботом, </span>
                        можно развивать внимание, научиться наблюдать за 
                        траекторией полёта мяча, определять вид вращения мяча, 
                        разбираться в особенностях различных видов ударов.
                    </p>
                    <p>
                        <span>В нашем клубе мы предлагаем: </span>
                        индивидуальные тренировки с профессиональным тренером, 
                        почасовую аренду теннисных столов и самообучение или 
                        полноценная игра с роботом!
                    </p>
                    
                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-adults-tableTennis-robot-info */}

            </div>
            {/* ./serv-page-adults-tableTennis-robot-content */}


        </section>
	)
}