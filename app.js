const express = require("express");
const searchJSONResponse = require('./res.json');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const { Client } = require("pg");
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(express.json())

//import routes
const playersDataRoute = require('./routes/playersData');
const playersSearchRoute = require('./routes/playersSearch')

//Routes
app.use('/api/playersSearch', playersDataRoute);
app.use('/search', playersSearchRoute);


app.get("/api", (req, res) => {
  console.log('hello')
  res.json({ message: "Hello from Server!" });
});


// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();
// var tableExists = true
// while (tableExists) {
//   randTableName = `players${Math.floor((Math.random() * 10000))}`
//   tableExists = client.query(`SELECT EXISTS (SELECT FROM ${randTableName})`, (err, res) => {
//     if (err) return false
//   })
// }
// client.query(`CREATE TABLE ${randTableName} (name varchar(16), tag varchar(5));`, (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});