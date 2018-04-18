//Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const uuid = require('uuid');
const nJwt = require('njwt');

var cors = require('cors');


//Get our API routes
const ProxyService = require('gtproxyservice');

//Manage the Social login, Authentication, token managment and security related items.
const SecurityManager = require('gtsecuritymanager');

const app = express();

app.use(cors());
//Parsers the input Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname)));
app.use(passport.initialize());

//Serialize and deserialize
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, user);
});

var routes = require('./Router');
app.use('/', routes);

/**
* Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
* Create HTTP server.
 */
const server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));