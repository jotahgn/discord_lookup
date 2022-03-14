const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const utils = require('utils-jota')
const { Server } = require("socket.io");
const config = require('./config/port.json');
const io = new Server(server);

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

let discord = 'OTUyOTQxODAyODQxODM3NjU4.Yi9WNg.YczmWUhVNQWj-KhY1tnE_kPdhaA';

io.on('connection', (socket) => {
    socket.on('discord', (msg) => {
        console.log(msg)    
    });
});

server.listen(config.port, () => {
  console.log({ status: true, port: config.port});
});