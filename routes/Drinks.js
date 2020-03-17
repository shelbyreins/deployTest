const express = require('express');
const drinks = express.Router();
const cors = require("cors");

const Drink = require("./../models/Drink");
drinks.use(cors());

drinks.post("/addDrink", function (req, res) {
    const drinkData = {
        userId: req.body.userId,
        event: req.body.event,
        date: req.body.date
    };

    Drink.create(drinkData)
        .then(drink => {
            res.json({ status: drink.quantity + ' Event Added' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});

drinks.get("/getAllEvents/:userId", function (req, res) {
    Drink.find({ userId: req.params.userId })
        .then(function (events) {
            res.json(events);
        })
        .catch(function (err) {
            res.json(err);
    });
});

drinks.get("/removeEvent/:userId/:date/:event", function (req, res) {
    Drink.deleteOne({ userId: req.params.userId, date: req.params.date, event: req.params.event })
        .then(function (events) {
            res.json(events);
        })
        .catch(function (err) {
            res.json(err);
    });
})

module.exports = drinks;