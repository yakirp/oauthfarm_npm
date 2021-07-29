const oauthfarm = require("./index")("b9302522-ab0d-4b50-8bf9-068c79d8ffb3", {host: "http://localhost:8090"});


const client_id = "";

const client_secret = "";

const authorization_endpoint = "";

const exchange_endpoint = "";

const callback = "";

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




