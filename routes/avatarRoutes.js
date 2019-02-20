const express = require('express')
const Customer = require("../models/customer")
const Guide = require("../models/guide")
const multer = require('multer')
const upload = multer({ dest: './avatars/' })
const avatarRouter = express.Router()

avatarRouter.post('/', upload.single('file'), async (req, res) => {
    try {
        if (req.file) {
            let customer = await Customer.findByIdAndUpdate(req.user._id, { avatar: req.file.filename })
            let guide = await Guide.findByIdAndUpdate(req.user._id, { avatar: req.file.filename });

            res.status(200).send({message: 'Update successful'})
        } else {
            throw Error('No file sent')
        }
    }
    catch (err) {
        res.status(500);
        next(err)
    }
})

//
avatarRouter.get('/:filename', (req, res) => {
    var filename = req.params.filename
    res.sendFile(__dirname + path.join('..', 'avatars', filename))
})

module.exports = avatarRouter