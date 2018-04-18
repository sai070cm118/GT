import {Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
    host: {
        'body:class': 'isMenuExpanded',
    },
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'Header.component.html'
    
})
export class HeaderComponent { 

    @Input() proverItems:any;
    @Input() profileInfo:any;
    @Output() togglesideMenu=new EventEmitter();
    @Output() viewProfile=new EventEmitter();
    isMenuExpanded=false;

    toggleMenu(){
        console.log('comming');
        this.isMenuExpanded=!this.isMenuExpanded;
        this.togglesideMenu.emit({isMenuExpanded:this.isMenuExpanded});
    }

    viewProfiles($index:any){
        this.viewProfile.emit($index);
    }

}