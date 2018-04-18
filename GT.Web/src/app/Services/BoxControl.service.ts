import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class BoxControlService{

    getBoxControl():any{
        return {
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
}

