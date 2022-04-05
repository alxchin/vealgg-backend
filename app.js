const express = require("express");
const searchJSONResponse = require('./res.json');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const { Pool, Client } = require("pg");
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(express.json())

//import routes
const playersDataRoute = require('./routes/playersData');


//Routes
app.use('/api/playersSearch', playersDataRoute);



app.get("/api", (req, res) => {
  console.log('hello')
  res.json({ message: "Hello from Server!" });
});

app.post('/search', function (req, res) {
  res.json(searchJSONResponse)
});


//db config
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });
// //connect to db
// client.connect(err => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('connected')
//   }
// })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});