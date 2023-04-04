const router = require('express').Router();
const modelRoutes = require('./modelRoutes');

router.use('/model', modelRoutes)


module.exports = router;
