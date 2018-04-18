import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-Footer',
    templateUrl: 'Footer.component.html'
})
export class FooterComponent { 

    handleClick($event:any){
        console.log('clicked body');
    }
}