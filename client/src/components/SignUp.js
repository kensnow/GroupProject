import React from 'react'
import FormHandler from "../FormHandler"

const SignUp = (props) => {

    const textInputs = [
        {
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            className: "textBox",
        },
        {
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            className: "textBox"
        },
        {
            name: "email",
            type: "text",
            placeholder: "E-Mail",
            className: "textBox"
        },
        {
            name: "password",
            type: "password",
            placeholder: "Password",
            className: "textBox"
        },
        {
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            className: "textBox"
        },
        {
            ///This will be a toggle value in state
            name: "userType",
            value: "guide"
        }
    ]



    return (
        <div className="signupWrapper">

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FormHandler inputs={textInputs.reduce((sum, x) => { sum[x.name] = ""; return sum }, {})} submit={inputs => alert(JSON.stringify(inputs))}>

                {
                    ({ inputs, handleChange, handleSubmit, handleUserType }) => {
                        const inputBoxes = textInputs.map((x, i) => {
                         return x.name !== "userType" ? <input key={i} onChange={handleChange} value={inputs[x.name]} {...x} /> : null
                        }
                        )
                        return (
                            <div className="formWrapper">
                                <div className="userTypeWrapper">
                                    <div onClick={handleUserType} id="guide" style={{
                                        border: inputs.userType === "guide" ? "1px solid gold" : null
                                    }} className="guideCard">Guide</div>
                                    <div onClick={handleUserType} id="customer" style={{
                                        border: inputs.userType !== "guide" ? "1px solid gold" : null
                                    }} className="customerCard">Customer</div>

                                </div>
                                <form onSubmit={handleSubmit}>
                                    {inputBoxes}
                                    <button>Submit</button>
                                </form>
                            </div>
                        )
                    }
                }
            </FormHandler>

        </div>
    )
}

export default SignUp
