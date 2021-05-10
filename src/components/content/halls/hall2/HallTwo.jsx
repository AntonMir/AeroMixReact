import React from 'react';
// HashLink
import { HashLink } from 'react-router-hash-link';
// img
import mainImg from '@img/halls/hall2/main.webp'
//components
import OtherHalls from './otherHalls/OtherHalls.jsx';
import Gallery from './gallery/Gallery.jsx';
// styles
import "./hallTwo.scss";


function HallTwo() {

    return (
        <section className="hall-two">

            <div className="hall-two-main-content">

                <div className="hall-two-content-wrapper">

                    <div className="hall-two-website-position-nav">
                        <HashLink to="/">Главная</HashLink>
                        <p> &gt; </p>
                        <HashLink to="/#halls">Залы и оборудование</HashLink>
                        <p> &gt; </p>
                        <span>Зал №2</span>
                    </div>

                    <div className="hall-two-info">
                        <h1>Зал №2</h1>
                        <p>
                            Предназначен, в большей степени, для силовых тренировок. 
                        </p>
                        <p>
                            В зале установлены шведские стенки с разнообразными навесами, 
                            позволяющими прокачивать различные мышцы. 
                        </p>
                        <p>
                            Имеются наборы гантелей разных весов, резина разной плотности, 
                            бодибары, изотонические кольца, фитболы, резиновые валики, 
                            утяжелители для ног и рук, акробатические маты. 
                        </p>
                        <p>
                            Оборудование используется для тренировок как детей, так и взрослых. 
                        </p>
                    </div>
                    {/* ./hall-two-info */}

                </div>
                {/* hall-two-content-wrapper */}
                <div className="hall-two-main-img">
                    <img src={mainImg} alt="Зал №2"/>
                </div>
            </div>
            {/* hall-two-main-content */}

            <Gallery />
            <OtherHalls />

        </section>
	)
}

export default HallTwo;


