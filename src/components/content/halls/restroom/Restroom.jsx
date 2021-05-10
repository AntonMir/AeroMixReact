import React from 'react';
// HashLink
import { HashLink } from 'react-router-hash-link';
// img
import mainImg from '@img/halls/restroom/main.webp'
//components
import OtherHalls from './otherHalls/OtherHalls.jsx';
import Gallery from './gallery/Gallery.jsx';
// styles
import "./restroom.scss";


function Restroom() {

    return (
        <section className="restroom">

            <div className="restroom-main-content">

                <div className="restroom-content-wrapper">

                    <div className="restroom-website-position-nav">
                        <HashLink to="/">Главная</HashLink>
                        <p> &gt; </p>
                        <HashLink to="/#halls">Залы и оборудование</HashLink>
                        <p> &gt; </p>
                        <span>Комната отдыха</span>
                    </div>

                    <div className="restroom-info">
                        <h1>Комната отдыха</h1>
                        <p className="restroom-info-bold-p">Наша комната отдыха это:</p>
                        <p>- фитнес кафе</p>
                        <p>- спокойное уютное место с удобными диванами для родителей, 
                            ожидающих своих детей;</p>
                        <p>- возможности для детей играть в разные настольные игры до 
                            занятия или после;</p>
                        <p>- семейная атмосфера малышам, которые пока не занимаются у нас, 
                            а ждут своих братиков или сестричек вместе с мамами</p>
                        <p>- отличное место для празднования дней рождения детей и 
                            любимых праздников!</p>
                        <p>- проецируемые на большой экран тренеровки детей</p>
                        <p className="restroom-info-bold-p">Есть все, что нужно для комфортного отдыха</p>
                        
                    </div>
                    {/* ./hall-two-info */}

                </div>
                {/* hall-two-content-wrapper */}
                <div className="restroom-main-img">
                    <img src={mainImg} alt="Комната отдыха"/>
                </div>
            </div>
            {/* hall-two-main-content */}

            <Gallery />
            <OtherHalls />

        </section>
	)
}

export default Restroom;


