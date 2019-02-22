const express = require('express')
const apiRouter = express.Router()

apiRouter.use('/customers', require('./customerRoutes'));
apiRouter.use('/guides', require('./guideRoutes'));
apiRouter.use('/resorts', require('./resortRoutes'));
apiRouter.use('/bookings', require('./bookingRoutes'));
apiRouter.use('/avatar', require('./avatarRoutes'));
apiRouter.use('/edit', require('./editRoutes'))

module.exports = apiRouter