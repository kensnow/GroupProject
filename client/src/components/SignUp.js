import React from 'react'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fName: "",
            lName: "",
            email: "",
            password: "",
            confirmPassword: "",
            userType: ""
        }
    }

    handleChange = (name, value) => {
        this.setState(ps => (
            {
                ...ps,
                [name]: value
            }
        ))
    }
    render() {
        const textInputs = () => {
            const inputsArray = []
            let inputs = {
                fName: {
                    type: "text",
                    placeholder: "First Name"
                },
                lName: {
                    type: "text",
                    placeholder: "Last Name"
                },
                email: {
                    type: "text",
                    placeholder: "E-Mail"
                },
                password: {
                    type: "password",
                    placeholder: "Password"
                },
                confirmPassword: {
                    type: "password",
                    placeholder: "Confirm Password"
                }
            }
            for (let i in inputs) {
                inputsArray.push(<input onClick={(e) => this.handleChange(e.target.name, e.target.value)}
                    value={this.state[i]} name={i} {...i} />)
            }
            return inputsArray
        }

        return (
            <div className="signupWrapper">
                <div className="userTypeWrapper">
                    <div style={{
                        border: this.state.userType === "guide" ? "4px solid gold" : null
                    }} className="guideCard"></div>
                    <div style={{
                        border: this.state.userType === "guide" ? "1px solid gold" : null
                    }} className="customerCard"></div>
                    
                </div>
                {textInputs()}
                <button>Submit</button>


            </div>
        )
    }
}

export default SignUp
