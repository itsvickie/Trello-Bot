require('dotenv/config');
const { cleanMask } = require('../mask');
const fetch = require('node-fetch');
const { parseISO, isAfter } = require('date-fns');

const api_key = process.env.KEY_TRELLO;
const api_token = process.env.TOKEN_TRELLO;

module.exports = {
  async cardsAndamento(message, name, idMember) {
    fetch(`https://api.trello.com/1/member/${idMember}/cards/?key=${api_key}&token=${api_token}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(names => {
        message.channel.send(`GREENER: **${name}** tem os seguintes cards em andamento:\n`);
        for (const name of names) {
          if (name.due && name.dueComplete === false) {
            fetch(`https://api.trello.com/1/list/${name.idList}/name/?key=${api_key}&token=${api_token}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            })
              .then(res => res.json())
              .then(list => {
                message.channel.send("[" + list._value + "] - " + name.name);
              })
          }
        }
      });
  },
  async ticket(args, message) {
    const titulo = cleanMask(args[0]);
    const desc = cleanMask(args[1]);

    fetch(`https://api.trello.com/1/cards?key=${api_key}&token=${api_token}&idList=${process.env.LIST_TICKET}&idMembers=${process.env.VICKIE}&name=${encodeURI(titulo, 'UTF-8')}&desc=${encodeURI(desc, 'UTF-8')}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(() => {
        message.channel.send(`${message.author}, seu ticket foi criado no quadro **GREENER** e já informado à <@191570063483076609>!\n\n**TÍTULO**: ${titulo}\n**DESCRIÇÃO**: ${desc}`);
      })
  },
  async reuniao(args, message) {
    const assunto = cleanMask(args[0]);
    const desc = cleanMask(args[1]);

    fetch(`https://api.trello.com/1/cards?key=${api_key}&token=${api_token}&idList=${process.env.LIST_REUNIAO}&idMembers=${process.env.VICKIE}&name=${encodeURI(assunto, 'UTF-8')}&desc=${encodeURI(desc, 'UTF-8')}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(() => {
        const date = '2019-07-06 18:00:00';
        const parsedDate = parseISO(date);

        const past = isAfter(parsedDate, new Date());
        console.log(past);
        message.channel.send(`${message.author}, sua reunião foi marcada no quadro **GREENER**\n`);
      })
  }
}