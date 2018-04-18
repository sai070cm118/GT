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
//import { ChatService } from '../Chat/Chat.Service';
var ChatComponent = (function () {
    function ChatComponent() {
        this.changeOpacity = new core_1.EventEmitter();
        this.sendMessage = new core_1.EventEmitter();
        this.composedMessage = {};
        this.boxMessage = 'hai';
        this.settings = {
            selectedUser: 0,
            fadeInRight: false,
            fadeOutLeft: true,
            chatButtonActive: false,
            faremove: false,
            facomments: true,
            negativeZindex: true,
            backgroundBodyOpacity: 1,
            isContactsOpen: false
        };
        /*
        connection;
        
        constructor(private chatService:ChatService) {}
    
        sendMessage(){
            this.chatService.sendMessage({msgId:'3',sender:'1',Text:'msg3',time:'3min',isDelivered:true,isSeen:true,seenTime:'2 min',isSent:true});
        }
    
        ngOnInit() {
            this.connection = this.chatService.getMessages().subscribe(message => {
            console.log(message);
            })
        }
        
        ngOnDestroy() {
            this.connection.unsubscribe();
        }
    
        */
    }
    ChatComponent.prototype.selectUser = function ($user) {
        this.settings.selectedUser = $user.selectedUser;
        this.toggleChatContacts();
    };
    ChatComponent.prototype.toggleChatContacts = function () {
        this.boxControls.isContactsOpen = !this.boxControls.isContactsOpen;
    };
    ChatComponent.prototype.toggleChatWindow = function () {
        var _this = this;
        this.settings.fadeInRight = !this.settings.fadeInRight;
        this.settings.fadeOutLeft = !this.settings.fadeOutLeft;
        this.settings.chatButtonActive = !this.settings.chatButtonActive;
        this.settings.faremove = !this.settings.faremove;
        this.settings.facomments = !this.settings.facomments;
        if (this.settings.negativeZindex) {
            console.log('true');
            this.settings.negativeZindex = !this.settings.negativeZindex;
            this.settings.backgroundBodyOpacity = 0.2;
        }
        else {
            console.log('false');
            this.settings.backgroundBodyOpacity = 1;
            setTimeout(function () { _this.settings.negativeZindex = !_this.settings.negativeZindex; }, 1000);
        }
        this.changeOpacity.emit({ Opacity: this.settings.backgroundBodyOpacity });
    };
    ChatComponent.prototype.sendMessageToUser = function () {
        this.composedMessage = {
            msgId: '1',
            sender: '0',
            Text: this.boxMessage,
            time: '3min',
            isDelivered: true,
            isSeen: true,
            seenTime: '2 min',
            isSent: true
        };
        this.sendMessage.emit(this.composedMessage);
        this.boxMessage = '';
    };
    return ChatComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "boxControls", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "chatHistory", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "changeOpacity", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "sendMessage", void 0);
ChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-Chat',
        templateUrl: 'Chat.Component.html'
    })
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=Chat.component.js.map