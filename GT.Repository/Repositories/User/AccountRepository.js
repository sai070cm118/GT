var Models=require('../Models.js');
var ErrorLogger=require('gterrorLogger');


var Repository={
    add:function(Account,callback){
        Models.Account
            .forge({
                _Id: Account._id,
                Rupees: 0,
                RealCoins: 0,
                FreeCoins: 0
            })
            .save()
            .then(function (AccountDbModel) {
                callback({error: false, data: {Id: AccountDbModel.get('_id')}});
            })
            .otherwise(function (err) {
                console.log(err);
                ErrorLogger.error(err.message);
                callback({error: true, data: {message: 'Add failed for Account.'}});
            }); 
    },
    getById:function(id,callback){
        Models.Account
            .forge({_id: id})
            .fetch()
            .then(function (Account) {
                if (!Account) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: Account.toJSON()});
                }
            })
            .otherwise(function (err) {
                    ErrorLogger.error(err.message);
                    callback({error: true, data: {message: 'Unable to get Account.'}});
            });
    }
};
module.exports=Repository;