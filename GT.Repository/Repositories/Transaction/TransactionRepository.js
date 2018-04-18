var Models=require('../Models.js');

var Repository={
    add:function(Transaction,callback){
        Models.Transaction
            .forge({
                Name: Transaction.Name
            })
            .save()
            .then(function (TransactionDbModel) {
                callback({error: false, data: {Id: TransactionDbModel.get('Id')}});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            }); 
    },
    update:function(Transaction,callback){
        Models.Transaction
            .forge({Id: Transaction.Id})
            .fetch({require: true})
            .then(function (TransactionDbModel){
                TransactionDbModel.save({
                    Name: Transaction.Name || TransactionDbModel.get('Name')
                })
                .then(function () {
                    callback({error: false, data: {message: 'Transaction details updated'}});
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
        Models.Transaction
            .forge({Id: id})
            .fetch({require: true})
            .then(function (Transaction) {
                Models.Transaction.destroy()
                .then(function () {
                    callback({error: false, data: {message: 'Transaction successfully deleted'}});
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
        Models.Transactions
            .forge()
            .fetch({withRelated:['UserDetails']})
            .then(function (Transactions) {
                callback({error: false, data: Transactions.toJSON()});
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getById:function(id,callback){
        Models.Transaction
            .forge({Id: id})
            .fetch()
            .then(function (Transaction) {
                if (!Transaction) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: Transaction.toJSON()});
                }
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    },
    getByName:function(name,callback){
       Models.Transaction
            .forge({Name: name})
            .fetch()
            .then(function (Transaction) {
                if (!Transaction) {
                    callback({error: true, data: {}});
                }
                else {
                    callback({error: false, data: Transaction.toJSON()});
                }
            })
            .otherwise(function (err) {
                callback({error: true, data: {message: err.message}});
            });
    }
};
module.exports=Repository;