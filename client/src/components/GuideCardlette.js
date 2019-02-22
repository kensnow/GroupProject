import React from 'react'

function GuideCardlette(props) {
    const {nickName, firstName, lastName, profileImg, reviews} = props
    return (
        <div>
            <h3>Your Guide:</h3>
            <div>{profileImg}</div>
            {nickName ? <h3>{nickName}</h3> : <h3>{firstName + " " + lastName}</h3>}
            {reviews}
        </div>
    )
}

export default GuideCardlette
