const router = require('express').Router();
const goalRoutes = require('./goalRoutes');
const userRoutes = require('./userRoutes');
const statsRoutes = require('./statsRoutes');

router.use('/goals', goalRoutes)
router.use('/users', userRoutes)
router.use('/stats', statsRoutes)


module.exports = router;
