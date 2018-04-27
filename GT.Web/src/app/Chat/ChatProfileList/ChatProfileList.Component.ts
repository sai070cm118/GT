import {Component,Input, Output,EventEmitter} from '@angular/core';
import { AppData } from '../../Services/WebSocket/AppData';


import {SocketFunctions} from '../../Services/WebSocket/SocketFunctions/SocketFunctions';

@Component({
    moduleId: module.id,
    selector: 'app-ChatProfileList',
    templateUrl: '../ChatProfileList/ChatProfileList.Component.html'

})
export class ChatProfileListComponent {

    @Output() viewUserChat=new EventEmitter();


    constructor(
        private _Globals:AppData,
        private _socketFunctions:SocketFunctions
    ){

    }

    selectUser($user:any){
        
    }

    getMessages(groupId:string){

        this._Globals.CurrentGroupId=groupId;
        if(this._Globals.Profile.UserGroups.find(x => x._id == groupId).Messages==undefined){
            this._socketFunctions.getGroupMessages(groupId,'NoMessages');
        }
        else{

            this._socketFunctions.getGroupMessages(groupId,this._Globals.Profile.UserGroups.find(x => x._id == groupId).Messages[0]._id);
        }

        this.viewUserChat.emit({});
        
    }
}
