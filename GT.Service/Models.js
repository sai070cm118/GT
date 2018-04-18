
var dbConfig = {
  client: 'mysql',
  connection: {"host": "127.0.0.1","user": "root","password": "sairam0168","database": "gdatabase","charset": "utf8"}
};

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Conversation');

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);


var TransactionType=bookshelf.Model.extend({tableName:'TransactionType'});
var TransactionTypes=bookshelf.Collection.extend({model:TransactionType});

var TransactionStatus=bookshelf.Model.extend({tableName:'TransactionStatus'});
var TransactionStatuses=bookshelf.Collection.extend({model:TransactionStatus});

var OfflineTransactionType=bookshelf.Model.extend({tableName:'OfflineTransactionType'});
var OfflineTransactionTypes=bookshelf.Collection.extend({model:OfflineTransactionType});

var GameType=bookshelf.Model.extend({tableName:'GameType'});
var GameTypes=bookshelf.Collection.extend({model:GameType});

var Profile=bookshelf.Model.extend(
    {
        tableName:'Profile',
        User: function() {
            return this.hasOne(User,'Id');
        },
        Account: function() {
            return this.hasOne(Account,'Id');
        }
    }
);
var Profiles=bookshelf.Collection.extend({model:Profile});

var User=bookshelf.Model.extend({tableName:'User',
        UserDetails: function() {
            return this.belongsTo(Profile,'Id');
        }
	}
);	
var Users=bookshelf.Collection.extend({model:User});

var Account=bookshelf.Model.extend(
    {
        tableName:'Account',
        AccountProfile:function(){
            return this.belongsTo(Profile,'Id');
        }
    }
);
var Accounts=bookshelf.Collection.extend({model:Account});

var Friend=bookshelf.Model.extend(
    {
        tableName:'Friend',
        MyDetails:function(){
            return this.belongsTo(Profile,'MyId')
        },
        FriendDetails:function(){
            return this.belongsTo(Profile,'FriendId')
        }
    }
);
var Friends=bookshelf.Collection.extend({model:Friend});

var OfflineMoney=bookshelf.Model.extend(
    {
        tableName:'OfflineMoney',
        PaidProfile:function(){
            return this.belongsTo(Profile,'ProfileId')
        }
    }
);
var OfflineMoneyies=bookshelf.Collection.extend({model:OfflineMoney});

var Transaction=bookshelf.Model.extend(
    {
        tableName:'Transaction',
        CreditAccount:function(){
            return this.belongsTo(Profile,'CreditID')
        },
        DebitAccount:function(){
            return this.belongsTo(Profile,'DebitID')
        },
        TransactionType:function(){
            return this.belongsTo(TransactionType,'Type')
        },
        TransactionStatus:function(){
            return this.belongsTo(TransactionStatus,'Status')
        }

    }
);
var Transactions=bookshelf.Collection.extend({model:Transaction});

var RunningGame=bookshelf.Model.extend(
    {
        tableName:'RunningGame',
        GameType:function(){
            return this.belongsTo(GameType,'Type')
        },
        ProfileDetails:function(){
            return this.belongsTo(Profile,'CreatedBy')
        },

    }
);
var RunningGames=bookshelf.Collection.extend({model:RunningGame});

var UserSchema = new mongoose.Schema({
  Id:Number,
  ProfileName: String
});
var UserModel=mongoose.model('User', UserSchema);

var MessageSchema = new mongoose.Schema({
  sender : {type:mongoose.Schema.Types.ObjectId,ref:'User'},
  message: String,
  date: { type: Date, default: Date.now },
  IsSent:Boolean,
  IsDelivered:Boolean,
  IsRead:Boolean
});
var MessageModel=mongoose.model('Message', MessageSchema);


var GameMessageSchema = new mongoose.Schema({
  sender:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
  message: String,
  date: { type: Date, default: Date.now },
  IsSent:Boolean,
  IsDelivered:Boolean,
  IsRead:Boolean
});
var GameMessageModel=mongoose.model('GameMessage', GameMessageSchema);

var UserGroupSchema = new mongoose.Schema({
  IsGroup: Boolean,
  GroupName: String,
  participants:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
  Messages: [{type:mongoose.Schema.Types.ObjectId,ref:'Message'}],
});
var UserGroupModel=mongoose.model('UserGroup', UserGroupSchema);

var GameGroupSchema = new mongoose.Schema({
  GameId:String,
  participants:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
  Messages: [{type:mongoose.Schema.Types.ObjectId,ref:'GameMessage'}]
});
var GameGroupModel=mongoose.model('GameGroup', GameGroupSchema);



var Models={
    TransactionType:TransactionType,
    TransactionTypes:TransactionTypes,
    TransactionStatus:TransactionStatus,
    TransactionStatuses:TransactionStatuses,
    OfflineTransactionType:OfflineTransactionType,
    OfflineTransactionTypes:OfflineTransactionTypes,
    GameType:GameType,
    GameTypes:GameTypes,
    User:User,
    Users:Users,
    Profile:Profile,
    Profiles:Profiles,
    Account:Account,
    Accounts:Accounts,
    Friend:Friend,
    Friends:Friends,
    OfflineMoney:OfflineMoney,
    OfflineMoneyies:OfflineMoneyies,
    Transaction:Transaction,
    Transactions:Transactions,
    RunningGame:RunningGame,
    RunningGames:RunningGames,
    //Mongo Models
    UserModel:UserModel,
    MessageModel:MessageModel,
    GameMessageModel:GameMessageModel,
    UserGroupModel:UserGroupModel,
    GameGroupModel:GameGroupModel,
};
module.exports=Models;