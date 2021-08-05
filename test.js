//const oauthfarm = require("./index")("b9302522-ab0d-4b50-8bf9-068c79d8ffb3", {host: "http://localhost:8090"});

const oauthfarm = require("./index")('dd0cee1a-14d4-44b8-ac35-9c4b7688245f');

const client_id = "5c23839a-061f-4a4d-97ed-0ea0a025bcdf";

const client_secret = "1be9ea8c-187a-4312-96d9-4951f95f5206";

const authorization_endpoint = "https://app.intercom.com/oauth";

const exchange_endpoint = "https://api.intercom.io/auth/eagle/token";

const callback = "https://webhook.site/0c439041-0b9c-45ed-b5c0-88c8c914aaac";

const newServices =
    {
        client_id,
        callback,
        exchange_endpoint,
        client_secret,
        authorization_endpoint
    }





oauthfarm.addService(newServices).then(function (p) {
    console.log(p.subscribe_link)
})










