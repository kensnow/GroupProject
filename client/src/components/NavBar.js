import React from 'react'
import LoginForm from "./LoginForm"
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
            <LoginForm/>



        </nav>

    )
}

export default NavBar
