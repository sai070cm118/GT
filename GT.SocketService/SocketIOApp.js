
var io = require('socket.io')();
var Authentication_Mid=require('./Middlewares/Authentication_Mid.js');
var uuid = require('uuid');
var configuration=require('./Controllers/Configuration');

var nJwt = require('njwt');
const SecurityManager = require('gt.securitymanager');

//Authenticatie the user.
var AsUser = io.of('/AsUser').use(Authentication_Mid);
//Authenticatie the user.
var AsAdmin = io.of('/AsAdmin').use(Authentication_Mid);

//============================================================================================//
//=================================  Actual Implementation  ==================================//
//============================================================================================//


AsUser.on('connection', function (socket) {
	SecurityManager.verifyToken(socket.request._query['Token'],function(err,verifiedJwt){
		if(err){
			socket.disconnect();
		}else{
			socket._id=verifiedJwt.body.Id;
			configuration.JoinInUserGroup(socket,verifiedJwt.body.Id);

		}
	});

	socket.on('disconnect',configuration.DisconnectRoute);
	socket.on('CtoS',function(message){
		message.data._id=socket._id;
		configuration.ManageUserRoute(socket,io,message);
	});
});


AsAdmin.on('connection', function (socket) {

	SecurityManager.verifyToken(socket.request._query['Token'],function(err,verifiedJwt){
		if(err){
			console.log(err);
		}else{
			
			socket._id=verifiedJwt.body.Id;
			
			socket.emit('StoA',socket._id);
			//TODO: Handle the user is admin or not.
		}
	});

	console.log('Admin connected.');

	socket.on('disconnect',configuration.DisconnectRoute);

	socket.on('AtoS',function(message){

		console.log(message);
		socket.emit('StoA',socket._id);

		//message.data._id=socket._id;
		//configuration.ManageAdminRoute(socket,io,message);
	});
});


//============================================================================================//
//=================================  Actual Implementation  ==================================//
//============================================================================================//
	
module.exports = io;