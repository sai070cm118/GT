import { Input,Output,Component } from '@angular/core';
import { Router } from '@angular/router';
import {ProfileService} from '../../Services/index';
import {UserService,SocketManager} from '../../Services/index';

import {AppData} from '../../Services/WebSocket/AppData';
import { IProfile,IUserGroup } from '../../Services/WebSocket/Models';


@Component({
    moduleId: module.id,
    selector: 'Profile',
    templateUrl: 'Profile.component.html'
})

export class ProfileComponent {

    searchedName:string;
    constructor(
        private _Globals: AppData,
        private _ProfileService: ProfileService,
        private _UserService: UserService,
        private _SocketService:SocketManager
    ){
        console.log(_Globals);
    }

    updateProfile(){

        this._ProfileService.updateProfile(this._Globals).subscribe(data => {
        },
        error => {
            console.log(error);
        });
    }

    changePassword(){
        this._UserService.changePassword(this._Globals.Profile.User).subscribe(data => {
            this._Globals.Profile.User.Password='';
            this._Globals.Profile.User.OldPassword='';
        },
        error => {
            console.log(error);
        });
    }

    searchProfiles(){
        this._ProfileService.searchProfiles(this.searchedName).subscribe(profileData=>{
            this._Globals.Profiles=profileData.data;
            console.log(this._Globals.Profiles);
      });
    }

    addUserGroup(profile:IProfile){
        var newUserGroup=new IUserGroup();
        newUserGroup.GroupName=this._Globals.Profile.ProfileName;
        newUserGroup.IsGroup=false;
        newUserGroup.Participants=[profile,this._Globals.Profile];
        this._SocketService.Send({controller:'UserGroup',method:'add',data:newUserGroup});
    }

   profileBoxControls={
            title:'Profile Details',
            footer:true,
            collapse:false,
            settings:{
                hide:true
            },
            close:false,
            lables:[
            ],
            images:[
            ],
            chat:false,
            isChatBox:false,
            isContactsOpen:false
        };


    friendsBoxControls={
        title:'Friends',
        footer:true,
        collapse:false,
        settings:{
            hide:true
        },
        close:false,
        lables:[
        ],
        images:[
        ],
        chat:false,
        isChatBox:false,
        isContactsOpen:false,
        minHeight:'360px',
        maxHeight:'360px'
    };
}
