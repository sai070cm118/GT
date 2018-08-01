
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

    currentMainIndex=0;
    currentSubIndex=0;

    expandTree($index:any){
        if(this.isActiveTree==$index)
            this.isActiveTree=-1;
        else
            this.isActiveTree=$index;

        this.isSubActiveTree=0;
        
        this.currentMainIndex=$index;
        this.currentSubIndex=0;
        this.updaateContent.emit({mainIndex:this.currentMainIndex,subIndex:this.currentSubIndex});
    }

    selectTree($index:any){
        this.currentSubIndex=$index;
        this.isSubActiveTree=$index;
        this.updaateContent.emit({mainIndex:this.currentMainIndex,subIndex:this.currentSubIndex});
    }

    
}