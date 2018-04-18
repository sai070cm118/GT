import { Injectable } from '@angular/core';
import { SocketManager } from '../SocketManager';
import { AppData } from '../AppData';
import { 
    IGroupMessage,
    IAppGame
} from '../Models';


@Injectable()
export class SocketFunctions {

    constructor(
        private _appData:AppData,
        private _SocketService:SocketManager
    ){
    }

    sendMessage(groupMessage:IGroupMessage){
        this._SocketService.Send({controller:'UserGroup',method:'SendGroupMessages',data:groupMessage});
      }
    
      sendGameMessage(gameGroupMessage:any){
        this._SocketService.Send({controller:'AppGame',method:'SendGameGroupMessages',data:gameGroupMessage});
      }
    
    
      getGroupMessages(groupId:string,previousMessageId:string){
        this._SocketService.Send({controller:'UserGroup',method:'GetGroupMessages',data:{GroupId:groupId,PreviousMessageId:previousMessageId}});
      }
    
      getAppGames(){
        this._SocketService.Send({controller:'AppGame',method:'GetAppGames',data:{}});
      }
    
      getAccount(){
        this._SocketService.Send({controller:'Profile',method:'GetAccount',data:{}});
      }
    
      getFreeRunningGames(){
        this._SocketService.Send({controller:'AppGame',method:'GetFreeGames',data:{}});
      }
      getPaidRunningGames(){
        this._SocketService.Send({controller:'AppGame',method:'GetPaidGames',data:{}});
      }
      createGame(data){
        console.log(data);
        this._SocketService.Send({controller:'AppGame',method:'CreateGame',data:data});
      }
    
      betOnGame(data){
        this._SocketService.Send({controller:'AppGame',method:'BetOnGame',data:data});
      }
    
      getMyJoinedGames(){
        this._SocketService.Send({controller:'AppGame',method:'GetMyJoinedGames',data:{}});
    
      }
    
      betOnGamePosition(IsFree:boolean,gameId:number,Position:number){
        this._SocketService.Send({controller:'AppGame',method:'BetOnGamePosition',data:{IsFree:IsFree,GameId:gameId,Position:Position}});
    
      }
    
      getGameGroupDetails(IsFree:boolean){
    
        if(!IsFree)
          this._appData.Profile.PaidGames.forEach(element => {
            this._SocketService.Send({controller:'AppGame',method:'GetGameGroupDetails',data:{IsFree:IsFree,GameId:element._id}});
          });
        else
          this._appData.Profile.FreeGames.forEach(element => {
            this._SocketService.Send({controller:'AppGame',method:'GetGameGroupDetails',data:{IsFree:IsFree,GameId:element._id}});
          });
      }
    
    
    
    
    
      //Filters
    
    
      getAppGameByChallengeId(challengeId:any,IsFree:boolean):IAppGame{
        if(challengeId==undefined)
          return undefined;
    
          if(IsFree){
            return this._appData.Profile.AppGames.find(({FreeGameChallenges})=>{
              if(FreeGameChallenges.length>0)
                return FreeGameChallenges.find(({_id})=>{
                  return _id==challengeId;
                })._id==challengeId;
              else
                return undefined;
            });
          }
          else{
            return this._appData.Profile.AppGames.find(({Challenges})=>{
              if(Challenges.length>0)
                return Challenges.find(({_id})=>{
                  return _id==challengeId;
                })._id==challengeId;
              else
                return undefined;
            });
          }
        
      }
    
      getChallengeIdByGameId(gameId:string,IsFree:boolean):string{
        if(IsFree){
    
          var fetchedChallenges=this._appData.Profile.FreeGames.filter(({_id}) => [gameId].includes(_id));
    
          if(fetchedChallenges.length>0)
            return fetchedChallenges[0].ChallengeId;
          else
            return undefined;
        }
        else{
    
          var fetchedChallenges=this._appData.Profile.PaidGames.filter(({_id}) => [gameId].includes(_id));
    
          if(fetchedChallenges.length>0)
            return fetchedChallenges[0].ChallengeId;
          else
            return undefined;
        }
        
      }
    
    
      getAppGameByGameId(gameId:any,IsFree:boolean){
    
        if(IsFree){
          return this.getAppGameByChallengeId(this.getChallengeIdByGameId(gameId,IsFree),IsFree);
        }
        else{
          return this.getAppGameByChallengeId(this.getChallengeIdByGameId(gameId,IsFree),IsFree);
        }
    }
          
    
}