const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/register', (req, res) => {
    res.send('register');
})

router.post('/login', (req, res) => {
    res.send('login');
})

module.exports = router;