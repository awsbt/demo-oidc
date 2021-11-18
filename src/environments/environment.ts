export const environment = {
  production: false,

  sso_api_username: 'clientOIDC_0',
  sso_api_pwd: 'qWVP4sCFULjcdUGm9euYJAHd',

  loginURL: 'https://ad7bec1a5d4a448ffb3673fc9a150873-aea79b9aae3a10f6.elb.us-gov-east-1.amazonaws.com:443/am/oauth2/authorize?' +
              'client_id=clientOIDC_0&response_type=code&scope=openid+profile+email+project+department&' +
              'redirect_uri=http://localhost:4200/callback',

  awsConsoleLoginURL: 'https://ad7bec1a5d4a448ffb3673fc9a150873-aea79b9aae3a10f6.elb.us-gov-east-1.amazonaws.com/am/saml2/jsp/idpSSOInit.jsp?metaAlias=/meta-idp&spEntityID=urn:amazon:webservices:govcloud',              

  redirectURL: 'http://localhost:4200/callback',

  /* FR OIDC CORS policy prevent angular to call this endpoint from localhost: https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com:443/am/oauth2/access_token
  * created proxy.conf.json to bypass. --make it a backchannel flow.
  * ng serve --proxy-config proxy.conf.json
  */
  oidcTokenURL: 'http://localhost:4200/token',

  detailURL: 'http://localhost:4200/detail',

  postLogoutRedirectURL: 'http://localhost:4200/home',

  //todo
  logout: 'http://localhost:4200/logout',
  // logout: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com/am/oauth2/connect/endSession?' +
  // 'client_id=clientOIDC_0&post_logout_redirect_uri=http://localhost:4200/home',

  //logout: 'https://afc7b5a6b025b4828bf8bad6eadfdcee-eaa53f72a0e29f95.elb.us-east-1.amazonaws.com:443/am/oauth2/logout?' +
  //        'client_id=clientOIDC_0&' +
  //        'logout_uri=http://localhost:4200/home'


  cognitoUrl: 'https://cognito-identity.us-gov-west-1.amazonaws.com',

  identityPoolId: 'us-gov-west-1:01378bc4-5440-4730-8642-4d6ec32853d8',

  loginIdp: 'ad7bec1a5d4a448ffb3673fc9a150873-aea79b9aae3a10f6.elb.us-gov-east-1.amazonaws.com/am/oauth2'



};