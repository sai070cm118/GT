var _repository=require('gtrepository');

var Service={
    createGroup:function(Game,callback){
        _repository.GameGroupRepository.createGroup(Game,callback);
    },
    getGroupById:function(GameId,IsFree,callback){
        _repository.GameGroupRepository.getGroupById(GameId,IsFree,callback);
    },
    addParticipient:function(GameId,Participents,IsFree,callback){
        
        _repository.GameGroupRepository.addParticipient(GameId,Participents,IsFree,callback);
    },
    removeParticipient:function(GameId,Id,callback){
        _repository.GameGroupRepository.removeParticipient(GameId,Id,callback);
    },
    addMessage:function(GameId,Message,IsFree,callback){
        _repository.GameGroupRepository.addMessage(GameId,Message,IsFree,callback);
    },
    getPreviousMessages:function(GameId,PreviousMessageId,callback){
        _repository.GameGroupRepository.getPreviousMessages(GameId,PreviousMessageId,callback);
    }
};
module.exports=Service;
