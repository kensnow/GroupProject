import { Component } from 'react'
import { withDataHandler } from "./DataHandler"

class FormHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: props.inputs
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState(ps => (
            {
                inputs: {
                    ...ps.inputs,
                    [name]: value
                }
            }
        ))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submit(this.state.inputs)
    }

    handleAbility = (e) => {
        e.persist()
        console.dir(e)
        e.preventDefault()
        if (this.props.user.userType === "guide") {
            this.setState(ps => {
                if (ps.inputs.abilityLevel.indexOf(e.target.value) === -1) {
                    return {
                        inputs: {
                            ...ps.inputs,
                            abilityLevel: [...ps.inputs.abilityLevel, e.target.value]
                        }
                    }
                }
            })
        } else {
            this.setState(ps => {
                return {
                    inputs: {
                        ...ps.inputs,
                        abilityLevel: [e.target.value]
                    }

                }
            })
        }
    }

    render() {
        const props = {
            ...this.state,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
            handleUserType: this.handleUserType,
            handleAbility: this.handleAbility
        }
        return (
            this.props.children(props)
        )
    }
}

export default withDataHandler(FormHandler)