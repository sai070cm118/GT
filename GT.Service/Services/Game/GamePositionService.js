var _repository=require('gtrepository');

var Service={
    add:function(appGame,callback){
        _repository.GamePositionRepository.add(appGame,callback);
    },
    getByGameId:function(gameId,callback){
        _repository.GamePositionRepository.getByGameId(gameId,callback);
    },
    getById:function(id,IsFree,callback){
        _repository.GamePositionRepository.getById(id,IsFree,callback);
    }
};
module.exports=Service;


