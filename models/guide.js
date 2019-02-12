const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId
const bcrypt = require('bcrypt')

const guideSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        unique: true,
        lowercase: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phoneNumber: String,
    password: {
        type: String,
        required: true
    },
    userType:{
        type:String,
        enum:["Customer","Guide"]
    },
    profileImg: {
        type: Buffer,
        contentType: String
    },
    aboutMe: String,
    bookings: [{
        type:objectId,
        ref:'Bookings'
    }],
    abilityRange: [],
    resorts: [{
        type: objectId,
        ref: 'Resort'
    }],
    reviews: [{
        customer: {
            type: objectId,
            ref: 'Customer'
        },
        comment: String,
        rating: Number
    }]
})

module.exports = mongoose.model('Guide', guideSchema)