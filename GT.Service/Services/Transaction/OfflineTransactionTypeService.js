var _repository=require('gtrepository');

var Service={
    add:function(OfflineTransactionType,callback){
        _repository.OfflineTransactionTypeRepository.add(OfflineTransactionType,callback);
    },
    update:function(OfflineTransactionType,callback){
        _repository.OfflineTransactionTypeRepository.update(OfflineTransactionType,callback);
    },
    delete:function(id,callback){
        _repository.OfflineTransactionTypeRepository.delete(id,callback);
    },
    getAll:function(callback){
        _repository.OfflineTransactionTypeRepository.getAll(callback);
    },
    getById:function(id,callback){
        _repository.OfflineTransactionTypeRepository.getById(id,callback);
    },
    getByName:function(name,callback){
        _repository.OfflineTransactionTypeRepository.getByName(name,callback);
    }
};
module.exports=Service;


