const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://LuisCarlos:LuisCarlos@cluster0-nnhyu.mongodb.net/tindev?retryWrites=true&w=majority',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const routes = require('./routes');
app.use(express.json())
app.use(routes)

app.listen(3001)