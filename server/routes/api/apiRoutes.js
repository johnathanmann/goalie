const router = require('express').Router();
const goalRoutes = require('./goalRoutes');
const userRoutes = require('./userRoutes');

router.use('/goal', goalRoutes)
router.use('/users', userRoutes)


module.exports = router;
