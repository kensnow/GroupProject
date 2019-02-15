import React from 'react'
import FormHandler from "../FormHandler"
import {withDataHandler} from "../DataHandler"

const LoginForm = (props) => {
    const inputs = {
        email:"",
        password:""

    }
    return (
        <FormHandler>
            <form className="login-box">
                <input type="email" name="email" />
                <input type="password" name="password" />

                <button className="btn-white btn btn-animated"> Submit </button>
            </form>
        </FormHandler>

    )
}

export default withDataHandler(LoginForm)
