const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')
const expressJWT = require("express-jwt")
const path = require('path')


const app = express()
app.use(morgan('dev'))
app.use(express.json())



mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to MongoDB")
    }
);

//app.use...
app.use("/api", expressJWT({ secret: process.env.SECRET }))
app.use('/api', require('./routes/apiRoutes'))
app.use('/auth', require('./routes/authRoutes'))
app.get('/image/:filename', (req, res) => {
    let filename = req.params.filename
    res.sendFile(path.join(__dirname, 'avatars', filename))
})

//error handler
app.use((err, req, res, next) => {
    console.error(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

app.listen(process.env.PORT, () => (
    console.log("listening on port" + process.env.PORT)
))