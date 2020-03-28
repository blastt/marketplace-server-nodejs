const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    Offer.findAll({ },{
        include: [
            { model: User, as: User.username }
        ]
    })
        .then(offers => {
          
            res.json(offers);
        })
        .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
    Offer.findOne({ where: { header: 'test143' } }, {
        include: [
            { model: User, as: User.username }
        ]
    })
        .then(offer => {
            console.log(offer);
            console.log(offer.User);
            res.json(offer);
        })
        .catch((err) => console.log(err));
});

router.post('/add', [check('price').isNumeric()], (req, res) => {
    let { header, description, price } = req.body;
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('422');
        return res.status(422);
    }
    Offer.create({ header, description, price })
        .then(o => {
            o => res.redirect('/offers');
            console.log('yes3');
        })
        .catch(err => console.log(err));
})

router.delete('/:id', (req, res) => {    
    res.json('success ' + req.params.id);
    return res.status(200);
});

module.exports = router;