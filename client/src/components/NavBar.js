import React from 'react'
import {Link, Route} from "react-router-dom"

const NavBar = () => {
    return (

        <nav id='main-nav'>
            <div className='wrapper'>
                <div className="logo-box">
                    <img alt="Logo" className='logo' src={require('../assets/img/logo_transparent.png')} />
                </div>
                <ul>
                    <li> <Link to="/booking"> Booking </Link> </li>
                    <li> <Link to="/guides"> Guides</Link> </li>
                    <li> <Link to="/resorts"> Resorts</Link> </li>
                </ul>
                <input type="text" name="FirstName" value="Email" />
                <input type="password" name="FirstName" value="Password" />
                <button>Submit</button>
            </div>
        </nav>

    )
}

export default NavBar
