import React from 'react'
import { Route, Switch } from "react-router-dom"
import LandingPage from './LandingPage'
import ResortsPage from './ResortsPage'
import GuidesPage from './GuidesPage'
import BookingPage from './BookingPage'
import SignUp from './SignUp'
import EditProfileForm from './EditProfileForm';
import ProfilePage from './ProfilePage';
import ProtectedRoute from "./ProtectedRoute"

const MainView = (props) => {

    return (
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <ProtectedRoute path="/resorts" component={ResortsPage} />
                <ProtectedRoute path="/guides" component={GuidesPage} />
                <ProtectedRoute path="/booking" component={BookingPage} />
                <Route path="/auth/signup" component={SignUp} />
                <Route path="/profile" component={EditProfileForm} />
                <ProtectedRoute path="/myprofile" component={ProfilePage} />
            </Switch>
        </div>
    )
}

export default MainView
