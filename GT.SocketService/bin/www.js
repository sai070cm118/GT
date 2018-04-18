﻿
var app = require('../app');
var io = require('../SocketIOApp');
var http = require('http');
var Logger_H=require('../Helpers/LoggerHelper.js').Logger_H;

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3004');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
io.attach(server);

/**
 * Listen on provided port, on all network interfaces.
 */

 var boot = function () {
  server.listen(port, function(){
	server.on('error', onError);
	server.on('listening', onListening);
    console.info('Express server listening on port ' + port);
  });
}
var shutdown = function() {
  server.close();
}


if (require.main === module) {
  boot();
} else {
  console.info('Running app as a   module');
  exports.boot = boot;
  exports.shutdown = shutdown;
  exports.port = app.get('port');
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	Logger_H.error(error);
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}