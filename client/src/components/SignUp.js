import React from 'react'
import FormHandler from "../FormHandler"
import { withDataHandler } from "../DataHandler"

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
            value: "customer"
        }
    ]





    return (
        <div className="signupWrapper">
            <FormHandler inputs={textInputs.reduce((sum, x) => {
                !x.type ? sum[x.name] = x.value : sum[x.name] = ""; return sum
            }, {})
            } submit={(inputs) => props.signUp(inputs)}>
                {
                    ({ inputs, handleChange, handleSubmit }) => {

                        const inputBoxes = textInputs.map((x, i) => {
                            return x.name !== "userType" ? <input key={i} onChange={handleChange} value={inputs[x.name]} {...x} /> : null
                        }
                        )
                        return (
                            <div className="formWrapper">
                                <div className="userTypeWrapper">
                                    <button className="guide-button" style={{ border: inputs.userType === "customer" ? "1px dashed gold" : "" }}
                                        name="userType" onClick={handleChange} value="customer">I need a guide</button>
                                    <button className="customer-button" style={{ border: inputs.userType === "guide" ? "1px dashed gold" : "" }}
                                        name="userType" onClick={handleChange} value="guide">I am a guide</button>

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

export default withDataHandler(SignUp)
