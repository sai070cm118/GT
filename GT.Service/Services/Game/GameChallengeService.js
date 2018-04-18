var _repository=require('gtrepository');

var Service={
    add:function(appGame,callback){
        _repository.GameChallengeRepository.add(appGame,callback);
    },
    getByGameId:function(gameId,callback){
        _repository.GameChallengeRepository.getByGameId(gameId,callback);
    },
    getById:function(id,callback){
        _repository.GameChallengeRepository.getById(id,IsFree,callback);
    }
};
module.exports=Service;


