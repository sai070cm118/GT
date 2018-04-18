import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'Settings',
    templateUrl: 'Settings.component.html'
})

export class SettingsComponent {
   boxControls={
            title:'',
            footer:false,
            collapse:true,
            settings:{
                hide:false,
                settingList:[
                    {title:'Firsts',isDivider:false},
                    {title:'Second',isDivider:false},
                    {title:'Third',isDivider:true},
                    {title:'Fourth',isDivider:false}
                ]
            },
            close:true,
            lables:[
                {text:'Label1'},
                {text:'Label2'},
                {text:'Label2'}
            ],
            images:[
                {src:'content/img/user2-160x160.jpg',id:'',tag:'3'},
                {src:'content/img/user2-160x160.jpg',id:'',tag:'2'}
            ],
            chat:false,
            isChatBox:false,
            isContactsOpen:false
        };
}
