import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class NotificationService{

    getNotificationPopup():any{
        return {
                isSmallList:true,
                icon:"fa fa-bell-o",
                heading:"You have 4 messages",
                footer:"view more",
                body:[
                    {Title:'Item1',IsSeen:false},
                    {Title:'Item2',IsSeen:true},
                    {Title:'Item3',IsSeen:false},
                    {Title:'Item4',IsSeen:true},
                    {Title:'Item4',IsSeen:false},
                    {Title:'Item4',IsSeen:false}
                ]
            };
    }

    getNotification():any{
        return {Title:'Item1',IsSeen:false}
    }

}