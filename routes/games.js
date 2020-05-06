const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.game.findAll()
        .then(games => {
            res.json(games)
        })
        .catch(err => console.log(err))
})

router.get('/:id', (req, res, next) => {

    const gameId = req.params.id;
    if (isNaN(gameId)) {
        next();
    }
    db.game.findOne({ where: { id: gameId } })
        .then(game => {
            res.json(game);
        })
        .catch((err) => console.log(err));

});

router.get('/:name', (req, res) => {
    const gamename = req.params.name;
    db.game.findOne({ where: { value: gamename } })
        .then(game => {
            res.json(game);
        })
        .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
    let { name, value, rank } = req.body;

    db.game.create({
        name,
        value,
        rank
    })
        .then((game) => {
            res.redirect('/games');
        })
        .catch(err => console.log(err));
})

router.delete('/:id', (req, res) => {
    db.game.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((game) => {
            res.json(game);
        })
        .catch(err => console.log(err));
})

module.exports = router;