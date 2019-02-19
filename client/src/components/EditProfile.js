import React, { Component } from 'react'
import axios from 'axios'
import FormHandler from '../FormHandler'


function EditProfile(props) {

    const editProfileInputs = {
        email: props.email || "",
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        phoneNumber: props.phoneNumber || "555-555-5555",
        abilityLevel: props.abilityLevel || 0,
        userType: props.userType || "customer",
        abilityRange: props.abilityRange || ""

    }

    return (
        <FormHandler inputs={editProfileInputs} submit={(inputs) => alert(JSON.stringify(inputs))} >
            {
                ({ inputs, handleChange, handleSubmit }) => {
                    return (
                        <form id="edit-profile-form" onSubmit={handleSubmit}>
                            <input onChange={handleChange} type="text" name="email" placeholder={inputs.email ? inputs.email : "Enter Email"} value={inputs.email} />
                            <input onChange={handleChange} type="text" name="firstName" value={inputs.firstName} placeholder={inputs.firstName ? inputs.firstName : "Enter First Name"} />
                            <input onChange={handleChange} type="text" name="lastName" value={inputs.lastName} placeholder={inputs.lastName ? inputs.lastName : "Enter Last Name"} />
                            <input onChange={handleChange} type="text" name="phoneNumber" placeholder={inputs.phoneNumber} value={inputs.phoneNumber} />


                            {inputs.userType === "customer" ?

                                <select onChange={handleChange} form="edit-form" name="abilityLevel">
                                    <option value="0">Beginner (Green)</option>
                                    <option value="1">Intermediate (Blue)</option>
                                    <option value="2">Advanced (Black)</option>
                                    <option value="3">Expert (Double Black)</option>
                                </select>
                                :
                                <span>
                                    <input type="text" onChange={handleChange} name="nickName" placeholder={inputs.nickName ? inputs.nickName : "Enter Nick-Name (Optional)"} />
                                    <select onChange={handleChange} form="edit-form" name="abilityRange">
                                        <option value="0">Beginner (Green)</option>
                                        <option value="1">Intermediate (Blue)</option>
                                        <option value="2">Advanced (Black)</option>
                                        <option value="3">Expert (Double Black)</option>
                                    </select>
                                </span>
                            }
                            <button>Submit</button>
                        </form>
                    )
                }
            }
        </FormHandler>

    )
}

export default EditProfile
