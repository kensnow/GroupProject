import React from 'react'

function ResortCard(props) {
  
    const {_id, name, city, state, guides, trails, description, priceRating, acres} = props
    //map through guides and create a guide cardlett for each
    return (
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1"></div>
                    <h4 className="card__heading">
                        <span className="card__heading--span card__heading--span--1" >{name}</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>Intermediate to Beyond Expert</li>
                            <li>{acres.toLocaleString()} skiable acres</li>
                            <li>{priceRating}</li>

                        </ul>
                    </div>
                </div>

                <div className="card__side card__side--back card__side--back--1">
                    <div className="card-cta">
                        <div className="card__info">
                            <p className="card__info">
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


