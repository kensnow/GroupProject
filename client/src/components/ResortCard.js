import React from 'react'
import lib from '../lib/index.js'

function ResortCard(props) {

    const { _id, name, city, state, guides, trails, description, priceRating, acres } = props
    //map through guides and create a guide cardlett for each
    return (
        
            <div className="col-1-of-3">
                <div className="cardResort">
                    <div className="cardResort__sideResort cardResort__sideResort--frontResort">
                        <div className="cardResort__pictureResort cardResort__pictureResort--4"></div>
                        <h4 className="cardResort__headingResort">
                            <span className="cardResort__headingResort--span cardResort__headingResort--spanResort--1Resort" >{name}</span>
                        </h4>
                        <div className="cardResort__detailsResort">
                            <ul>
                                <li>Intermediate to Beyond Expert</li>
                                <li>{acres.toLocaleString()} skiable acres</li>
                                <li>{priceRating}</li>

                            </ul>
                        </div>
                    </div>

                    <div className="cardResort__sideResort cardResort__sideResort--backResort cardResort__sideResort--backResort--1Resort">
                        <div className="cardResort-ctaResort">
                            <div className="cardResort__info">
                                <p className="cardResort__info">
                                    {description}
                                </p>

                            </div>
                            <button className="resort-btn" onClick={() => props.bookService("resort", _id)} >Select {name}!</button>
                        </div>
                    </div>
                </div>

            </div>
        
    )
}

export default ResortCard


