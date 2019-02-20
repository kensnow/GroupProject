import React from 'react'

function ResortCardlette(props) {
    const {name, city, state, image} = props
    return (
        <div>
            <div>{image}</div>
            <h3>{name}</h3>
            {city}, {state}
        </div>
    )
}

export default ResortCardlette
