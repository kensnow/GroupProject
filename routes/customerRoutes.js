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
        const customerDoc = new Customer(customerData)
        customerDoc.save()
            .then(savedCustomerDoc => res.status(201).send(savedCustomerDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
customerRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        Customer.findById(id)
            .then(foundCustomer => res.status(200).send(foundCustomer))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .delete((req, res, next) => {
        const id = req.params.id
        Customer.findByIdAndDelete(id)
            .then(() => res.status(204).send("Delete successful"))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .put((req, res, next) => {
        
        const id = req.params.id
        const updates = req.body
        Customer.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedCustomer => res.status(200).send(updatedCustomer))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

module.exports = customerRouter
