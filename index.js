const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

require('dotenv').config();
let cors = require('cors')
app.use(cors({origin:"*"}));

mongoose.connect('mongodb+srv://DamianEduardo:raWlFhVWOx81FXz7@cluster0.rflxtdv.mongodb.net/ForrajeriaDamian?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  }).then(()=>{console.log('database connection OK')}).catch((error)=>{console.error(error)});

const PORT = process.env.PORT || 8000;

const usersRoutes = require('./Routes/users');
app.use('/users', usersRoutes)


app.listen(PORT, ()=>{console.log('server running on port '+ PORT )});

