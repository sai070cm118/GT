var _repository=require('gtrepository');

var Service={
    createGroup:function(Group,callback){
        _repository.UserGroupRepository.createGroup(Group,callback);
    },
    getGroupById:function(GroupId,callback){
        _repository.UserGroupRepository.getGroupById(GroupId,callback);
    },
    getUserGroups:function(UserId,callback){
        console.log('At service');
        console.log(UserId);
        _repository.UserGroupRepository.getUserGroups(UserId,callback);
    },
    addParticipient:function(GroupId,Participents,callback){
        _repository.UserGroupRepository.addParticipient(GroupId,Participents,callback);
    },
    removeParticipient:function(GroupId,Id,callback){
        _repository.UserGroupRepository.removeParticipient(GroupId,Id,callback);
    },
    addMessage:function(GroupId,Message,callback){
        _repository.UserGroupRepository.addMessage(GroupId,Message,callback);
    },
    getPreviousMessages:function(GroupId,PreviousMessageId,callback){
        _repository.UserGroupRepository.getPreviousMessages(GroupId,PreviousMessageId,callback);
    }
};
module.exports=Service;
