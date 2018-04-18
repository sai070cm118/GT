var _repository=require('gtrepository');

var Service={
    add:function(TransactionType,callback){
        _repository.TransactionTypeRepository.add(TransactionType,callback);
    },
    update:function(TransactionType,callback){
        _repository.TransactionTypeRepository.update(TransactionType,callback);
    },
    getAll:function(callback){
        _repository.TransactionTypeRepository.getAll(callback);
    },
    getById:function(id,callback){
        _repository.TransactionTypeRepository.getById(id,callback);
    }
};
module.exports=Service;


