import React from 'react';
// Link
import { HashLink } from 'react-router-hash-link';
// img
import trainingHallBall from '@img/mainPage/main/trainingHallBall.webp';
import childrensPerformance from '@img/mainPage/main/childrensPerformance.webp';
import tableTennis from '@img/mainPage/main/tableTennis.webp';
import insta from '@img/mainPage/main/insta.svg';
import vk from '@img/mainPage/main/vk.svg';
import facebook from '@img/mainPage/main/facebook.svg';
import odnoklasniki from '@img/mainPage/main/odnoklasniki.svg';
// styles
import "./main.scss";


function Main() {

    return (
		<section className="main">

            <div className="main-text">
                <h1>Спортивный клуб для активной жизни</h1>
                <p>Совершенствуйтесь вместе с нами. <br/> У нас вы найдете занятие для детей, подростков и взрослых.</p>
                <HashLink className="main-btn" to="/aboutclub#top">ПОДРОБНЕЕ</HashLink>
            </div>
            
            <div className="main-socials">
                <p>Мы в соц. сетях</p>
                <div className="main-socials-items">
                    <a href="https://www.instagram.com/aeromix_khimki/?igshid=ps1jn2xrnkno"><img src={insta} alt="insta"/></a>
                    <a href="https://vk.com/id570697624"><img src={vk} alt="vk"/></a>
                    <a href="https://www.facebook.com/aeromix.aeromix"><img src={facebook} alt="facebook"/></a>
                    <a href="https://ok.ru/profile/573787347062"><img src={odnoklasniki} alt="odnoklasniki"/></a>
                </div>
            </div>
            
            <div className="main-imgs">
                <div className="main-img-wrapper">
                    <img className="main-img main_img1" src={trainingHallBall} alt="img"/>
                </div>
                <div className="main-img-wrapper">
                    <img className="main-img main_img2" src={childrensPerformance} alt="img"/>
                </div>
                <div className="main-img-wrapper">
                    <img className="main-img main_img3" src={tableTennis} alt="img"/>
                </div>
            </div>

            <svg width={`${window.innerWidth}`} className="main-blue-wave">
                <path 
                    id="wave"
                    fill="url(#waveColor)" 
                /> 

                <linearGradient 
                    id="waveColor" 
                    x1="1438.01" 
                    y1="-229.269" 
                    x2="-1.46196" 
                    y2="193.022" 
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.1" stopColor="#00f0e4"/>
                    <stop offset="1" stopColor="#1059ad"/>
                </linearGradient>

                <animate 
                    xlinkHref="#wave"
                    attributeName="d"
                    attributeType="XML"
                    repeatCount="indefinite"
                    dur="5s"
                    values={window.innerWidth > 1440 
                        ? `M155.95 391.627 C329.859 287.925 350.718 253.269 
                        525.653 253.269 C699.073 253.269 845.973 329.101 1004.21 
                        358.962 C1152.94 387.027 1311.69 374.482 1511.89 220.202 
                        C1672.48 96.4491 1851.24 31.0287 1968.22 87.7963L2002 
                        28.6062C1742.87 -97.3219 1619.07 232.042 1245.72 
                        253.269C1037.55 265.105 854.56 196.597 690.803 
                        135.043C498.893 62.9074 368.009 2.53095 197.854 
                        87.7963C64.965 154.387 -68.6391 172.923 -183.744 
                        87.7963C-295.992 4.78355 -464.625 36.5738 -509.667 
                        87.7963C-554.708 139.019 -602.877 273.876 -509.667 
                        358.962C-416.457 444.048 -315.238 296.601 -225.032 
                        391.627C-156.219 464.117 76.8015 438.824 155.95 391.627Z;    
                        
                        M992 356.502C1219 401.002 1368.87 326.683 1497 231.501
                        C1710.5 72.901 1831.5 54.9998 1927 72.9998C1932.95 
                        74.1207 2075.5 104 2136 116.501C2196.5 129.002 2212.76 
                        135.295 2291 116.501L2310.5 39.001C2250 39.0009 2222.71 
                        60.3309 2128 42.501C2085.5 34.5004 1964.28 18 1955.5 
                        13.9999C1849 -34.5 1699.73 55.5 1601.5 127.001C1316.5 
                        334.453 965.5 246.5 766 163.001C190.824 -77.7326 309.5 
                        129.23 -36.9999 150.001C-86.2623 152.954 -140.64 436.84 
                        -18 434.502C218 430.002 243 262.001 486 254.001C698 
                        247.022 842.436 327.182 992 356.502Z`
                        : 1440 >= window.innerWidth && window.innerWidth > 1080 
                            ? `M109.085 292.152C240.212 214.791 255.94 188.938 
                            387.84 188.938C518.598 188.938 629.36 245.508 748.674 
                            267.784C860.813 288.72 980.507 279.362 1131.46 164.269
                            C1252.54 71.9506 1387.33 23.1473 1475.53 65.4957L1501 
                            21.3401C1305.61 -72.6017 1212.27 173.102 930.771 188.938
                            C773.808 197.767 635.835 146.661 512.363 100.742
                            C367.664 46.9287 268.977 1.88808 140.681 65.4957
                            C40.4831 115.172 -60.2538 128.999 -147.043 65.4957
                            C-231.677 3.56851 -358.826 27.2839 -392.787 65.4957
                            C-426.748 103.707 -463.067 204.31 -392.787 267.784
                            C-322.507 331.258 -246.189 221.263 -178.174 292.152
                            C-126.289 346.229 50.5 326.716 109.085 292.152Z;   
                            
                            M739.534 267.434C911.263 300.84 1024.64 245.049 
                            1121.57 173.594C1283.09 54.5315 1374.63 41.0929 
                            1446.88 54.6057C1451.38 55.4472 1559.22 77.8778 
                            1604.99 87.2626C1650.76 96.6475 1663.06 101.371 
                            1722.25 87.2626L1737 29.0824C1691.23 29.0823 1670.59 
                            45.095 1598.94 31.7099C1566.78 25.7037 1475.08 13.3167 
                            1468.44 10.3137C1387.87 -26.0957 1274.94 41.4684 
                            1200.63 95.1452C985.024 250.881 719.487 184.854 
                            568.561 122.171C133.432 -58.5508 223.212 96.8183 
                            -38.9202 112.411C-76.188 114.628 -117.326 327.745 
                            -24.5465 325.989C153.991 322.611 172.904 196.491 
                            356.737 190.485C517.119 185.246 626.387 245.423 
                            739.534 267.434Z`

                            : `M86.4546 214.326C182.596 157.573 194.127 138.607 
                            290.836 138.607C386.708 138.607 467.918 180.107 
                            555.398 196.449C637.618 211.808 725.377 204.943 
                            836.055 120.51C924.832 52.7837 1023.65 16.9811 
                            1088.32 48.0483L1107 15.6553C963.744 -53.2613 
                            895.306 126.989 688.911 138.607C573.826 145.084 
                            472.665 107.592 382.136 73.9052C276.043 34.4274 
                            203.687 1.38511 109.62 48.0483C36.1557 84.4917 
                            -37.7042 94.6354 -101.337 48.0483C-163.391 2.6179 
                            -256.616 20.0157 -281.516 48.0483C-306.416 76.0809 
                            -333.045 149.884 -281.516 196.449C-229.987 243.014 
                            -174.031 162.321 -124.162 214.326C-86.1207 253.997 
                            43.5 239.682 86.4546 214.326Z;   
                            
                            M548.732 196.063C674.459 220.555 757.466 179.652 
                            828.433 127.267C946.682 39.9786 1013.7 30.1264 
                            1066.59 40.033C1069.89 40.6499 1148.84 57.0944 
                            1182.35 63.9748C1215.86 70.8551 1224.86 74.3181 
                            1268.2 63.9748L1279 21.3211C1245.49 21.3211 1230.38 
                            33.0605 1177.92 23.2474C1154.38 18.8441 1087.24 
                            9.76286 1082.38 7.56131C1023.39 -19.1315 940.718 
                            30.4017 886.312 69.7537C728.461 183.928 534.055 
                            135.522 423.559 89.5668C104.991 -42.9253 170.721 
                            70.9803 -21.1924 82.412C-48.477 84.0373 -78.5949 
                            240.279 -10.6691 238.992C120.042 236.515 133.889 
                            144.053 268.478 139.65C385.897 135.809 465.894 
                            179.927 548.732 196.063Z`
                    }
                />     
            </svg>

		</section>
	)
}

export default Main;


