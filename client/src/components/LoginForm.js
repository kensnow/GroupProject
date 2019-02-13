import React from 'react'

const LoginForm = () => {
    return (
        <div className="login-box">
            <input type="text" name="FirstName" value="Email" />
            <input type="password" name="FirstName" value="Password" />

            <a href="#" className="btn-white btn btn-animated"> Submit </a>
        </div>
    )
}

export default LoginForm
