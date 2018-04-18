var Models=require('../../Models.js');

var Repository={
    add:function(Message,callback){
        Models.MessageModel.create(Message, function (err, MessageResult) {
              if (err) {
                callback({error: true, data: {}});
              } 
              else {
                  callback({error: false, data: MessageResult.toJSON()});
              }
        });
        
    }
};
module.exports=Repository;