import React, { Component, createContext } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom"
export const { Consumer, Provider } = createContext()
const tokenAxios = axios.create()

tokenAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class DataHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            booking: {
                guide: "",
                resort: "",
            },
            errMsg: "",
            showLoginForm: true,
            resorts: [],
            guides: []
        }
    }


    signUp = (props) => {
        return axios.post(`/auth/signup/`, {
            ...props
        })
            .then(res => {
                const { user, token } = res.data
                this.setState({
                    user,
                    token
                }, () => {
                    localStorage.setItem("token", token)
                    localStorage.setItem("user", JSON.stringify(user))
                    })
                this.props.history.push("/myprofile")
            })
            .catch(err => {
                this.setState({ errMsg: err.response.data.message })
                return err
            })

    }

    logIn = (props) => {
        return axios.post('/auth/login', {
            ...props
        })
            .then(res => {
                const { user, token } = res.data
                this.setState({
                    user,
                    token
                }, () => {
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                }
            )
                
            })
            .catch(err => {
                this.setState({ errMsg: err.response.data.message })
                return err
            })
    }

    logout = () => {
        console.log("im here")
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            user: {},
            token: ""
        })
        this.props.history.push("/")
    }

    updateAvatar = (filename) => {
        this.setState(ps => ({
            user: {
                ...ps.user,
                avatar: filename
            }
        }),
            localStorage.setItem("user", JSON.stringify(this.state.user))
        )

    }
    //do a get request to database guide collection & populate state guides array with guide objects
    getGuides = () => {
        return tokenAxios.get('/api/guides')
            .then(res => {
                const guideCollection = res.data
                this.setState({
                    guides: guideCollection
                })
                return res
            })
            .catch(err => {
                this.setState({ errMsg: err.response.data.message })
                return err
            })
    }

    getResorts = () => {
        return tokenAxios.get('/api/resorts')
            .then(res => {
                const resortCollection = res.data
                this.setState({
                    resorts: resortCollection
                })
                return res
            })
            .catch(err => {
                this.setState({ errMsg: err.response.data.message })
                return err
            })
    }

    //use book services for adding guide and/or resort to state
    bookService = (serviceType, serviceId) => {
        const bookingState = { ...this.state.booking }
        bookingState[serviceType] = serviceId
        this.setState({ booking: bookingState })
    }

    //use book now to send date object, guide id and resort id into booking collection.
    //with response object, populate booking object in guide and user collections
    bookNow = (props) => {

    }

    componentDidMount() {
        this.getGuides()
        this.getResorts()
    }


    render() {
        const value = {
            signUp: this.signUp,
            logIn: this.logIn,
            logout: this.logout,
            bookService: this.bookService,
            updateAvatar: this.updateAvatar,
            ...this.state

        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export default withRouter(DataHandler)

export const withDataHandler = C => props => (
    <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
)