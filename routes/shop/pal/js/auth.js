var cnf=require("../../son/pal.json")
console.log(cnf)

var request = require('request');

var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic'+cnf.tid+":"+cnf.tsc
};

var options = {
    url: 'https://api.sandbox.paypal.com/v2/payments/authorizations/0VF52814937998046',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
