import React from 'react'
import NavBar from "./NavBar"
import { withDataHandler } from "../DataHandler"

const Header = (props) => {
    return (
        <header className="header">
            {props.token ? <NavBar /> : null}
        </header>
    )
}

export default withDataHandler(Header)
