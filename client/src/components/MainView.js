import React from 'react'
import { Route } from "react-router-dom"
import LandingPage from './LandingPage'
import ResortsPage from './ResortsPage'
import GuidesPage from './GuidesPage'
import BookingPage from './BookingPage'
import SignUp from './SignUp'

const MainView = () => {
    return (
        <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/resorts" component={ResortsPage} />
            <Route path="/guides" component={GuidesPage} />
            <Route path="/booking" component={BookingPage} />
            <Route path="/auth/signup" component={SignUp} />
        </div>
    )
}

export default MainView
