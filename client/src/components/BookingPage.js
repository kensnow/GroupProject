import React from 'react'
import {withDataHandler} from '../DataHandler'

function BookingPage(props) {
    const {user, guides, resorts, booking} = props
    console.log(props)
    return (
        <div>
            Guide Heyooooooooooooooooo
        </div>
    )
}

export default withDataHandler(BookingPage)
