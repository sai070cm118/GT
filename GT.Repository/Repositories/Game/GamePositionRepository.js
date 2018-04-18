var Models=require('../Models.js');
var ErrorLogger=require('gterrorLogger');


var Repository={
    add:function(gamePosition,callback){
        var _this=this;

        Models.GamePosition
        .forge({
            GameId: gamePosition.AppGame._Id,
            Title: gamePosition.Title,
            Coins: gamePosition.Coins
        })
        .save()
        .then(function (appGameDbModel) {
            callback({error: false, data: {Id: appGameDbModel.get('_id')}});
        })
        .catch(function (err) {
            ErrorLogger.error(err.message);
            callback({error: true, data: {message: ' Game position creation failed.'}});
        }); 
    },
    getByGameId:function(gameId,callback){

        Models.GamePosition
        .forge()
        .fetchAll({gameId: gameId})
        .then(function (gamePositions) {
            if (!gamePositions) {
                callback({error: true, data: {}});
            }
            else {
                callback({error: false, data: gamePositions.toJSON()});
            }
        })
        .catch(function (err) {
            console.log(err);
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Unable to get Game Positions.'}});
        });
        
    },
    getById:function(id,IsFree,callback){

        Models.GamePosition
        .forge({_id: id})
        .fetch()
        .then(function (gamePosition) {

            console.log(gamePosition)
            if (!gamePosition) {
                callback({error: true, data: {}});
            }
            else {
                callback({error: false, data: gamePosition.toJSON()});
            }
        })
        .catch(function (err) {
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Unable to get Game position.'}});
        });
    },
    CheckIsFree:function(appGameId,callback){

        
        console.log('CheckIsFree');
        Models.AppGame
        .forge({_id: appGameId})
        .fetch()
        .then(function (appGame) {
            if (!appGame) {
                callback({error: true, data: {}});
            }
            else {
                callback({error: false, data: appGame.toJSON().IsFree});
            }
        })
        .catch(function (err) {
                console.log(err);
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Unable to get App Game.'}});
        });
    }
};
module.exports=Repository;