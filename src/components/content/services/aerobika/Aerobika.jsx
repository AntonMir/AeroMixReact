import React from 'react';
import { Link } from 'react-router-dom'
// img
import aerobika1 from '@img/services/children/aerobika1.jpg'
import aerobika2 from '@img/services/children/aerobika2.jpg'
// styles
import "./aerobika.scss";


export default function Aerobika() {

    return (
        <section className="serv-page-children-aerobika">

            <div className="serv-page-children-aerobika-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Услуги</Link>
                <p> &gt; </p>
                <Link to="#treiners">Дети</Link>
                <p> &gt; </p>
                <span>Спортивная аэробика</span>
            </div>

            <div className="serv-page-children-aerobika-content">
        
                <div className="serv-page-children-aerobika-info">
                    <h1>Спортивная аэробика</h1>
                    <p>
                        Спортивная аэробика - это сложный и эмоциональный вид 
                        спорта, в котором спортсмены выполняют под музыку комплекс 
                        упражнений с высокой интенсивностью и сложно координированными 
                        элементами на силу, гибкость, ловкость и выносливость из 
                        структурных групп (А, В, С, D).
                    </p>
                    <p>
                        Большое внимание уделяется хореографии, а в программах 
                        смешанных пар, троек и групп взаимодействию между партнерами. 
                        В спортивной аэробике используются элементы из спортивной и художественной гимнастики и акробатики. 
                    </p> 
                    <p>
                        <span>Соревнования проводятся по нескольким номинациям: </span><br/>
                        - танцевальная гимнастика (Aerodance)<br/>
                        - гимнастическая платформа (Aerostep)<br/>
                        - индивидуальные (отдельно для мужчин и женщин)<br/>
                        - смешанные пары<br/>
                        - трио<br/>
                        - группы
                    </p>
                    <p>
                        <span>Соревновательная программа </span>
                        представляет собой композицию 
                        из различных по сложности и содержанию движений и 
                        элементов, выполняемых с высокой интенсивностью 
                        под музыку. 
                    </p>
                    
                    <Link to="#contacts">Записаться на тренировку</Link>

                </div>
                {/* ./serv-page-children-aerobika-info */}
                
                <span className="serv-page-children-aerobika-img-wrapper">
                    <span className="serv-page-children-aerobika-img">
                        <img src={aerobika1} alt="serv-page-children-aerobika"/>
                    </span>

                    <span className="serv-page-children-aerobika-img">
                        <img src={aerobika2} alt="serv-page-children-aerobika"/>
                    </span>
                </span>

            </div>
            {/* ./serv-page-children-aerobika-content */}

        </section>
	)
}