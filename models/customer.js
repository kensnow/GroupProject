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
    firstName:String,
    lastName:String,
    abilityLevel: {
        type: Number,
        default: 0,
        enum: [0, 1, 2, 3]
    },
    phoneNumber: String,
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

customerSchema.pre("save", function (next) {
    const user = this
    if (!user.isModified("password")) return next()
bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    next()
})
})

customerSchema.methods.withoutSensitiveInfo = function () {
    const user = this.toObject()
    delete user.password
    delete user.email
    delete user.lname
    return user
}

customerSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })

}

module.exports = mongoose.model('Customer', customerSchema)