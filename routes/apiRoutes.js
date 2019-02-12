const express = require('express')
const apiRouter = express.Router()

app.use('/customer', require('./routes/customerRoutes'));
app.use('/guides', require('./routes/guideRoutes'));
app.use('/resorts', require('./routes/resortRoutes'));

module.exports = apiRouter