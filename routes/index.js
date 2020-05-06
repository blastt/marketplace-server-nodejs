const router = require('express').Router();

router.use('/offers', require('./offers'));
router.use('/orders', require('./orders'));
router.use('/users', require('./users'));
router.use('/games', require('./games'));
router.use('/api/user', require('./auth'));

module.exports = router;