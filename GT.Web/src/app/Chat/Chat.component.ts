import {Component, Input, Output, EventEmitter, OnInit,OnDestroy, ViewChild, ElementRef } from '@angular/core';

import {IGroupMessage} from '../Services/WebSocket/Models';
import {AppData} from '../Services/WebSocket/AppData';


@Component({
    moduleId: module.id,
    selector: 'app-Chat',
    templateUrl: 'Chat.Component.html'
})
export class ChatComponent {

    @Input() boxControls:any;

    @Output() changeOpacity= new EventEmitter();
    @Output() sendMessage=new EventEmitter();

    @ViewChild('chatMessagePanel', { read: ElementRef }) 
    
    public chatMessagePanel: ElementRef;
    

    composedMessage={};
    boxMessage='';
    
    settings={
        fadeInRight:false,
        fadeOutLeft:true,
        chatButtonActive:false,
        faremove:false,
        facomments:true,
        negativeZindex:true,
        backgroundBodyOpacity:1,
        isContactsOpen:false
    };

    constructor(private _Globals:AppData){
        
    }



    /******************************************************/
    //Chat windo control

    selectUser($user:any){
        this.toggleChatContacts();
    }

    toggleChatContacts()
    {
        this.boxControls.isContactsOpen=!this.boxControls.isContactsOpen;
    }   

    /******************/
    toggleChatWindow(){

        this.settings.fadeInRight=!this.settings.fadeInRight;
        this.settings.fadeOutLeft=!this.settings.fadeOutLeft;
        this.settings.chatButtonActive=!this.settings.chatButtonActive;
        this.settings.faremove=!this.settings.faremove;
        this.settings.facomments=!this.settings.facomments;

        if(this.settings.negativeZindex){
            console.log('true');
            this.settings.negativeZindex=!this.settings.negativeZindex;
            this.settings.backgroundBodyOpacity=0.2;
        }
        else{
            console.log('false');
            this.settings.backgroundBodyOpacity=1;		
            
            setTimeout(() => {this.settings.negativeZindex=!this.settings.negativeZindex;},1000);

        }

        this.changeOpacity.emit({Opacity:this.settings.backgroundBodyOpacity});
    }

    /******************************************************/




    
    /******************************************************/
    //Socket control
    /********************/
    sendMessageToUser(){

        let groupMessage:IGroupMessage=new IGroupMessage();


        groupMessage.UserGroup={_id:this._Globals.CurrentGroupId};
        groupMessage.Message={
            "message":this.boxMessage
        }

        this._Globals.sendMessage(groupMessage);
        this.boxMessage='';
    }

    scrollToBottom(){
        this.chatMessagePanel.nativeElement.scrollBottom = 0;
    }

    ngOnInit(){
        this.toggleChatContacts();
    }

    /******************************************************/


 }
 