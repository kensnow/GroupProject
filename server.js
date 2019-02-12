const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')
//insert expressJWT when completing auth

const app = express()
app.use(morgan('dev'))
app.use(express.json())

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI,
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to MongoDB");
    }
);

//app.use...
app.use('/api', require('./routes/apiRoutes'))


//error handler
app.use((err, req, res, next) => {
    console.log(err.name)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send(err.message)
})

app.listen(process.env.PORT, () => (
    console.log("listening on port" + process.env.PORT)
))