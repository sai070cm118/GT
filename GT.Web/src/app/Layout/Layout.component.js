"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Socket_service_1 = require("../WebSocket/Socket.service");
var LayoutComponent = (function () {
    function LayoutComponent(_SocketService) {
        this._SocketService = _SocketService;
        this.isMenuExpanded = false;
        this.contentOpacity = 1;
        this.configuarion = {
            profileInfo: {
                UserId: 1,
                UserName: 'Sairam',
                profilePic: 'dist/img/user2-160x160.jpg',
                onlineStatus: false,
                PersonalDetails: {
                    memeberSince: 'July 21 1992'
                }
            },
            boxControls: {
                title: '',
                footer: false,
                collapse: true,
                settings: {
                    hide: false,
                    settingList: [
                        { title: 'Firsts', isDivider: false },
                        { title: 'Second', isDivider: false },
                        { title: 'Third', isDivider: true },
                        { title: 'Fourth', isDivider: false }
                    ]
                },
                close: true,
                lables: [
                    { text: 'Label1' },
                    { text: 'Label2' },
                    { text: 'Label2' }
                ],
                images: [
                    { src: 'dist/img/user2-160x160.jpg', id: '', tag: '3' },
                    { src: 'dist/img/user2-160x160.jpg', id: '', tag: '2' }
                ],
                chat: false,
                isChatBox: false,
                isContactsOpen: false
            },
            chatBoxControls: {
                title: 'Chat Box',
                footer: true,
                collapse: false,
                settings: {
                    hide: true,
                    settingList: [{}]
                },
                close: true,
                lables: [{}],
                images: [
                    { src: 'dist/img/user2-160x160.jpg', id: '', tag: '3' },
                    { src: 'dist/img/user2-160x160.jpg', id: '', tag: '2' }
                ],
                chat: true,
                isChatBox: true,
                isContactsOpen: false
            },
            chatHistory: [
                {
                    userId: 1,
                    userName: 'sairam',
                    profilePic: 'dist/img/user2-160x160.jpg',
                    isOnline: false,
                    messages: [
                        {
                            msgId: '1',
                            sender: '1',
                            Text: 'msg1',
                            time: '1min',
                            isDelivered: true,
                            isSeen: true,
                            seenTime: '2 min',
                            isSent: true
                        },
                        {
                            msgId: '2',
                            sender: '1',
                            Text: 'msg2',
                            time: '2min',
                            isDelivered: true,
                            isSeen: true,
                            seenTime: '2 min',
                            isSent: true
                        },
                        {
                            msgId: '3',
                            sender: '1',
                            Text: 'msg3',
                            time: '3min',
                            isDelivered: true,
                            isSeen: true,
                            seenTime: '2 min',
                            isSent: true
                        }
                    ]
                },
                {
                    userId: 2,
                    userName: 'Ravi',
                    profilePic: 'dist/img/user2-160x160.jpg',
                    isOnline: true,
                    messages: [
                        {
                            msgId: '4',
                            sender: '1',
                            Text: 'msg4',
                            time: '4min',
                            isDelivered: true,
                            isSeen: true,
                            seenTime: '2 min',
                            isSent: true
                        },
                        {
                            msgId: '5',
                            sender: '1',
                            Text: 'msg5',
                            time: '5min',
                            isDelivered: true,
                            isSeen: true,
                            seenTime: '2 min',
                            isSent: true
                        },
                        {
                            msgId: '6',
                            sender: '1',
                            Text: 'msg6',
                            time: '6min',
                            isDelivered: true,
                            isSeen: true,
                            seenTime: '2 min',
                            isSent: true
                        }
                    ]
                },
                {
                    userId: 3,
                    userName: 'Anil',
                    profilePic: 'dist/img/user2-160x160.jpg',
                    isOnline: true,
                    messages: [
                        { msgId: '7', sender: '1', Text: 'msg7', time: '7min', isDelivered: true, isSeen: true, seenTime: '2 min', isSent: true },
                        { msgId: '8', sender: '1', Text: 'msg8', time: '8min', isDelivered: true, isSeen: true, seenTime: '2 min', isSent: true }
                    ]
                }
            ],
            treeItems: [
                {
                    menuItem: "Piiii",
                    icon: "fa-files-o fa",
                    rightContent: [],
                    subMenu: [
                        {
                            subMenuItem: "GPiii1",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        },
                        {
                            subMenuItem: "GPiii2",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        },
                        {
                            subMenuItem: "GPiii3",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        }
                    ]
                },
                {
                    menuItem: "dashboard",
                    icon: "fa fa-dashboard",
                    rightContent: [],
                    subMenu: [
                        {
                            subMenuItem: "Dash1",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        },
                        {
                            subMenuItem: "Dash2",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        },
                        {
                            subMenuItem: "Dash3",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        }
                    ]
                },
                {
                    menuItem: "Notificatio1",
                    icon: "fa-files-o fa",
                    rightContent: [],
                    subMenu: [
                        {
                            subMenuItem: "GPiii1",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        },
                        {
                            subMenuItem: "GPiii2",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        }
                    ]
                },
                {
                    menuItem: "Notificatio2",
                    icon: "fa-files-o fa",
                    rightContent: [
                        { title: "1" },
                        { title: "2" }
                    ],
                    subMenu: [
                        {
                            subMenuItem: "GPiii1",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        },
                        {
                            subMenuItem: "GPiii2",
                            icon: "fa-circle-o fa",
                            rightContent: [
                                { title: "1" },
                                { title: "2" }
                            ]
                        }
                    ]
                }
            ],
            popOver: [
                {
                    isSmallList: false,
                    icon: "fa fa-envelope-o",
                    notifyCount: "2",
                    heading: "You have 4 messages",
                    footer: "See all messages",
                    body: [
                        {
                            Title: 'Item1',
                            Image: 'dist/img/user2-160x160.jpg',
                            Text: 'My title1',
                            Time: '5 min'
                        },
                        {
                            Title: 'Item2',
                            Image: 'dist/img/user2-160x160.jpg',
                            Text: 'My title2',
                            Time: '15 min'
                        },
                        {
                            Title: 'Item3',
                            Image: 'dist/img/user2-160x160.jpg',
                            Text: 'My title3',
                            Time: '25 min'
                        },
                        {
                            Title: 'Item4',
                            Image: 'dist/img/user2-160x160.jpg',
                            Text: 'My title4',
                            Time: '35 min'
                        }
                    ]
                },
                {
                    isSmallList: true,
                    icon: "fa fa-bell-o",
                    notifyCount: "2",
                    heading: "You have 4 messages",
                    footer: "view more",
                    body: [
                        { Title: 'Item1' },
                        { Title: 'Item2' },
                        { Title: 'Item3' },
                        { Title: 'Item4' },
                        { Title: 'Item4' },
                        { Title: 'Item4' }
                    ]
                }
            ],
            smallListItems: [
                { Title: 'Item1' },
                { Title: 'Item2' },
                { Title: 'Item3' }
            ],
            mediumListItems: [
                { Title: 'Item1', Image: 'dist/img/user2-160x160.jpg', Text: 'My title1', Time: '5 min' },
                { Title: 'Item2', Image: 'dist/img/user2-160x160.jpg', Text: 'My title2', Time: '15 min' },
                { Title: 'Item3', Image: 'dist/img/user2-160x160.jpg', Text: 'My title3', Time: '25 min' },
                { Title: 'Item4', Image: 'dist/img/user2-160x160.jpg', Text: 'My title4', Time: '35 min' }
            ]
        };
    }
    //To change the opacity while chat window active.
    LayoutComponent.prototype.changeContentOpacity = function ($event) {
        this.contentOpacity = $event.Opacity;
    };
    //To indicate the menu is expanded or not.
    LayoutComponent.prototype.togglesideMenu = function ($event) {
        this.isMenuExpanded = !this.isMenuExpanded;
    };
    //----------------------------------------------------------------------------------
    //Socket connection. Every action done through following functions only.
    //This section is most important. All the trafic controled form here.
    //Send the Message to server.
    LayoutComponent.prototype.sendMessage = function ($message) {
        this._SocketService.Send($message);
    };
    //Receives Message from server.
    LayoutComponent.prototype.ngOnInit = function () {
        //this.connection = this._SocketService.Receive().subscribe(message => {
        /*

        if(message.msgType=="personalChat")
            this.configuarion.chatHistory[message.sender].messages.push(message);
        else if(message.msgType=="gameChat")
            this.configuarion.chatHistory[message.sender].messages.push(message);
        else if(message.msgType=="currentGameNotification")
            this.configuarion.chatHistory[message.sender].messages.push(message);
        else if(message.msgType=="generalNotification")
            this.configuarion.chatHistory[message.sender].messages.push(message);
        else if(message.msgType=="gameNotification")
            this.configuarion.chatHistory[message.sender].messages.push(message);
        else if(message.msgType=="profileInformation")
            this.configuarion.chatHistory[message.sender].messages.push(message);
        else if(message.msgType=="userMenu")
            this.configuarion.chatHistory[message.sender].messages.push(message);

        */
        // this.configuarion.chatHistory[message.sender].messages.push(message);
        //})
    };
    //Disconnects the socket connection.
    LayoutComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'Layout.component.html',
        providers: [
            Socket_service_1.SocketService
        ]
    }),
    __metadata("design:paramtypes", [Socket_service_1.SocketService])
], LayoutComponent);
exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=Layout.component.js.map