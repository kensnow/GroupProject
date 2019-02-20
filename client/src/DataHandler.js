import React, { Component, createContext } from 'react'
import axios from 'axios'
<<<<<<< HEAD
import lib from './lib/index.js'

export const {Consumer, Provider} = createContext()
=======
import { withRouter } from "react-router-dom"
export const { Consumer, Provider } = createContext()
>>>>>>> 6a5ad96a2603d8850b7756013273fa13b3e59706
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
            errMsg:"",
            resorts:[],
            guides:[],
            bookings:[]
        }
    }


    signUp = (props) => {
        return axios.post(`/auth/signup/`, {
            ...props
        })
            .then(res => {
                const { user } = res.data
                this.setState({
                    user: { ...user }
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
                })
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
            })
            .catch(err => {
                this.setState({ errMsg: err.response.data.message })
                return err
            })
    }
    updateAvatar = (filename) => {
        this.setState(ps => ({
            user: {
                ...ps.user,
                avatar: filename
            }
        }))
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
                    bookings:bookingCollection
                })
                return res
            })
            .catch(err => {
                this.setState({errMsg: err.response.data.message})
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
    bookNow = (reservation)=> {
        //first, search guideid for date availability
        const {guide, resort, user, date, groupSize} = reservation
        const resDate = new Date(date)
        const prevBookings = guide.bookings.find(prevRes => {
            //get date from bookings object
            console.log(prevRes)
            const prevApt = lib.getObjectData(prevRes,this.state.bookings)
            console.log(prevApt)
            console.log(this.state.bookings)

            const prevAptDate = new Date(prevApt.date)
            console.log(prevAptDate)
            return lib.getEasyDate(prevAptDate) === lib.getEasyDate(resDate)
        })
        console.log(prevBookings)
        //need to test if this is working once we have some reservations in the system

        if(!prevBookings){
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
                    console.log (res)
                    //update guide with booking, update user/customer with booking
                   return tokenAxios.put(`/api/guides/${guide._id}`,{
                        bookings: [...guide.bookings, res.data._id]
                    })
                    .then(() => res.data._id)
                })
                .then(bookingId => {
                    
                   return tokenAxios.put(`/api/customers/${user._id}`,{
                        bookings: [...user.bookings, bookingId]
                    })
                })
        }
        else {
            alert("That date is booked!")
        }
    }

    componentDidMount() {
        this.getGuides()
        this.getResorts()
        this.getBookings()
    }


    render() {
        const value = {
            signUp: this.signUp,
            logIn: this.logIn,
            bookService:this.bookService,
            bookNow:this.bookNow,
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