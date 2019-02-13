import React from 'react'
import Header from './Header'
import AboutPage from './AboutPage'
import MainView from './MainView';
import LandingInfo from './LandingInfo';

function LandingPage() {
    return (
        <div>
            <Header />
            <MainView />
            <AboutPage />
        </div>
    )
}

export default LandingPage
