import React from 'react'
import { withDataHandler } from "../DataHandler"
import UploadAvatar from "./UploadAvatar"
import EditProfileForm from "./EditProfileForm"
import lib from '../lib/index.js'


function ProfilePage(props) {
    const bookingsCollection = props.user.bookings.map(resv => {
        const bookingObj = lib.getObjectData(resv, props.bookings)
        if (bookingObj) {
            const guideObj = lib.getObjectData(bookingObj.guide, props.guides)
            const resortObj = lib.getObjectData(bookingObj.resort, props.resorts)
            if (guideObj && resortObj) {
                const date = new Date(bookingObj.date)
                return <div className="booking-card"><img style={{ height: "10rem" }} src={`http://localhost:8080/image/${guideObj.avatar}`} /><div className="booking-card-details"><h5>{lib.getEasyDate(date)}:</h5><h4><span className="subtle-text">with</span> {guideObj.firstName + " " + guideObj.lastName}</h4> <h5><span className="subtle-text">at</span> {resortObj.name}</h5></div></div>
            }

        }

        // const guideObj = lib.getObjectData(bookingObj, props.guides)
    })


    return (
        <div>
            <div className="page-img-profile">
                <div className="text-box-profile"> {/* add text */}

                    <h1 className="heading-primary-profile">
                        <img className="profile-image" alt="Avatar" src={`http://localhost:8080/image/${props.user.avatar}`} />
                        <UploadAvatar />
                        <span className="heading-primary-main-profile">{props.user.firstName + " " + props.user.lastName}</span>
                        <span className="heading-primary-sub-profile"></span>
                    </h1>
                    <div className="row-profile resort">
                        <div className="col-1-of-2">
                            <h2>Upcoming Booking(s):</h2>
                        </div>
                        <div className="col-1-of-2">
                            {bookingsCollection}
                        </div>
                    </div>

                </div>

            </div>
            <EditProfileForm/>
        </div>
    )
}

export default withDataHandler(ProfilePage)
