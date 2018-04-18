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
var BoxComponent = (function () {
    function BoxComponent() {
        this.toggleChatContacts = new core_1.EventEmitter();
        this.toggleChatWindow = new core_1.EventEmitter();
        this.iscollapsed = false;
        this.isClosed = false;
    }
    BoxComponent.prototype.toggleCollaps = function ($event) {
        this.iscollapsed = !this.iscollapsed;
    };
    BoxComponent.prototype.closeBox = function ($event) {
        if (this.boxControls.isChatBox)
            this.toggleChatWindow.emit({});
        else
            this.isClosed = true;
    };
    BoxComponent.prototype.toggleContactWindow = function () {
        this.toggleChatContacts.emit({});
    };
    return BoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "boxControls", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "toggleChatContacts", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "toggleChatWindow", void 0);
BoxComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-Box',
        templateUrl: '../Box/Box.component.html'
    })
], BoxComponent);
exports.BoxComponent = BoxComponent;
//# sourceMappingURL=Box.component.js.map