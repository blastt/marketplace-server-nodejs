const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/', (req, res) => {
    db.Game.findAll()
    .then(games => {
        res.send(games)
    })
    .then(err => console.log(err))
})

router.get('/:id', (req, res, next) => {
    
    const gameId = req.params.id;
    if (isNaN(gameId)) {
        next();
    }
    db.Game.findOne({ where: { id: gameId } })
        .then(game => {
            res.json(game);
        })
        .catch((err) => console.log(err));
    
});

router.get('/:name', (req, res) => {
    const gamename = req.params.name;
    db.Game.findOne({ where: { name: gamename } })
        .then(game => {
            res.json(game);
        })
        .catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
    let {name, value} = req.body;

    db.Game.create({
        name,
        value 
    })
    .then((g) => {
        res.redirect('/games');
        console.log("game was created:" + g);
    })
    .catch(err => console.log(err));
})

module.exports = router;