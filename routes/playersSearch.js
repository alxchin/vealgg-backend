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
    //check if player exists
    var randTableName = `players${Math.floor((Math.random() * 10000))}`
    var tableExists = client.query(`SELECT EXISTS (SELECT FROM ${randTableName})`, (err, res) => {
        if (err) return false
    })
    //if exist generate another name
    while (tableExists) {
        randTableName = `players${Math.floor((Math.random() * 10000))}`
    }
    //if it dosent exist, generate a table with that name
    client.query(`CREATE TABLE ${randTableName} (name varchar(16), tag varchar(5));`, (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
        }
    });
    //loop and insert all users within the group
    for (let player in searchedPlayers) {
        console.log(searchedPlayers[player].name)
        const insertGroupText = `INSERT INTO ${randTableName} VALUES
            ('${searchedPlayers[player].name}', '${searchedPlayers[player].tag}');`
        client.query(insertGroupText, (err, res) => {
            if (err) throw err;
        });
    }
    insertPlayerDB(searchedPlayers)
    // res.json(searchJSONResponse)
});





// client.query('CREATE TABLE players (name varchar(16), tag varchar(5), GroupID int);', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

module.exports = router;