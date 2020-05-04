const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { check, validationResult } = require('express-validator');

router.post('/add', (req, res) => {
    let { status, sum, amount, withdrawAmount, offerId } = req.body;

    db.Order.create({ status, sum, amount, withdrawAmount, offerId })
        .then(order => {
            res.redirect('/offers');
        })
        .catch((err) => console.log(err));
})

router.get('/', (req, res) => {
    db.Order.findAll({
        include: {
            model: db.Offer
        }
    })
        .then(offers => {
            res.json(offers);
        })
        .catch((err) => console.log(err));
})

module.exports = router;