// react
import React, { Component } from 'react'

// route
import { BrowserRouter as Router, Route } from "react-router-dom"

// components
import Header from '@components/header/Header.jsx'
import Footer from "@components/footer/Footer.jsx"
import Content from '@components/content/Content.jsx'
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
                <div className='content'>
                     <Route exact path='/' component={Content}/>
                     <Route exact path='/test' component={Content}/>
                </div>
                <Footer />
            </Provider>
        </Router>
	)
}