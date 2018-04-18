


var ConfigurationManager = require('gtconfigurationmanager');
var Agenda = require("agenda");

const AgendaManager=new Agenda({db: { address: ConfigurationManager.getMongoNotificationConnectionString()}});

var request = require('request');
var SocketClient;
var Globals=require('./Globals');
var connectionInitialized=false;



function loginToApplication(){
    console.log('Login to app');
    var reqObj={
          "Email": "Sai070cm118@gmail.com",
          "Password": "sai"
      }
    request.post({
        url:ConfigurationManager.getApiURI()+'api/user/Login',
        form: reqObj
    },function(err,httpResponse,body){
        Globals.Token=JSON.parse(body).Token;

        SocketClient = require("socket.io-client")(ConfigurationManager.getSocketURI()+'AsAdmin', { query: "Token="+Globals.Token }).connect();
            

            
        SocketClient.on('disconnect',function(){
            console.log('disconnected');
        });

        SocketClient.on('StoA',function(message){
            console.log('Client : '+message);
        });

        connectionInitialized=true;
        console.log(connectionInitialized);
    });
}



function getSocketConnection(){

    if(!connectionInitialized){
        var reqObj={
            "Email": "Sai070cm118@gmail.com",
            "Password": "sai"
        }
      request.post({
          url:ConfigurationManager.getApiURI()+'api/user/Login',
          form: reqObj
      },function(err,httpResponse,body){
          Globals.Token=JSON.parse(body).Token;
  
          SocketClient = require("socket.io-client")(ConfigurationManager.getSocketURI()+'AsAdmin', { query: "Token="+Globals.Token }).connect();
              
          console.log(SocketClient);
              
          SocketClient.on('disconnect',function(){
              console.log('disconnected');
          });
  
          SocketClient.on('StoA',function(message){
              console.log('Client : '+message);
          });
  
          connectionInitialized=true;
          console.log(connectionInitialized);
          return SocketClient;
      });
    }
    else{
        return SocketClient;
    }
}

function getAgendaManager(){
    return AgendaManager;
}



module.exports={
    getSocketConnection : getSocketConnection,
    getAgendaManager : getAgendaManager
};