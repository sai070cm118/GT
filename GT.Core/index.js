
var CoreModels = {
    User: require('./Models/User.js'),
    Profile: require('./Models/Profile.js'),
    Account:require('./Models/Account.js'),
    Friend:require('./Models/Friend'),
    Response:require('./Models/Response'),
    MailOptions:require('./Models/MailOptions'),
    TransactionType:require('./Models/TransactionType'),
    TransactionStatus:require('./Models/TransactionStatus'),
    MoneyTransaction:require('./Models/MoneyTransaction'),
    FreeCoinsTransaction:require('./Models/FreeCoinsTransaction'),
    GameCoinTransaction:require('./Models/GameCoinTransaction'),
    AppGames:require('./Models/AppGame'),
    GamePositions:require('./Models/GamePosition'),
    GameChallenge:require('./Models/GameChallenge'),
    GameStatus:require('./Models/GameStatus'),
    Game:require('./Models/Game'),
    GameWinPositions:require('./Models/GameWinPosition'),
    GameUserBetting:require('./Models/GameUserBetting'),
    GameBetPositions:require('./Models/GameBetPosition')
};
module.exports=CoreModels;