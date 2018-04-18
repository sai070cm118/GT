import { Injectable,Injector } from '@angular/core';
import { AppData } from '../AppData';

import { SocketFunctions } from '../SocketFunctions/SocketFunctions'

import {
    ISocketMessage,
    IUserGroup
} from '../../../models/model';

@Injectable()
export class ProfileController {
    private _socketFunctions:SocketFunctions;

    constructor(
        private _appData:AppData,
        injector:Injector
    ){
        setTimeout(() => this._socketFunctions = injector.get(SocketFunctions));

    }

    manageData(input:any){
        var messageData = <ISocketMessage>input;
    
    
            if(messageData.Type=="GetMyUserGroups"){
            this._appData.Profile.UserGroups=<IUserGroup[]>messageData.data;
            }
            else if(messageData.Type=="GetGroupMessages"){
            if(messageData.error){
                this._appData.Profile.UserGroups.find(x => x._id == messageData.data[0]._id).Messages=[];
                this._appData.CurrentGroupData=this._appData.Profile.UserGroups.find(x => x._id == messageData.data[0]._id);
            }
            else{
                
                if(this._appData.Profile.UserGroups.find(x => x._id == messageData.data[0]._id).Messages==undefined)
                this._appData.Profile.UserGroups.find(x => x._id == messageData.data[0]._id).Messages=messageData.data[0].Messages;
                else
                this._appData.Profile.UserGroups.find(x => x._id == messageData.data[0]._id).Messages=messageData.data[0].Messages.concat(this._appData.Profile.UserGroups.find(x => x._id == messageData.data[0]._id).Messages);
                
                this._appData.CurrentGroupData=this._appData.Profile.UserGroups.find(x => x._id == messageData.data[0]._id);
            }
            }
            else if(messageData.Type=="GetGameGroupMessages"){
            if(messageData.error){
                
            }
            else{
                
                if(messageData.data.IsFree){
                this._appData.Profile.FreeGames.find(x => x._id == messageData.data[0]._id).GameGroup.Messages=messageData.data[0].Messages.concat(this._appData.Profile.FreeGames.find(x => x._id == messageData.data[0]._id).GameGroup.Messages);
                }
                else{
                this._appData.Profile.PaidGames.find(x => x._id == messageData.data[0]._id).GameGroup.Messages=messageData.data[0].Messages.concat(this._appData.Profile.FreeGames.find(x => x._id == messageData.data[0]._id).GameGroup.Messages);
                }
        
            }
            }
            else if(messageData.Type=="GetGroupMessage"){
        
        
        
            if(this._appData.Profile.UserGroups.find(x => x._id == messageData.data.UserGroup._id).Messages==undefined)
                this._appData.Profile.UserGroups.find(x => x._id == messageData.data.UserGroup._id).Messages=[messageData.data.message];
            else
                this._appData.Profile.UserGroups.find(x => x._id == messageData.data.UserGroup._id).Messages.push(messageData.data.message);
            }
            else if(messageData.Type=="GetGameGroupMessage"){
        
        
            console.log(messageData.data.Message);
        
            if(messageData.data.IsFree){
                this._appData.Profile.FreeGames.find(x => x._id == messageData.data.GameId).GameGroup.Messages.push(messageData.data.Message);
            }
            else{
                this._appData.Profile.PaidGames.find(x => x._id == messageData.data.GameId).GameGroup.Messages.push(messageData.data.Message);
            }
            
            }
            else if(messageData.Type=="GetAppGames"){
                this._appData.Profile.AppGames=messageData.data;
            }
            else if(messageData.Type=="GameCreated"){
                this._socketFunctions.getAccount();
            }
            else if(messageData.Type=="GetAccount"){
                this._appData.Profile.Account=messageData.data;
            }
            else if(messageData.Type=="GetPaidRunningGames"){
        
                this._appData.Profile.PaidGames=messageData.data;
                this._socketFunctions.getGameGroupDetails(false);
            }
            else if(messageData.Type=="GetPaidRunningGame"){
        
        
        
        
            this._appData.Profile.PaidGames.find(x=>x._id==messageData.data._id).RemainPositions=messageData.data.RemainPositions;
            this._appData.Profile.PaidGames.find(x=>x._id==messageData.data._id).Status=messageData.data.Status;
        
        
            }
            else if(messageData.Type=="GetFreeRunningGames"){
                this._appData.Profile.FreeGames=messageData.data;
                this._socketFunctions.getGameGroupDetails(true);
            }
            else if(messageData.Type=="GetFreeRunningGame"){
            
        
            console.log(messageData.data);
        
            this._appData.Profile.FreeGames.find(x=>x._id==messageData.data._id).RemainPositions=messageData.data.RemainPositions;
            this._appData.Profile.FreeGames.find(x=>x._id==messageData.data._id).Status=messageData.data.Status;
        
            }
            else if(messageData.Type=="BettedOnGame"){
                console.log('BettedOnGame');
                //this._appData.getAccount();
        
                console.log(messageData);
        
                if(!messageData.error){
                if(messageData.data.IsFree)
                    this._appData.Profile.MyBettedFreeGames.push(messageData.data.GameId);
                else
                    this._appData.Profile.MyBettedPaidGames.push(messageData.data.GameId);
                }
                
            }
            else if(messageData.Type=="NewGameAvailable"){
            if(messageData.data.IsFree)
                this._appData.Profile.FreeGames.push(messageData.data);
            else
                this._appData.Profile.PaidGames.push(messageData.data);
            }
            else if(messageData.Type=="GetMyJoinedGames"){
        
            console.log(messageData);
            if(messageData!=undefined){
                messageData.data.MyBettedPaidGames.forEach(element => {
                this._appData.Profile.MyBettedPaidGames.push(element.GameId);
                });
                
                messageData.data.MyBettedFreeGames.forEach(element => {
                this._appData.Profile.MyBettedFreeGames.push(element.GameId);
                });
            }
            
            }
            else if(messageData.Type=="BetOnGamePosition"){
        
            console.log(messageData);
            }
            else if(messageData.Type=="GetGameGroupDetails"){
            
        
            messageData.data[0].Messages=[];
        
            if(!messageData.data[0].IsFree){
                this._appData.Profile.PaidGames.find(x=>x._id==messageData.data[0].GameId).GameGroup=messageData.data[0];
            }
            else{
                this._appData.Profile.FreeGames.find(x=>x._id==messageData.data[0].GameId).GameGroup=messageData.data[0];
            }
        
            }
            
            console.log(this._appData.Profile);
    }

}