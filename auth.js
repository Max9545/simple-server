const msal = require('@azure/msal-node');

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md 
 */
const msalConfig = {
	auth: {
		clientId: 'fd884e84-c209-455a-92b0-96c08488a093',
		authority: 'https://login.microsoftonline.com/' + 'b099b0c2-7647-47e7-ab3c-471d24afd7be',
		clientSecret: 'fni8Q~8_u_9G0R0aBVVEH6aqcR6X1eViaTU-wboh',
	}
};
/**
 * With client credentials flows permissions need to be granted in the portal by a tenant administrator.
 * The scope is always in the format '<resource-appId-uri>/.default'. For more, visit: 
 * https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow 
 */
const tokenRequest = {
	scopes: ['https://graph.microsoft.com/' + '.default'], // e.g. 'https://graph.microsoft.com/.default'
};

const apiConfig = {
	uri: 'https://graph.microsoft.com/' + 'v1.0/users/', // e.g. 'https://graph.microsoft.com/v1.0/users'
};

/**
 * Initialize a confidential client application. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-confidential-client-application.md
 */
const cca = new msal.ConfidentialClientApplication(msalConfig);

/**
 * Acquires token with client credentials.
 * @param {object} tokenRequest 
 */
async function getToken(tokenRequest) {
  console.log('hhhhhhhhhh')
	return await cca.acquireTokenByClientCredential(tokenRequest);
}

module.exports = {
	apiConfig: apiConfig,
	tokenRequest: tokenRequest,
  getToken: getToken, 
  cca: cca
};
