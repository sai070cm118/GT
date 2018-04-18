var Models=require('../../Models.js');
var mongoose = require('mongoose');

var Repository={
    createGroup:function(Game,callback){
        Models.GameGroupModel.create(Game, function (err, GroupResult) {
              if (err) {
                  console.log(err);
                callback({error: true, data: {}});
              } 
              else {
                  callback({error: false, data: GroupResult.toJSON()});
              }
        });
    },
    getGroupById:function(GameId,IsFree,callback){
        Models.GameGroupModel.find({$and:[{GameId: GameId},{IsFree:IsFree}]})
        .select("-Messages")
        .populate('participants')
        .exec(function (err, Messages) {
              if (err) {
                  callback({error: true, data: {}});
              } 
              else {
                  callback({error: false, data: Messages});
              }
        });
    },
    addParticipient:function(GameId,Participents,IsFree,callback){
        var _this=this;
        Models.GameGroupModel.findOneAndUpdate(
            {$and:[{GameId: GameId},{IsFree:IsFree}]},
            {$push: {participants: Participents[0]}},
            {safe: true, upsert: true},
            function (err, GroupResult) {
                if (err) {
                    callback({error: true, data: {}});
                } 
                else {
                    _this.getGroupById(GameId,callback);
                }
            }
        );
    },
    removeParticipient:function(GameId,Id,callback){
        Models.GameGroupModel.findOneAndUpdate(
            {_id: GameId},
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
    addMessage:function(GameId,Message,IsFree,callback){
        Models.GameGroupModel.findOneAndUpdate(
            {$and:[{GameId: GameId},{IsFree:IsFree}]},
            {$push: {Messages: Message}},
            {safe: true, upsert: true},
            function (err, GroupResult) {
                if (err) {
                    callback({error: true, data: {}});
                } 
                else {
                    callback({error: false, data: {}});
                }
            }
        );
    },
    getPreviousMessages:function(GameId,PreviousMessageId,callback){
        

        


        var _previousMessageId = new mongoose.Types.ObjectId(PreviousMessageId);
        var _gameId = new mongoose.Types.ObjectId(GameId);

        console.log(GameId);
        console.log(PreviousMessageId);

        Models.GameGroupModel
        .aggregate([
            {"$match":{"_id":_gameId}},
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
                    from: "gamemessages",
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
};
module.exports=Repository;