const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const configcord = require('./config/discord.json')
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const utils = require('utils-jota')
const { Server } = require("socket.io");
const config = require('./config/port.json');
const io = new Server(server);

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
});

client.on("ready", () => {
    console.log({ discord: true, loggedON: client.user.tag})
})

io.on('connection', (socket) => {
    socket.on('discord', async (msg) => {
        let userInfo = await client.users.fetch(msg.id);
        socket.emit('result', {userInfo: userInfo});
    });
});

client.login(configcord.token)
server.listen(config.port, () => {
  console.log({ status: true, port: config.port});
});