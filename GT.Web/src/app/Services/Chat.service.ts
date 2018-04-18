import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class ChatService{
    

    getFriends():any{
        return [{
                userId:"598deb1a5a948e585cc68553",
                userName:'sairam',
                groupName:'sairam',
                profilePic:'content/img/user2-160x160.jpg',
                isOnline:false,
                messages:[
                    {
                        msgId:'1',
                        sender:'1',
                        Text:'msg1',
                        time:'1min',
                        isDelivered:true,
                        isSeen:true,
                        seenTime:'2 min',
                        isSent:true
                    },
                    {
                        msgId:'2',
                        sender:'1',
                        Text:'msg2',
                        time:'2min',
                        isDelivered:true,
                        isSeen:true,
                        seenTime:'2 min',
                        isSent:true
                    },
                    {
                        msgId:'3',
                        sender:'1',
                        Text:'msg3',
                        time:'3min',
                        isDelivered:true,
                        isSeen:true,
                        seenTime:'2 min',
                        isSent:true
                    }
                ]
            },
            {
                userId:2,
                userName:'Ravi',
                groupName:'Ravi',
                profilePic:'content/img/user2-160x160.jpg',
                isOnline:true,
                messages:[
                    {
                        msgId:'4',
                        sender:'1',
                        Text:'msg4',
                        time:'4min',
                        isDelivered:true,
                        isSeen:true,
                        seenTime:'2 min',
                        isSent:true
                    },
                    {
                        msgId:'5',
                        sender:'1',
                        Text:'msg5',
                        time:'5min',
                        isDelivered:true,
                        isSeen:true,
                        seenTime:'2 min',
                        isSent:true
                    },
                    {
                        msgId:'6',
                        sender:'1',
                        Text:'msg6',
                        time:'6min',
                        isDelivered:true,
                        isSeen:true,
                        seenTime:'2 min',
                        isSent:true
                    }
                ]
            },
            {
                userId:3,
                userName:'Anil',
                groupName:'Anil',
                profilePic:'content/img/user2-160x160.jpg',
                isOnline:true,
                messages:[
                    {msgId:'7',sender:'1',Text:'msg7',time:'7min',isDelivered:true,isSeen:true,seenTime:'2 min',isSent:true},
                    {msgId:'8',sender:'1',Text:'msg8',time:'8min',isDelivered:true,isSeen:true,seenTime:'2 min',isSent:true}
                ]
            }];
    }

    getChat():any{
        return {
            msgId:'6',
            sender:'1',
            Text:'msg6',
            time:'6min',
            isDelivered:true,
            isSeen:true,
            seenTime:'2 min',
            isSent:true
        }
    }
}


