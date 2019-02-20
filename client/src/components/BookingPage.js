import React from 'react'
import {withDataHandler} from '../DataHandler'
import { Link } from "react-router-dom"
import lib from '../lib/index.js'
import GuideCardlette from './GuideCardlette'
import ResortCardlette from './ResortCardlette'
import FormHandler from '../FormHandler'


function BookingPage(props) {
    const {user, guides, resorts, booking} = props

    //build guide & resort cardlett
    let bookingConfirm = false
    const guideDat = lib.getObjectData(booking.guide, guides)
    const resortDat = lib.getObjectData(booking.resort, resorts)
    const formInputs = {
        guide:{...guideDat},
        resort:{...resortDat},
        user:{...user}, 
        date:"",
        groupSize:1
        
    }

    return (
        <div>
            <div>
                <h1>Book Now!</h1>
            </div>
            <div>
                {guideDat ?  <GuideCardlette {...guideDat}/> : <Link to='/guides'>Select a Guide!</Link>}
            </div>
            <div>
                {resortDat ? <ResortCardlette {...resortDat}/> : <Link to="/resorts">Select a Resort!</Link>}
            </div>

            <div>
                
                {resortDat && guideDat ? 
                    <FormHandler inputs={formInputs} submit={(inputs) => {const res = props.bookNow(inputs).then((res) => !bookingConfirm)}} >
                        {
                            ({inputs, handleChange, handleSubmit}) => {

                                return(
                                    <form onSubmit={handleSubmit}>
                                        <input onChange={handleChange} type="date" name="date"/>
                                        <input onChange={handleChange} type="number" name="groupSize" placeholder="Group Size"/>
                                        <button>Book Now</button>
                                    </form>
                                )

                            }

                        }

                    </FormHandler>: 
                    "Select your guide and resort before booking"}
            </div>
        </div>
    )
}

export default withDataHandler(BookingPage)
