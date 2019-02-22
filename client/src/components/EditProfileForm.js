import React from 'react'
import FormHandler from "../FormHandler"
import { withDataHandler } from "../DataHandler"

const EditProfileForm = (props) => {

    const textInputs = [

        {
            name: "nickName",
            type: "text",
            guideonly: "true",
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
            guideonly: "true",
            placeholder: "Bio",
            className: "largeTextBox",
        },
        {
            name: "dailyRate",
            type: "number",
            guideonly: "true",
            placeholder: "Daily Rate",
            className: "textBox",
        },
        {
            name: "abilityLevel",
            value: [0]
        }
    ]
///////////// props.editProfile !!!!!!!!!!!vvvvvvvvvvvvvvvvvvvvv
    return (
        <div className="signupWrapper">
            <FormHandler inputs={textInputs.reduce((sum, x) => {
                !x.type ? sum[x.name] = x.value : sum[x.name] = props.user[x.name] || ""; return sum
            }, {})
            } submit={(inputs) => props.editProfile(inputs)}>
            
                {
                    ({ inputs, handleChange, handleSubmit, handleAbility}) => {

                        const inputBoxes = textInputs.map((x, i) => {
                            if (props.user.userType === "guide") {
                                return x.type ? <input key={i} onChange={handleChange} value={inputs[x.name]} {...x} /> : null
                            } else {
                                return (x.type && !x.guideonly) ? <input key={i} onChange={handleChange} value={inputs[x.name]} {...x} /> : null
                            }
                        })
                        
                        return (
                            <div style={{border: "1px solid black"}} className="formWrapper">
                                <div className="userTypeWrapper">

                                </div>
                                <form onSubmit={handleSubmit}>
                                    {inputBoxes}
                                    <button>Submit</button>
                                    <div>
                                        <button type="button" value={1} onClick={handleAbility}>Beginner</button>
                                        <button type="button" value={2} onClick={handleAbility}>Intermediate</button>
                                        <button type="button" value={3} onClick={handleAbility}>Advanced</button>
                                        <button type="button" value={4} onClick={handleAbility}>Expert</button>
                                    </div>
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

