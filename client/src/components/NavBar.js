import React from 'react'

const NavBar = () => {
    return (

        <nav id='main-nav'>
            <div className='wrapper'>
                <div className="logo-box">
                    <img alt="Logo" className='logo' src={require('../assets/img/logo_transparent.png')} />
                </div>
                <ul>
                    <li> <a href="" /> Booking </li>
                    <li> <a href="" /> Guides</li>
                    <li> <a href="" /> Resorts</li>
                </ul>
                <input type="text" name="FirstName" value="Login" />
                <input type="password" name="FirstName" value="Password" />
            </div>
        </nav>

    )
}

export default NavBar
