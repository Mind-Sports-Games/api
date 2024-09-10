const fetch = require('node-fetch');

/* Create your personal token on https://playstrategy.org/account/oauth/token */
const personalToken = '';

fetch('https://playstrategy.org/api/account', {
    headers: {
      'Authorization': 'Bearer ' + personalToken
    }
  })
  .then(res => res.json())
  .then(console.log);
