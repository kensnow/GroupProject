import React from 'react'
import AboutPage from './AboutPage'

function LandingPage() {
    return (
        <div>
            <header className="page-img">
                <div className="text-box"> {/* add text */}
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Ski with a local.</span> <br />
                        <span className="heading-primary-sub">Ski like a local.</span>
                    </h1>
                    <a href="#" className="btn btn-white btn-animated"> Book Now </a>
                </div>
            </header>
            <AboutPage />
        </div>
    )
}

export default LandingPage
