const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const insertPlayerDB = require('../insertPlayer')


const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();


router.post('/', function (req, res) {
    const searchedPlayers = req.body

    randGroupID = Date.now() / Math.floor((Math.random() * 10000))
    console.log(randGroupID)

    for (let player in searchedPlayers) {
        const insertGroupText = `INSERT INTO players VALUES
            ('${searchedPlayers[player].name}', '${searchedPlayers[player].tag}', ${randGroupID});`
        client.query(insertGroupText, (err, res) => {
            if (err) throw err;
        });
        client.query(`INSERT INTO playersrr VALUES
            ('${searchedPlayers[player].name}', '${searchedPlayers[player].tag}', '{1}', '{1}');`, (err, res) => {
            if (err.code == 23505) {
                console.log('sss')
            };
        })
        // client.query(`INSERT INTO playersrr VALUES = ${randGroupID}`, (err, res) => {
        //     data = res.rows
        // })
    }
});



module.exports = router;