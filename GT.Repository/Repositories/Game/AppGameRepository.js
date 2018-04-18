var Models=require('../Models.js');
var ErrorLogger=require('gterrorLogger');


var Repository={
    add:function(appGame,callback){

        console.log(appGame);
        Models.AppGame
            .forge({
                Name: appGame.Name,
                Description: appGame.Description,
                TablePrefix: appGame.TablePrefix,
                IsFree:appGame.IsFree || true
            })
            .save()
            .then(function (appGameDbModel) {
                callback({error: false, data: {Id: appGameDbModel.get('_id')}});
            })
            .catch(function (err) {
                console.log(err);
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'App Game creation failed.'}});
            }); 
    },
    getAll:function(callback){
        Models.AppGames
            .forge()
            .fetch({
                withRelated: [
                  'Positions','Challenges','FreeGameChallenges'
                ]
              })
            .then(function (appGames) {
                if (!appGames) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: appGames.toJSON()});
                }
            })
            .catch(function (err) {
                console.log(err);
                    ErrorLogger.error(err.message);
                    callback({error: true, data: {message: 'Unable to get App Games.'}});
            });
    },
    getById:function(id,callback){
        Models.AppGame
            .forge({_id: id})
            .fetch()
            .then(function (appGame) {
                if (!appGame) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: appGame.toJSON()});
                }
            })
            .catch(function (err) {
                    ErrorLogger.error(err.message);
                    callback({error: true, data: {message: 'Unable to get App Game.'}});
            });
    }
};
module.exports=Repository;