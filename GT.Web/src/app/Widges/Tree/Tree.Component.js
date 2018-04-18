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
var TreeComponent = (function () {
    function TreeComponent() {
        this.isActiveTree = -1;
        this.isSubActiveTree = -1;
    }
    TreeComponent.prototype.expandTree = function ($index) {
        console.log($index);
        if (this.isActiveTree == $index)
            this.isActiveTree = -1;
        else
            this.isActiveTree = $index;
        this.isSubActiveTree = 0;
    };
    TreeComponent.prototype.selectTree = function ($index) {
        console.log($index);
        this.isSubActiveTree = $index;
    };
    return TreeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "treeItems", void 0);
TreeComponent = __decorate([
    core_1.Component({
        selector: 'app-MenuTree',
        templateUrl: '../app/Widges/Tree/Tree.Component.html'
    })
], TreeComponent);
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=Tree.component.js.map