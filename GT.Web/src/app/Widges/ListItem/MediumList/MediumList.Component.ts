import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-MediumList',
    templateUrl: 'MediumList.Component.html'
})
export class MediumListComponent { 

    @Input() listItems:any[];

}