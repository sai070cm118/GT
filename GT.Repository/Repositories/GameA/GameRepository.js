var Models=require('../Models.js');
var ErrorLogger=require('gterrorLogger');


var Repository={
    Create:function(game,callback){


        console.log(game);

        var rawSql = 'call CreateGame(?,?,?,@Result,@GameId);select @Result,@GameId;';

        var outPut='';


        Models.bookshelf.knex.raw(rawSql,[
            game.UserId || '',
            game.ChallangeId || '',
            game.IsFree || '',
        ])
        .then(function (gameDbModel) {
            
            //console.log(gameDbModel[0][1][0]);
            //console.log(gameDbModel[0][1][0]['@Result']);
            //console.log(gameDbModel[0][1][0]['@GameId']);

            if(gameDbModel[0][1][0]['@Result']==0){
                callback({error: false, data:{Status:gameDbModel[0][1][0]['@Result'],GameId:gameDbModel[0][1][0]['@GameId']}});
            }
            else if(gameDbModel[0][1][0]['@Result']==1){
                callback({error: true, data:'Insufficient coins'});
            }
            else if(gameDbModel[0][1][0]['@Result']<0){
                callback({error: true, data:'Unable to create game. Pleae try later.'});
            }
            else{
                callback({error: true, data:'Internal server error.'});
            }
            
        })
        .catch(function (err) {
            console.log(err);
            ErrorLogger.error(err.message);
            callback({error: true, data: {message: 'failed.'}});
        }); 
        
    },
    BetOnGame:function(game,callback){


        console.log(game);
        var rawSql = 'call JoinInGame(?,?,?,@Result,@BetId);select @Result,@BetId;';

        var outPut='';


        Models.bookshelf.knex.raw(rawSql,[
            game.GameId || '',
            game.UserId || '',
            game.IsFree || '',
        ])
        .then(function (gameDbModel) {
            //gameDbModel[0][1][0]['@BetId'];

            if(gameDbModel[0][1][0]['@Result']==0){
                callback({error: false, data:{Status:gameDbModel[0][1][0]['@Result'],IsFree:game.IsFree,GameId:game.GameId}});
            }
            else if(gameDbModel[0][1][0]['@Result']==1){
                callback({error: true, data:'Insufficient coins'});
            }
            else if(gameDbModel[0][1][0]['@Result']<0){
                callback({error: true, data:'Unable to create game. Pleae try later.'});
            }
            else{
                callback({error: true, data:'Internal server error.'});
            }


        })
        .catch(function (err) {
            console.log(err);
            ErrorLogger.error(err.message);
            callback({error: true, data: {message: 'failed.'}});
        }); 
        
    },
    BetOnGamePosition:function(bet,callback){


        var rawSql = 'call BetOnPosition(?,?,?,?,@Result,@BetId);select @Result,@InPositionId;';

        var outPut='';


        Models.bookshelf.knex.raw(rawSql,[
            bet.UserId || '',
            bet.GameId || '',
            bet.Position || '',
            bet.IsFree || '',
        ])
        .then(function (gameDbModel) {

            console.log(gameDbModel);
            //gameDbModel[0][1][0]['@BetId'];

            if(gameDbModel[0][1][0]['@Result']==0){
                callback({error: false, data:{Status:gameDbModel[0][1][0]['@Result'],IsFree:bet.IsFree,GameId:bet.GameId,PositionId:gameDbModel[0][1][0]['@InPositionId']}});
            }
            else if(gameDbModel[0][1][0]['@Result']==1){
                callback({error: true, data:gameDbModel});
            }
            else if(gameDbModel[0][1][0]['@Result']<0){
                callback({error: true, data:'Unable to create game. Pleae try later.'});
            }
            else{
                callback({error: true, data:'Internal server error.'});
            }


        })
        .catch(function (err) {
            console.log(err);
            ErrorLogger.error(err.message);
            callback({error: true, data: {message: 'failed.'}});
        }); 
        
    },
    GetPaidRunningGames:function(callback){
        Models.Games
        .forge({Status: 1})
        .fetch({
            withRelated: [
              'Owner','Status'
            ]
          })
        .then(function (games) {
            if (!games) {
                callback({error: true, data: {}});
            }
            else {
                callback({error: false, data: games.toJSON()});
            }
        })
        .catch(function (err) {
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Unable to get Games.'}});
        });
    },
    GetFreeRunningGames:function(callback){
        Models.FreeGames
        .forge({Status: 1})
        .fetch({
            withRelated: [
              'Owner','Status'
            ]
          })
        .then(function (games) {
            if (!games) {
                callback({error: true, data: {}});
            }
            else {
                callback({error: false, data: games.toJSON()});
            }
        })
        .catch(function (err) {
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Unable to get Games.'}});
        });
    },
    GetById:function(id,IsFree,callback){

        var _model={};
        if(IsFree)
            _model=Models.FreeGame;
        else
            _model=Models.Game;


        _model
        .forge({_id: id})
        .fetch({
            withRelated: [
              'Owner','Status'
            ]
          })
        .then(function (game) {
            if (!game) {
                callback({error: true, data: {}});
            }
            else {
                callback({error: false, data: game.toJSON()});
            }
        })
        .catch(function (err) {
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Unable to get Games.'}});
        });
    },
    GetMyJoinedGames:function(id,IsFree,callback){

        var _model={};
        if(IsFree)
            _model=Models.FreeGameUserBettings;
        else
            _model=Models.GameUserBettings;

        _model
        .query('where', 'UserId', '=', id)
        .fetch({
            columns: ['GameId']
          })
        .then(function (game) {
            if (!game) {
                
                console.log(game);
                callback({error: true, data: {}});
            }
            else {

                console.log(game.toJSON());
                callback({error: false, data: game.toJSON()});

            }
        })
        .catch(function (err) {
                ErrorLogger.error(err);
                callback({error: true, data: {message: 'Unable to get Games.'}});
        });
    }


}


module.exports=Repository;