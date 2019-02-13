import React from 'react'
import NavBar from './NavBar';
import Header from './Header';
import AboutPage from './AboutPage';
import {Route} from "react-router-dom"
import LandingInfo from './LandingInfo'
import ResortsPage from './ResortsPage'
import GuidesPage from './GuidesPage'
import BookingPage from './BookingPage'

const MainView = () => {
    return (
        <div>
            <Route exact path="/" component={LandingInfo} />
            <Route path="/resorts" component={ResortsPage} />
            <Route path="/guides" component={GuidesPage} />
            <Route path="/booking" component={BookingPage} />
        </div>
    )
}

export default MainView
