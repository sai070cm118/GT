import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class ChatBoxService{

    getChatBox():any{
        return {
            title:'Chat',
            footer:true,
            collapse:false,
            settings:{
                hide:true,
                settingList:[{title:'Firsts',isDivider:false},
                    {title:'Second',isDivider:false},
                    {title:'Third',isDivider:true},
                    {title:'Fourth',isDivider:false}]
            },
            close:true,
            lables:[{}],
            images:[
                {src:'Content/Images/user2-160x160.jpg',id:'',tag:'3'},
                {src:'Content/Images/user2-160x160.jpg',id:'',tag:'2'}
            ],
            chat:true,
            isChatBox:true,
            isContactsOpen:false
        };
    }
}