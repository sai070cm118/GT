import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

import { AppData } from '../../../Services/WebSocket/AppData';
import { retry } from 'rxjs/operator/retry';

import { SocketFunctions } from '../../../Services/WebSocket/SocketFunctions/SocketFunctions';

@Component({
  selector: 'app-challengetile',
  templateUrl: './challengetile.component.html',
  styleUrls: ['./challengetile.component.css']
})
export class ChallengeTile {


    @Input() IsFree:any;

  constructor(private _Globals:AppData,
    private _socketFunctions:SocketFunctions){

    }

    

    createGame(challengeId:number){
        this._socketFunctions.createGame({ ChallangeId:challengeId, IsFree: this.IsFree });
    }

    getGames(){
        console.log(this._Globals.Profile.AppGames);
        console.log(this._Globals.Profile.AppGames.filter(x=>x.IsFree));
        console.log(this._Globals.Profile.AppGames.filter(x=>!x.IsFree));

        if(this.IsFree)
            return this._Globals.Profile.AppGames.filter(x=>x.IsFree);
        else
            return this._Globals.Profile.AppGames.filter(x=>!x.IsFree);
    }

    getGameChallenges(game){
        if(this.IsFree)
            return game.FreeGameChallenges;
        else
            return game.Challenges;
    }

}
