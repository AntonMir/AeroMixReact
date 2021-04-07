// react
import React from 'react'

// route
import { BrowserRouter as Router, Route } from "react-router-dom"

// components
import Header from '@components/header/Header.jsx'
import Footer from '@components/footer/Footer.jsx'
import MainPage from '@components/content/mainPage/MainPage.jsx'
import AboutClub from '@components/content/aboutClub/AboutClub.jsx'
import HallOne from '@components/content/halls/hall1/HallOne.jsx'
import HallTwo from '@components/content/halls/hall2/HallTwo.jsx'
import HallThree from '@components/content/halls/hall3/HallThree.jsx'
import Restroom from '@components/content/halls/restroom/Restroom.jsx'


// import Content from './content/Content.jsx'

// styles
import './app.scss'

// redux
import { Provider } from 'react-redux'
import { store } from '@store/store.js'



export default function App() {
    
	return (
        <Router>
            <Provider store={store}>
                <Header />
                <section className="content">
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/aboutclub' component={AboutClub}/>
                    <Route exact path='/hallone' component={HallOne}/>
                    <Route exact path='/halltwo' component={HallTwo}/>
                    <Route exact path='/hallthree' component={HallThree}/>
                    <Route exact path='/restroom' component={Restroom}/>
                </section>
                <Footer />
            </Provider>
        </Router>
	)
}