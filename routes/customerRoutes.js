const express = require('express')
const Customer = require('../models/customer')
const customerRouter = express.Router()

customerRouter.route('/')
    .get((req,res,next) => {
        Customer.find()
            .then(customerCollection => res.status(200).send(customerCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req,res,next) => {
        const customerData = req.body;
        const customerDoc = new Customer(profileData)
        customerDoc.save()
            .then(savedCustomerDoc => res.status(201).send(savedCustomerDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

