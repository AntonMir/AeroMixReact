import React from 'react'
// SVG
// Link
import { Link } from 'react-router-dom'
// img
import trainingHallBall from '@assets/img/main_trainingHallBall.jpg'
import childrensPerformance from '@assets/img/main_childrensPerformance.jpg'
import tableTennis from '@assets/img/main_tableTennis.jpg'
import insta from '@assets/img/insta.svg'
import vk from '@assets/img/vk.svg'
import facebook from '@assets/img/facebook.svg'
import odnoklasniki from '@assets/img/odnoklasniki.svg'
// styles
import "./main.scss"

// SVG-Animate-Blue-Wave
const wave = () => {
    return (
        <svg width="1920px" height="1600px" className="main-blue-wave">
            <path 
                id="wave"
                stroke="blue"
                strokeWidth="0" 
                fill="url(#waveColor)" 
            />               
            <linearGradient id="waveColor" x1="1438.01" y1="-229.269" x2="-1.46196" y2="193.022" gradientUnits="userSpaceOnUse">
                <stop offset="0.1" stopColor="#00f0e4"/>
                <stop offset="1" stopColor="#1059ad"/>
            </linearGradient>
            <animate 
                xlinkHref="#wave"
                attributeName="d"
                attributeType="XML"
                repeatCount="indefinite"
                dur="3s"
                values=" 
                    M164.011 451.671C333.581 332.069 353.919 292.1 524.49 292.1C693.583 292.1 836.817 379.559 991.111 413.997C1136.13 446.365 1290.91 431.897 1486.12 253.962C1642.7 111.236 1817 35.7859 1931.06 101.257L1964 32.992C1711.33 -112.243 1590.62 267.618 1226.59 292.1C1023.61 305.751 845.19 226.739 685.519 155.748C498.398 72.5523 370.779 2.91898 204.87 101.257C75.2964 178.058 -54.974 199.435 -167.207 101.257C-276.654 5.51695 -441.08 42.1812 -484.998 101.257C-528.915 160.333 -575.882 315.866 -484.998 413.997C-394.113 512.128 -295.42 342.076 -207.465 451.671C-140.369 535.275 86.8376 506.103 164.011 451.671Z;
                    M989 413.5C1202.84 463.561 1354.03 372.553 1480.5 259C1541 209.5 1776.5 -23 1985.5 129.5C2101.59 205.812 2195.84 138.671 2251.32 138.671C2344.8 138.671 2378.41 205.826 2456 183.849L2445 63.5802C2342.97 14.7404 2306.59 80.8549 2264.76 88.0001C2146.84 108.147 2084.57 97.3417 2021.59 59.3069C1831.5 -55.5 1748 13 1586.5 137C1343.33 326.865 1129.09 347.008 762.5 189.5C32 -166.5 459 300.5 -413.5 136C-327.352 280.078 -575.759 377.519 -222 452C207.5 622.5 200.951 291.279 493 292.5C673.851 282.732 822.202 371.986 989 413.5Z
                "
            />     
        </svg>
    )
}


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

            {wave()}
          
		</section>
	)
}
