import React from 'react'
import FormHandler from "../FormHandler"
import {withDataHandler} from "../DataHandler"
import {withRouter} from 'react-router-dom'

const LoginForm = (props) => {
    const loginInputs = {
        email:"",
        password:""

    }
    return (
        <FormHandler inputs={loginInputs} submit={(inputs) => props.logIn(inputs).then(() => props.history.push('/myprofile'))}>
            {
                ({inputs, handleChange, handleSubmit}) => {

                    return(
                        <form onSubmit={handleSubmit} className="login-box">
                            <input onChange={handleChange} type="email" name="email" placeholder="Email" />
                            <input onChange={handleChange} type="password" name="password" placeholder="Password"/>
                            <button className="login-btn"> Login </button>
                        </form>
                        
                    )
                }
            }
        </FormHandler>
    )
}

export default withRouter(withDataHandler(LoginForm))
