require('dotenv/config');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const { bot, relatorios } = require('./src/message/messagens');
const { ticket, cardsAndamento, reuniao } = require('./src/trello/trello');
const { diario } = require('./src/relatorios/relatorios');

// const http = require('http');

// const server = http.createServer((req, res) => {
//     respondToRequest(req, res);
// });

// server.listen(process.env.PORT || 8080)

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

    switch (comando) {
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
            cardsAndamento(message, 'Geraldo', process.env.GERALDO);
            break;
        case 'anderson':
            cardsAndamento(message, 'Anderson', process.env.ANDERSON);
            break;
        case 'murimuri':
            cardsAndamento(message, 'João', process.env.JOAO);
            break;
        case 'vickie':
            cardsAndamento(message, 'Vickie', process.env.VICKIE);
            break;
        case 'gabriel':
            cardsAndamento(message, 'Gabriel', process.env.GABRIEL);
            break;
        case 'ticket':
            ticket(args, message);
            break;
        case 'reuniao':
            reuniao(args, message);
            break;
        case 'teste':
            break;
            // var embed = new Discord.MessageEmbed().setTitle("oi").setColor(0x007AC0).setDescription();
    }
});

client.login(process.env.DISCORD_TOKEN);