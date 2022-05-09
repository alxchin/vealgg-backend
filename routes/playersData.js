const express = require('express');
const router = express.Router();
const Task = require('../models/PlayersData');
const trackerScrapper = require('../scrapper')

const names = ["Beifeng", "Hiding Duck", "1 800 Psyduck", "Peeking Duck"]
const hashtag = ["1800", "ELLOW", "NA1", "Quack"]


const data = trackerScrapper(['Beifeng'], ['1800'])

router.get('/', async (req, res) => {

    const player = await Players.create({
        name: 'Beifeng',
        tag: '1800',
        timeSeriesRR: data[0]
    });

    const users = await Players.findAll();
})

module.exports = router;