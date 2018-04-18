var _repository=require('gtrepository');

var Service={
    add:function(appGame,callback){
        _repository.AppGameRepository.add(appGame,callback);
    },
    getAll:function(callback){
        _repository.AppGameRepository.getAll(callback);
    },
    getById:function(id,callback){
        _repository.AppGameRepository.getById(id,callback);
    }
};
module.exports=Service;


