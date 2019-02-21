

const express = require("express")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const Customer = require("../models/customer")
const Guide = require("../models/guide")

authRouter.post("/signup", (req, res, next) => {
    //Check to see if email is already in the collection
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
                    //new user does not work if the user is a guide.
                    //is this because newUser.save only tries to save to Customer collection?
                    //how does it know which collection to save to?
                    newUser.save((err, user) => {
                        console.log(user)
                        console.log(newUser)
                        if (err) return res.status(500).send({ success: false, err })

                        //Login and send token
                        return res.status(200).send(loginUserInfo(user))
                    })
                }
            })
        }
    })
})


authRouter.post("/login", async (req, res, next) => {
    try {
        let customer = await Customer.findOne({ email: `${req.body.email}` })
        let guide = await Guide.findOne({ email: `${req.body.email}` })

        let user = guide || customer;
        if (!user) {
            res.status(403);
            throw Error('The email/password combination provided is incorrect')
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err)
            if (!match) return res.status(403).send({
                success: false, message: "The email/password combination provided is incorrect"
            })
            return res.status(200).send(loginUserInfo(user))
        })


    }
    catch (err) {
        next(err)
    }

})

const loginUserInfo = (user) => {
    return {
        user: user.withoutSensitiveInfo(),
        token: jwt.sign(user.withoutSensitiveInfo(), process.env.SECRET)
    }
}



module.exports = authRouter