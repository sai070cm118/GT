import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppData } from '../../../Services/WebSocket/AppData';
import { retry } from 'rxjs/operator/retry';

import { SocketFunctions } from '../../../Services/WebSocket/SocketFunctions/SocketFunctions';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent {
  constructor(private _Globals:AppData,
    private _socketFunctions:SocketFunctions){

    }


    
  ngOnInit() {
  }

}
