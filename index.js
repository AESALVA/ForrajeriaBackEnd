const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

require('dotenv').config();
let cors = require('cors')
app.use(cors({origin:"*"}));





app.listen(PORT, ()=>{console.log('server running on port '+ PORT )});

