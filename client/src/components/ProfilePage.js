import React from 'react'

function ProfilePage() {
    return (
        <div>
            <div className="page-img-profile">
                <div className="text-box-profile"> {/* add text */}

                    <h1 className="heading-primary-profile">
                        <div className="profile-image"></div>
                        <span className="heading-primary-main-profile">Ben Turner</span> 
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

export default ProfilePage
