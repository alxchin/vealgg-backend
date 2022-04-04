
const express = require("express");
const searchJSONResponse = require('./res.json');
const app = express();

const PORT = process.env.PORT || 3001;



const cors = require('cors');
app.use(cors());
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    console.log('hello')
    res.json({ message: "Hello from Server!" });
});

app.post('/search', function (req, res) {
    res.json(searchJSONResponse)
});


