# OAuthFarm
OAuthFarm is a cloud service for developers that makes it easy to manage OAuth integrations and keys lifecycle while ensuring security and robust deliverability.

## Get keys
You will need the api key to authenticate your app. Get your keys [here](https://oauthfarm.com).

### Install the library:
```bash
npm i oauthfarm
```

### Connect a new OAuth service:

```javascript
const oauthfarm = require("oauthfarm")('<api_key>');

//This ID is used to identify the Client with the Authorization Server.
const client_id = "";
//This is a secret password that only the Client and Authorization Server know.
const client_secret = "";
//This endpoint is used to interact with the resource owner and get the authorization to access the protected resource.
const authorization_endpoint = "";
//This endpoint is used by the application in order to get an access token or a refresh token.
const exchange_endpoint = "";
//A URL for a successful response.
const callback = "";

const newServices = {
        client_id,
        callback,
        exchange_endpoint,
        client_secret,
        authorization_endpoint
    };

oauthfarm.addService(newServices).then(function (connectedService) {
    //Use this link to interact with the resource owner and get the authorization to access the protected resource.
    console.log(connectedService.subscribe_link)
    /*
    * Example: https://oauthfarm.com/subscribe/1bc14b0c-e5f6-4824-976b-c28334fe797a
    */
})
```
### Subscribe your users to the new service:

You can subscribe your users by just sending them the link from `addService` method response.
After a successful subscribe, you will receive the new `account_id` and other parameters you sent with the subscribe link.

### Receive account OAuth credentials:

```javascript
oauthfarm.getAccount("<account_id>").then(function (account_credentials) {
    console.log(account_credentials)
})
```





