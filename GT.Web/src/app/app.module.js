"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// used to create fake backend
var index_1 = require("./_helpers/index");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_2 = require("./_directives/index");
var index_3 = require("./_guards/index");
var index_4 = require("./_services/index");
var index_5 = require("./home/index");
var index_6 = require("./login/index");
var index_7 = require("./register/index");
var index_8 = require("./SocialLogin/index");
var index_9 = require("./Layout/index");
var index_10 = require("./Header/index");
var index_11 = require("./LeftMenu/index");
var index_12 = require("./ContentPlaceholder/index");
var index_13 = require("./Footer/index");
var index_14 = require("./RightMenu/index");
var index_15 = require("./Chat/index");
var index_16 = require("./Chat/ChatMessageList/index");
var index_17 = require("./Chat/ChatProfileList/index");
var index_18 = require("./Widges/Tree/index");
var index_19 = require("./Widges/Box/index");
var index_20 = require("./Widges/DropdownMenu/index");
var index_21 = require("./Widges/ListItem/MediumList/index");
var index_22 = require("./Widges/ListItem/SimpleList/index");
var index_23 = require("./Widges/PopOverMenu/index");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            index_2.AlertComponent,
            index_5.HomeComponent,
            index_6.LoginComponent,
            index_7.RegisterComponent,
            index_9.LayoutComponent,
            index_10.HeaderComponent,
            index_11.LeftMenuComponent,
            index_12.ContentPlaceholderComponent,
            index_13.FooterComponent,
            index_14.RightMenuComponent,
            index_15.ChatComponent,
            index_23.PopOverMenuComponent,
            index_18.TreeComponent,
            index_19.BoxComponent,
            index_16.ChatMessageListComponent,
            index_17.ChatProfileListComponent,
            index_18.TreeComponent,
            index_19.BoxComponent,
            index_20.DropdownMenuComponent,
            index_21.MediumListComponent,
            index_22.SimpleListComponent,
            index_8.SocialLoginComponent
        ],
        providers: [
            index_3.AuthGuard,
            index_4.AlertService,
            index_4.AuthenticationService,
            index_4.UserService,
            // providers used to create fake backend
            index_1.fakeBackendProvider,
            testing_1.MockBackend,
            http_2.BaseRequestOptions
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map