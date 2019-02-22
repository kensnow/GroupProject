import React from 'react'
import { withDataHandler } from "../DataHandler"
import UploadAvatar from "./UploadAvatar"
function ProfilePage(props) {
    console.log(props)
    const bookingsCollection = props.user.bookings.map(resv => {console.log(resv)})

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
                            <h2>3/9/2019 with Jason Brown</h2>
                        </div>
                    </div>
                    <div className="row-profile resort">
                        <div className="col-1-of-2">
                            <h2>Recent Guide:</h2>
                        </div>
                        <div className="col-1-of-2">
                            <h2>Grant Wilhelm</h2>
                        </div>
                    </div>
                    <div className="row-profile resort">
                        <div className="col-1-of-2">
                            <h2>Favorite Resort:</h2>
                        </div>
                        <div className="col-1-of-2">
                            <h2>Brighton Ski Resort, Big Cotton Wood Canyon</h2>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default withDataHandler(ProfilePage)
