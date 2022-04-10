require('dotenv').config();
require('./db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9090;
const cors = require('cors');
app.use(cors());
app.use(express.json());

const guestRouter = require('./routes/guest-route');
app.use('/TYwedding',guestRouter);


app.listen(PORT, () => console.log("server up"))
 

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }