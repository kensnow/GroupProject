import React, { Component, createContext } from 'react'
import axios from 'axios'
import lib from './lib/index.js'
import {withRouter} from 'react-router-dom'
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
            guides: [],
            bookings:[],
            notification:""
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
                    this.props.history.push("/myprofile")
                    localStorage.setItem("token", token)
                    localStorage.setItem("user", JSON.stringify(user))
                    })

            })
            .catch(err => {
                this.setState({ errMsg: err.response.data.message })
                return err
            })

    }

    logIn = (props) => {
        return axios.post('/auth/login', {
            ...props,
            email: props.email.toLowerCase()
        })
            .then(res => {
                const { user, token } = res.data
                this.setState({
                    user,
                    token
                })
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))

            })
            .catch(err => {
                this.setState({ errMsg: err.response.data.message })
                return err
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            user: {},
            token: "",
            booking: {
                guide: "",
                resort: "",
            },
            errMsg: "",
            showLoginForm: true,
            resorts: [],
            guides: []
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
            () => localStorage.setItem("user", JSON.stringify(this.state.user))
        )

    }

    toggleLoginForm = () => {
        this.setState(ps => (
            {
                ...ps,
                showLoginForm: !ps.showLoginForm
            }
        ))
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

    getBookings = () => {
        return tokenAxios.get('/api/bookings')
            .then(res => {
                const bookingCollection = res.data
                this.setState({
                    bookings: bookingCollection
                })
                return res
            })
            .catch(err => {
                this.setState({ errMsg: err.response.data.message })
                return err
            })
    }
    

    componentDidMount = () => {
        this.getBookings()
        this.getGuides()
        this.getResorts()

    }
    //use book services for adding guide and/or resort to state
    bookService = async (serviceType, serviceId) => {
        const bookingState = { ...this.state.booking }
        bookingState[serviceType] = serviceId
        await this.setState({ booking: bookingState })
        await this.state.booking.guide && this.state.booking.resort ? this.props.history.push("/booking") : this.state.booking.guide ? this.props.history.push("/resorts") : this.props.history.push("/guides")

    }

    //use book now to send date object, guide id and resort id into booking collection.
    //with response object, populate booking object in guide and user collections
    bookNow = (reservation) => {
        //first, search guideid for date availability
        const { guide, resort, user, date, groupSize } = reservation
        const resDate = new Date(date)
        const prevBookings = guide.bookings.find(prevRes => {
            //get date from bookings object
            const prevApt = lib.getObjectData(prevRes, this.state.bookings)
        
            const prevAptDate = new Date(prevApt.date)
            console.log(prevAptDate)
            console.log(prevApt)
            return lib.getEasyDate(prevAptDate) === lib.getEasyDate(resDate)
        })

        if (!prevBookings) {
            //prepare reservation object
            const resvObj = {
                guide: guide._id,
                resort: resort._id,
                customer: user._id,
                date: resDate,
                groupSize: groupSize
            }

            tokenAxios.post('/api/bookings', {
                ...resvObj
            })
                .then(res => {

                    //update guide with booking, update user/customer with booking
                    return tokenAxios.put(`/api/guides/${guide._id}`, {
                        bookings: [ ...guide.bookings, res.data._id]
                    })
                    .then(() => res.data._id)

                })
                .then(bookingId => {
 
                    return tokenAxios.put(`/api/customers/${user._id}`, {
                        bookings: [...user.bookings, bookingId]
                    })
                    .then(() => bookingId)
                })
                
                .then((bookingId) => {
                    this.setState(ps => ({
                        user: {
                            ...ps.user,
                            bookings: [...ps.user.bookings, bookingId]
                    }}))
                    this.getGuides()
                    this.getBookings()
                })
                .then(() => {
                    this.setState({
                        notification:`Booking Confirmed!`,
                        booking: {
                            guide:"",
                            resort:""
                        }
                    })
                })
        }
        else {
            this.setState({
                notification: "That date is already booked, please choose another date!"
            })
        }
    }


    render() {
        const value = {
            signUp: this.signUp,
            logIn: this.logIn,
            logout: this.logout,
            bookService: this.bookService,
            bookNow: this.bookNow,
            updateAvatar: this.updateAvatar,
            toggleLoginForm: this.toggleLoginForm,
            getGuides: this.getGuides,
            getResorts: this.getResorts,
            getBookings: this.getBookings, 
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