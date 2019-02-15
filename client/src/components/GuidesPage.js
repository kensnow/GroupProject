import React from 'react'

function GuidesPage() {
    return (

        <div>
            <div className="page-img-guide">
                <div className="text-box-guide"> 
                    <h1 className="heading-primary-guide">
                        <span className="heading-primary-main-guide">Ski like a local.</span> <br />
                        <span className="heading-primary-sub-guide">with our guides</span>
                    </h1>

                </div>
                {/* start of cards */}
                <div className="row">
                    <div className="cards-wrapper">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1"></div>
                                    <h4 className="card__heading">
                                        <span className="card__heading--span card__heading--span--1" >Ken Snow</span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>Beginner to Pro</li>
                                            <li>All Utah Ski resorts</li>
                                            <li>24 years Skiing experience</li>

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
                                    <div className="card__picture card__picture--2"></div>
                                    <h4 className="card__heading">
                                        <span className="card__heading--span card__heading--span--1" >Grant Wilhelm</span>
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
                                    <div className="card__picture card__picture--3"></div>
                                    <div className="card__heading">
                                        <span className="card__heading--span card__heading--span--1" >Jason Brown</span>
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

        </div>

    )
}

export default GuidesPage
