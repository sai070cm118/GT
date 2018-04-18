var Models=require('../../Models.js');

var mongoose = require('mongoose');

var Repository={
    createGroup:function(Group,callback){
        Group._id=undefined;
        Models.UserGroupModel.create(Group, function (err, GroupResult) {
              if (err) {
                console.log(err);
                callback({error: true, data: {}});
              } 
              else {
                  callback({error: false, data: GroupResult.toJSON()});
              }
        });
    },
    getGroupById:function(GroupId,callback){
        Models.UserGroupModel.findById(GroupId)
        .select("-Messages")
        //.populate('Messages')
        .populate('participants')
        .exec(function (err, Messages) {
            console.log(err);
              if (err) {
                  callback({error: true, data: {}});
              } 
              else {
                  callback({error: false, data: Messages});
              }
        });
    },
    getUserGroups:function(userId,callback){
        
        var _userId = new mongoose.Types.ObjectId(userId);

        Models.UserGroupModel
        .find({ participants : { $all: [_userId] } })
        .select("-Messages")
        .exec(function (err, Messages) {
              if (err) {
                  callback({error: true, data: {}});
              } 
              else {
                  callback({error: false, data: Messages});
              }
            }
        );
    },
    addParticipient:function(GroupId,Participents,callback){
        var _this=this;
        
        Models.UserGroupModel.findOneAndUpdate(
            {_id: GroupId},
            {$push: {participants: Participents[0]}},
            {safe: true, upsert: true},
            function (err, GroupResult) {
                if (err) {
                    callback({error: true, data: {}});
                } 
                else {
                    _this.getGroupById(GroupId,callback)
                }
            }
        );
    },
    removeParticipient:function(GroupId,Id,callback){
        Models.UserGroupModel.findOneAndUpdate(
            {_id: GroupId},
            {$pull: {participants: Id}},
            {safe: true, upsert: true},
            function (err, GroupResult) {
                if (err) {
                    callback({error: true, data: {}});
                } 
                else {
                    callback({error: false, data: GroupResult.toJSON()});
                }
            }
        );
    },
    addMessage:function(GroupId,Message,callback){
        Models.UserGroupModel.findOneAndUpdate(
            {_id: GroupId},
            {$push: {Messages: Message}},
            {safe: true, upsert: true},
            function (err) {
                if (err) {
                    callback({error: true, data: {}});
                } 
                else {
                    callback({error: false, data: {}});
                }
            }
        );
    },
    getPreviousMessages:function(GroupId,PreviousMessageId,callback){

        if(!mongoose.Types.ObjectId.isValid(PreviousMessageId))
        {
            PreviousMessageId="000000000000000000000000";
            console.log(PreviousMessageId);
            var _previousMessageId = new mongoose.Types.ObjectId(PreviousMessageId);
            var _groupId = new mongoose.Types.ObjectId(GroupId);


            Models.UserGroupModel
            .aggregate([
                {"$match":{"_id":_groupId}},
                {"$project":{
                "Messages":{
                    "$slice":[
                        "$Messages",
                        {
                            "$cond": { 
                                if: {
                                     $gt: [ { $size: "$Messages" }, 10] 
                                },then:{ $subtract: [ {$size: "$Messages"}, 10 ] },
                                else:0
                            }
                        },
                        {
                            "$cond": { 
                                if: {
                                     $gt: [ { $size: "$Messages" }, 10] 
                                },then:10,
                                else:{$size: "$Messages"}
                            }
                        }
                    ]}
                }},
                {
                    $lookup:
                    {
                    from: "messages",
                    localField: "Messages",
                    foreignField: "_id",
                    as: "Messages"
                    }
                }
            ])
            .exec(function (err, GroupResult) {
                    console.log(GroupResult);
                    if (err) {
                        console.log(err);
                        callback({error: true, data: [{_id:GroupId}]});
                    } 
                    else {
                        callback({error: false, data: GroupResult});
                    }
                }
            );
        }
        else{
            var _previousMessageId = new mongoose.Types.ObjectId(PreviousMessageId);
            var _groupId = new mongoose.Types.ObjectId(GroupId);


            Models.UserGroupModel
            .aggregate([
                {"$match":{"_id":_groupId}},
                {"$project":{
                "Messages":{
                    "$cond": { if: { $eq: [ {"$indexOfArray":["$Messages",_previousMessageId]},0 ] }, then: [], else: {"$slice":[
                            "$Messages",
                            {"$subtract":[
                                {"$indexOfArray":["$Messages",_previousMessageId]},
                                {$cond: { if: { $lte: [ {"$indexOfArray":["$Messages",_previousMessageId]},5 ] }, then: {"$indexOfArray":["$Messages",_previousMessageId]}, else: 5 }
                                }
                            ]},
                            {$cond: { if: { $lte: [ {"$indexOfArray":["$Messages",_previousMessageId]},5 ] }, then: {"$indexOfArray":["$Messages",_previousMessageId]}, else: 5 }}
                        ]}
                    }
                }
                }},
                {
                    $lookup:
                    {
                    from: "messages",
                    localField: "Messages",
                    foreignField: "_id",
                    as: "Messages"
                    }
                }
            ])
            .exec(function (err, GroupResult) {
                    console.log(GroupResult);
                    if (err) {
                        console.log(err);
                        callback({error: true, data: {}});
                    } 
                    else {
                        callback({error: false, data: GroupResult});
                    }
                }
            );
        }
    },
    searchProfile:function(userId,callback){
        Models.UserGroupModel.$where('this.IsGroup === false').exec( function (err, UserResult) {
            console.log(UserResult);
            if (err) {
                callback({error: true, data: {}});
            } 
            else {
                callback({error: false, data: UserResult});
            }
        });
    }
};
module.exports=Repository;