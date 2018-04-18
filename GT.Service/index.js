var Service={

    ProfileService: require('./Services/User/ProfileService.js'),
    UserService: require('./Services/User/UserService.js'),
    AccountService: require('./Services/User/AccountService.js'),
    MongoUserService: require('./Services/User/MongoUserService.js'),




    MessageService: require('./Services/User/Message/MessageService.js'),
    UserGroupService: require('./Services/User/Message/UserGroupService.js'),



    TransactionTypeService:require('./Services/Transaction/TransactionTypeService.js'),
    TransactionStatusService: require('./Services/Transaction/TransactionStatusService.js'),
    OfflineTransactionTypeService: require('./Services/Transaction/OfflineTransactionTypeService.js'),
    OfflineMoneyService: require('./Services/Transaction/OfflineMoneyService.js'),
    TransactionService: require('./Services/Transaction/TransactionService.js'),

    
    
    GameGroupService: require('./Services/Game/Message/GameGroupService.js'),
    GameMessageService: require('./Services/Game/Message/GameMessageService.js'),



    AppGameService: require('./Services/Game/AppGameService.js'),
    GamePositionService: require('./Services/Game/GamePositionService.js'),
    GameChallengeService: require('./Services/Game/GameChallengeService.js'),

    GameService: require('./Services/GameA/GameService.js'),


};
module.exports=Service;