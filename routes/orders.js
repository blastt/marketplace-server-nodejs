const express = require('express');
const router = express.Router();
const db = require('../models');
const { check, validationResult } = require('express-validator');

router.post('/add', (req, res) => {
    let { status, sum, amount, withdrawAmount, offerId } = req.body;

    db.order.create({ status, sum, amount, withdrawAmount, offerId })
        .then(order => {
            res.redirect('/offers');
        })
        .catch((err) => console.log(err));
})

router.get('/', (req, res) => {
    db.order.findAll({
        include: {
            model: db.offer
        }
    })
        .then(offers => {
            res.json(offers);
        })
        .catch((err) => console.log(err));
})

module.exports = router;