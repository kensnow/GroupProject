import React from 'react'
import NavBar from "./NavBar"

const Header = () => {
    return (
        <header className="header">
            <NavBar />
            <div className="text-box"> {/* add text */}
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Ski with a local.</span> <br />
                    <span className="heading-primary-sub">Ski like a local.</span>
                </h1>
                <a href="#" className="btn btn-white btn-animated"> Book Now </a>
            </div>

        </header>
    )
}

export default Header
