var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Game = require('../models/game.model');

// CREATES A NEW GAME
router.post('/', function (req, res) {
    Game.create({
        date: req.body.date,
        active: req.body.active,
        players: req.body.players,
        matchs: req.body.matchs
    }, 
    function (err, game) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(201).send(game);
    });
});
// UPDATE GAME
router.put('/:id', function (req, res) {
    
    if (!req.params.id) {
        return res.status(400).send("Bad request");
    }

    Game.findByIdAndUpdate(
    { _id: req.params.id },
    {'active': req.body.active, 'matchs': req.body.matchs},
    function (err, game) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(201).send(game);
    });
});
// RETURNS ALL THE GAMES IN THE DATABASE
router.get('/', function (req, res) {
    Game.find({}, function (err, games) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(games);
    });
});
// RETURNS A GAME IN THE DATABASE
router.get('/:id', function (req, res) {

    if (!req.params.id) {
        return res.status(400).send("Bad request");
    }

    Game.findOne({'_id': req.params.id}, function (err, game) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(game);
    });
});
module.exports = router;
