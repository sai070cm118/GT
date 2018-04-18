
const UserGroup = require('./UserGroup');
const AppGame = require('./AppGame');
const Profile = require('./Profile');



module.exports = function(message,userId,callback) {
    
    var messageData=message.data;

    switch(message.controller){
        case 'UserGroup':
            switch(message.method){
                case 'add':
                    UserGroup.add(messageData,userId,callback);
                    break;
                case 'getUserGroup':
                    UserGroup.getUserGroups(messageData,userId,callback);
                    break;
                case 'GetGroupMessages':
                    UserGroup.getGroupMessages(messageData,userId,callback);
                    break;
                case 'SendGroupMessages':
                    UserGroup.sendGroupMessages(messageData,userId,callback);
                    break;
                default:
                    break;
            }
            
        break;
        case 'AppGame':
            switch(message.method){
                case 'GetAppGames':
                    AppGame.getAppGames(messageData,userId,callback);
                    break;
                case 'CreateGame':
                    AppGame.createGame(messageData,userId,callback);
                    break;
                case 'GetPaidGames':
                    AppGame.getPaidRunningGames(messageData,userId,callback);
                    break;
                case 'GetFreeGames':
                    AppGame.getFreeRunningGames(messageData,userId,callback);
                    break;
                case 'BetOnGame':
                    AppGame.betOnGame(messageData,userId,callback);
                    break;
                case 'BetOnGamePosition':
                    AppGame.betOnGamePosition(messageData,userId,callback);
                    break;
                case 'GetMyJoinedGames':
                    AppGame.getMyJoinedGames(messageData,userId,callback);
                    break;
                case 'SendGameGroupMessages':
                    AppGame.sendGameGroupMessages(messageData,userId,callback);
                    break;
                case 'GetGameGroupDetails':
                    AppGame.getGameGroupDetails(messageData,userId,callback);
                    break;
                default:
                    break;
            }
        break;
        case 'Profile':
            switch(message.method){
                case 'GetAccount':
                    Profile.getAccount(messageData,userId,callback);
                    break;
                default:
                    break;
            }
        break;
        case 'UserGroup4':
        break;
        case 'UserGroup5':
        break;
        case 'UserGroup6':
        break;
        case 'UserGroup7':
        break;
        default:
        break;
    }
}

