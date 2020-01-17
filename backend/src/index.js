const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb+srv://devradar:devradar@cluster0-ixddo.mongodb.net/devradar?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
