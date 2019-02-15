import React, { Component, createContext } from 'react'
import axios from 'axios'

export const {Consumer, Provider} = createContext()

export default class DataHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                fName: "",
                lName: "",
                token: localStorage.getItem("token") || "",
                
            },
            errMsg:"",
            resorts:[],
            guides:[]
        }
    }


    signUp = (props) => {
        return axios.post(`/auth/signup/`,{
            ...props
        })
            .then(res => {
                const {user, token} = res.data
                this.setState({
                    user: token,
                    user: {...user},
                })
                return res
            })
            .catch(err => {
                this.setState({errMsg: err.response.data.message})
                // this.props.history.push('/')
                return err
            })

    }

    render() {
        const value = {
            signUp: this.signUp
        }
        return (
            <Provider value = {value}>
                {this.props.children}
            </Provider>
        )
    }
}


export const withDataHandler = C => props => (
    <Consumer>
            {containerProps => <C {...containerProps}{...props} />}
    </Consumer>
)