require('dotenv/config');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const { bot, relatorios } = require('./src/message/messagens');
const { sprints, geraldo, anderson, joao, vickie, ticket } = require('./src/trello/trello');
const { diario } = require('./src/relatorios/relatorios');

const http = require('http');

const server = http.createServer((req, res) => {
  respondToRequest(req, res);
});

server.listen(process.env.PORT || 3000)

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

    const args = message.content.slice(config.prefix.length).split(/ [()]/g);
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
        case 'geraldo':
            geraldo(message);
            break;
        case 'anderson':
            anderson(message);
            break;
        case 'murimuri':
            joao(message);
            break;
        case 'vickie':
            vickie(message);
            break;
        case 'gabriel':
            gabriel(message);
            break;
        case 'ticket':
            ticket(args, message);
            break;
    }
});

client.login(process.env.DISCORD_TOKEN);