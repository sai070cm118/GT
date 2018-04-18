

var ConfigurationManager=require('gtconfigurationmanager');

var dbConfig = {
  client: 'mysql',
  connection: ConfigurationManager.getMySqlDbConfiguration()
};

dbConfig.connection.typeCast= function(field, next) {
    if (field.type == "BIT" && field.length == 1) {
        var bit = field.string();

        if(bit === null) 
            return false;
        else if(bit.charCodeAt(0)==1)
            return true;
        else
            return false;
    }

    // handle everything else as default
    return next();
}

var mongoose = require('mongoose');
mongoose.connect(ConfigurationManager.getMongoConversationConnectionString());

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

var TransactionType=bookshelf.Model.extend({tableName:'TransactionType'});
var TransactionTypes=bookshelf.Collection.extend({model:TransactionType});

var TransactionStatus=bookshelf.Model.extend({tableName:'TransactionStatus'});
var TransactionStatuses=bookshelf.Collection.extend({model:TransactionStatus});

var Profile=bookshelf.Model.extend(
    {
        tableName:'Profile',
        idAttribute: '_id',
        User: function() {
            return this.hasOne(User,'_id');
        },
        Account: function() {
            return this.hasOne(Account,'_id');
        }
    }
);
var Profiles=bookshelf.Collection.extend({model:Profile});

var User=bookshelf.Model.extend(
    {
        tableName:'User',
        idAttribute: '_id',
        UserDetails: function() {
            return this.belongsTo(Profile,'_id');
        }
	}
);	
var Users=bookshelf.Collection.extend({model:User});

var Account=bookshelf.Model.extend(
    {
        tableName:'Account',
        idAttribute: '_id',
        AccountProfile:function(){
            return this.belongsTo(Profile,'_id');
        }
    }
);
var Accounts=bookshelf.Collection.extend({model:Account});

var Friend=bookshelf.Model.extend(
    {
        tableName:'Friend',
        idAttribute: '_id',
        MyDetails:function(){
            return this.belongsTo(Profile,'MyId')
        },
        FriendDetails:function(){
            return this.belongsTo(Profile,'FriendId')
        }
    }
);
var Friends=bookshelf.Collection.extend({model:Friend});

var Transaction=bookshelf.Model.extend(
    {
        tableName:'Transaction',
        idAttribute: '_id',
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

var GameStatus=bookshelf.Model.extend(
    {
        tableName:'GameStatus',
        idAttribute: '_id'
    }
);
var GameStatuses=bookshelf.Collection.extend({model:GameStatus});

var AppGame=bookshelf.Model.extend(
    {
        tableName:'AppGame',
        idAttribute: '_id',
        Positions: function() {
          return this.hasMany(GamePosition,'GameId');
        },
        Challenges: function() {
          return this.hasMany(GameChallenge,'GameId');
        },
        FreeGameChallenges: function() {
          return this.hasMany(FreeGameChallenge,'GameId');
        }
    }
);	
var AppGames=bookshelf.Collection.extend({model:AppGame});

//Real Challenges and Bettings


var GamePosition=bookshelf.Model.extend(
    {
        tableName:'GamePosition',
        idAttribute: '_id',
        GameId: function() {
            return this.belongsTo(AppGame,'_id');
        }
    }
);	
var GamePositions=bookshelf.Collection.extend({model:GamePosition});

var GameChallenge=bookshelf.Model.extend(
    {
        tableName:'GameChallenge',
        idAttribute: '_id',
        GameId: function() {
            return this.belongsTo(AppGame,'_id');
        }
    }
);	
var GameChallenges=bookshelf.Collection.extend({model:GameChallenge});

var Game=bookshelf.Model.extend(
    {
        tableName:'Game',
        idAttribute: '_id',
        Challenge:function(){
            return this.belongsTo(GameChallenge,'ChallengeId')
        },
        Owner:function(){
            return this.belongsTo(Profile,'Owner')
        },
        Status:function(){
            return this.belongsTo(GameStatus,'Status')
        },
        WinPositions: function() {
          return this.hasMany(GameWinPosition);
        },
        UserBettings: function() {
          return this.hasMany(GameUserBetting);
        }
    }
);	
var Games=bookshelf.Collection.extend({model:Game});

var GameWinPosition=bookshelf.Model.extend(
    {
        tableName:'GameWinPosition',
        idAttribute: '_id',
        GameId:function(){
            return this.belongsTo(AppGame,'_id')
        }
    }
);	
var GameWinPositions=bookshelf.Collection.extend({model:GameWinPosition});

var GameUserBetting=bookshelf.Model.extend(
    {
        tableName:'GameUserBetting',
        idAttribute: '_id',
        Game:function(){
            return this.belongsTo(Game,'GameId')
        },
        UserId:function(){
            return this.belongsTo(Profile,'_id')
        },
        UserBetPositions: function() {
          return this.hasMany(GameBetPosition);
        }
    }
);	
var GameUserBettings=bookshelf.Collection.extend({model:GameUserBetting});

var GameBetPosition=bookshelf.Model.extend(
    {
        tableName:'GameBetPosition',
        idAttribute: '_id',
        BetId:function(){
            return this.belongsTo(GameUserBetting,'_id')
        }
    }
);	
var GameBetPositions=bookshelf.Collection.extend({model:GameBetPosition});


//Free Challenges and Bettings


var FreeGameChallenge=bookshelf.Model.extend(
    {
        tableName:'FreeGameChallenge',
        idAttribute: '_id',
        GameId: function() {
            return this.belongsTo(AppGame,'_id');
        }
    }
);	
var FreeGameChallenges=bookshelf.Collection.extend({model:FreeGameChallenge});

var FreeGame=bookshelf.Model.extend(
    {
        tableName:'FreeGame',
        idAttribute: '_id',
        Challenge:function(){
            return this.belongsTo(GameChallenge,'ChallengeId')
        },
        Owner:function(){
            return this.belongsTo(Profile,'Owner')
        },
        Status:function(){
            return this.belongsTo(GameStatus,'Status')
        },
        WinPositions: function() {
          return this.hasMany(FreeGameWinPosition);
        },
        UserBettings: function() {
          return this.hasMany(FreeGameUserBetting);
        }
    }
);	
var FreeGames=bookshelf.Collection.extend({model:FreeGame});

var FreeGameWinPosition=bookshelf.Model.extend(
    {
        tableName:'FreeGameAWinPosition',
        idAttribute: '_id',
        GameId:function(){
            return this.belongsTo(AppGame,'_id')
        }
    }
);	
var FreeGameWinPositions=bookshelf.Collection.extend({model:FreeGameWinPosition});

var FreeGameUserBetting=bookshelf.Model.extend(
    {
        tableName:'FreeGameUserBetting',
        idAttribute: '_id',
        Game:function(){
            return this.belongsTo(FreeGame,'GameId')
        },
        UserId:function(){
            return this.belongsTo(Profile,'_id')
        },
        UserBetPositions: function() {
          return this.hasMany(FreeGameBetPosition);
        }
    }
);	
var FreeGameUserBettings=bookshelf.Collection.extend({model:FreeGameUserBetting});

var FreeGameBetPosition=bookshelf.Model.extend(
    {
        tableName:'FreeGameBetPosition',
        idAttribute: '_id',
        BetId:function(){
            return this.belongsTo(FreeGameUserBetting,'_id')
        }
    }
);	
var FreeGameBetPositions=bookshelf.Collection.extend({model:FreeGameBetPosition});














var UserSchema = new mongoose.Schema({
    ProfileName: String,
    ProfilePic: String
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
  GameId:Number,
  IsFree:Boolean,
  participants:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
  Messages: [{type:mongoose.Schema.Types.ObjectId,ref:'GameMessage'}]
});
var GameGroupModel=mongoose.model('GameGroup', GameGroupSchema);

var Models={

    //Account Models
    User:User,
    Users:Users,
    Profile:Profile,
    Profiles:Profiles,
    Account:Account,
    Accounts:Accounts,
    Friend:Friend,
    Friends:Friends,

    //Transaction Models
    TransactionType:TransactionType,
    TransactionTypes:TransactionTypes,
    TransactionStatus:TransactionStatus,
    TransactionStatuses:TransactionStatuses,
    Transaction:Transaction,
    Transactions:Transactions,
    
    //Game Models
    GameStatus:GameStatus,
    GameStatuses:GameStatuses,
    AppGame:AppGame,
    AppGames:AppGames,


    //Real Chips
    GamePosition:GamePosition,
    GamePositions:GamePositions,
    GameChallenge:GameChallenge,
    GameChallenges:GameChallenges,


    //Free Chips
    FreeGameChallenge:FreeGameChallenge,
    FreeGameChallenges:FreeGameChallenges,


    //Reail Chips Playing Models
    Game:Game,
    Games:Games,
    GameWinPosition:GameWinPosition,
    GameWinPositions:GameWinPositions,
    GameUserBetting:GameUserBetting,
    GameUserBettings:GameUserBettings,
    GameBetPosition:GameBetPosition,
    GameBetPositions:GameBetPosition,

    //Free Chips Playing Models
    FreeGame:FreeGame,
    FreeGames:FreeGames,
    FreeGameWinPosition:FreeGameWinPosition,
    FreeGameWinPositions:FreeGameWinPositions,
    FreeGameUserBetting:FreeGameUserBetting,
    FreeGameUserBettings:FreeGameUserBettings,
    FreeGameBetPosition:FreeGameBetPosition,
    FreeGameBetPositions:FreeGameBetPosition,


    //Mongo Models
    UserModel:UserModel,
    MessageModel:MessageModel,
    GameMessageModel:GameMessageModel,
    UserGroupModel:UserGroupModel,
    GameGroupModel:GameGroupModel,
    DbConfig:dbConfig,
    bookshelf:bookshelf
};
module.exports=Models;