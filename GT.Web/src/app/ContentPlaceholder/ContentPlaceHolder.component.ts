import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-ContentPlaceholder',
    templateUrl: 'ContentPlaceHolder.component.html'
})
export class ContentPlaceholderComponent { 

    @Input() contentOpacity=1;
    @Input() currentView:number;
    

}