import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-DropdownMenu',
    templateUrl: 'dropdownMenu.component.html'
})
export class DropdownMenuComponent { 

    @Input() settingList:any[];

    isOpenedDropdown=false;

    toggleDropdown($event:any){
        this.isOpenedDropdown=!this.isOpenedDropdown;
    }

}