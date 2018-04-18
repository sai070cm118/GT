import {Component,Input, Output,EventEmitter} from '@angular/core';


import {SocketFunctions} from '../../Services/WebSocket/SocketFunctions/SocketFunctions';

@Component({
    moduleId: module.id,
    selector: 'app-ChatProfileList',
    templateUrl: '../ChatProfileList/ChatProfileList.Component.html'

})
export class ChatProfileListComponent {

    @Output() viewUserChat=new EventEmitter();


    constructor(private _Globals:AppData){

        console.log(_Globals);
    }

    selectUser($user:any){
        
    }

    getMessages(groupId:string){

        this._Globals.CurrentGroupId=groupId;
        if(this._Globals.Profile.UserGroups.find(x => x._id == groupId).Messages==undefined){
            this._Globals.getGroupMessages(groupId,'NoMessages');
        }
        else{

            this._Globals.getGroupMessages(groupId,this._Globals.Profile.UserGroups.find(x => x._id == groupId).Messages[0]._id);
        }

        this.viewUserChat.emit({});
        
    }
}
