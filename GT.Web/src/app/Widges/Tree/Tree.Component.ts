
import {Component, Input, Output, EventEmitter, OnInit,OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-MenuTree',
    templateUrl: 'Tree.Component.html'
})
export class TreeComponent { 

    @Input() treeItems:any;
    @Output() updaateContent=new EventEmitter();

    isActiveTree=-1;
    isSubActiveTree=-1;

    expandTree($index:any){
        if(this.isActiveTree==$index)
            this.isActiveTree=-1;
        else
            this.isActiveTree=$index;

        this.isSubActiveTree=0;
        
        console.log($index);
        this.updaateContent.emit($index);
    }

    selectTree($index:any){
        console.log($index);
        this.isSubActiveTree=$index;
    }

    
}