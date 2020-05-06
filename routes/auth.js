const express = require('express');
const router = express.Router();
const db = require('../models');
const { registerValidation } = require('../validation')

//Validation



router.post('/register', (req, res) => {
    
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let { username, password, email } = req.body;
    db.user.create({ username, password, email })
    .then(user => {
        res.send(user);
    })
    .catch(err => res.statusCode(400).send(err));
})

router.post('/login', (req, res) => {
    res.send('login');
})

module.exports = router;