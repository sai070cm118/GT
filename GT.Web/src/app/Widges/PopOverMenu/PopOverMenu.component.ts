import {Component,Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

import {
    Globals
} from '../../models/Globals';


@Component({
    host: {
        '(document:click)': 'handleClick($event)',
    },
    selector: 'PopOverMenu',
    templateUrl: 'PopOverMenu.component.html'
})
export class PopOverMenuComponent {

    @Input() propOverDropdowns:any;
    @Output() viewProfile=new EventEmitter();
    
    constructor(
        private router: Router,
        private _Globals: Globals
    ){ 

    }

    expandedPopover=-1;

    popoverClicked($event:any,$value:any){
        console.log($value);
        this.expandedPopover=$value;
        $event.stopPropagation();
    }

    signOut($event:any){

        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
        this._Globals.Profile=null;
    }

    profileView($event:any){
        setTimeout(function() {
            this.expandedPopover=-1;
            console.log(this.expandedPopover);
        }, 1000);
        this.viewProfile.emit(2);
    }


    handleClick($event:any){
        this.expandedPopover=-1;
    }
}