"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./login/index");
var index_2 = require("./register/index");
var index_3 = require("./Layout/index");
var index_4 = require("./_guards/index");
var appRoutes = [
    //{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: index_3.LayoutComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_1.LoginComponent },
    //{ path: 'login', component: SocialLoginComponent },
    { path: 'register', component: index_2.RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map