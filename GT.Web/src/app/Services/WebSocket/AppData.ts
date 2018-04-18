

import { Injectable } from '@angular/core';
import {IProfile,IUserGroup} from './Models';

import {Observable} from 'rxjs/Rx';


import { 
    ProfileService,
    MenuService,
    MessageService,
    NotificationService,
    ChatBoxService,
    ChatService,
    BoxControlService
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

        Observable.interval(1000).map(tick => (new Date().getTime()) + ((new Date().getTimezoneOffset()) * 60000)).share().subscribe(time => {this.currentTime = time;});

        this.Profile=new IProfile();


        this._ProfileService.getProfile().subscribe(profile=>{
        this.Profile=new IProfile(profile.data._id,profile.data.Email,profile.data.ProfileName,profile.data.FirstName,profile.data.LastName,profile.data.ProfilePic,profile.data.Location,profile.data.Live,profile.data.IsActive,profile.data.Status,profile.data.User,profile.data.Account);

        /* this._SocketService.Send({controller:'UserGroup',method:'getUserGroup',data:{}});
        this.getAppGames();
        this.getPaidRunningGames();
        this.getFreeRunningGames();
        this.getMyJoinedGames(); */


        });
    }
}