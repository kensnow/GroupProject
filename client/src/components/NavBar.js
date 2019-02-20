import React from 'react'
import { withDataHandler } from "../DataHandler"
import { Link} from "react-router-dom"
import {withDataHandler} from '../DataHandler'

const NavBar = (props) => {
    
    return (

        <nav id='main-nav'>

            <div className="logo-box">
                <Link to="/">
                    <img alt="Logo" className='logo' src={require('../assets/img/logo_transparent.png')} />
                </Link>

            </div>
            <ul>
                <li> <Link to="/myprofile"> Profile</Link> </li>
                <li> <Link to="/booking"> Booking </Link> </li>
                <li> <Link to="/guides"> Guides</Link> </li>
                <li> <Link to="/resorts"> Resorts</Link> </li>
                {props.token ? <li><p className="login-box"onClick={props.logout}>Logout</p></li> : null}
            </ul>
            


        </nav>

    )
}

export default withDataHandler(NavBar)
