
const gtservice = require('gtservice');


function add(message,userId,callback) {

    var Participants=[];
    message.Participants.forEach(function(entry) {
        Participants.push(entry._id);
    });
    message.participants=Participants;

    gtservice.UserGroupService.createGroup(message,function(result){
        callback([{Config:[{Type:'',RoomId:''}],Message:{Type:'',data:result.data}}]);
    });
}

function getUserGroups(message,userId,callback){
    gtservice.UserGroupService.getUserGroups(message._id,function(result){
        callback([{Config:[{Type:'MySelf',RoomId:''}],Message:{Type:'GetMyUserGroups',data:result.data,error:result.error}}]);
    });
}

function getGroupMessages(message,userId,callback){


    gtservice.UserGroupService.getPreviousMessages(message.GroupId,message.PreviousMessageId,function(result){
        callback([{Config:[{Type:'MySelf',RoomId:''}],Message:{Type:'GetGroupMessages',data:result.data,error:result.error}}]);
    });
}

function sendGroupMessages(message,userId,callback){
    message.Message.sender=message._id;
    gtservice.MessageService.add(message,function(newMsgResult){
        gtservice.UserGroupService.getGroupById(message.UserGroup._id,function(result){

            message.message=newMsgResult.data
            var responseTo=[];

            result.data.participants.forEach(item => {
                responseTo.push({Type:'Room',RoomId:item._id});
            });

            callback([{Config:responseTo,Message:{Type:'GetGroupMessage',data:message,error:result.error}}]);
        });
    });
}

module.exports = {
    add:add,
    getUserGroups:getUserGroups,
    getGroupMessages:getGroupMessages,
    sendGroupMessages:sendGroupMessages
}