import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-SimpleList',
    templateUrl: 'SimpleList.Component.html'
})
export class SimpleListComponent { 

    @Input() listItems:any[];

}