const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { check, validationResult } = require('express-validator');



router.get('/:id', (req, res, next) => {
    db.Offer.findOne({
        where: { id: req.params.id },
        include: [
            { model: db.User },
            { model: db.Game }
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

    db.Game.findOne({ where: { name: gamename } })
        .then(game => {
            db.Offer.create({ header, description, price })
                .then(offer => offer.createGame(game))
                .then(() => res.redirect('/offers'))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));

})

router.get('/', (req, res) => {
    //const game = req.query.game;
    db.Offer.findAll({
        include: [
            {
                model: db.User
            },
            {
                model: db.Game,
                // where: {
                //     name: game
                // }
            }
        ],

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