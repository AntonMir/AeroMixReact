// react
import React from 'react'

// route
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"

// components
import Header from '@components/header/Header.jsx'
import Footer from '@components/footer/Footer.jsx'
import MainPage from '@components/content/mainPage/MainPage.jsx'
import AboutClub from '@components/content/aboutClub/AboutClub.jsx'
import HallOne from '@components/content/halls/hall1/HallOne.jsx'
import HallTwo from '@components/content/halls/hall2/HallTwo.jsx'
import HallThree from '@components/content/halls/hall3/HallThree.jsx'
import Restroom from '@components/content/halls/restroom/Restroom.jsx'
import TimeTable from '@components/content/timetable/TimeTable.jsx'
import PriceTable from '@components/content/pricetable/PriceTable.jsx'
// components (treiners)
import TreinersPage from '@treiners/TreinersPage.jsx'
// components (services-pages-adults)
import Silovaja from '@components/content/services/silovaja/Silovaja.jsx'


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
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route exact path='/aboutclub' component={AboutClub}/>
                        <Route exact path='/hallone' component={HallOne}/>
                        <Route exact path='/halltwo' component={HallTwo}/>
                        <Route exact path='/hallthree' component={HallThree}/>
                        <Route exact path='/restroom' component={Restroom}/>
                        <Route exact path='/timetable' component={TimeTable}/>
                        <Route exact path='/pricetable' component={PriceTable}/>
                        <Route exact path='/treiners/:name' component={TreinersPage}/> 
                        <Route exact path='/services/adults/silovaja' component={Silovaja}/>
                        <Redirect to="/"/>
                    </Switch>
                </section>
                <Footer />
            </Provider>
        </Router>
	)
}