import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import juzzFunk from '@img/services/children/juzzFunk.jpg'
// styles
import "./juzzFunk.scss";


export default function JuzzFunk() {

    return (
        <section className="serv-page-children-juzzFunk">

            <div className="serv-page-children-juzzFunk-website-position-nav">
                <HashLink to="/">Главная</HashLink>
                <p> &gt; </p>
                <HashLink to="/#services">Услуги</HashLink>
                <p> &gt; </p>
                <span>Джаз-фанк</span>
            </div>

            <div className="serv-page-children-juzzFunk-content">
        
                <div className="serv-page-children-juzzFunk-info">
                    <h1>Джаз-фанк (JUZZ FUNK)</h1>
                    <p>
                        Джаз-фанк (JUZZ FUNK) - современный танцевальный стиль, 
                        включающий элементы джазовой хореографии, хип-хопа, 
                        стрип-пластики, эстрадной хореографии и вакинга.
                    </p>
                    <p>
                        Это танец контрастов, где отрывистые, резкие движения 
                        неожиданно сменяются мягкими и плавными, поглощая 
                        внимание зрителей.<br/>
                        Джаз-фанку присущи разнообразие изолированных движений, 
                        волн, импульсов и шагов.  Чёткие ритмичные движения плавно 
                        переходят друг в друга. 
                    </p>
                    <p>
                        <span>
                            Каждый танцор привносит в этот стиль танца свою неповторимую 
                            индивидуальность души, характера и эмоций. 
                        </span>
                    </p>
                    <p>
                        Танец позволяет выражать эмоции, он преисполнен дерзости, 
                        манерности и особенной красоты.<br/>
                        От танцора, который выбрал этот стиль, требуется немало 
                        умений и творческие способности. Нужно уметь импровизировать, 
                        движения должны быть четкими, отточенными.
                    </p>
                    
                    <HashLink to="/#contacts">Записаться на тренировку</HashLink>

                </div>
                {/* ./serv-page-children-juzzFunk-info */}

                <span className="serv-page-children-juzzFunk-img">
                    <img src={juzzFunk} alt="serv-page-children-juzzFunk"/>
                </span>

            </div>
            {/* ./serv-page-children-juzzFunk-content */}

        </section>
	)
}