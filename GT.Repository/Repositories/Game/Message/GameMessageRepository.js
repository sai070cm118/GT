var Models=require('../../Models.js');

var Repository={
    add:function(Message,callback){
        console.log(Message);
        Models.GameMessageModel.create(Message, function (err, MessageResult) {
              if (err) {
                  console.log(err);
                callback({error: true, data: {}});
              } 
              else {
                  callback({error: false, data: MessageResult.toJSON()});
              }
        });
        
    }
};
module.exports=Repository;