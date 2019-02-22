import React from 'react'
import { withDataHandler } from "../DataHandler"
import { Link } from "react-router-dom"

const NavBar = (props) => {


    return (

        <nav id='main-nav'>

           
            <ul>
                {props.token ?
                    <li>
                        <a onClick={props.logout}>Logout</a>
                    </li> : null}
                <li> <Link to="/myprofile"> Profile</Link> </li>
                <li> <Link to="/booking"> Booking </Link> </li>
                <li> <Link to="/guides"> Guides</Link> </li>
                <li> <Link to="/resorts"> Resorts</Link> </li>
                <div className="logo-box">
                    <li> <Link to="/">
                        <img alt="Logo" className='logo' src={require('../assets/img/logo_transparent.png')} />
                    </Link>
                    </li>
                </div>




            </ul>



        </nav>

            )
        }
        
        export default withDataHandler(NavBar)
