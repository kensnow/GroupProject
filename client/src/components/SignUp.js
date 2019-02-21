import React from 'react'
import FormHandler from "../FormHandler"
import { withDataHandler } from "../DataHandler"

const SignUp = (props) => {

    const textInputs = [

        {
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            className: "text-Box1",
        },
        {
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            className: "text-Box1"
        },
        {
            name: "email",
            type: "text",
            placeholder: "E-Mail",
            className: "text-Box1"
        },
        {
            name: "password",
            type: "password",
            placeholder: "Password",
            className: "text-Box1"
        },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            className: "text-Box1"
        },
        {
            ///This will be a toggle value in state
            name: "userType",
            value: "guide"
        }
    ]





    return (
        <div className="signup-wrapper">
            <FormHandler inputs={textInputs.reduce((sum, x) => { sum[x.name] = ""; return sum }, {})} submit={(inputs) => props.signUp(inputs)}>

                {
                    ({ inputs, handleChange, handleSubmit }) => {

                        const inputBoxes = textInputs.map((x, i) => {
                            return x.name !== "userType" ? <input key={i} onChange={handleChange} value={inputs[x.name]} {...x} /> : null
                        }
                        )
                        return (
                            <div className="wrapper">
                                <div className="userTypeSelector">

                                    <button className="signUp-btn guide-button" name="userType" onClick={handleChange} value="guide">I need a guide</button>

                                    <button className="signUp-btn customer-button" name="userType" onClick={handleChange} value="customer" id="customer">I am a guide</button>

                                </div>
                                <form className="signup-form" onSubmit={handleSubmit}>
                                    <div className="input-box">
                                        {inputBoxes}
                                    </div>

                                    <button className="signUp-btn">Submit</button>
                                </form>
                            </div>
                        )


                    }
                }
            </FormHandler>

        </div>
    )
}

export default withDataHandler(SignUp)
