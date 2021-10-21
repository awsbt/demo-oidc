export const environment = {
  production: false,

  sso_api_username: 'clientOIDC_0',
  sso_api_pwd: '',

  loginURL: 'https://awsfroidcsaml2.tk:443/am/oauth2/authorize?' +
              'client_id=clientOIDC_0&response_type=code&scope=openid+profile+email&' +
              'redirect_uri=http://localhost:4200/callback',

  redirectURL: 'http://localhost:4200/callback',

  /* FR OIDC CORS policy prevent angular to call this endpoint from localhost: https://awsfroidcsaml2.tk:443/am/oauth2/access_token
  * created proxy.conf.json to bypass. --make it a backchannel flow.
  * ng serve --proxy-config proxy.conf.json
  */
  oidcTokenURL: 'http://localhost:4200/token',

  detailURL: 'http://localhost:4200/detail',

  //todo
  logout: 'https://awsfroidcsaml2.tk/am/oauth2/connect/endSession'

  //logout: 'https://awsfroidcsaml2.tk:443/am/oauth2/logout?' +
  //        'client_id=clientOIDC_0&' +
  //        'logout_uri=http://localhost:4200/home'
};