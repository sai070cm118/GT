import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppData } from '../../../Services/WebSocket/AppData';
import { retry } from 'rxjs/operator/retry';

import { SocketFunctions } from '../../../Services/WebSocket/SocketFunctions/SocketFunctions';


@Component({
  selector: 'app-running-games',
  templateUrl: './running-games.component.html',
  styleUrls: ['./running-games.component.css']
})
export class RunningGamesComponent {
  constructor(private _Globals:AppData,
    private _socketFunctions:SocketFunctions){

    }

  ngOnInit() {
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
