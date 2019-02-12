const express = require('express')
const Resort = require('../models/resort')
const resortRouter = express.Router()

resortRouter.route('/')
    .get((req,res,next) => {
        Resort.find()
            .then(resortCollection => res.status(200).send(resortCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req,res,next) => {
        const resortData = req.body;
        const resortDoc = new Resort(resortData)
        resortDoc.save()
            .then(savedResortDoc => res.status(201).send(savedResortDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
resortRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        Resort.findById(id)
            .then(foundResort => res.status(200).send(foundResort))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .delete((req, res, next) => {
        const id = req.params.id
        Resort.findByIdAndDelete(id)
            .then(() => res.status(204).send("Delete successful"))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .put((req, res, next) => {
        const id = req.params.id
        const updates = req.body
        Resort.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedResort => res.status(200).send(updatedResort))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

module.exports = resortRouter
