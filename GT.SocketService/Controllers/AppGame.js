
const gtservice = require('gtservice');


function getAppGames(message,userId,callback){

    gtservice.AppGameService.getAll(function(result){
        callback([{Config:[{Type:'Room',RoomId:userId}],Message:{Type:'GetAppGames',data:result.data,error:result.error}}]);
    });

}


function createGame(message,userId,callback){
    message.UserId=userId;
    gtservice.GameService.Create(message,function(result){


        console.log(result);
        var response=[];

        response.push({Config:[{Type:'MySelf',RoomId:''}],Message:{Type:'GameCreated',data:result.data,error:result.error}});

        if(!result.error){
            gtservice.GameService.GetById(result.data.GameId,message.IsFree,function(gameResult){

                //Create Game Group

                if(!result.error){
                    var gameGroup={
                        "GameId":gameResult.data._id,
                        "ChallengeId":gameResult.data.ChallengeId,
                        "participants":[],
                        "IsFree":message.IsFree
                      }
                    gtservice.GameGroupService.createGroup(gameGroup,function(data){
    
                        console.log(data);
                    });
                }
                gameResult.data.IsFree=message.IsFree;
               response.push({Config:[{Type:'BroadCast',RoomId:''}],Message:{Type:'NewGameAvailable',data:gameResult.data,error:gameResult.error}});
    
               callback(response);
            });
        }
        else{            
            callback(response);
        }
        

    });
    
}

function betOnGame(message,userId,callback){
    message.UserId=userId;
    gtservice.GameService.BetOnGame(message,function(result){

        if(!result.error)
            gtservice.GameGroupService.addParticipient(message.GameId,[userId],message.IsFree,function(data){
                console.log(data);
            });

        
        callback([{Config:[{Type:'Room',RoomId:userId}],Message:{Type:'BettedOnGame',data:result.data,error:result.error}}]);
    });
    
}


function betOnGamePosition(message,userId,callback){
    message.UserId=userId;
    gtservice.GameService.BetOnGamePosition(message,function(result){


        gtservice.GameService.GetById(message.GameId,message.IsFree,function(data){


            if(message.IsFree)
                callback([{Config:[{Type:'BroadCast',RoomId:''}],Message:{Type:'GetFreeRunningGame',data:data.data,error:data.error}}]);
            else
                callback([{Config:[{Type:'BroadCast',RoomId:''}],Message:{Type:'GetPaidRunningGame',data:data.data,error:data.error}}]);


        });

    });
}

function getPaidRunningGames(message,userId,callback){

    gtservice.GameService.GetPaidRunningGames(function(result){
        callback([{Config:[{Type:'MySelf',RoomId:''}],Message:{Type:'GetPaidRunningGames',data:result.data,error:result.error}}]);
    });

}

function getFreeRunningGames(message,userId,callback){

    gtservice.GameService.GetFreeRunningGames(function(result){
        callback([{Config:[{Type:'MySelf',RoomId:''}],Message:{Type:'GetFreeRunningGames',data:result.data,error:result.error}}]);
    });

}


function getMyJoinedGames(message,userId,callback){

    var data = {};

    gtservice.GameService.GetMyJoinedGames(userId,true,function(result){
        data.MyBettedFreeGames=result.data;
        gtservice.GameService.GetMyJoinedGames(userId,false,function(result){
            
            data.MyBettedPaidGames=result.data;

            callback([{Config:[{Type:'MySelf',RoomId:''}],Message:{Type:'GetMyJoinedGames',data:data,error:result.error}}]);

        });
    });

}

function sendGameGroupMessages(message,userId,callback){

    message.Message.sender=userId;
    gtservice.GameMessageService.add(message,message.IsFree,function(data){
        gtservice.GameGroupService.getGroupById(message.GameId,message.IsFree,function(result){
            
            console.log('Hai');
            callback([{Config:[{Type:'BroadCast',RoomId:''}],Message:{Type:'GetGameGroupMessage',data:message,error:data.error}}]);
        });
    });
}


function getGameGroupDetails(message,userId,callback){
    gtservice.GameGroupService.getGroupById(message.GameId,message.IsFree,function(result){
        callback([{Config:[{Type:'MySelf',RoomId:''}],Message:{Type:'GetGameGroupDetails',data:result.data,error:result.error}}]);
        console.log(result);
    });
}



module.exports = {
    getAppGames:getAppGames,
    createGame:createGame,
    getPaidRunningGames:getPaidRunningGames,
    getFreeRunningGames:getFreeRunningGames,
    betOnGame:betOnGame,
    betOnGamePosition:betOnGamePosition,
    getMyJoinedGames:getMyJoinedGames,
    sendGameGroupMessages:sendGameGroupMessages,
    getGameGroupDetails:getGameGroupDetails
}