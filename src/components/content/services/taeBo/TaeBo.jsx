import React from 'react';
import { Link } from 'react-router-dom'
// img
import taeBo from '@img/services/adults/taeBo.svg'
// styles
import "./taeBo.scss";


export default function TaeBo() {

    return (
        <section className="serv-page-adults-taeBo">

            <div className="serv-page-adults-taeBo-website-position-nav">
                <Link to="/">Главная</Link>
                <p> &gt; </p>
                <Link to="#treiners">Услуги</Link>
                <p> &gt; </p>
                <Link to="#treiners">Взрослые</Link>
                <p> &gt; </p>
                <span>Тай бо (tae bo)</span>
            </div>

            <div className="serv-page-adults-taeBo-content">
        
                <div className="serv-page-adults-taeBo-info">
                    <h1>Тай бо (tae bo)</h1>
                    <p>
                        Тренировка Тай бо (tae bo) – это разновидность аэробики, 
                        в основе которой лежат боевые элементы тайского бокса, тхэквондо, 
                        бокса, каратэ в совокупности с базовыми шагами аэробики, 
                        собранными в связки.
                    </p>
                    <p>
                        <span>Польза от Тай бо: </span><br/>
                        - тренировка всего тела (рук, плечь, спины, живота, ягодиц и ног)<br/>
                        - развитие гибкости, силы, координации<br/>
                        - сердечно-сосудистая выносливость.<br/>
                        Эта аэробная тренировка приведет ваше
                        <span> тело в форму в рекордно короткие сроки.</span>
                    </p>
                    <p>
                        Вы похудеете, укрепите свои мышцы, улучшите осанку и координацию, 
                        избавитесь от лишнего жира и целлюлита, сможете развить выносливость. 
                    </p>
                    <p>
                        Тренировка не требует специального оборудования, интересна 
                        и эффективна, при занятиях происходит эмоциональная разгрузка.
                    </p>
                                        
                    <Link to="#contacts">Записаться на тренировку</Link>

                </div>
                {/* ./serv-page-adults-taeBo-info */}

                <span className="serv-page-adults-taeBo-img">
                    <img src={taeBo} alt="serv-page-adults-taeBo"/>
                </span>

            </div>
            {/* ./serv-page-adults-taeBo-content */}

        </section>
	)
}