

import { Injectable } from '@angular/core';
import {IProfile,IUserGroup} from './Models';

import {Observable} from 'rxjs/Rx';


import { 
    ProfileService,
    MenuService,
    MessageService,
    NotificationService,
    ChatBoxService,
  }  from '../index';


@Injectable()
export class AppData {

    Profile:IProfile;
    Profiles?:IProfile[];
    MyGroupProfiles?:IProfile[];
    SocketConnection?:any;
    CurrentGroupId:string='';
    CurrentGroupData:IUserGroup;
    currentTime:number;
    public token:any;
  
    constructor(
        private _ProfileService:ProfileService
      ){
    
    
      }
    
    ngOnInit() {

    }
}