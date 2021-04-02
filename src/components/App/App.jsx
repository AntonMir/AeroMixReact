// react
import React from 'react'

// route
import { BrowserRouter as Router, Route } from "react-router-dom"

// components
import Header from '@components/header/Header.jsx'
import Footer from '@components/footer/Footer.jsx'
import MainPage from '@components/content/mainPage/MainPage.jsx'
import AboutClub from '../content/aboutClub/AboutClub'

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
                    {/* <p>Content</p> */}
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/aboutclub' component={AboutClub}/>
                </section>
                <Footer />
            </Provider>
        </Router>
	)
}