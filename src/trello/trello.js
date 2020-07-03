require('dotenv/config');
const fetch = require('node-fetch');

const api_key = process.env.KEY_TRELLO;
const api_token = process.env.TOKEN_TRELLO;

module.exports = {
  async sprints(message) {
    fetch(`https://api.trello.com/1/list/5e3f5ab150a2fe8da6ecd905/cards/?key=${api_key}&token=${api_token}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(names => {
        for (const name of names) {
          message.channel.send(name.name);
        }
      });
  }
}