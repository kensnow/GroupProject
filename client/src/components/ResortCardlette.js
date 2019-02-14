import React from 'react'

function ResortCardlette(props) {
    const {name, city, state, image} = props
    return (
        <div>
            <div>{image}</div>
            {name}
            {city}, {state}
        </div>
    )
}

export default ResortCardlette
