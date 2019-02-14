import React from 'react'
import FormHandler from "../FormHandler"

const SignUp = (props) => {

    const textInputs = [
        {
            name: "fName",
            type: "text",
            placeholder: "First Name",
            className: "textBox",
        },
        {
            name: "lName",
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
        }
    ]



    return (
        <div className="signupWrapper">
            {/* <div className="userTypeWrapper">
                <div style={{
                    border: this.state.userType === "guide" ? "4px solid gold" : null
                }} className="guideCard"></div>
                <div style={{
                    border: this.state.userType === "guide" ? "1px solid gold" : null
                }} className="customerCard"></div>

            </div> */}
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
                    ({ inputs, handleChange, handleSubmit }) => {
                        const inputBoxes = textInputs.map((x, i) => <input key={i} onChange={handleChange} value={inputs[x.name]} {...x} />
                        )
                        return (
                            <form onSubmit={handleSubmit}>
                                {inputBoxes}
                                <button>Submit</button>
                            </form>
                        )
                    }
                }




            </FormHandler>

            


        </div>
    )
}

export default SignUp
