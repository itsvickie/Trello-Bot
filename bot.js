require('dotenv/config');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fetch = require('node-fetch');
const { resolve } = require('path')

const { bot, relatorios } = require('./src/message/messagens');
const { sprints } = require('./src/trello/trello');
const { diario } = require('./src/relatorios/relatorios');

client.on("ready", () => {
    console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity('!bot', { type: 'LISTENING' }); (`Eu estou em ${client.guilds.cache.size} servidores`);
});

// message.channel.send({
//     files: ['./bot.txt']
// });

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ + /g);
    const comando = args.shift().toLowerCase();

    switch(comando){
        case "bot":
            bot(message);
            break;
        case "relatorios":
            relatorios(message);
            break;
        case "diarios":
            diario(message);
            break;
        case 'sprints':
            sprints(message);
            break;
    }
});

client.login(process.env.DISCORD_TOKEN);