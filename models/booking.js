const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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