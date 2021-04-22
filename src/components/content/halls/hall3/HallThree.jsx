import React from 'react';
// HashLink
import { HashLink } from 'react-router-hash-link';
// img
import mainImg from '@img/halls/hall3/main.jpg'
//components
import OtherHalls from './otherHalls/OtherHalls.jsx';
import Gallery from './gallery/Gallery.jsx';
// styles
import "./hallThree.scss";


function HallThree() {

    return (
        <section className="hall-three">

            <div className="hall-three-main-content">

                <div className="hall-three-content-wrapper">

                    <div className="hall-three-website-position-nav">
                        <HashLink to="/">Главная</HashLink>
                        <p> &gt; </p>
                        <HashLink to="/#halls">Залы и оборудование</HashLink>
                        <p> &gt; </p>
                        <span>Зал №3</span>
                    </div>

                    <div className="hall-three-info">
                        <h1>Зал №3</h1>
                        <p>
                            Зал № 3 – самый большой по площади. 
                        </p>
                        <p>
                            В нем тренируется сборная команда, проходит постановка 
                            и отработка аэробных и показательных программ. 
                        </p>
                        <p>
                            Также зал используется для проведения праздников и 
                            развлекательных мероприятий для детей.   
                        </p>
                    </div>
                    {/* ./hall-two-info */}

                </div>
                {/* hall-two-content-wrapper */}
                <div className="hall-three-main-img">
                    <img src={mainImg} alt="Зал №3"/>
                </div>
            </div>
            {/* hall-two-main-content */}

            <Gallery />
            <OtherHalls />

        </section>
	)
}

export default HallThree;


