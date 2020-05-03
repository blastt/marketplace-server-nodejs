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

router.post('/add', async (req, res) => {
    let { header, description, accountLogin, sellerPaysCharge, accountCreatedDate, price, games } = req.body;

    let foundGames = await db.Game.findAll({ where: { value: games } })

    db.Offer.create({ header, description, accountLogin, sellerPaysCharge, accountCreatedDate, price, userId: 1 })
        .then(offer => {
            let ids = foundGames.map((el) => el.id);
            offer.addGames(ids);           
        })
        .then((data) => {
            res.redirect('/offers');
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