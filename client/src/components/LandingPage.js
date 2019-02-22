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
                    {props.showLoginForm ? <LoginForm /> : <SignUp />}
                    <button onClick={props.toggleLoginForm} className="signUpToggler-btn"> {props.showLoginForm ? "Sign Up" : "Already a User"} </button>
                </div>
            </div>

            <AboutPage />
        </div>
    )
}

export default withDataHandler(LandingPage)
