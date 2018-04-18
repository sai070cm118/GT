
var Models=require('../Models.js');
var ErrorLogger=require('gterrorLogger');


var Repository={
    add:function(gameChallenge,callback){

        console.log(callback);
        var _this=this;

        _this.CheckIsFree(gameChallenge.AppGame._Id,function(checkObje){

            console.log(checkObje);
            if(!checkObje.error){
                if(checkObje.data){
                    Models.FreeGameChallenge
                    .forge({
                        GameId: gameChallenge.AppGame._Id,
                        Title: gameChallenge.Title,
                        BettablePositions: gameChallenge.BettablePositions,
                        ComissionPercent:gameChallenge.ComissionPercent,
                        GameTime:gameChallenge.GameTime,
                        BoardPrice:gameChallenge.BoardPrice,
                        NoOfPositions:gameChallenge.NoOfPositions,
                        CoinsPerEachPosition:gameChallenge.CoinsPerEachPosition
                    })
                    .save()
                    .then(function (gameChallengeDbModel) {
                        console.log(gameChallengeDbModel);
                        callback({error: false, data: {Id: gameChallengeDbModel.get('_id')}});
                    })
                    .catch(function (err) {
                        console.log(err);
                        ErrorLogger.error(err.message);
                        callback({error: true, data: {message: 'Game position creation failed.'}});
                    }); 
                }
                else{
                    Models.GameChallenge
                    .forge({
                        GameId: gameChallenge.AppGame._Id,
                        Title: gameChallenge.Title,
                        BettablePositions: gameChallenge.BettablePositions,
                        ComissionPercent:gameChallenge.ComissionPercent,
                        GameTime:gameChallenge.GameTime,
                        BoardPrice:gameChallenge.BoardPrice,
                        NoOfPositions:gameChallenge.NoOfPositions,
                        CoinsPerEachPosition:gameChallenge.CoinsPerEachPosition
                    })
                    .save()
                    .then(function (gameChallengeDbModel) {
                        console.log(gameChallengeDbModel);
                        callback({error: false, data: {Id: gameChallengeDbModel.get('_id')}});
                    })
                    .catch(function (err) {
                        console.log(err);
                        ErrorLogger.error(err.message);
                        callback({error: true, data: {message: 'Game position creation failed.'}});
                    }); 
                }
            }
        });
    },
    getFreeChallenges:function(callback){
        Models.FreeGameChallenge
            .forge()
            .fetch({ withRelated: [{'User': function(qb) {
                qb.column('_id', 'Mobile');
              }},'Account']})
            .then(function (Profile) {
                if (!Profile) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: Profile.toJSON()});
                }
            })
            .catch(function (err) {
                console.log(err);
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Unable to get profile.'}});
            });
    },
    getByGameId:function(gameId,callback){
        
        _this.CheckIsFree(gameId,function(checkObje){

            if(!checkObje.error){

                if(checkObje.data){
                    Models.FreeGameChallenge
                    .forge()
                    .fetchAll({gameId: gameId})
                    .then(function (gameChallenge) {
                        if (!gameChallenge) {
                            callback({error: true, data: {}});
                        }
                        else {
                            callback({error: false, data: gameChallenge.toJSON()});
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                            ErrorLogger.error(err.message);
                            callback({error: true, data: {message: 'Unable to get Game Positions.'}});
                    });
                }
                else{
                    Models.GameChallenge
                    .forge()
                    .fetchAll({gameId: gameId})
                    .then(function (gameChallenge) {
                        if (!gameChallenge) {
                            callback({error: true, data: {}});
                        }
                        else {
                            callback({error: false, data: gameChallenge.toJSON()});
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                            ErrorLogger.error(err.message);
                            callback({error: true, data: {message: 'Unable to get Game Positions.'}});
                    });
                }
            }
        });

        
        
    },
    getById:function(id,IsFree,callback){

        
        if(IsFree){
            Models.FreeGameChallenge
            .forge({_id: id})
            .fetch()
            .then(function (gameChallenge) {

                console.log(gameChallenge)
                if (!gameChallenge) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: gameChallenge.toJSON()});
                }
            })
            .catch(function (err) {
                    ErrorLogger.error(err.message);
                    callback({error: true, data: {message: 'Unable to get Game position.'}});
            });
        }
        else{
            Models.GameChallenge
            .forge({_id: id})
            .fetch()
            .then(function (gameChallenge) {

                console.log(gameChallenge)
                if (!gameChallenge) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: gameChallenge.toJSON()});
                }
            })
            .catch(function (err) {
                    ErrorLogger.error(err.message);
                    callback({error: true, data: {message: 'Unable to get Game position.'}});
            });
        }
    },
    CheckIsFree:function(appGameId,callback){
        console.log(appGameId);
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
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Unable to get App Game.'}});
        });
    }
};
module.exports=Repository;