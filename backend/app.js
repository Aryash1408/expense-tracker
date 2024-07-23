const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const{readdirSync}=require('fs')

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//routes 
readdirSync('./routes').map((route)=>app.use('/link',require('./routes/'+route)))


const server = () => {
    db(); // Call the db function
    app.listen(PORT, () => {
        console.log("listening to port:", PORT);
    });
};

server();
