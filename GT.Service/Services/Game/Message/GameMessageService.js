var _repository=require('gtrepository');

var Service={
    add:function(GameMessage,IsFree,callback){

        _repository.GameMessageRepository.add(GameMessage.Message,function(Result){
            _repository.GameGroupRepository.addMessage(GameMessage.GameId,Result.data._id,IsFree,function(result){
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


