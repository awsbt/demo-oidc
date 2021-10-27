export const environment = {
  production: false,

  sso_api_username: 'clientOIDC_0',
  sso_api_pwd: 'PIqx04ie6kfuSUB1BCjtN72M',

  loginURL: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com:443/am/oauth2/authorize?' +
              'client_id=clientOIDC_0&response_type=code&scope=openid+profile+email+employeeType+access-project&' +
              'redirect_uri=http://localhost:4200/callback',

  redirectURL: 'http://localhost:4200/callback',

  /* FR OIDC CORS policy prevent angular to call this endpoint from localhost: https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com:443/am/oauth2/access_token
  * created proxy.conf.json to bypass. --make it a backchannel flow.
  * ng serve --proxy-config proxy.conf.json
  */
  oidcTokenURL: 'http://localhost:4200/token',

  detailURL: 'http://localhost:4200/detail',

  //todo
  logout: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com/am/oauth2/connect/endSession'

  //logout: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com:443/am/oauth2/logout?' +
  //        'client_id=clientOIDC_0&' +
  //        'logout_uri=http://localhost:4200/home'
};