const express = require('express')
const Customer = require("../models/customer")
const Guide = require("../models/guide")
const editRouter = express.Router()

editRouter.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
        let customer = await Customer.findByIdAndUpdate(req.user._id, req.body)
        let guide = await Guide.findByIdAndUpdate(req.user._id, req.body);

        let user = guide || customer;
        if (!user) {
            res.status(403);
            throw Error('User does not exist.')
        }
    }
    catch (err) {
        next(err)
    }

})

module.exports = editRouter