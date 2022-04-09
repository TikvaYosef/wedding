require('dotenv').config();
require('./db');
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('server is online');
})

app.listen(port);