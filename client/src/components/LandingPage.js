import React from 'react'
import AboutPage from './AboutPage'
import LoginForm from "./LoginForm"

function LandingPage() {
    return (
        <div>
            <div className="page-img">
                <div className="text-box"> {/* add text */}
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Ski with a local.</span> <br />
                        <span className="heading-primary-sub">Ski like a local.</span>
                    </h1>
                    <LoginForm />
                    <a href="/auth/signup" className="btn btn-white btn-animated"> Sign Up </a>
                </div>
            </div>
            <AboutPage />
        </div>
    )
}

export default LandingPage
