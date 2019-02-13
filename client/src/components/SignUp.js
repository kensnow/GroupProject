import React from 'react'

const SignUp = () => {
    return (
        <div className="signupWrapper">
            <input type="text" placeholder="First Name" name="fName" />
            <input type="text" placeholder="Last Name" name="lName" />
            <input type="text" placeholder="E-Mail" name="email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="E-Mail" />
            <button>Submit</button>

            
        </div>
    )
}

export default SignUp
