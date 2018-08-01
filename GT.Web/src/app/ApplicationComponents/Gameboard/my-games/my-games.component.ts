import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppData } from '../../../Services/WebSocket/AppData';
import { retry } from 'rxjs/operator/retry';

import { SocketFunctions } from '../../../Services/WebSocket/SocketFunctions/SocketFunctions';


@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent {
  constructor(private _Globals:AppData,
    private _socketFunctions:SocketFunctions){

    }

  ngOnInit() {
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
