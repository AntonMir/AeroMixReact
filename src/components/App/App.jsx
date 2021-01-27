// react
import React, { Component } from 'react'

// route
import { BrowserRouter as Router, Route } from "react-router-dom"

// components
import Header from '../header/header.jsx'
import Footer from "../footer/footer"
import Content from "../content/content"
// import Content from './content/Content.jsx'

// styles
import './app.scss'

// redux
import { Provider } from 'react-redux'
import { store } from '../../store/store.js'


export default function App() {
	return (
        <Router>
            <Provider store={store}>
                <Header />
                <div>
                     <Route exact path='/' component={Content}/>
                     <Route exact path='/test' component={Content}/>
                </div>
                <Footer />
            </Provider>
        </Router>
	)
}