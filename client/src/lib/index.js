

export default (() => {

    const getObjectData = (id, collectionArray) => {
        if(!id || !collectionArray) return undefined
        const foundElement = collectionArray.find(item => item._id === id )
        return foundElement
    }

    //enter in helper functions here

    const getEasyDate = (date) => {
        console.log(date)
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        return(`${month}-${day}-${year}`)
    }


    return{
        //enter ref methods here
        getObjectData,
        getEasyDate
    }
})()