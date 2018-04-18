var Models=require('../Models.js');

var Repository={
    add:function(OfflineTransactionType,callback){
        Models.OfflineTransactionType
            .forge({
                Name: OfflineTransactionType.Name
            })
            .save()
            .then(function (OfflineTransactionTypeDbModel) {
                callback({error: false, data: {Id: OfflineTransactionTypeDbModel.get('Id')}});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            }); 
    },
    update:function(OfflineTransactionType,callback){
        Models.OfflineTransactionType
            .forge({Id: OfflineTransactionType.id})
            .fetch({require: true})
            .then(function (OfflineTransactionTypeDbModel){
                OfflineTransactionTypeDbModel.save({
                    Name: OfflineTransactionType.Name || OfflineTransactionTypeDbModel.get('Name')
                })
                .then(function () {
                    callback({error: false, data: {message: 'OfflineTransactionType details updated'}});
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
        Models.OfflineTransactionType
            .forge({id: id})
            .fetch({require: true})
            .then(function (OfflineTransactionType) {
                Models.OfflineTransactionType.destroy()
                .then(function () {
                    callback({error: false, data: {message: 'OfflineTransactionType successfully deleted'}});
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
        Models.OfflineTransactionTypes
            .forge()
            .fetch({withRelated:['UserDetails']})
            .then(function (OfflineTransactionTypes) {
                callback({error: false, data: OfflineTransactionTypes.toJSON()});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getById:function(id,callback){
        Models.OfflineTransactionType
            .forge({id: id})
            .fetch()
            .then(function (OfflineTransactionType) {
                if (!OfflineTransactionType) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: OfflineTransactionType.toJSON()});
                }
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getByName:function(name,callback){
       Models.OfflineTransactionType
            .forge({Name: name})
            .fetch()
            .then(function (OfflineTransactionType) {
                if (!OfflineTransactionType) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: OfflineTransactionType.toJSON()});
                }
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    }
};
module.exports=Repository;