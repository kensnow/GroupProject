import React from 'react'
import {withDataHandler} from '../DataHandler'
import { Link } from "react-router-dom"
import lib from '../lib/index.js'


function BookingPage(props) {
    const {user, guides, resorts, booking} = props

    //build guide & resort cardlett
    const guideDat = lib.getObjectData(booking.guide, guides)
    const resortDat = lib.getObjectData(booking.resort, resorts)
    console.log(guideDat)
    console.log(resortDat)
    return (
        <div>
            <div>
                <h1>Book Now!</h1>
            </div>
            <div>

            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default withDataHandler(BookingPage)
