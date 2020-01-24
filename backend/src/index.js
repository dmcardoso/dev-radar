const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
    'mongodb+srv://devradar:devradar@cluster0-ixddo.mongodb.net/devradar?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
