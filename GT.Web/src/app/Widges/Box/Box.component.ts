import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-Box',
    templateUrl: '../Box/Box.component.html'
})
export class BoxComponent { 

    @Input() boxControls:any;

    @Output() toggleChatContacts=new EventEmitter();
    @Output() toggleChatWindow=new EventEmitter();


    iscollapsed=false;
    isClosed=false;

    toggleCollaps($event:any){
        this.iscollapsed=!this.iscollapsed;
    }

    closeBox($event:any){
        if(this.boxControls.isChatBox)
            this.toggleChatWindow.emit({});
        else
            this.isClosed=true;
    }

    toggleContactWindow(){
        this.toggleChatContacts.emit({});
    }
}