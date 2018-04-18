var Repository = {

    Models: require('./Repositories/Models.js'),


    TransactionTypeRepository: require('./Repositories/Transaction/TransactionTypeRepository.js'),
    TransactionStatusRepository: require('./Repositories/Transaction/TransactionStatusRepository.js'),
    OfflineTransactionTypeRepository: require('./Repositories/Transaction/OfflineTransactionTypeRepository.js'),
    TransactionRepository: require('./Repositories/Transaction/TransactionRepository.js'),
    OfflineMoneyRepository: require('./Repositories/Transaction/OfflineMoneyRepository.js'),



    GameGroupRepository: require('./Repositories/Game/Message/GameGroupRepository.js'),
    GameMessageRepository: require('./Repositories/Game/Message/GameMessageRepository.js'),



    ProfileRepository: require('./Repositories/User/ProfileRepository.js'),
    UserRepository: require('./Repositories/User/UserRepository.js'),
    AccountRepository: require('./Repositories/User/AccountRepository.js'),
    MongoUserRepository: require('./Repositories/User/MongoUserRepository.js'),


    UserGroupRepository: require('./Repositories/User/Message/UserGroupRepository.js'),
    MessageRepository: require('./Repositories/User/Message/MessageRepository.js'),



    AppGameRepository: require('./Repositories/Game/AppGameRepository.js'),
    GamePositionRepository: require('./Repositories/Game/GamePositionRepository.js'),
    GameChallengeRepository: require('./Repositories/Game/GameChallengeRepository.js'),
    

    GameRepository: require('./Repositories/GameA/GameRepository.js'),

};
module.exports=Repository;