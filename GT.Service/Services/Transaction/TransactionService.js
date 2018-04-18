var _repository=require('gtrepository');

var Service={
    add:function(Transaction,callback){
        _repository.TransactionRepository.add(Transaction,callback);
    },
    update:function(Transaction,callback){
        _repository.TransactionRepository.update(Transaction,callback);
    },
    delete:function(id,callback){
        _repository.TransactionRepository.delete(id,callback);
    },
    getAll:function(callback){
        _repository.TransactionRepository.getAll(callback);
    },
    getById:function(id,callback){
        _repository.TransactionRepository.getById(id,callback);
    },
    getByName:function(name,callback){
         _repository.TransactionRepository.getByName(name,callback);
    }
};
module.exports=Service;


