const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const objectId = mongoose.Schema.Types.ObjectId


const customerSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    abilityLevel: {
        type: Number,
        default: 0,
        enum: [0, 1, 2, 3]
    },
    phoneNumber: {
        type: String,
        required: true
    },
    userType:{
        type:String,
        enum:["Customer","Guide"]
    },
    bookings: [{
        type:objectId,
        ref:"Bookings"
    }],
    favorites:{
        resort:[{
            type:objectId,
            ref:'Resort'
        }],
        guide:[{
            type:objectId,
            ref:'Guide'
        }]
    }
})

module.exports = mongoose.model('Customer', customerSchema)