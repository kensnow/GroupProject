import React from 'react'

function GuideCardlette(props) {
    const {nickName, firstName, lastName, profileImg, reviews} = props
    return (
        <div>
            <div>{profileImg}</div>
            {nickName ? nickName : firstName + " " + lastName}
            {reviews}
        </div>
    )
}

export default GuideCardlette
