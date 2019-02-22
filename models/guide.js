const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId
const bcrypt = require('bcrypt')

const guideSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        // match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        unique: true,
        lowercase: true,
        required: true
    },
    nickName: {
        type: String,
        trim: true,
    },
    firstName: String,
    lastName: String,
    phoneNumber: String,
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ["customer", "guide"]
    },
    avatar: {
        type: String,
        default: "nouser.jpg"
    },
    aboutMe: String,
    bookings: [{
        type: objectId,
        ref: 'Bookings'
    }],
    abilityRange: [Number],
    resorts: [{
        type: objectId,
        ref: 'Resort'
    }],
    dailyRate:Number,
    reviews: [{
        customer: {
            type: objectId,
            ref: 'Customer'
        },
        comment: String,
        rating: Number
    }]
})

guideSchema.pre("save", function (next) {
    const user = this
    if (!user.isModified("password")) return next()
bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    next()
})
})

guideSchema.methods.withoutSensitiveInfo = function () {
    const user = this.toObject()
    delete user.password
    return user
}

guideSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })

}

module.exports = mongoose.model('Guide', guideSchema)