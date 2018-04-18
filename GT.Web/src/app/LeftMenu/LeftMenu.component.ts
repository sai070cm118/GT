import {Component, Input, Output, EventEmitter, OnInit,OnDestroy, ViewChild, ElementRef } from '@angular/core';

import {IProfile} from '../models/model';
import { ProfileService }  from '../Services/Profile.service';

import { AppData } from '../Services/WebSocket/AppData';


@Component({
    moduleId: module.id,
    selector: 'app-LeftMenu',
    templateUrl: 'LeftMenu.component.html'
})
export class LeftMenuComponent { 

    @Input() treeItems:any;
    @Output() updaateContent=new EventEmitter();

    constructor(
        private _ProfileService:ProfileService,
        private _Globals: AppData
    ) {
    }

    togglesideOnlineStatus($event:any){
        this._Globals.Profile.Live=this._ProfileService.updateLiveStatus(this._Globals.Profile.Live);
    }

    updaateContents($index:any){
        console.log($index);
        this.updaateContent.emit($index);
    }
}