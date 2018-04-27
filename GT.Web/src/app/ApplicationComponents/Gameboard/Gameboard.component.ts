import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppData } from '../../Services/WebSocket/AppData';
import { retry } from 'rxjs/operator/retry';

import { SocketFunctions } from '../../Services/WebSocket/SocketFunctions/SocketFunctions';


@Component({
    moduleId: module.id,
    selector: 'Gameboard',
    templateUrl: 'Gameboard.component.html'
})

export class GameboardComponent {

    constructor(private _Globals:AppData,
    private _socketFunctions:SocketFunctions){

    }

    

    getPaidGames(){
        return this._Globals.Profile.AppGames.filter(x=>!x.IsFree);
    }

    getFreeGames(){
        return this._Globals.Profile.AppGames.filter(x=>x.IsFree);
    }

    createGame(IsFree:boolean,challengeId:number){
        this._socketFunctions.createGame({ ChallangeId:challengeId, IsFree: IsFree });
    }

    betOnGame(IsFree:boolean,gameId:number){
        this._socketFunctions.betOnGame({ GameId:gameId, IsFree: IsFree });
    }



    getNonParticipentGames(IsFree:boolean){

        var MyBettedFreeGames=this._Globals.Profile.MyBettedFreeGames;
        var MyBettedPaidGames=this._Globals.Profile.MyBettedPaidGames;

        if(this._Globals!=undefined){

            if(IsFree){

                return this._Globals.Profile.FreeGames.filter(({_id}) => !MyBettedFreeGames.includes(_id));

            }
            else{

                return this._Globals.Profile.PaidGames.filter(({_id}) => !MyBettedPaidGames.includes(_id));
            }
        }
        else{
            return [];
        }
    }

    getParticipentedGames(IsFree:boolean){
        var MyBettedFreeGames=this._Globals.Profile.MyBettedFreeGames;
        var MyBettedPaidGames=this._Globals.Profile.MyBettedPaidGames;

        if(this._Globals!=undefined){


            if(IsFree){

                return this._Globals.Profile.FreeGames.filter(({_id}) => MyBettedFreeGames.includes(_id));

            }
            else{

                return this._Globals.Profile.PaidGames.filter(({_id}) => MyBettedPaidGames.includes(_id));
            }
        }
        else{
            return [];
        }
    }


    sendMessageToGameGroup(gameMessage,GameId,IsFree){
        var gameMessag={
            "GameId":GameId,
            "Message":{
                "message": gameMessage
            },
            "IsFree":IsFree
        }

        this._socketFunctions.sendGameMessage(gameMessag);
        
    }

    getTime(startAt,endAt){
        var startDate=new Date(startAt);
        var endDate=new Date(endAt);

        if(this._Globals.currentTime>=startDate.getTime() &&            this._Globals.currentTime<=endDate.getTime())
            return ((endDate.getTime()-this._Globals.currentTime)/(endDate.getTime()-startDate.getTime()))*100;
        else
            return 0;
    }

   boxControls={
            title:'',
            footer:false,
            collapse:true,
            settings:{
                hide:false,
                settingList:[
                    {title:'Firsts',isDivider:false},
                    {title:'Second',isDivider:false},
                    {title:'Third',isDivider:true},
                    {title:'Fourth',isDivider:false}
                ]
            },
            close:true,
            lables:[
                {text:'Label1'},
                {text:'Label2'},
                {text:'Label2'}
            ],
            images:[
                {src:'Content/img/user2-160x160.jpg',id:'',tag:'3'},
                {src:'Content/img/user2-160x160.jpg',id:'',tag:'2'}
            ],
            chat:false,
            isChatBox:false,
            isContactsOpen:false
        };
}
