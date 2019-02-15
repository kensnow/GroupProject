import React from 'react'


function GuideCard(props) {
    const {nickName, firstName, lastName, profileImg, aboutMe, bookings, abilityRange, resorts, reviews} = props
    return (
        <div>
            <div className="profile-img">{profileImg}</div>
            {nickName ? nickName : firstName + " " + lastName}
            {aboutMe}
            {reviews}
            {resorts}
            {abilityRange}
            {bookings}
        </div>
    )
}

export default GuideCard
