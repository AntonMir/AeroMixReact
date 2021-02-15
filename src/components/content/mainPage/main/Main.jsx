import React from 'react'
// Link
import { Link } from 'react-router-dom'
// img
import trainingHallBall from '@assets/img/main_trainingHallBall.jpg'
import childrensPerformance from '@assets/img/main_childrensPerformance.jpg'
import tableTennis from '@assets/img/main_tableTennis.jpg'
import blueWave from '@assets/img/mainBlueWave.svg'
import insta from '@assets/img/insta.svg'
import vk from '@assets/img/vk.svg'
import facebook from '@assets/img/facebook.svg'
import odnoklasniki from '@assets/img/odnoklasniki.svg'
//styles
import "./main.scss"

export default function Main(props) {

    return (
		<section className="main">


                <div className="main-text">
                    <h1>Спортивный клуб для активной жизни</h1>
                    <p>Совершенствуйтесь вмест с нами. <br/> У нас вы найдете занятие для детей, подростков и взрослых.</p>
                    <Link className="main-btn" to="/">ПОДРОБНЕЕ</Link>
                </div>
                
                <div className="main-socials">
                    <p>Мы в соц. сетях</p>
                    <div className="main-socials-items">
                        <Link to="/"><img src={insta} alt="insta"/></Link>
                        <Link to="/"><img src={vk} alt="vk"/></Link>
                        <Link to="/"><img src={facebook} alt="facebook"/></Link>
                        <Link to="/"><img src={odnoklasniki} alt="odnoklasniki"/></Link>
                    </div>
                </div>
                

            <div className="main-imgs">
                <div className="main-img-wrapper"><img className="main-img main_img1" src={trainingHallBall} alt="img"/></div>
                <div className="main-img-wrapper"><img className="main-img main_img2" src={childrensPerformance} alt="img"/></div>
                <div className="main-img-wrapper"><img className="main-img main_img3" src={tableTennis} alt="img"/></div>
            </div>

            <img className="main-blue-wave" src={blueWave} alt="Wave"/>


		</section>
	)
}
