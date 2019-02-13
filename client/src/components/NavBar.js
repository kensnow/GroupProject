import React from 'react'
import { Link, Route } from "react-router-dom"

const NavBar = () => {
    return (

        <nav id='main-nav'>

            <div className="logo-box">
                <Link to="/">
                    <img alt="Logo" className='logo' src={require('../assets/img/logo_transparent.png')} />
                </Link>

            </div>
            <ul>
                <li> <Link to="/booking"> Booking </Link> </li>
                <li> <Link to="/guides"> Guides</Link> </li>
                <li> <Link to="/resorts"> Resorts</Link> </li>
            </ul>
            <div className="login-box">
                <input type="text" name="FirstName" value="Email" />
                <input type="password" name="FirstName" value="Password" />

                <a href="#" className="btn-white btn btn-animated"> Submit </a>
            </div>



        </nav>

    )
}

export default NavBar
