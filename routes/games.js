const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

router.get('/', (req, res) => {
    Game.findAll()
    .then(games => {
        res.send(games)
    })
    .then(err => console.log(err))
})

router.post('/add', (req, res) => {
    let {name, value} = req.body;

    Game.create({
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