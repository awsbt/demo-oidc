export const environment = {
  production: false,

  sso_api_username: 'clientOIDC_0',
  sso_api_pwd: 'njX7v0ykjp0xALEG2LnoSo89',

  loginURL: 'https://acme.example.com:443/am/oauth2/authorize?' +
              'client_id=clientOIDC_0&response_type=code&scope=openid+profile+email&' +
              'redirect_uri=http://localhost:4200/callback',

  redirectURL: 'http://localhost:4200/callback',

  oidcTokenURL: 'http://localhost:4200/token',

  //todo
  detailURL: 'http://localhost:4200/detail',

  //todo
  logout: 'https://acme.example.com:443/am/oauth2/logout?' +
          'client_id=clientOIDC_0&' +
          'logout_uri=http://localhost:4200/home'
};

