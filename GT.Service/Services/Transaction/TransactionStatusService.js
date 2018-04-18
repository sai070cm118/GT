var _repository=require('gtrepository');

var Service={
    add:function(TransactionStatus,callback){
        _repository.TransactionStatusRepository.add(TransactionStatus,callback);
    },
    update:function(TransactionStatus,callback){
        _repository.TransactionStatusRepository.update(TransactionStatus,callback);
    },
    getAll:function(callback){
        _repository.TransactionStatusRepository.getAll(callback);
    },
    getById:function(id,callback){
        _repository.TransactionStatusRepository.getById(id,callback);
    }
};
module.exports=Service;


