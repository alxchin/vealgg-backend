const { Client } = require("pg");



function insertPlayerDB(searchedPlayers) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    client.connect();
    for (var i in searchedPlayers) {
        client.query(`CREATE TABLE i${searchedPlayers[i].name}${searchedPlayers[i].tag} (date DATE, rr varchar(10));`, (err, res) => {
            if (err) throw err;
            for (let row of res.rows) {
                console.log(JSON.stringify(row));
            }
        });
    }
}

module.exports = insertPlayerDB