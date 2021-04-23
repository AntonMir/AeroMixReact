// react
import React from 'react'
// Link
import { HashLink } from 'react-router-hash-link';
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
import Stretching from '@components/content/services/stretching/Stretching.jsx'
import Pilates from '@components/content/services/pilates/Pilates.jsx'
import Joga from '@components/content/services/joga/Joga.jsx'
import Bachata from '@components/content/services/bachata/Bachata.jsx'
import Zumba from '@components/content/services/zumba/Zumba.jsx'
import Dancehall from '@components/content/services/dancehall/Dancehall.jsx'
import TaeBo from '@components/content/services/taeBo/TaeBo.jsx'
// components (services-pages-children)
import Aerobika from '@components/content/services/aerobika/Aerobika.jsx'
import Ofp from '@components/content/services/OFP/Ofp.jsx'
import Gimnastika from '@components/content/services/gimnastika/Gimnastika.jsx'
import JuzzFunk from '@components/content/services/juzzFunk/JuzzFunk.jsx'
import TableTennis from '@components/content/services/tableTennis/TableTennis.jsx'

//img
import arrowToTop from '@img/arrowToTop/arrowToTop.svg'

// styles
import './app.scss'

// redux
import { Provider } from 'react-redux'
import { store } from '@store/store.js'
import { closeHeader } from '@store/actions.js'


function closeHeaderNav() {
    store.dispatch(closeHeader(true))
}

export default function App() {

    return (
        <Router>
            <Provider store={store}>
                <section className="app">
                    <Header />
                    <section className="content" onClick={closeHeaderNav}>
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
                            <Route exact path='/services/adults/stretching' component={Stretching}/>
                            <Route exact path='/services/adults/pilates' component={Pilates}/>
                            <Route exact path='/services/adults/joga' component={Joga}/>
                            <Route exact path='/services/adults/bachata' component={Bachata}/>
                            <Route exact path='/services/adults/zumba' component={Zumba}/>
                            <Route exact path='/services/all/dancehall' component={Dancehall}/>
                            <Route exact path='/services/adults/taebo' component={TaeBo}/>
                            <Route exact path='/services/children/aerobika' component={Aerobika}/>
                            <Route exact path='/services/children/ofp' component={Ofp}/>
                            <Route exact path='/services/children/gimnastika' component={Gimnastika}/>
                            <Route exact path='/services/children/juzzfunk' component={JuzzFunk}/>
                            <Route exact path='/services/adults/tableTennis' component={TableTennis}/>
                            <Redirect to="/"/>
                        </Switch>
                        <Footer />
                    </section>

                    <HashLink 
                        smooth 
                        className="arrow-to-top"
                        to="#top"
                    >
                        <img src={arrowToTop} alt="Стрелка вверх"/>
                    </HashLink>

                </section>
            </Provider>
        </Router>
	)
}

    