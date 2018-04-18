var _repository=require('gtrepository');

var Service={
    add:function(GroupMessage,callback){
        _repository.MessageRepository.add(GroupMessage.Message,function(Result){
            _repository.UserGroupRepository.addMessage(GroupMessage.UserGroup._id,Result.data._id,function(result){
                if(result.error)
                    callback(result);
                else{
                    callback(Result);
                }
            });
        });
    }
};
module.exports=Service;


