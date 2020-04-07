const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');
const User = require('../models/User');
const Game = require('../models/Game');
const { check, validationResult } = require('express-validator');



router.get('/:id', (req, res, next) => {
    Offer.findOne({
        where: { id: req.params.id },
        include: [
            { model: User },
            { model: Game }
        ]
    })
        .then(offer => {
            console.log(offer);
            console.log(offer.user);
            res.json(offer);
        })
        .catch((err) => {
            console.log(err);
            next();
        });
});

router.post('/add', (req, res) => {
    let { header, description, price, gamename } = req.body;

    Game.findOne({ where: { name: gamename } })
        .then(game => {
            Offer.create({ header, description, price })
                .then(offer =>  offer.createGame(game))
                .then(() => res.redirect('/offers'))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));

})

router.get('/', (req, res) => {
    Offer.findAll({
        include: [
            { model: User },
            { model: Game }
        ]
    })
        .then(offers => {

            res.json(offers);
        })
        .catch((err) => console.log(err));
});



router.delete('/:id', (req, res) => {
    res.json('success ' + req.params.id);
    return res.status(200);
});

module.exports = router;