const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/add', (req, res) => {
    let {username, email, login, password} = req.body;

    User.create({username, email, login, password})
    .then((u) => {
        res.redirect('/users');
        console.log("user was created:" + u);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.get('/', (req, res) => {
    User.findAll()
    .then(users => {
        res.send(users)
    })
    .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    User.findOne({ where: { id: id } })
    .then((user) => {
        res.send(user);
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;