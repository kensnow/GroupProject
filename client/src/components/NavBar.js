import React from 'react'
import { withDataHandler } from "../DataHandler"
import { Link } from "react-router-dom"

const NavBar = (props) => {

    return (

        <nav id='main-nav'>

            <div className="logo-box">
                <Link to="/">
                    <img alt="Logo" className='logo' src={require('../assets/img/logo_transparent.png')} />
                </Link>

            </div>
            <ul>
                {props.token ?
                    <li>
                        <a onClick={props.logout}>Logout</a>
                    </li> : null}
                <li> <Link to="/myprofile"> Profile</Link> </li>
                <li> <Link to="/booking"> Booking </Link> </li>
                <li> <Link to="/guides"> Guides</Link> </li>
                <li> <Link to="/resorts"> Resorts</Link> </li>


            </ul>



        </nav>

    )
}

export default withDataHandler(NavBar)
