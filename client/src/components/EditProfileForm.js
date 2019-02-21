import React from 'react'
import FormHandler from "../FormHandler"
import { withDataHandler } from "../DataHandler"

const EditProfileForm = (props) => {

    const textInputs = [

        {
            name: "nickName",
            type: "text",
            guideOnly: true,
            placeholder: "Display Name",
            className: "textBox",
        },
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
            name: "phoneNumber",
            type: "text",
            placeholder: "Phone Number",
            className: "textBox"
        },
        {
            name: "aboutMe",
            type: "text",
            guideOnly: true,
            placeholder: "Bio",
            className: "largeTextBox",
        },
        {
            name: "dailyRate",
            type: "number",
            guideOnly: true,
            placeholder: "Daily Rate",
            className: "textBox",
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
                            return !x.type ? <input key={i} onChange={handleChange} value={inputs[x.name]} {...x} /> : null
                        }
                        )
                        return (
                            <div className="formWrapper">
                                <div className="userTypeWrapper">
                                    <button className="guide-button" name="userType" onClick={handleChange} value="guide">I need a guide</button>
                                    <button className="customer-button" name="userType" onClick={handleChange} value="customer" id="customer">I am a guide</button>

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

export default withDataHandler(EditProfileForm)

