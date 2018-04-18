var Models=require('../Models.js');
var ErrorLogger=require('gterrorLogger');

var CoreModels=require('gtcore');
var MyConsole=require('gtlogger');
var winstonConsole=require('gtlogger');

var Repository={
    add:function(TransactionType,callback){

        console.log(TransactionType);

        Models.TransactionType
            .forge({
                Name: TransactionType.Name
            })
            .save()
            .then(function (TransactionTypeDbModel) {
                callback({error: false, data: {Id: TransactionTypeDbModel.get('Id')}});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            }); 
    },
    update:function(TransactionType,callback){
        Models.TransactionType
        .forge({_id: TransactionType._id})
        .fetch()
        .then(function(model) {

            console.log(model);

            model.set({
                Name: TransactionType.Name || model.get('Name')
            })
            .where({_id: TransactionType._id})
            .save(null,{ method: 'update' })
            .then(function () {
                callback({error: false, data: 'Transaction Type updated'});
            })
            .catch(function (err) {
                winstonConsole.log('debug',err);
                ErrorLogger.error(err);
                callback({error: true, data: {message: 'Update failed for Transaction Type.'}});
            });
        });
    },
    getAll:function(callback){
        Models.TransactionTypes
            .forge()
            .fetch()
            .then(function (TransactionTypes) {
                callback({error: false, data: TransactionTypes.toJSON()});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getById:function(id,callback){
        Models.TransactionType
            .forge({_Id: id})
            .fetch()
            .then(function (TransactionType) {
                if (!TransactionType) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: TransactionType.toJSON()});
                }
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    }
};
module.exports=Repository;