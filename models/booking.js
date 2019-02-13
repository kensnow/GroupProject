const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const objectId = mongoose.Schema.Types.ObjectId

const bookingSchema = new mongoose.Schema({
    
    date: Date,
    guide:{
        type:objectId,
        ref:'Guide'
    },
    resort:{
        type:objectId,
        ref:'Resort'
    },
    customer:{
        type:objectId,
        ref:'Customer'
    },
    groupSize: Number

})

module.exports = mongoose.model('Booking', bookingSchema)