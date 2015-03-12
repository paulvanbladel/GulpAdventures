
module.exports = function () {
    var path = require('path');
    var root = './';
    var client = path.join(root, 'client');
    var server = path.join(root, 'server');
    var clientApp = path.join(client, 'app');
    var serverApp = server;

    var config = {
        clientApp : clientApp,
        clientIndex: path.join(clientApp, 'index.html'),
        serverIndex : path.join(serverApp, 'server.js'),
        js: [
            path.join(clientApp,'js/*.js'),
            path.join(clientApp,'modules/*.js'),
            path.join(clientApp,'modules/**/*.js')
        ],
        css:[
            path.join(clientApp,'css/**/*.css'),
            path.join(clientApp,'modules/**/*.css')
            ]
    };
    return config;
};
