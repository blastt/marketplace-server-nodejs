const router = require('express').Router();

router.use('/offers', require('./offers'));
router.use('/orders', require('./orders'));
router.use('/users', require('./users'));
router.use('/games', require('./games'));

module.exports = router;