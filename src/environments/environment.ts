export const environment = {
  production: false,

  sso_api_username: 'clientOIDC_0',
  sso_api_pwd: 'qWVP4sCFULjcdUGm9euYJAHd',

  loginURL: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com:443/am/oauth2/authorize?' +
              'client_id=clientOIDC_0&response_type=code&scope=openid+profile+email+access-project+isMemberOf&' +
              'redirect_uri=http://localhost:4200/callback',

  awsConsoleLoginURL: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com/am/saml2/jsp/idpSSOInit.jsp?metaAlias=/meta-idp&spEntityID=urn:amazon:webservices',              

  redirectURL: 'http://localhost:4200/callback',

  /* FR OIDC CORS policy prevent angular to call this endpoint from localhost: https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com:443/am/oauth2/access_token
  * created proxy.conf.json to bypass. --make it a backchannel flow.
  * ng serve --proxy-config proxy.conf.json
  */
  oidcTokenURL: 'http://localhost:4200/token',

  detailURL: 'http://localhost:4200/detail',

  postLogoutRedirectURL: 'http://localhost:4200/home',

  //todo
  logout: 'http://localhost:4200/logout'
  // logout: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com/am/oauth2/connect/endSession?' +
  // 'client_id=clientOIDC_0&post_logout_redirect_uri=http://localhost:4200/home',

  //logout: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com:443/am/oauth2/logout?' +
  //        'client_id=clientOIDC_0&' +
  //        'logout_uri=http://localhost:4200/home'
};