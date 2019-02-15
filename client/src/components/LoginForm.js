import React from 'react'
import FormHandler from "../FormHandler"
import {withDataHandler} from "../DataHandler"

const LoginForm = (props) => {
    return (
        <form className="login-box">
            <input type="text" name="FirstName" />
            <input type="password" name="FirstName" />

            <button className="btn-white btn btn-animated"> Submit </button>
        </form>
    )
}

export default LoginForm
