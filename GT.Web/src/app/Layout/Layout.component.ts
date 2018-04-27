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
    ChatBoxService,
    BoxControlService
 }  from '../Services/index';

import {
    IProfile,
    IUser
} from '../models/model';


@Component({
    moduleId: module.id,
    templateUrl: 'Layout.component.html'
})
export class LayoutComponent { 

    defaultIcon='./Content/Images/profile.png';

    currentView:number=1;

    
    viewProfiles($index:any){
        this.currentView=$index;
    }

    updaateContents($index:any){
        console.log($index);
        this.currentView=$index;
    }


    configuarion={
        Profile:AppData,
        boxControls:{},
        chatBoxControls:{},
        chatHistory:[],
        treeItems:[],
        popOver:[]
    };

    private connection:any;
    isMenuExpanded = false;
    contentOpacity = 1;

    constructor(
        private _SocketService:SocketManager,
        private _ProfileService:ProfileService,
        private _MenuService:MenuService,
        private _MessageService:MessageService,
        private _NotificationService:NotificationService,
        private _ChatBoxService:ChatBoxService,
        private _BoxControlService:BoxControlService,
        private _Globals: AppData
    ){


        

        this.configuarion.treeItems=this._MenuService.getMenu();
        this.configuarion.popOver.push(this._MessageService.getMessagePopup());
        this.configuarion.popOver.push(this._NotificationService.getNotificationPopup());
        this.configuarion.chatBoxControls=this._ChatBoxService.getChatBox();
        this.configuarion.boxControls=this._BoxControlService.getBoxControl();
    }
   

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