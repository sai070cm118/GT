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

    







}
