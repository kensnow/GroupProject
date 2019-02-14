import React from 'react'


// name:String,
// city:String,
// State:String,
// guides: [{
//     type:objectId,
//     ref:'Guide'
// }],
// trails:Number,
// description:String,
// priceRating:Number

function ResortCard(props) {
    const {name, city, state, guides, trails, description, priceRating} = props

    //map through guides and create a guide cardlett for each
    return (
        <div>
            {/* Display resort info on front */}
            <div className="card resort-card resort-card-front">
                {name}
                {city}, {state}
                {trails} {priceRating}
                {description}
            </div>
            {/* display guide cardletts on back */}
            <div className="card resort-card resort-card-back"></div> 
        </div>
    )
}

export default ResortCard
