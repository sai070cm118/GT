var _repository=require('gtrepository');

var Service={
    Create:function(appGame,callback){
        _repository.GameRepository.Create(appGame,callback);
    },
    BetOnGame:function(appGame,callback){
        _repository.GameRepository.BetOnGame(appGame,callback);
    },
    BetOnGamePosition:function(bet,callback){
        _repository.GameRepository.BetOnGamePosition(bet,callback);
    },
    GetPaidRunningGames:function(callback){
        _repository.GameRepository.GetPaidRunningGames(callback);
    },
    GetFreeRunningGames:function(callback){
        _repository.GameRepository.GetFreeRunningGames(callback);
    },
    GetById:function(id,IsFree,callback){
        _repository.GameRepository.GetById(id,IsFree,callback);
    },
    GetMyJoinedGames:function(id,IsFree,callback){
        _repository.GameRepository.GetMyJoinedGames(id,IsFree,callback);
    }
};
module.exports=Service;


