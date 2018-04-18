var Models=require('../Models.js');

var Repository={
    add:function(OfflineMoney,callback){
        Models.OfflineMoney
            .forge({
                ProfileId: OfflineMoney.ProfileId,
                Rupees: OfflineMoney.Rupees,
                TransactionRef: OfflineMoney.TransactionRef,
                Type: OfflineMoney.Type,
                Status: OfflineMoney.Status
            })
            .save()
            .then(function (OfflineMoneyDbModel) {
                callback({error: false, data: {Id: OfflineMoneyDbModel.get('Id')}});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            }); 
    },
    update:function(OfflineMoney,callback){
        Models.OfflineMoney
            .forge({Id: OfflineMoney.Id})
            .fetch({require: true})
            .then(function (OfflineMoneyDbModel){
                OfflineMoneyDbModel.save({
                    ProfileId: OfflineMoney.ProfileId || OfflineMoneyDbModel.get('ProfileId'),
                    Rupees: OfflineMoney.Rupees || OfflineMoneyDbModel.get('Rupees'),
                    TransactionRef: OfflineMoney.TransactionRef || OfflineMoneyDbModel.get('TransactionRef'),
                    Type: OfflineMoney.Type || OfflineMoneyDbModel.get('Type'),
                    Status: OfflineMoney.Status || OfflineMoneyDbModel.get('Status')
                })
                .then(function () {
                    callback({error: false, data: {message: 'OfflineMoney details updated'}});
                })
                .otherwise(function (err) {
                    callback({error: true, data: {message: err.message}});
                });
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    delete:function(id,callback){
        Models.OfflineMoney
            .forge({Id: id})
            .fetch({require: true})
            .then(function (OfflineMoney) {
                Models.OfflineMoney.destroy()
                .then(function () {
                    callback({error: false, data: {message: 'OfflineMoney successfully deleted'}});
                })
                .otherwise(function (err) {
                    callback({error: true, data: {message: err.message}});
                });
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getAll:function(callback){
        Models.OfflineMoneyies
            .forge()
            .fetch({withRelated:['UserDetails']})
            .then(function (OfflineMoneyies) {
                callback({error: false, data: OfflineMoneyies.toJSON()});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getById:function(id,callback){
        Models.OfflineMoney
            .forge({Id: id})
            .fetch()
            .then(function (OfflineMoney) {
                if (!OfflineMoney) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: OfflineMoney.toJSON()});
                }
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getByName:function(name,callback){
       Models.OfflineMoney
            .forge({Name: name})
            .fetch()
            .then(function (OfflineMoney) {
                if (!OfflineMoney) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: OfflineMoney.toJSON()});
                }
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    }
};
module.exports=Repository;