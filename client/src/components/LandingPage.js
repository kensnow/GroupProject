import React from 'react'
import AboutPage from './AboutPage'
import LoginForm from "./LoginForm"
import { withDataHandler } from "../DataHandler"
import SignUp from './SignUp';

function LandingPage(props) {
    return (
        <div>
            <div className="page-img">
                <div className="text-box"> {/* add text */}
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Ski with a local.</span> <br />
                        <span className="heading-primary-sub">Ski like a local.</span>
                    </h1>
                </div>
            </div>
            {props.showLoginForm ? <LoginForm /> : <SignUp />}
            <button onClick={props.toggleLoginForm} className="btn btn-white btn-animated"> {props.showLoginForm ? "Sign Up" : "Login"} </button>
            <AboutPage />
        </div>
    )
}

export default withDataHandler(LandingPage)
