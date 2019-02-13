const express = require('express')
const Booking = require('../models/booking')
const bookingRouter = express.Router()

bookingRouter.route('/')
    .get((req,res,next) => {
        Booking.find()
            .then(bookingCollection => res.status(200).send(bookingCollection))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
    .post((req,res,next) => {
        const bookingData = req.body;
        const bookingDoc = new Booking(bookingData)
        bookingDoc.save()
            .then(savedBookingDoc => res.status(201).send(savedBookingDoc))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })
bookingRouter.route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        Booking.findById(id)
            .then(foundBooking => res.status(200).send(foundBooking))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .delete((req, res, next) => {
        const id = req.params.id
        Booking.findByIdAndDelete(id)
            .then(() => res.status(204).send("Delete successful"))
            .catch(err => {
                res.status(500)
                next(err)
            })
    })
    .put((req, res, next) => {
        const id = req.params.id
        const updates = req.body
        Booking.findByIdAndUpdate(id, updates, {new:true})
            .then(updatedBooking => res.status(200).send(updatedBooking))
            .catch(err => {
                res.status(500);
                next(err);
            })
    })

module.exports = bookingRouter
