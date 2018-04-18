import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class MessageService{

    getMessagePopup():any{
        return {
                isSmallList:false,
                icon:"fa fa-envelope-o",
                heading:"You have 4 messages",
                footer:"See all messages",
                body:[
                    {
                        Title:'Item1',
                        Image:'content/img/user2-160x160.jpg',
                        Text:'My title1',
                        Time:'5 min',
                        IsSeen:false
                    },
                    {
                        Title:'Item2',
                        Image:'content/img/user2-160x160.jpg',
                        Text:'My title2',
                        Time:'15 min',
                        IsSeen:true
                    },
                    {
                        Title:'Item3',
                        Image:'content/img/user2-160x160.jpg',
                        Text:'My title3',
                        Time:'25 min',
                        IsSeen:false
                    },
                    {
                        Title:'Item4',
                        Image:'content/img/user2-160x160.jpg',
                        Text:'My title4',
                        Time:'35 min',
                        IsSeen:true
                    }
                ]
            };
    }

    getMessage():any{
        return {
                Title:'Item1',
                Image:'content/img/user2-160x160.jpg',
                Text:'My title1',
                Time:'5 min',
                IsSeen:false
            }
    }

}