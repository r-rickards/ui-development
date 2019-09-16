var Sequelize = require('sequelize'),
    finale = require('finale-rest'),
    http = require('http');

// Define your models
var database = new Sequelize('database', 'root', 'password');
var User = database.define('User', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

// Initialize server
var server, app;
if (process.env.USE_RESTIFY) {
    var restify = require('restify');
    var corsMiddleware = require('restify-cors-middleware');

    app = server = restify.createServer();
    var cors = corsMiddleware({
        preflightMaxAge: 5, // Optional
        origins: ['*'], // Should whitelist actual domains in production
        allowHeaders: ['Authorization', 'API-Token', 'Content-Range'], //Content-range has size info on lists
        exposeHeaders: ['Authorization', 'API-Token-Expiry', 'Content-Range']
    });

    server.pre(cors.preflight);
    server.use(cors.actual);

    server.use(restify.plugins.queryParser()); //{mapParams: true}
    server.use(restify.plugins.bodyParser()); //{mapParams: true, mapFiles: true}
    server.use(restify.plugins.acceptParser(server.acceptable));
} else {
    var express = require('express'),
        bodyParser = require('body-parser');

    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    server = http.createServer(app);
}

// Initialize finale
finale.initialize({
    app: app,
    sequelize: database
});

// Create REST resource
var userResource = finale.resource({
    model: User,
    endpoints: ['/users', '/users/:id']
});

// Create database and listen
database.sync({ force: true }).then(function() {
    server.listen(function() {
        var host = server.address().address,
            port = server.address().port;

        console.log('listening at http://%s:%s', host, port);
    });
});
