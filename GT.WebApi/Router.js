
var express=require('express');
var Router=express.Router();

Router.use('/Profile',require('./Controllers/User/ProfileController'));
Router.use('/User',require('./Controllers/User/UserController'));
Router.use('/Account',require('./Controllers/User/AccountController'));
Router.use('/MongoUser',require('./Controllers/User/MongoUserController'));


Router.use('/UserGroup',require('./Controllers/User/Message/UserGroupController'));
Router.use('/Message',require('./Controllers/User/Message/MessageController'));


Router.use('/GameGroup',require('./Controllers/Game/Message/GameGroupController'));
Router.use('/GameMessage',require('./Controllers/Game/Message/GameMessageController'));




Router.use('/TransactionType',require('./Controllers/Transaction/TransactionTypeController'));
Router.use('/TransactionStatus',require('./Controllers/Transaction/TransactionStatusController'));







Router.use('/AppGame',require('./Controllers/Game/AppGameController'));
Router.use('/GamePosition',require('./Controllers/Game/GamePositionController'));
Router.use('/GameChallenge',require('./Controllers/Game/GameChallengeController'));
Router.use('/Game',require('./Controllers/GameA/GameController'));



module.exports=Router;
