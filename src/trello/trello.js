require('dotenv/config');
const { cleanMask } = require('../mask');
const fetch = require('node-fetch');

const api_key = process.env.KEY_TRELLO;
const api_token = process.env.TOKEN_TRELLO;

module.exports = {
  async geraldo(message) {
    fetch(`https://api.trello.com/1/member/5d177fcba8bce50bf0b8c9db/cards/?key=${api_key}&token=${api_token}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(names => {
        message.channel.send('GREENER: **Geraldo** tem os seguintes cards em andamento:\n');
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
  async anderson(message) {
    fetch(`https://api.trello.com/1/member/5e597d588291297ec8d5d0b9/cards/?key=${api_key}&token=${api_token}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(names => {
        message.channel.send('GREENER: **Anderson** tem os seguintes cards em andamento:\n');
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
  async joao(message) {
    fetch(`https://api.trello.com/1/member/5d6963ab5bd59b626ea398fc/cards/?key=${api_key}&token=${api_token}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(names => {
        message.channel.send('GREENER: **João** tem os seguintes cards em andamento:\n');
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
  async vickie(message) {
    fetch(`https://api.trello.com/1/member/5cd6e99e20e41b48aa4aa9c2/cards/?key=${api_key}&token=${api_token}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(names => {
        message.channel.send('GREENER: **Vickie** tem os seguintes cards em andamento:\n');
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
  async gabriel(message) {
    fetch(`https://api.trello.com/1/member/576b4f0f52026df8acad405c/cards/?key=${api_key}&token=${api_token}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(names => {
        message.channel.send('GREENER: **Vickie** tem os seguintes cards em andamento:\n');
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

    fetch(`https://api.trello.com/1/cards?key=daa542e26db63633dc45e0b48912fdf0&token=f726f66d43922a43d9c9c2168a977e29b906db3b6aaee06ce9fd96b9f2b4b28e&idList=5f01429163c6fb5c8b558b6e&idMembers=5cd6e99e20e41b48aa4aa9c2&name=${encodeURI(titulo, 'UTF-8')}&desc=${encodeURI(desc, 'UTF-8')}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(() => {
      message.channel.send(`${message.author}, seu ticket foi criado no quadro **GREENER**!\nTítulo: ${titulo}\nDescrição: ${desc}`);
    })
  }
}