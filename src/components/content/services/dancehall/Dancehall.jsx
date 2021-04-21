import React from 'react';
import { Link } from 'react-router-dom'
// img
import dancehall from '@img/services/adults/dancehall.jpg'
// styles
import "./dancehall.scss";


export default function Dancehall() {

    return (
        <section className="serv-page-adults-dancehall">

            <div className="serv-page-adults-dancehall-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Услуги</Link>
                <p> &gt; </p>
                <Link to="#treiners">Дети</Link>
                <p>/</p>
                <Link to="#treiners">Взрослые</Link>
                <p> &gt; </p>
                <span>Дэнсхолл</span>
            </div>

            <div className="serv-page-adults-dancehall-content">
        
                <div className="serv-page-adults-dancehall-info">
                    <h1>Дэнсхолл</h1>
                    <p>
                        Дэнсхолл - это динамичный танец, который показывает свободу 
                        и раскрепощённость любого, кто его исполняет. 
                        Этнические движения африканских переселенцев стали основой 
                        для популярного танца. 
                    </p>
                    <p>
                        <span>Отличие от других танцевальных стилей: </span>
                        техничные движения бедрами и ягодицами. 
                        Дэнсхолл считается отражением культуры Ямайки и ее 
                        народным сокровищем. 
                        Первоначально танец наделялся магическим значением, при 
                        помощи которого задабривали природные стихии.
                    </p>
                    <p>
                        На первый взгляд движения могут показаться 
                        неразборчивыми и хаотическими, но на самом деле –
                        <span> это взвешенные и четко налаженные связки.</span>
                    </p>
                    
                    <Link to="#contacts">Записаться на тренировку</Link>

                </div>
                {/* ./serv-page-adults-dancehall-info */}

                <span className="serv-page-adults-dancehall-img">
                    <img src={dancehall} alt="serv-page-adults-dancehall"/>
                </span>

            </div>
            {/* ./serv-page-adults-dancehall-content */}

        </section>
	)
}