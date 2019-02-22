import React from 'react'
import { withDataHandler } from '../DataHandler'
import GuideCard from './GuideCard'

function GuidesPage(props) {

    const guideList = props.guides.map((guide, i) => <GuideCard key={i} {...guide} guideNum={i} bookService={props.bookService} />)
    //pass down guide object array to guide cards, render new guide card for each guide in database
    return (


        <div className="page-img-guide">
            <div className="text-box-guide">
                <h1 className="heading-primary-guide">
                    <span className="heading-primary-main-guide">Ski like a local.</span> <br />
                    <span className="heading-primary-sub-guide">with our guides</span>
                </h1>

            </div>
            <div className="row">
                <div className="cards-wrapper">

                    {guideList}



                </div>
            </div>



        </div>



    )
}

export default withDataHandler(GuidesPage)
