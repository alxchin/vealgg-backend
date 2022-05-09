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


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});