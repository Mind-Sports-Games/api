const port = 8076;
const appId = 'yourAppIdHere';
const appSecret = 'yourAppSecretHere';

export const config = {
  http: {
    port: port,
    url: `http://localhost:${port}`
  },
  mongodb: {
    url: 'mongodb://localhost:27017',
    dbName: 'board-api-example'
  },
  cookie: {
    secret: 'changeme!'
  },
  oauth: {
    client: {
      id: appId,
      secret: appSecret,
      redirectUri: `http://localhost:${port}/oauth-callback`,
      scopes: ['board:play']
    },
    server: {
      tokenHost: 'https://oauth.playstrategy.org',
      authorizePath: '/oauth/authorize',
      tokenPath: '/oauth',
      url: {
        userInfo: 'https://playstrategy.org/api/account'
      }
    }
  }
};
