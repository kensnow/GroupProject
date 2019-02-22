

export default (() => {

    const getObjectData = (id, collectionArray) => {
        console.log(id)
        console.log(collectionArray)
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

    const priceRating = (number) => {
        let priceIcon = []
        for (let i = 0; i < number; i++){
            priceIcon.push("$")
        }
        return priceIcon.join("")
    }

    return{
        //enter ref methods here
        getObjectData,
        getEasyDate,
        priceRating
    }
})()