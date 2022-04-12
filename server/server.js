require('dotenv').config();
require('./db');


const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9090;
const app = express();
const guestRouter = require('./routes/guest-route');
app.use(express.json());
app.use(cors());
app.listen(PORT, () => console.log("server up"))


app.use("/api/wedding",guestRouter);
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}