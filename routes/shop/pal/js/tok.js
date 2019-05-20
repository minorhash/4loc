var cnf=require("../../son/pal.json")
console.log(cnf)

var request = require('request');

var headers = {
    'Accept': 'application/json',
    'Accept-Language': 'en_US'
};

var dataString = 'grant_type=client_credentials';

var options = {
    url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
    method: 'POST',
    headers: headers,
    body: dataString,
    auth: {
        'user': cnf.tid,
        'pass':cnf.tsc
    }
};

function cb(error, response, body) {
    if (!error && response.statusCode == 200) {
var obj=JSON.parse(body)
        console.log(obj);
    }
}

request(options, cb);
