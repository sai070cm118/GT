import {Component,Input,Output,EventEmitter} from '@angular/core';

import {AppData} from '../..//Services/WebSocket/AppData';
@Component({
    moduleId: module.id,
    selector: 'app-ChatMessageList',
    templateUrl: '../ChatMessageList/ChatMessageList.Component.html'
})
export class ChatMessageListComponent {

    constructor(private _Globals:AppData){

    }
    @Input() selectedUser=-1;

}