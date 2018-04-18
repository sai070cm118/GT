var _repository=require('gtrepository');

var Service={
    add:function(Account,callback){
        _repository.AccountRepository.add(Account,callback);
    },
    getById:function(id,callback){
        _repository.AccountRepository.getById(id,callback);
    }
};
module.exports=Service;


