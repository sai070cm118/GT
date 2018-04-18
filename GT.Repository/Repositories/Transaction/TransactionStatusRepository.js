var Models=require('../Models.js');
var ErrorLogger=require('gterrorLogger');

var CoreModels=require('gtcore');
var MyConsole=require('gtlogger');
var winstonConsole=require('gtlogger');

var Repository={
    add:function(TransactionStatus,callback){

        Models.TransactionStatus
            .forge({
                Name: TransactionStatus.Name
            })
            .save()
            .then(function (TransactionStatusDbModel) {
                callback({error: false, data: {Id: TransactionStatusDbModel.get('Id')}});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            }); 
    },
    update:function(TransactionStatus,callback){
        Models.TransactionStatus
        .forge({_id: TransactionStatus._id})
        .fetch()
        .then(function(model) {

            console.log(model);

            model.set({
                Name: TransactionStatus.Name || model.get('Name')
            })
            .where({_id: TransactionStatus._id})
            .save(null,{ method: 'update' })
            .then(function () {
                callback({error: false, data: 'Transaction Status updated'});
            })
            .catch(function (err) {
                winstonConsole.log('debug',err);
                ErrorLogger.error(err);
                callback({error: true, data: {message: 'Update failed for Transaction Status.'}});
            });
        });
    },
    getAll:function(callback){
        Models.TransactionStatuses
            .forge()
            .fetch()
            .then(function (TransactionStatuses) {
                callback({error: false, data: TransactionStatuses.toJSON()});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getById:function(id,callback){
        Models.TransactionStatus
            .forge({_Id: id})
            .fetch()
            .then(function (TransactionStatus) {
                if (!TransactionStatus) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: TransactionStatus.toJSON()});
                }
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    }
};
module.exports=Repository;