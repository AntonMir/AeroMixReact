import React from 'react';
// HashLink
import { HashLink } from 'react-router-hash-link';
// img
import mainImg from '@img/halls/hall1/main2.jpg'
//components
import OtherHalls from './otherHalls/OtherHalls.jsx';
import Gallery from './gallery/Gallery.jsx';
// styles
import "./hallOne.scss";


function HallOne() {

    return (
        <section className="hall-one">

            <div className="hall-one-main-content">

                <div className="hall-one-content-wrapper">

                    <div className="hall-one-website-position-nav">
                        <HashLink to="/">Главная</HashLink>
                        <p> &gt; </p>
                        <HashLink to="/#halls">Залы и оборудование</HashLink>
                        <p> &gt; </p>
                        <span>Зал №1</span>
                    </div>

                    <div className="hall-one-info">
                        <h1>Зал №1</h1>
                        <p>
                            Предназначен для занятий хореографией, йогой, акробатикой. 
                            В зале есть хореографический станок, светодиодная подсветка 
                            зеркал и разнообразные вспомогательные материалы 
                            для йоги Айенгара - мягкие валики, деревянные бруски, 
                            подставки разной высоты и формы, одеяла, стулья, ремни и 
                            веревки - которые позволяют с самого начала правильно расположить 
                            тело в пространстве.
                        </p>
                        <p>
                            Сочетания вспомогательных материалов позволяют учитывать 
                            индивидуальные особенности строения тела и степень его подготовленности. 
                        </p>
                        <p>
                            В зале есть большие ролл маты – быстро раскладывающиеся, 
                            экологичные, удобные, легкие, скручивающиеся в рулоны маты, 
                            предназначены для художественной и спортивной гимнастики, 
                            фитнеса, йоги, акробатики и аэробики.
                        </p>
                    </div>
                    {/* ./hall-one-info */}

                </div>
                {/* hall-one-content-wrapper */}
                <div className="hall-one-main-img">
                    <img src={mainImg} alt="Зал №1"/>
                </div>
            </div>
            {/* hall-one-main-content */}

            <Gallery />
            <OtherHalls />

        </section>
	)
}

export default HallOne;


