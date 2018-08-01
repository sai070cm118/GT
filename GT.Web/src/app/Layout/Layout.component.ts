import {
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnInit,
    OnDestroy, 
    ViewChild, 
    ElementRef 
} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { AppData } from '../Services/WebSocket/AppData';

import { 
    SocketManager,
    ProfileService,
    MenuService,
    MessageService,
    NotificationService,
    ChatBoxService
 }  from '../Services/index';

import {
    IProfile,
    IUser
} from '../Services/WebSocket/Models';


@Component({
    moduleId: module.id,
    templateUrl: 'Layout.component.html'
})
export class LayoutComponent { 

    defaultIcon='./Content/Images/profile.png';

    currentView:number=1;

    
    constructor(
        private _SocketService:SocketManager,
        private _ProfileService:ProfileService,
        private _MenuService:MenuService,
        private _MessageService:MessageService,
        private _NotificationService:NotificationService,
        private _ChatBoxService:ChatBoxService,
        private _Globals: AppData
    ){


        

        this.configuarion.treeItems=this._MenuService.getMenu();
        this.configuarion.popOver.push(this._MessageService.getMessagePopup());
        this.configuarion.popOver.push(this._NotificationService.getNotificationPopup());
        this.configuarion.chatBoxControls=this._ChatBoxService.getChatBox();
    }
   


    viewProfiles($index:any){
        this.currentView=$index;
    }

    updaateContents($event:any){

        this._Globals.appSettings.mainViewIndex=$event.mainIndex;
        this._Globals.appSettings.subViewIndex=$event.subIndex;

        console.log(this._Globals.appSettings);
    }


    configuarion={
        chatBoxControls:{},
        treeItems:[],
        popOver:[]
    };

    private connection:any;
    isMenuExpanded = false;
    contentOpacity = 1;


    //To change the opacity while chat window active.
    changeContentOpacity($event:any){
        this.contentOpacity=$event.Opacity;
    }


    //To indicate the menu is expanded or not.
    togglesideMenu($event:any){
        this.isMenuExpanded=!this.isMenuExpanded;
    }

    //Receives Message from server.
    ngOnInit() {

        
    }
    

    

    //----------------------------------------------------------------------------------

  
}