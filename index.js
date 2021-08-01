var axios = require('axios');

this._api = {};

function Oauthfarm(api_key, config = {}) {
    if (!(this instanceof Oauthfarm)) {
        return new Oauthfarm(api_key, config);
    }

    _api = {
        host: "https://oauthfarm.com",
        api_key: api_key,
        ...config
    }


    this.getProject = getProject;
    this.addService = addService;
    this.getAccount =getAccount;
}

const getProject = async () => {

    const config = {
        method: 'get',
        url: `${_api.host}/api/project?api_key=${_api.api_key}`
    };

    const project = await axios(config)

    return project.data
}
const getAccount = async (account_id) => {
    const config = {
        method: 'get',
        url: `${_api.host}/accounts/${account_id}?api_key=${_api.api_key}`,
    };

    const p = new Promise((resolve, reject) => {

        const response = axios(config).catch(function (error) {
            let msg = "";
            if (error.response) {
                msg = error.response.data
            } else if (error.request) {
                msg = error.response
            } else {
                msg = error.message;
            }
            reject(msg)

        }).then(function (response) {
            resolve(response.data.data)
        })


    });

    await p
    return p

}

const addService = async (service) => {

    const data = JSON.stringify(service);

    const config = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `${_api.host}/api/service?api_key=${_api.api_key}`,
        data: data
    };
    const p = new Promise((resolve, reject) => {

        const response = axios(config).catch(function (error) {
            let msg = "";
            if (error.response) {
                msg = error.response.data
            } else if (error.request) {
                msg = error.response
            } else {
                msg = error.message;
            }
            reject(msg)

        }).then(function (response) {
            resolve(response.data.data)
        })


    });

    await p
    return p

}


Oauthfarm.prototype = {
    /**
     * @private
     */
    _setApiKey(key) {
        if (key) {
            this._setApiField('api_key', `${key}`);
        }
    },

    /**
     * @private
     * This may be removed in the future.
     */
    _setApiField(key, value) {
        this._api[key] = value;
    },

}
module.exports = Oauthfarm;


