var _repository=require('gtrepository');

var Service={
    add:function(OfflineMoney,callback){
        _repository.OfflineMoneyRepository.add(OfflineMoney,callback);
    },
    update:function(OfflineMoney,callback){
        _repository.OfflineMoneyRepository.update(OfflineMoney,callback);
    },
    delete:function(id,callback){
        _repository.OfflineMoneyRepository.delete(id,callback);
    },
    getAll:function(callback){
        _repository.OfflineMoneyRepository.getAll(callback);
    },
    getById:function(id,callback){
        _repository.OfflineMoneyRepository.getById(id,callback);
    },
    getByName:function(name,callback){
        _repository.OfflineMoneyRepository.getByName(name,callback);
    }
};
module.exports=Service;


