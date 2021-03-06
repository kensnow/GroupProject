import React from 'react'
import { Link } from "react-router-dom"

function GuideCard(props) {
    const { _id, nickName, firstName, lastName, avatar, profileImg, dailyRate, aboutMe, bookings, abilityRange, resorts, reviews } = props

    const resortMap = resorts.map((resort, i) => {
        //need to incl;ude logic to search for resort id in state & get sub-info ie. name
        return (<Link to={`resort/${resort}`}>{resort}</Link>)
    })
    return (
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1"></div>
                    <h4 className="card__heading">
                        <span className="card__heading--span card__heading--span--1" >{nickName ? nickName : firstName + " " + lastName}</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>{abilityRange}</li>
                            {/* TODO: Add helper function to render ability range visual */}
                            <li>{resortMap}</li>
                            <li>${dailyRate}</li>

                        </ul>
                    </div>
                </div>

                <div className="card__side card__side--back card__side--back--1">
                    <div className="card-cta">

                        <img className="profilePic" src={`http://localhost:8080/image/${avatar}`} />

                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">{aboutMe}</p>
                        </div>
                        <button onClick={() => props.bookService("guide", _id)} className="resort-btn">Select {firstName}!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default GuideCard
