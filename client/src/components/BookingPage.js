import React from 'react'
import { withDataHandler } from '../DataHandler'
import { Link } from "react-router-dom"
import lib from '../lib/index.js'
import GuideCardlette from './GuideCardlette'
import ResortCardlette from './ResortCardlette'
import FormHandler from '../FormHandler'


function BookingPage(props) {
    const { user, guides, resorts, booking } = props

    //build guide & resort cardlett
    const guideDat = lib.getObjectData(booking.guide, guides)
    const resortDat = lib.getObjectData(booking.resort, resorts)
    const formInputs = {
        guide: { ...guideDat },
        resort: { ...resortDat },
        user: { ...user },
        date: "",
        groupSize: 1

    }

    return (

        <div>
            <div className="page-img-booking">
                <div className="text-box-booking"> {/* add text */}
                    <h1 className="heading-primary-booking">
                        <span className="heading-primary-main-booking">Ski like a local</span> <br />
                        <span className="heading-primary-sub-booking">book meow!</span>
                    </h1>
                    <h1>Book Now!</h1>
                    <div>
                        {resortDat ? <ResortCardlette {...resortDat} /> : <Link to="/resorts">Select a Resort!</Link>}
                        <div>

                            {resortDat && guideDat ?
                                <FormHandler inputs={formInputs} submit={(inputs) => props.bookNow(inputs)} >
                                    {
                                        ({ inputs, handleChange, handleSubmit }) => {
                                            return (
                                                <form onSubmit={handleSubmit}>
                                                    <input onChange={handleChange} type="date" name="date" />
                                                    <input onChange={handleChange} type="number" name="groupSize" placeholder="Group Size" />
                                                    <button>Book Now</button>
                                                </form>
                                            )

                                        }

                                    }

                                </FormHandler> :
                                "Select your guide and resort before booking"}
                        </div>
                    </div>

                </div>
            </div>
            <div>


            </div>




        </div>
    )
}

export default withDataHandler(BookingPage)
