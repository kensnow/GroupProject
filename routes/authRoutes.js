

const express = require("express")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const Customer = require("../models/customer")
const Guide = require("../models/guide")

authRouter.post("/signup", (req, res, next) => {
    //Check to see if email is already in the collection
    console.log(req)
    Customer.findOne({ email: `${req.body.email}` }, (err, existingUser) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        else if (existingUser === null) {
            Guide.findOne({ email: `${req.body.email}` }, (err, existingGuide) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                else if (existingGuide !== null) {
                    res.status(400)
                    return next(new Error("Sorry, there is an account linked to that email already."))
                } else {
                    const newUser = req.body.userType === "guide" ? new Guide(req.body) : new Customer(req.body)
                    newUser.save((err, user) => {
                        if (err) return res.status(500).send({ success: false, err })

                        //Login and send token
                        return res.status(200).send(loginUserInfo(user))
                    })
                }
            })


            // return next(err)
        }

        // If we make it this far, save the User to the collection and log them in by sending a token.

    })
})

authRouter.post("/login", (req, res, next) => {
    Customer.findOne({ email: `${req.body.email}` }, (err, user) => {
        //this code is broken for guides logging in.  TODO - fix
        //error is thrown due to missing user info, even after sucessfully logging in as guide
        let theUser = user
        
        
        if (!user) {
            return Guide.findOne({ email: `${req.body.email}` }, (err, user) => {
                if (err) return res.status(500).send(err)
                if (!user) return res.status(403).send({
                    success: false, message: "The email/password combination provided is incorrect"
                })
                console.log(user)
                theUser = user
            })
        }
        if (err) return res.status(500).send(err)
        theUser.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err)
            if (!match) return res.status(403).send({
                success: false, message: "The email/password combination provided is incorrect"
            })

            // Login and send token
            return res.status(200).send(loginUserInfo(user))
        })
    })

})

const loginUserInfo = (user) => {
    return {
        user: user.withoutSensitiveInfo(),
        token: jwt.sign(user.withoutSensitiveInfo(), process.env.SECRET)
    }
}

const checkPassword = (user) => {

}


module.exports = authRouter