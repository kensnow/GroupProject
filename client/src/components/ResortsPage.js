import React from 'react'

function ResortsPage() {
    return (

        <div className="page-img-resort">
            <div className="text-box-resort"> {/* add resort info */}
                <h1 className="heading-primary-resort">
                    <span className="heading-primary-main-resort">Learn more about </span> <br />
                    <span className="heading-primary-sub-resort">utah ski resorts.</span>
                </h1>
            </div>
            {/* cards start here */}
            <div className="row">
                <div className="cards-wrapper">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--4"></div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading--span--1" >SnowBird</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Terrain Ability</li>
                                        <li>Skiable terrain</li>
                                        <li>price</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="card__side card__side--back card__side--back--1">
                                <div className="card-cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#" className="btn btn-white">Book now!</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--5"></div>
                                <h4 className="card__heading">
                                    <span className="card__heading--span card__heading--span--1" >Park City</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>Intermediate to Pro</li>
                                        <li>Park City Mountain Resort</li>
                                        <li>9 years Skiing experience</li>

                                    </ul>
                                </div>
                            </div>

                            <div className="card__side card__side--back card__side--back--1">
                                <div className="card-cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$197</p>
                                    </div>
                                    <a href="#" className="btn btn-white">Book now!</a>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--6"></div>
                                <div className="card__heading">
                                    <span className="card__heading--span card__heading--span--1" >Powder Mountain</span>
                                </div>
                                <div className="card__details">
                                    <ul>
                                        <li>Advanced to Pro ONLY</li>
                                        <li>Powder Mountain, Snowbasin Resort</li>
                                        <li>13 years Skiing experience</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back--1">
                                <div className="card-cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$Billion</p>
                                    </div>
                                    <a href="#" className="btn btn-white">Book now!</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>

    )
}

export default ResortsPage
