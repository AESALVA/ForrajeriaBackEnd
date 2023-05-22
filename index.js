const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

require('dotenv').config();
let cors = require('cors')
app.use(cors({origin:"*"}));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  }).then(()=>{console.log('database connection OK')}).catch((error)=>{console.error(error)});

const PORT = process.env.PORT || 8000;

const usersRoutes = require('./Routes/users');
app.use('/users', usersRoutes)
const commentsRoutes = require('./Routes/products');
app.use('/products', commentsRoutes)


app.listen(PORT, ()=>{console.log('server running on port '+ PORT )});

