import axios from 'axios'

export default (() => {

    const getObjectData = (id, collectionArray) => {
        const foundElement = collectionArray.find(item => item._id === id )
        return foundElement
    }

    //enter in helper functions here

    return{
        //enter ref methods here
        getObjectData
    }
})()