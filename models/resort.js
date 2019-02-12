const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId
const bcrypt = require('bcrypt')

const resortSchema = new mongoose.schema({
    name:String,
    city:String,
    State:String,
    guides: [{
        type:objectId,
        ref:Guide
    }],
    trails:Number,
    description:String,
    priceRating:Number
})