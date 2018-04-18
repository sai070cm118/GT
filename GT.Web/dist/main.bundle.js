webpackJsonp([0,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppConfig = (function () {
    function AppConfig(_http, _appData) {
        this._http = _http;
        this._appData = _appData;
        this.AppSocketConnectionURI = 'http://localhost:3004/AsUser';
        this._appData.token = JSON.parse(localStorage.getItem('Token'));
    }
    AppConfig.prototype.getSessionToken = function () {
        return this._appData.token == null ? undefined : this._appData.token.SessionToken;
    };
    AppConfig.prototype.getbackSessionToken = function (callback) {
        if (localStorage.getItem('Token') == undefined || localStorage.getItem('Token') == null)
            callback(undefined);
        else
            callback(JSON.parse(localStorage.getItem('Token')).SessionToken);
    };
    AppConfig.prototype.getRefreshToken = function () {
        return this._appData.token == null ? undefined : this._appData.token.RefreshToken;
    };
    AppConfig.prototype.getbackRefreshToken = function (callback) {
        if (localStorage.getItem('Token') == undefined || localStorage.getItem('Token') == null)
            callback(undefined);
        else
            callback(JSON.parse(localStorage.getItem('Token')).RefreshToken);
    };
    AppConfig.prototype.getUserId = function () {
        return this._appData.token == null ? undefined : this._appData.token.UserId;
    };
    AppConfig.prototype.getbackUserId = function (callback) {
        if (localStorage.getItem('Token') == undefined || localStorage.getItem('Token') == null)
            callback(undefined);
        else
            callback(JSON.parse(localStorage.getItem('Token')).UserId);
    };
    AppConfig.prototype.setToken = function (tokenObj) {
        localStorage.setItem('Token', JSON.stringify(tokenObj));
        this._appData.token = tokenObj;
    };
    AppConfig.prototype.removeToken = function () {
        localStorage.removeItem('Token');
        this._appData.token = undefined;
    };
    AppConfig.prototype.refreshToken = function () {
        /* return new Promise((resolve, reject) => {
            this._http.get(this.RefreshTokenURI, {headers:{'RefreshToken':this.getRefreshToken()}})
              .subscribe(res => {
                resolve(res);
              }, (err) => {
                reject(err);
              });
          }); */
    };
    return AppConfig;
}());
AppConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _b || Object])
], AppConfig);

var _a, _b;
//# sourceMappingURL=AppConfig.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChoosePassword_component__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ChoosePassword_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layout_component__ = __webpack_require__(215);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Layout_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PhoneNumber_component__ = __webpack_require__(218);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__PhoneNumber_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RecoverAccount_component__ = __webpack_require__(219);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__RecoverAccount_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utilities_AppConfig__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSocket; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppSocket = (function (_super) {
    __extends(AppSocket, _super);
    function AppSocket(_appConfig) {
        var _this = _super.call(this, {
            url: _appConfig.AppSocketConnectionURI,
            options: {
                query: {
                    Token: _appConfig.getSessionToken()
                }
            }
        }) || this;
        _this._appConfig = _appConfig;
        return _this;
    }
    return AppSocket;
}(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]));
AppSocket = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Utilities_AppConfig__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Utilities_AppConfig__["a" /* AppConfig */]) === "function" && _a || Object])
], AppSocket);

var _a;
//# sourceMappingURL=AppSocket.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouteService_ProfileController__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRouteManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataRouteManager = (function () {
    function DataRouteManager(_profileController) {
        this._profileController = _profileController;
    }
    DataRouteManager.prototype.RouteController = function (input) {
        if (input.error) {
            console.log(input);
        }
        else {
            this._profileController.manageData(input);
        }
    };
    return DataRouteManager;
}());
DataRouteManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__RouteService_ProfileController__["a" /* ProfileController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__RouteService_ProfileController__["a" /* ProfileController */]) === "function" && _a || Object])
], DataRouteManager);

var _a;
//# sourceMappingURL=DataRouteManager.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppData__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileController; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileController = (function () {
    function ProfileController(_appData) {
        this._appData = _appData;
    }
    ProfileController.prototype.manageData = function (input) {
        var _this = this;
        var messageData = input;
        if (messageData.Type == "GetMyUserGroups") {
            this._appData.Profile.UserGroups = messageData.data;
        }
        else if (messageData.Type == "GetGroupMessages") {
            if (messageData.error) {
                this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data[0]._id; }).Messages = [];
                this._appData.CurrentGroupData = this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data[0]._id; });
            }
            else {
                if (this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data[0]._id; }).Messages == undefined)
                    this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data[0]._id; }).Messages = messageData.data[0].Messages;
                else
                    this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data[0]._id; }).Messages = messageData.data[0].Messages.concat(this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data[0]._id; }).Messages);
                this._appData.CurrentGroupData = this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data[0]._id; });
            }
        }
        else if (messageData.Type == "GetGameGroupMessages") {
            if (messageData.error) {
            }
            else {
                if (messageData.data.IsFree) {
                    this._appData.Profile.FreeGames.find(function (x) { return x._id == messageData.data[0]._id; }).GameGroup.Messages = messageData.data[0].Messages.concat(this._appData.Profile.FreeGames.find(function (x) { return x._id == messageData.data[0]._id; }).GameGroup.Messages);
                }
                else {
                    this._appData.Profile.PaidGames.find(function (x) { return x._id == messageData.data[0]._id; }).GameGroup.Messages = messageData.data[0].Messages.concat(this._appData.Profile.FreeGames.find(function (x) { return x._id == messageData.data[0]._id; }).GameGroup.Messages);
                }
            }
        }
        else if (messageData.Type == "GetGroupMessage") {
            if (this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data.UserGroup._id; }).Messages == undefined)
                this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data.UserGroup._id; }).Messages = [messageData.data.message];
            else
                this._appData.Profile.UserGroups.find(function (x) { return x._id == messageData.data.UserGroup._id; }).Messages.push(messageData.data.message);
        }
        else if (messageData.Type == "GetGameGroupMessage") {
            console.log(messageData.data.Message);
            if (messageData.data.IsFree) {
                this._appData.Profile.FreeGames.find(function (x) { return x._id == messageData.data.GameId; }).GameGroup.Messages.push(messageData.data.Message);
            }
            else {
                this._appData.Profile.PaidGames.find(function (x) { return x._id == messageData.data.GameId; }).GameGroup.Messages.push(messageData.data.Message);
            }
        }
        else if (messageData.Type == "GetAppGames") {
            this._appData.Profile.AppGames = messageData.data;
        }
        else if (messageData.Type == "GameCreated") {
            //this._appData.getAccount();
        }
        else if (messageData.Type == "GetAccount") {
            this._appData.Profile.Account = messageData.data;
        }
        else if (messageData.Type == "GetPaidRunningGames") {
            this._appData.Profile.PaidGames = messageData.data;
            //this._appData.getGameGroupDetails(false);
        }
        else if (messageData.Type == "GetPaidRunningGame") {
            this._appData.Profile.PaidGames.find(function (x) { return x._id == messageData.data._id; }).RemainPositions = messageData.data.RemainPositions;
            this._appData.Profile.PaidGames.find(function (x) { return x._id == messageData.data._id; }).Status = messageData.data.Status;
        }
        else if (messageData.Type == "GetFreeRunningGames") {
            this._appData.Profile.FreeGames = messageData.data;
            //this._appData.getGameGroupDetails(true);
        }
        else if (messageData.Type == "GetFreeRunningGame") {
            console.log(messageData.data);
            this._appData.Profile.FreeGames.find(function (x) { return x._id == messageData.data._id; }).RemainPositions = messageData.data.RemainPositions;
            this._appData.Profile.FreeGames.find(function (x) { return x._id == messageData.data._id; }).Status = messageData.data.Status;
        }
        else if (messageData.Type == "BettedOnGame") {
            console.log('BettedOnGame');
            //this._appData.getAccount();
            console.log(messageData);
            if (!messageData.error) {
                if (messageData.data.IsFree)
                    this._appData.Profile.MyBettedFreeGames.push(messageData.data.GameId);
                else
                    this._appData.Profile.MyBettedPaidGames.push(messageData.data.GameId);
            }
        }
        else if (messageData.Type == "NewGameAvailable") {
            if (messageData.data.IsFree)
                this._appData.Profile.FreeGames.push(messageData.data);
            else
                this._appData.Profile.PaidGames.push(messageData.data);
        }
        else if (messageData.Type == "GetMyJoinedGames") {
            console.log(messageData);
            if (messageData != undefined) {
                messageData.data.MyBettedPaidGames.forEach(function (element) {
                    _this._appData.Profile.MyBettedPaidGames.push(element.GameId);
                });
                messageData.data.MyBettedFreeGames.forEach(function (element) {
                    _this._appData.Profile.MyBettedFreeGames.push(element.GameId);
                });
            }
        }
        else if (messageData.Type == "BetOnGamePosition") {
            console.log(messageData);
        }
        else if (messageData.Type == "GetGameGroupDetails") {
            messageData.data[0].Messages = [];
            if (!messageData.data[0].IsFree) {
                this._appData.Profile.PaidGames.find(function (x) { return x._id == messageData.data[0].GameId; }).GameGroup = messageData.data[0];
            }
            else {
                this._appData.Profile.FreeGames.find(function (x) { return x._id == messageData.data[0].GameId; }).GameGroup = messageData.data[0];
            }
        }
        console.log(this._appData.Profile);
    };
    return ProfileController;
}());
ProfileController = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__AppData__["a" /* AppData */]) === "function" && _a || Object])
], ProfileController);

var _a;
//# sourceMappingURL=ProfileController.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DataRouteManager__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppSocket__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketManager; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketManager = (function () {
    function SocketManager(socket, dataRouteManager) {
        this.socket = socket;
        this.dataRouteManager = dataRouteManager;
        this.socket.connect();
        this.initializeData();
    }
    SocketManager.prototype.initializeData = function () {
        var _this = this;
        this.socket.on('StoC', function (message) {
            _this.dataRouteManager.RouteController(message);
        });
    };
    SocketManager.prototype.Send = function (message) {
        this.socket.emit('CtoS', message);
    };
    return SocketManager;
}());
SocketManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__AppSocket__["a" /* AppSocket */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__AppSocket__["a" /* AppSocket */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__DataRouteManager__["a" /* DataRouteManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__DataRouteManager__["a" /* DataRouteManager */]) === "function" && _b || Object])
], SocketManager);

var _a, _b;
//# sourceMappingURL=SocketManager.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VerifyEmail_component__ = __webpack_require__(230);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__VerifyEmail_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(243);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(249);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__(250);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppData; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppData = (function () {
    function AppData(_ProfileService) {
        this._ProfileService = _ProfileService;
        this.CurrentGroupId = '';
    }
    AppData.prototype.ngOnInit = function () {
    };
    return AppData;
}());
AppData = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__index__["d" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__index__["d" /* ProfileService */]) === "function" && _a || Object])
], AppData);

var _a;
//# sourceMappingURL=AppData.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Profile_service__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__Profile_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User_service__ = __webpack_require__(229);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__User_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Chat_service__ = __webpack_require__(223);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__Chat_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BoxControl_service__ = __webpack_require__(222);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_3__BoxControl_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ChatBox_service__ = __webpack_require__(224);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__ChatBox_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Menu_service__ = __webpack_require__(226);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__Menu_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Message_service__ = __webpack_require__(227);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__Message_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Notification_service__ = __webpack_require__(228);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__Notification_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__HttpClientWraper__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__HttpClientWraper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__WebSocket_SocketManager__ = __webpack_require__(113);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__WebSocket_SocketManager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__GroupMessage_Service__ = __webpack_require__(225);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__GroupMessage_Service__["a"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 183;


/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(251);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = (function () {
    function AccountComponent(_Globals) {
        this._Globals = _Globals;
        this.accountDeposit = new Deposit();
        this.depositBoxControls = {
            title: 'Add Money',
            footer: false,
            collapse: false,
            settings: {
                hide: true
            },
            close: false,
            lables: [],
            images: [],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
        this.withdrawBoxControls = {
            title: 'Withdraw Money',
            footer: false,
            collapse: false,
            settings: {
                hide: true
            },
            close: false,
            lables: [],
            images: [],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
        this.convertToBoxControls = {
            title: 'Convert to coins',
            footer: false,
            collapse: false,
            settings: {
                hide: true
            },
            close: false,
            lables: [],
            images: [],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
        this.convertFromBoxControls = {
            title: 'Convert to Rupees',
            footer: false,
            collapse: false,
            settings: {
                hide: true
            },
            close: false,
            lables: [],
            images: [],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
    }
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'Account',
        template: __webpack_require__(325)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _a || Object])
], AccountComponent);

var Deposit = (function () {
    function Deposit() {
    }
    return Deposit;
}());
var _a;
//# sourceMappingURL=Account.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Account_component__ = __webpack_require__(191);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Account_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.boxControls = {
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
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '3' },
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '2' }
            ],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'Dashboard',
        template: __webpack_require__(326)
    })
], DashboardComponent);

//# sourceMappingURL=Dashboard.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dashboard_component__ = __webpack_require__(193);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Dashboard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_SocketFunctions_SocketFunctions__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameboardComponent = (function () {
    function GameboardComponent(_Globals, _socketFunctions) {
        this._Globals = _Globals;
        this._socketFunctions = _socketFunctions;
        this.boxControls = {
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
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '3' },
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '2' }
            ],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
    }
    GameboardComponent.prototype.getPaidGames = function () {
        return this._Globals.Profile.AppGames.filter(function (x) { return !x.IsFree; });
    };
    GameboardComponent.prototype.getFreeGames = function () {
        return this._Globals.Profile.AppGames.filter(function (x) { return x.IsFree; });
    };
    GameboardComponent.prototype.createGame = function (IsFree, challengeId) {
        this._socketFunctions.createGame({ ChallangeId: challengeId, IsFree: IsFree });
    };
    GameboardComponent.prototype.betOnGame = function (IsFree, gameId) {
        this._socketFunctions.betOnGame({ GameId: gameId, IsFree: IsFree });
    };
    GameboardComponent.prototype.getNonParticipentGames = function (IsFree) {
        var MyBettedFreeGames = this._Globals.Profile.MyBettedFreeGames;
        var MyBettedPaidGames = this._Globals.Profile.MyBettedPaidGames;
        if (this._Globals != undefined) {
            if (IsFree) {
                return this._Globals.Profile.FreeGames.filter(function (_a) {
                    var _id = _a._id;
                    return !MyBettedFreeGames.includes(_id);
                });
            }
            else {
                return this._Globals.Profile.PaidGames.filter(function (_a) {
                    var _id = _a._id;
                    return !MyBettedPaidGames.includes(_id);
                });
            }
        }
        else {
            return [];
        }
    };
    GameboardComponent.prototype.getParticipentedGames = function (IsFree) {
        var MyBettedFreeGames = this._Globals.Profile.MyBettedFreeGames;
        var MyBettedPaidGames = this._Globals.Profile.MyBettedPaidGames;
        if (this._Globals != undefined) {
            if (IsFree) {
                return this._Globals.Profile.FreeGames.filter(function (_a) {
                    var _id = _a._id;
                    return MyBettedFreeGames.includes(_id);
                });
            }
            else {
                return this._Globals.Profile.PaidGames.filter(function (_a) {
                    var _id = _a._id;
                    return MyBettedPaidGames.includes(_id);
                });
            }
        }
        else {
            return [];
        }
    };
    GameboardComponent.prototype.sendMessageToGameGroup = function (gameMessage, GameId, IsFree) {
        var gameMessag = {
            "GameId": GameId,
            "Message": {
                "message": gameMessage
            },
            "IsFree": IsFree
        };
        this._socketFunctions.sendGameMessage(gameMessag);
    };
    GameboardComponent.prototype.getTime = function (startAt, endAt) {
        var startDate = new Date(startAt);
        var endDate = new Date(endAt);
        if (this._Globals.currentTime >= startDate.getTime() && this._Globals.currentTime <= endDate.getTime())
            return ((endDate.getTime() - this._Globals.currentTime) / (endDate.getTime() - startDate.getTime())) * 100;
        else
            return 0;
    };
    return GameboardComponent;
}());
GameboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'Gameboard',
        template: __webpack_require__(327)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */]) === "function" && _b || Object])
], GameboardComponent);

var _a, _b;
//# sourceMappingURL=Gameboard.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Gameboard_component__ = __webpack_require__(195);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Gameboard_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_WebSocket_Models__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(_Globals, _ProfileService, _UserService, _SocketService) {
        this._Globals = _Globals;
        this._ProfileService = _ProfileService;
        this._UserService = _UserService;
        this._SocketService = _SocketService;
        this.profileBoxControls = {
            title: 'Profile Details',
            footer: true,
            collapse: false,
            settings: {
                hide: true
            },
            close: false,
            lables: [],
            images: [],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
        this.friendsBoxControls = {
            title: 'Friends',
            footer: true,
            collapse: false,
            settings: {
                hide: true
            },
            close: false,
            lables: [],
            images: [],
            chat: false,
            isChatBox: false,
            isContactsOpen: false,
            minHeight: '360px',
            maxHeight: '360px'
        };
        console.log(_Globals);
    }
    ProfileComponent.prototype.updateProfile = function () {
        this._ProfileService.updateProfile(this._Globals).subscribe(function (data) {
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        this._UserService.changePassword(this._Globals.Profile.User).subscribe(function (data) {
            _this._Globals.Profile.User.Password = '';
            _this._Globals.Profile.User.OldPassword = '';
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.searchProfiles = function () {
        var _this = this;
        this._ProfileService.searchProfiles(this.searchedName).subscribe(function (profileData) {
            _this._Globals.Profiles = profileData.data;
            console.log(_this._Globals.Profiles);
        });
    };
    ProfileComponent.prototype.addUserGroup = function (profile) {
        var newUserGroup = new __WEBPACK_IMPORTED_MODULE_3__Services_WebSocket_Models__["b" /* IUserGroup */]();
        newUserGroup.GroupName = this._Globals.Profile.ProfileName;
        newUserGroup.IsGroup = false;
        newUserGroup.Participants = [profile, this._Globals.Profile];
        this._SocketService.Send({ controller: 'UserGroup', method: 'add', data: newUserGroup });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'Profile',
        template: __webpack_require__(328)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_index__["d" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_index__["d" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_index__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__Services_index__["c" /* SocketManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_index__["c" /* SocketManager */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=Profile.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Profile_component__ = __webpack_require__(197);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Profile_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SettingsComponent = (function () {
    function SettingsComponent() {
        this.boxControls = {
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
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '3' },
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '2' }
            ],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
    }
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'Settings',
        template: __webpack_require__(329)
    })
], SettingsComponent);

//# sourceMappingURL=Settings.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Settings_component__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Settings_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_Models__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_WebSocket_SocketFunctions_SocketFunctions__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent(_Globals, _socketFunctions) {
        this._Globals = _Globals;
        this._socketFunctions = _socketFunctions;
        this.changeOpacity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sendMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.composedMessage = {};
        this.boxMessage = '';
        this.settings = {
            fadeInRight: false,
            fadeOutLeft: true,
            chatButtonActive: false,
            faremove: false,
            facomments: true,
            negativeZindex: true,
            backgroundBodyOpacity: 1,
            isContactsOpen: false
        };
    }
    /******************************************************/
    //Chat windo control
    ChatComponent.prototype.selectUser = function ($user) {
        this.toggleChatContacts();
    };
    ChatComponent.prototype.toggleChatContacts = function () {
        this.boxControls.isContactsOpen = !this.boxControls.isContactsOpen;
    };
    /******************/
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
    /******************************************************/
    /******************************************************/
    //Socket control
    /********************/
    ChatComponent.prototype.sendMessageToUser = function () {
        var groupMessage = new __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_Models__["c" /* IGroupMessage */]();
        groupMessage.UserGroup = { _id: this._Globals.CurrentGroupId };
        groupMessage.Message = {
            "message": this.boxMessage
        };
        this._socketFunctions.sendMessage(groupMessage);
        this.boxMessage = '';
    };
    ChatComponent.prototype.scrollToBottom = function () {
        this.chatMessagePanel.nativeElement.scrollBottom = 0;
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.toggleChatContacts();
    };
    return ChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "boxControls", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "changeOpacity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ChatComponent.prototype, "sendMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chatMessagePanel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChatComponent.prototype, "chatMessagePanel", void 0);
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Chat',
        template: __webpack_require__(330)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=Chat.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatMessageListComponent = (function () {
    function ChatMessageListComponent(_Globals) {
        this._Globals = _Globals;
        this.selectedUser = -1;
        console.log(_Globals);
    }
    return ChatMessageListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatMessageListComponent.prototype, "selectedUser", void 0);
ChatMessageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ChatMessageList',
        template: __webpack_require__(331)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _a || Object])
], ChatMessageListComponent);

var _a;
//# sourceMappingURL=ChatMessageList.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatMessageList_component__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ChatMessageList_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_SocketFunctions_SocketFunctions__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProfileListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatProfileListComponent = (function () {
    function ChatProfileListComponent(_Globals, _socketFunctions) {
        this._Globals = _Globals;
        this._socketFunctions = _socketFunctions;
        this.viewUserChat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log(_Globals);
    }
    ChatProfileListComponent.prototype.selectUser = function ($user) {
    };
    ChatProfileListComponent.prototype.getMessages = function (groupId) {
        this._Globals.CurrentGroupId = groupId;
        if (this._Globals.Profile.UserGroups.find(function (x) { return x._id == groupId; }).Messages == undefined) {
            this._socketFunctions.getGroupMessages(groupId, 'NoMessages');
        }
        else {
            this._socketFunctions.getGroupMessages(groupId, this._Globals.Profile.UserGroups.find(function (x) { return x._id == groupId; }).Messages[0]._id);
        }
        this.viewUserChat.emit({});
    };
    return ChatProfileListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ChatProfileListComponent.prototype, "viewUserChat", void 0);
ChatProfileListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ChatProfileList',
        template: __webpack_require__(332)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */]) === "function" && _b || Object])
], ChatProfileListComponent);

var _a, _b;
//# sourceMappingURL=ChatProfileList.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ChatProfileList_component__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ChatProfileList_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chat_component__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Chat_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoosePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChoosePasswordComponent = (function () {
    function ChoosePasswordComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.profile = { _id: '', Email: '', ProfileName: 'Sairam', User: { _id: '', Email: '', Password: '' } };
    }
    ChoosePasswordComponent.prototype.choosePassword = function ($event) {
        var _this = this;
        this.userService.choosePassword(this.profile.User).subscribe(function (data) {
            _this.router.navigateByUrl('/login');
        }, function (error) {
            console.log(error);
        });
    };
    return ChoosePasswordComponent;
}());
ChoosePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(333)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */]) === "function" && _b || Object])
], ChoosePasswordComponent);

var _a, _b;
//# sourceMappingURL=ChoosePassword.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPlaceholderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentPlaceholderComponent = (function () {
    function ContentPlaceholderComponent() {
        this.contentOpacity = 1;
    }
    return ContentPlaceholderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContentPlaceholderComponent.prototype, "boxControls", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContentPlaceholderComponent.prototype, "contentOpacity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ContentPlaceholderComponent.prototype, "currentView", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContentPlaceholderComponent.prototype, "profileDetails", void 0);
ContentPlaceholderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ContentPlaceholder',
        template: __webpack_require__(334)
    })
], ContentPlaceholderComponent);

//# sourceMappingURL=ContentPlaceHolder.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ContentPlaceHolder_component__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ContentPlaceHolder_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemainTimePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemainTimePipe = (function () {
    function RemainTimePipe(_Globals) {
        this._Globals = _Globals;
    }
    RemainTimePipe.prototype.transform = function (startAt, endAt, type) {
        console.log(type);
        if (type == 'Title') {
            return 'Start In';
        }
        else if (type == 'Color') {
            return 'Start In';
        }
        else {
            var startDate = new Date(startAt);
            var endDate = new Date(endAt);
            if (this._Globals.currentTime >= startDate.getTime() && this._Globals.currentTime <= endDate.getTime())
                return ((endDate.getTime() - this._Globals.currentTime) / (endDate.getTime() - startDate.getTime())) * 100;
            else
                return 0;
        }
        //var startDate=new Date(startAt);
        //var endDate=new Date(endAt);
        //return (endDate.getTime()-startDate.getTime())/1000;
    };
    return RemainTimePipe;
}());
RemainTimePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'remainTime' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _a || Object])
], RemainTimePipe);

var _a;
//# sourceMappingURL=RemainTimePipe.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.handleClick = function ($event) {
        console.log('clicked body');
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Footer',
        template: __webpack_require__(335)
    })
], FooterComponent);

//# sourceMappingURL=Footer.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer_component__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Footer_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.togglesideMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isMenuExpanded = false;
    }
    HeaderComponent.prototype.toggleMenu = function () {
        console.log('comming');
        this.isMenuExpanded = !this.isMenuExpanded;
        this.togglesideMenu.emit({ isMenuExpanded: this.isMenuExpanded });
    };
    HeaderComponent.prototype.viewProfiles = function ($index) {
        this.viewProfile.emit($index);
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "proverItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "profileInfo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "togglesideMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "viewProfile", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        host: {
            'body:class': 'isMenuExpanded',
        },
        selector: 'app-header',
        template: __webpack_require__(336)
    })
], HeaderComponent);

//# sourceMappingURL=Header.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_component__ = __webpack_require__(213);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Header_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = (function () {
    function LayoutComponent(_SocketService, _ProfileService, _MenuService, _MessageService, _NotificationService, _ChatService, _ChatBoxService, _BoxControlService, _Globals) {
        this._SocketService = _SocketService;
        this._ProfileService = _ProfileService;
        this._MenuService = _MenuService;
        this._MessageService = _MessageService;
        this._NotificationService = _NotificationService;
        this._ChatService = _ChatService;
        this._ChatBoxService = _ChatBoxService;
        this._BoxControlService = _BoxControlService;
        this._Globals = _Globals;
        this.defaultIcon = './Content/Images/profile.png';
        this.currentView = 1;
        this.configuarion = {
            Profile: __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */],
            boxControls: {},
            chatBoxControls: {},
            chatHistory: [],
            treeItems: [],
            popOver: []
        };
        this.isMenuExpanded = false;
        this.contentOpacity = 1;
        this.configuarion.treeItems = this._MenuService.getMenu();
        this.configuarion.popOver.push(this._MessageService.getMessagePopup());
        this.configuarion.popOver.push(this._NotificationService.getNotificationPopup());
        this.configuarion.chatHistory = this._ChatService.getFriends();
        this.configuarion.chatBoxControls = this._ChatBoxService.getChatBox();
        this.configuarion.boxControls = this._BoxControlService.getBoxControl();
    }
    LayoutComponent.prototype.viewProfiles = function ($index) {
        this.currentView = $index;
    };
    LayoutComponent.prototype.updaateContents = function ($index) {
        console.log($index);
        this.currentView = $index;
    };
    //To change the opacity while chat window active.
    LayoutComponent.prototype.changeContentOpacity = function ($event) {
        this.contentOpacity = $event.Opacity;
    };
    //To indicate the menu is expanded or not.
    LayoutComponent.prototype.togglesideMenu = function ($event) {
        this.isMenuExpanded = !this.isMenuExpanded;
    };
    //Receives Message from server.
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(337)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["c" /* SocketManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["c" /* SocketManager */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["d" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["d" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["e" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["e" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["f" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["f" /* MessageService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["g" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["g" /* NotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["h" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["h" /* ChatService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["i" /* ChatBoxService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["i" /* ChatBoxService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["j" /* BoxControlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["j" /* BoxControlService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _j || Object])
], LayoutComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=Layout.component.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_Profile_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftMenuComponent = (function () {
    function LeftMenuComponent(_ProfileService, _Globals) {
        this._ProfileService = _ProfileService;
        this._Globals = _Globals;
        this.updaateContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LeftMenuComponent.prototype.togglesideOnlineStatus = function ($event) {
        this._Globals.Profile.Live = this._ProfileService.updateLiveStatus(this._Globals.Profile.Live);
    };
    LeftMenuComponent.prototype.updaateContents = function ($index) {
        console.log($index);
        this.updaateContent.emit($index);
    };
    return LeftMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LeftMenuComponent.prototype, "treeItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LeftMenuComponent.prototype, "updaateContent", void 0);
LeftMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-LeftMenu',
        template: __webpack_require__(338)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_Profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_Profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _b || Object])
], LeftMenuComponent);

var _a, _b;
//# sourceMappingURL=LeftMenu.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LeftMenu_component__ = __webpack_require__(216);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__LeftMenu_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneNumberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneNumberComponent = (function () {
    function PhoneNumberComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.loading = false;
        this.profile = { _id: '', Email: '', ProfileName: 'Sairam', User: { _id: '', Email: '', Password: '' } };
    }
    PhoneNumberComponent.prototype.addMobileNo = function ($event) {
        var _this = this;
        this.userService.addMobileNo(this.profile).subscribe(function (data) {
            _this.router.navigateByUrl('/login');
        }, function (error) {
        });
    };
    PhoneNumberComponent.prototype.verifyMobile = function ($event) {
        var _this = this;
        this.userService.verifyMobile(this.profile).subscribe(function (data) {
            _this.router.navigateByUrl('/login');
        }, function (error) {
        });
    };
    return PhoneNumberComponent;
}());
PhoneNumberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(339)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */]) === "function" && _b || Object])
], PhoneNumberComponent);

var _a, _b;
//# sourceMappingURL=PhoneNumber.component.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecoverAccountComponent = (function () {
    function RecoverAccountComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.RecoverWindowType = 1;
        this.user = { _id: '', Email: null };
    }
    RecoverAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params);
            if (params.id != "Recover") {
                _this.RecoverWindowType = 4;
                _this.user.RecoverHash = params.id;
                _this.user.Email = params.Email;
            }
        });
    };
    RecoverAccountComponent.prototype.recoverAccount = function ($event) {
        var _this = this;
        this.userService.recoverAccount(this.user).subscribe(function (result) {
            console.log(result);
            if (result.error) {
            }
            else {
                _this.RecoverWindowType = result.data.RecoverType ? 2 : 3;
            }
        }, function (error) {
            console.log(error);
        });
    };
    RecoverAccountComponent.prototype.recoverPassword = function ($event) {
        var _this = this;
        this.userService.recoverPassword(this.user).subscribe(function (data) {
            _this.router.navigateByUrl('/login');
        }, function (error) {
            console.log(error);
        });
    };
    return RecoverAccountComponent;
}());
RecoverAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(340)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */]) === "function" && _c || Object])
], RecoverAccountComponent);

var _a, _b, _c;
//# sourceMappingURL=RecoverAccount.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RightMenuComponent = (function () {
    function RightMenuComponent() {
    }
    return RightMenuComponent;
}());
RightMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-RightMenu',
        template: __webpack_require__(341)
    })
], RightMenuComponent);

//# sourceMappingURL=RightMenu.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RightMenu_component__ = __webpack_require__(220);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__RightMenu_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxControlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BoxControlService = (function () {
    function BoxControlService() {
    }
    BoxControlService.prototype.getBoxControl = function () {
        return {
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
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '3' },
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '2' }
            ],
            chat: false,
            isChatBox: false,
            isContactsOpen: false
        };
    };
    return BoxControlService;
}());
BoxControlService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BoxControlService);

//# sourceMappingURL=BoxControl.service.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatService = (function () {
    function ChatService() {
    }
    ChatService.prototype.getFriends = function () {
        return [{
                userId: "598deb1a5a948e585cc68553",
                userName: 'sairam',
                groupName: 'sairam',
                profilePic: 'content/img/user2-160x160.jpg',
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
                groupName: 'Ravi',
                profilePic: 'content/img/user2-160x160.jpg',
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
                groupName: 'Anil',
                profilePic: 'content/img/user2-160x160.jpg',
                isOnline: true,
                messages: [
                    { msgId: '7', sender: '1', Text: 'msg7', time: '7min', isDelivered: true, isSeen: true, seenTime: '2 min', isSent: true },
                    { msgId: '8', sender: '1', Text: 'msg8', time: '8min', isDelivered: true, isSeen: true, seenTime: '2 min', isSent: true }
                ]
            }];
    };
    ChatService.prototype.getChat = function () {
        return {
            msgId: '6',
            sender: '1',
            Text: 'msg6',
            time: '6min',
            isDelivered: true,
            isSeen: true,
            seenTime: '2 min',
            isSent: true
        };
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ChatService);

//# sourceMappingURL=Chat.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatBoxService = (function () {
    function ChatBoxService() {
    }
    ChatBoxService.prototype.getChatBox = function () {
        return {
            title: 'Chat',
            footer: true,
            collapse: false,
            settings: {
                hide: true,
                settingList: [{ title: 'Firsts', isDivider: false },
                    { title: 'Second', isDivider: false },
                    { title: 'Third', isDivider: true },
                    { title: 'Fourth', isDivider: false }]
            },
            close: true,
            lables: [{}],
            images: [
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '3' },
                { src: 'content/img/user2-160x160.jpg', id: '', tag: '2' }
            ],
            chat: true,
            isChatBox: true,
            isContactsOpen: false
        };
    };
    return ChatBoxService;
}());
ChatBoxService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ChatBoxService);

//# sourceMappingURL=ChatBox.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HttpClientWraper__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupMessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import RxJs required methods


var GroupMessageService = (function () {
    function GroupMessageService(http) {
        this.http = http;
        this.userUrl = 'http://localhost:3002/';
    }
    return GroupMessageService;
}());
GroupMessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__HttpClientWraper__["a" /* HttpClientWraper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__HttpClientWraper__["a" /* HttpClientWraper */]) === "function" && _a || Object])
], GroupMessageService);

var _a;
//# sourceMappingURL=GroupMessage.Service.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenu = function () {
        return [
            {
                menuItem: "Dashboard",
                icon: "fa fa-dashboard",
                rightContent: [],
                subMenu: []
            },
            {
                menuItem: "GameBoard",
                icon: "fa fa-gamepad",
                rightContent: [],
                subMenu: []
            },
            {
                menuItem: "Profile",
                icon: "fa fa-user",
                rightContent: [],
                subMenu: []
            },
            {
                menuItem: "Account",
                icon: "fa fa-credit-card",
                rightContent: [],
                subMenu: []
            }
        ];
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MenuService);

/*
,
{
    menuItem:"Settings",
    icon:"fa fa-cogs",
    rightContent:[
    ],
    subMenu:[
    ]
}
*/ 
//# sourceMappingURL=Menu.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.getMessagePopup = function () {
        return {
            isSmallList: false,
            icon: "fa fa-envelope-o",
            heading: "You have 4 messages",
            footer: "See all messages",
            body: [
                {
                    Title: 'Item1',
                    Image: 'content/img/user2-160x160.jpg',
                    Text: 'My title1',
                    Time: '5 min',
                    IsSeen: false
                },
                {
                    Title: 'Item2',
                    Image: 'content/img/user2-160x160.jpg',
                    Text: 'My title2',
                    Time: '15 min',
                    IsSeen: true
                },
                {
                    Title: 'Item3',
                    Image: 'content/img/user2-160x160.jpg',
                    Text: 'My title3',
                    Time: '25 min',
                    IsSeen: false
                },
                {
                    Title: 'Item4',
                    Image: 'content/img/user2-160x160.jpg',
                    Text: 'My title4',
                    Time: '35 min',
                    IsSeen: true
                }
            ]
        };
    };
    MessageService.prototype.getMessage = function () {
        return {
            Title: 'Item1',
            Image: 'content/img/user2-160x160.jpg',
            Text: 'My title1',
            Time: '5 min',
            IsSeen: false
        };
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MessageService);

//# sourceMappingURL=Message.service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationService = (function () {
    function NotificationService() {
    }
    NotificationService.prototype.getNotificationPopup = function () {
        return {
            isSmallList: true,
            icon: "fa fa-bell-o",
            heading: "You have 4 messages",
            footer: "view more",
            body: [
                { Title: 'Item1', IsSeen: false },
                { Title: 'Item2', IsSeen: true },
                { Title: 'Item3', IsSeen: false },
                { Title: 'Item4', IsSeen: true },
                { Title: 'Item4', IsSeen: false },
                { Title: 'Item4', IsSeen: false }
            ]
        };
    };
    NotificationService.prototype.getNotification = function () {
        return { Title: 'Item1', IsSeen: false };
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NotificationService);

//# sourceMappingURL=Notification.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpClientWraper__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import RxJs required methods


var UserService = (function () {
    // Resolve HTTP using the constructor
    function UserService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.userUrl = 'http://localhost:3002/';
        this.webUrl = 'http://localhost:3000/';
    }
    UserService.prototype.registerUser = function (User) {
        return this.http.post(this.webUrl + 'Register', User)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.getUsers = function () {
        // ...using get request
        return this.http.get(this.userUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.validateToken = function (token) {
        return this.http.get(this.userUrl + 'api/profile/validateToken/' + token)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
        //return Observable.of({});
    };
    UserService.prototype.choosePassword = function (User) {
        return this.http.post(this.userUrl + 'api/user/SetPassword/', User)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.changePassword = function (User) {
        return this.http.post(this.userUrl + 'api/user/ResetPassword/', User)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.addMobileNo = function (User) {
        return this.http.post(this.userUrl + 'api/user/AddMobileNo/', User)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.verifyMobile = function (User) {
        return this.http.post(this.userUrl + 'api/user/verifyMobile/', User)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.login = function (User) {
        return this.http.post(this.webUrl + 'login/', User)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.recoverAccount = function (User) {
        return this.http.get(this.userUrl + 'api/user/ForgotPassword/' + User.Email)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.recoverPassword = function (User) {
        return this.http.post(this.userUrl + 'api/user/RecoverPassword/', User)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserService.prototype.resendVerificationEmail = function () {
        return this.http.get(this.userUrl + 'api/user/resend/VerificationEmail/')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__HttpClientWraper__["a" /* HttpClientWraper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__HttpClientWraper__["a" /* HttpClientWraper */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=User.service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    VerifyEmailComponent.prototype.resendVerificationEmail = function ($event) {
        var _this = this;
        this.userService.resendVerificationEmail().subscribe(function (data) {
            _this.router.navigateByUrl('/');
        }, function (error) {
        });
    };
    ;
    return VerifyEmailComponent;
}());
VerifyEmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(342)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */]) === "function" && _b || Object])
], VerifyEmailComponent);

var _a, _b;
//# sourceMappingURL=VerifyEmail.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BoxComponent = (function () {
    function BoxComponent() {
        this.toggleChatContacts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleChatWindow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "boxControls", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "toggleChatContacts", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BoxComponent.prototype, "toggleChatWindow", void 0);
BoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Box',
        template: __webpack_require__(343)
    })
], BoxComponent);

//# sourceMappingURL=Box.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Box_component__ = __webpack_require__(231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Box_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownMenuComponent = (function () {
    function DropdownMenuComponent() {
        this.isOpenedDropdown = false;
    }
    DropdownMenuComponent.prototype.toggleDropdown = function ($event) {
        this.isOpenedDropdown = !this.isOpenedDropdown;
    };
    return DropdownMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DropdownMenuComponent.prototype, "settingList", void 0);
DropdownMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-DropdownMenu',
        template: __webpack_require__(344)
    })
], DropdownMenuComponent);

//# sourceMappingURL=DropdownMenu.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DropdownMenu_component__ = __webpack_require__(233);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__DropdownMenu_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediumListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediumListComponent = (function () {
    function MediumListComponent() {
    }
    return MediumListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MediumListComponent.prototype, "listItems", void 0);
MediumListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-MediumList',
        template: __webpack_require__(345)
    })
], MediumListComponent);

//# sourceMappingURL=MediumList.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MediumList_component__ = __webpack_require__(235);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__MediumList_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleListComponent = (function () {
    function SimpleListComponent() {
    }
    return SimpleListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SimpleListComponent.prototype, "listItems", void 0);
SimpleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-SimpleList',
        template: __webpack_require__(346)
    })
], SimpleListComponent);

//# sourceMappingURL=SimpleList.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SimpleList_component__ = __webpack_require__(237);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__SimpleList_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopOverMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopOverMenuComponent = (function () {
    function PopOverMenuComponent(router, _Globals) {
        this.router = router;
        this._Globals = _Globals;
        this.viewProfile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.expandedPopover = -1;
    }
    PopOverMenuComponent.prototype.popoverClicked = function ($event, $value) {
        console.log($value);
        this.expandedPopover = $value;
        $event.stopPropagation();
    };
    PopOverMenuComponent.prototype.signOut = function ($event) {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
        this._Globals.Profile = null;
    };
    PopOverMenuComponent.prototype.profileView = function ($event) {
        setTimeout(function () {
            this.expandedPopover = -1;
            console.log(this.expandedPopover);
        }, 1000);
        this.viewProfile.emit(2);
    };
    PopOverMenuComponent.prototype.handleClick = function ($event) {
        this.expandedPopover = -1;
    };
    return PopOverMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PopOverMenuComponent.prototype, "propOverDropdowns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopOverMenuComponent.prototype, "viewProfile", void 0);
PopOverMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        host: {
            '(document:click)': 'handleClick($event)',
        },
        selector: 'PopOverMenu',
        template: __webpack_require__(347)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _b || Object])
], PopOverMenuComponent);

var _a, _b;
//# sourceMappingURL=PopOverMenu.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PopOverMenu_component__ = __webpack_require__(239);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__PopOverMenu_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeComponent = (function () {
    function TreeComponent() {
        this.updaateContent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isActiveTree = -1;
        this.isSubActiveTree = -1;
    }
    TreeComponent.prototype.expandTree = function ($index) {
        if (this.isActiveTree == $index)
            this.isActiveTree = -1;
        else
            this.isActiveTree = $index;
        this.isSubActiveTree = 0;
        console.log($index);
        this.updaateContent.emit($index);
    };
    TreeComponent.prototype.selectTree = function ($index) {
        console.log($index);
        this.isSubActiveTree = $index;
    };
    return TreeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "treeItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TreeComponent.prototype, "updaateContent", void 0);
TreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-MenuTree',
        template: __webpack_require__(348)
    })
], TreeComponent);

//# sourceMappingURL=Tree.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tree_component__ = __webpack_require__(241);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Tree_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_WebSocket_SocketFunctions_SocketFunctions__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(router, userService, _Globals, _socketFunctions) {
        this.router = router;
        this.userService = userService;
        this._Globals = _Globals;
        this._socketFunctions = _socketFunctions;
        this.UserState = 0;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log(state.url);
        if (state.url == '/logout') {
            localStorage.removeItem('Token');
            this.router.navigate(['/login']);
            this._Globals.Profile = null;
        }
        else if (localStorage.getItem('Token') != undefined) {
            return this.userService.validateToken(localStorage.getItem('Token')).map(function (validateResult) {
                console.log(validateResult);
                if (!validateResult.error) {
                    _this.UserState = validateResult.data.Status;
                    console.log(_this.UserState);
                    if (_this.UserState == 1) {
                        if (state.url == '/ChoosePassword') {
                            return true;
                        }
                        else {
                            _this.router.navigate(['/ChoosePassword']);
                        }
                    }
                    else if (_this.UserState == 2) {
                        if (state.url == '/VerifyEmail') {
                            return true;
                        }
                        else {
                            _this.router.navigate(['/VerifyEmail']);
                        }
                    }
                    else if (_this.UserState == 3) {
                        if (state.url == '/PhoneNumber') {
                            return true;
                        }
                        else {
                            _this.router.navigate(['/PhoneNumber']);
                        }
                    }
                    else if (_this.UserState == 4) {
                        _this._socketFunctions.initializeData();
                        if (state.url == '/') {
                            return true;
                        }
                        else {
                            _this.router.navigate(['/']);
                        }
                    }
                    else {
                        if (state.url == '/login') {
                            return true;
                        }
                        else {
                            localStorage.removeItem('Token');
                            _this._Globals.Profile = null;
                            _this.router.navigate(['/login']);
                        }
                    }
                }
                else {
                    _this._Globals.Profile = null;
                    localStorage.removeItem('Token');
                    _this.router.navigate(['/login']);
                }
            });
        }
        else {
            console.log(state.url);
            if (state.url == '/login') {
                return true;
            }
            else if (state.url == '/register') {
                return true;
            }
            else if (state.url == '/RecoverPassword') {
                return true;
            }
            else {
                //console.log(state.root.firstChild);
                if (state.root.firstChild.url[0] != undefined && state.root.firstChild.url[0].path != undefined && state.root.firstChild.url[0].path == 'login') {
                    return this.userService.validateToken(route.params.id).map(function (validateResult) {
                        if (!validateResult.error) {
                            localStorage.setItem('Token', route.params.id);
                            _this.router.navigate(['/']);
                            return true;
                        }
                        else {
                            _this.router.navigate(['/login']);
                            return true;
                        }
                    });
                }
                else {
                    this.router.navigate(['/login']);
                    return true;
                }
            }
        }
        return true;
    };
    AuthGuard.prototype.validateUser = function (token) {
        this.userService.validateToken(token).subscribe(function (validateResult) {
            return validateResult;
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_WebSocket_AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_WebSocket_AppData__["a" /* AppData */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */]) === "function" && _d || Object])
], AuthGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__(349)
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_index__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_index__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_index__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_index__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ChoosePassword_index__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PhoneNumber_index__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__VerifyEmail_index__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__RecoverAccount_index__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Layout_index__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Header_index__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__LeftMenu_index__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ContentPlaceholder_index__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Footer_index__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__RightMenu_index__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Chat_index__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Chat_ChatMessageList_index__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Chat_ChatProfileList_index__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Widges_Tree_index__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Widges_Box_index__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Widges_DropdownMenu_index__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Widges_ListItem_MediumList_index__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Widges_ListItem_SimpleList_index__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Widges_PopOverMenu_index__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ApplicationComponents_Account_index__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ApplicationComponents_Dashboard_index__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ApplicationComponents_Gameboard_index__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ApplicationComponents_Profile_index__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ApplicationComponents_Settings_index__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Services_WebSocket_SocketFunctions_SocketFunctions__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng_socket_io__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Services_WebSocket_AppSocket__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Services_WebSocket_DataRouteManager__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Utilities_AppConfig__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__Services_WebSocket_AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__Services_WebSocket_RouteService_ProfileController__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_ng_circle_progress__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Filters_RemainTimePipe__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// used to create fake backend



























//Appliction components















//UserService

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_36_ng_socket_io__["SocketIoModule"],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_41__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_43_ng_circle_progress__["a" /* NgCircleProgressModule */].forRoot({})
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_44__Filters_RemainTimePipe__["a" /* RemainTimePipe */],
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_index__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_index__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__register_index__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ChoosePassword_index__["a" /* ChoosePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_12__PhoneNumber_index__["a" /* PhoneNumberComponent */],
            __WEBPACK_IMPORTED_MODULE_13__VerifyEmail_index__["a" /* VerifyEmailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__RecoverAccount_index__["a" /* RecoverAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_15__Layout_index__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__Header_index__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__LeftMenu_index__["a" /* LeftMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ContentPlaceholder_index__["a" /* ContentPlaceholderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__Footer_index__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_20__RightMenu_index__["a" /* RightMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_21__Chat_index__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_29__Widges_PopOverMenu_index__["a" /* PopOverMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_24__Widges_Tree_index__["a" /* TreeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__Widges_Box_index__["a" /* BoxComponent */],
            __WEBPACK_IMPORTED_MODULE_22__Chat_ChatMessageList_index__["a" /* ChatMessageListComponent */],
            __WEBPACK_IMPORTED_MODULE_23__Chat_ChatProfileList_index__["a" /* ChatProfileListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__Widges_Tree_index__["a" /* TreeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__Widges_Box_index__["a" /* BoxComponent */],
            __WEBPACK_IMPORTED_MODULE_26__Widges_DropdownMenu_index__["a" /* DropdownMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_27__Widges_ListItem_MediumList_index__["a" /* MediumListComponent */],
            __WEBPACK_IMPORTED_MODULE_28__Widges_ListItem_SimpleList_index__["a" /* SimpleListComponent */],
            __WEBPACK_IMPORTED_MODULE_30__ApplicationComponents_Account_index__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_31__ApplicationComponents_Dashboard_index__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_32__ApplicationComponents_Gameboard_index__["a" /* GameboardComponent */],
            __WEBPACK_IMPORTED_MODULE_33__ApplicationComponents_Profile_index__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_34__ApplicationComponents_Settings_index__["a" /* SettingsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["b" /* GroupMessageService */],
            __WEBPACK_IMPORTED_MODULE_41__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_38__Services_WebSocket_DataRouteManager__["a" /* DataRouteManager */],
            __WEBPACK_IMPORTED_MODULE_37__Services_WebSocket_AppSocket__["a" /* AppSocket */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["c" /* SocketManager */],
            // providers used to create fake backend
            __WEBPACK_IMPORTED_MODULE_4__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* BaseRequestOptions */],
            __WEBPACK_IMPORTED_MODULE_42__Services_WebSocket_RouteService_ProfileController__["a" /* ProfileController */],
            //My services
            __WEBPACK_IMPORTED_MODULE_35__Services_WebSocket_SocketFunctions_SocketFunctions__["a" /* SocketFunctions */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["d" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["e" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_39__Utilities_AppConfig__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["f" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["g" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["h" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["i" /* ChatBoxService */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["j" /* BoxControlService */],
            __WEBPACK_IMPORTED_MODULE_45__Services_index__["k" /* HttpClientWraper */],
            //Global values
            __WEBPACK_IMPORTED_MODULE_40__Services_WebSocket_AppData__["a" /* AppData */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_index__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_index__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VerifyEmail_index__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RecoverAccount_index__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ChoosePassword_index__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PhoneNumber_index__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Layout_index__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_index__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__Layout_index__["a" /* LayoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_index__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */]] },
    { path: 'login/:id', component: __WEBPACK_IMPORTED_MODULE_7__Layout_index__["a" /* LayoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_index__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */]] },
    { path: 'ChoosePassword', component: __WEBPACK_IMPORTED_MODULE_5__ChoosePassword_index__["a" /* ChoosePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */]] },
    { path: 'PhoneNumber', component: __WEBPACK_IMPORTED_MODULE_6__PhoneNumber_index__["a" /* PhoneNumberComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */]] },
    { path: 'VerifyEmail', component: __WEBPACK_IMPORTED_MODULE_3__VerifyEmail_index__["a" /* VerifyEmailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */]] },
    { path: 'RecoverAccount/:id', component: __WEBPACK_IMPORTED_MODULE_4__RecoverAccount_index__["a" /* RecoverAccountComponent */] },
    { path: 'RecoverAccount/:id/:Email', component: __WEBPACK_IMPORTED_MODULE_4__RecoverAccount_index__["a" /* RecoverAccountComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        //this.userService.getAll().subscribe(users => { this.users = users; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(350)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_index__["a" /* UserService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(247);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.loading = false;
        this.profile = { _id: '', Email: '', ProfileName: '', User: { _id: '', Email: '', Password: '' } };
    }
    LoginComponent.prototype.ngOnInit = function () {
        //Get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function ($event) {
        var _this = this;
        this.userService.login(this.profile).subscribe(function (data) {
            localStorage.setItem('currentUser', data.Token);
            _this.router.navigateByUrl('/');
        }, function (error) {
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(351)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_index__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.model = {};
        this.loading = false;
        this.profile = { _id: '', Email: '', ProfileName: '', User: { _id: '', Email: '', Password: '' } };
    }
    RegisterComponent.prototype.regiserUser = function ($event) {
        var _this = this;
        this.userService.registerUser(this.profile).subscribe(function (data) {
            localStorage.setItem('currentUser', data.Token);
            _this.router.navigateByUrl('/');
        }, function (error) {
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(352)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_index__["a" /* UserService */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    SocketConnection: 'http://localhost:3004/AsUser',
    ApiUrl: '',
    WebUrl: 'http://localhost:3001',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<!-- /.row -->\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <app-Box   [boxControls]='depositBoxControls' >\r\n            <div class=\"body\" >\r\n                <div class=\"form-group has-feedback\">\r\n                    <span>Current account balance is : </span><span>{{_Globals.Profile.Account.Rupees}}</span>\r\n                </div><div class=\"form-group has-feedback\">\r\n                    <span>After adding money : </span><span>{{_Globals.Profile.Account.Rupees + accountDeposit.DepositAmount}}</span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Enter Amount\"   [(ngModel)]='accountDeposit.DepositAmount' [ngModelOptions]=\"{standalone: true}\">\r\n                  <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <a href=\"javascript:void(0)\" style=\"margin-bottom: 15px;\" class=\"btn btn-sm btn-info btn-flat pull-right\" (click)=\"updateProfile()\">Add</a>\r\n                </div>\r\n                \r\n            </div>\r\n          \r\n          </app-Box>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <app-Box   [boxControls]='withdrawBoxControls' >\r\n            <div class=\"body\" >\r\n                <div class=\"form-group has-feedback\">\r\n                    <span>Current available balance for withdraw is : </span><span>{{_Globals.Profile.Account.Rupees}}</span>\r\n                </div><div class=\"form-group has-feedback\">\r\n                    <span>After widtdraw money : </span><span>{{_Globals.Profile.Account.Rupees - accountDeposit.WithdrawAmount}}</span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Enter Amount\"   [(ngModel)]='accountDeposit.WithdrawAmount' [ngModelOptions]=\"{standalone: true}\">\r\n                  <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <a href=\"javascript:void(0)\" style=\"margin-bottom: 15px;\" class=\"btn btn-sm btn-info btn-flat pull-right\" (click)=\"updateProfile()\">Withdraw</a>\r\n                </div>\r\n                \r\n            </div>\r\n          \r\n          </app-Box>\r\n        </div>\r\n        \r\n        <div class=\"col-md-6\">\r\n            <app-Box   [boxControls]='convertToBoxControls' >\r\n              <div class=\"body\" >\r\n                  <div class=\"form-group has-feedback\">\r\n                      <span>Current available coins for convert to coins are : </span><span>{{_Globals.Profile.Account.Rupees}}</span>\r\n                  </div>\r\n                  <div class=\"form-group has-feedback\">\r\n                      <span>After convert to coins : </span><span>{{_Globals.Profile.Account.Rupees - accountDeposit.ConvertTo}}</span>\r\n                  </div>\r\n                  <div class=\"form-group has-feedback\">\r\n                      <span>Coints will came to : </span><span>{{_Globals.Profile.Account.RealCoins + (accountDeposit.ConvertTo*100) }}</span>\r\n                  </div>\r\n                  <div class=\"form-group has-feedback\">\r\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter Amount\"   [(ngModel)]='accountDeposit.ConvertTo' [ngModelOptions]=\"{standalone: true}\">\r\n                    <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                  </div>\r\n                  <div class=\"form-group has-feedback\">\r\n                    <a href=\"javascript:void(0)\" style=\"margin-bottom: 15px;\" class=\"btn btn-sm btn-info btn-flat pull-right\" (click)=\"updateProfile()\">Convert</a>\r\n                  </div>\r\n                  \r\n              </div>\r\n            \r\n            </app-Box>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <app-Box   [boxControls]='convertFromBoxControls' >\r\n              <div class=\"body\" >\r\n                  <div class=\"form-group has-feedback\">\r\n                      <span>Current available coins for convert to rupees are :  </span><span>{{_Globals.Profile.Account.RealCoins}}</span>\r\n                  </div>\r\n                  <div class=\"form-group has-feedback\">\r\n                      <span>After convert to Rupees : </span><span>{{_Globals.Profile.Account.Rupees + (accountDeposit.ConvertFrom/100)}}</span>\r\n                  </div>\r\n                  <div class=\"form-group has-feedback\">\r\n                      <span>Coints will came to : </span><span>{{_Globals.Profile.Account.RealCoins - accountDeposit.ConvertFrom}}</span>\r\n                  </div>\r\n                  <div class=\"form-group has-feedback\">\r\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter Coins\"   [(ngModel)]='accountDeposit.ConvertFrom' [ngModelOptions]=\"{standalone: true}\">\r\n                    <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                  </div>\r\n                  <div class=\"form-group has-feedback\">\r\n                    <a href=\"javascript:void(0)\" style=\"margin-bottom: 15px;\" class=\"btn btn-sm btn-info btn-flat pull-right\" (click)=\"updateProfile()\">Convert</a>\r\n                  </div>\r\n                  \r\n              </div>\r\n            \r\n            </app-Box>\r\n          </div>\r\n      </div>\r\n      <!-- /.row -->\r\n"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<!-- Main row -->\r\n      <div class=\"row\">\r\n        <!-- Left col -->\r\n        <div class=\"col-md-8\">\r\n          <app-Box   [boxControls]='boxControls'>\r\n            <div class=\"body\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table no-margin\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th>Order ID</th>\r\n                      <th>Item</th>\r\n                      <th>Status</th>\r\n                      <th>Popularity</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                      <td><a href=\"pages/examples/invoice.html\">Dashboard</a></td>\r\n                      <td>Call of Duty IV</td>\r\n                      <td><span class=\"label label-success\">Shipped</span></td>\r\n                      <td>\r\n                        <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\">90,80,90,-70,61,-83,63</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\r\n                      <td>Samsung Smart TV</td>\r\n                      <td><span class=\"label label-warning\">Pending</span></td>\r\n                      <td>\r\n                        <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\">90,80,-90,70,61,-83,68</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\r\n                      <td>iPhone 6 Plus</td>\r\n                      <td><span class=\"label label-danger\">Delivered</span></td>\r\n                      <td>\r\n                        <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\">90,-80,90,70,-61,83,63</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\r\n                      <td>Samsung Smart TV</td>\r\n                      <td><span class=\"label label-info\">Processing</span></td>\r\n                      <td>\r\n                        <div class=\"sparkbar\" data-color=\"#00c0ef\" data-height=\"20\">90,80,-90,70,-61,83,63</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\r\n                      <td>Samsung Smart TV</td>\r\n                      <td><span class=\"label label-warning\">Pending</span></td>\r\n                      <td>\r\n                        <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\">90,80,-90,70,61,-83,68</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\r\n                      <td>iPhone 6 Plus</td>\r\n                      <td><span class=\"label label-danger\">Delivered</span></td>\r\n                      <td>\r\n                        <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\">90,-80,90,70,-61,83,63</div>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\r\n                      <td>Call of Duty IV</td>\r\n                      <td><span class=\"label label-success\">Shipped</span></td>\r\n                      <td>\r\n                        <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\">90,80,90,-70,61,-83,63</div>\r\n                      </td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info btn-flat pull-left\">Place New Order</a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default btn-flat pull-right\">View All Orders</a>\r\n\r\n            </div>\r\n          \r\n          </app-Box>\r\n        </div>\r\n        <!-- /.col -->\r\n\r\n        <div class=\"col-md-4\">\r\n          \r\n          <app-Box   [boxControls]='boxControls'>\r\n            <div class=\"body\">\r\n              <ul class=\"products-list product-list-in-box\">\r\n                <li class=\"item\">\r\n                  <div class=\"product-img\">\r\n                    <img src=\"dist/img/default-50x50.gif\" alt=\"Product Image\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                    <a href=\"javascript:void(0)\" class=\"product-title\">Samsung TV\r\n                      <span class=\"label label-warning pull-right\">$1800</span></a>\r\n                        <span class=\"product-description\">\r\n                          Samsung 32\" 1080p 60Hz LED Smart HDTV.\r\n                        </span>\r\n                  </div>\r\n                </li>\r\n                <!-- /.item -->\r\n                <li class=\"item\">\r\n                  <div class=\"product-img\">\r\n                    <img src=\"dist/img/default-50x50.gif\" alt=\"Product Image\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                    <a href=\"javascript:void(0)\" class=\"product-title\">Bicycle\r\n                      <span class=\"label label-info pull-right\">$700</span></a>\r\n                        <span class=\"product-description\">\r\n                          26\" Mongoose Dolomite Men's 7-speed, Navy Blue.\r\n                        </span>\r\n                  </div>\r\n                </li>\r\n                <!-- /.item -->\r\n                <li class=\"item\">\r\n                  <div class=\"product-img\">\r\n                    <img src=\"dist/img/default-50x50.gif\" alt=\"Product Image\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                    <a href=\"javascript:void(0)\" class=\"product-title\">Xbox One <span class=\"label label-danger pull-right\">$350</span></a>\r\n                        <span class=\"product-description\">\r\n                          Xbox One Console Bundle with Halo Master Chief Collection.\r\n                        </span>\r\n                  </div>\r\n                </li>\r\n                <!-- /.item -->\r\n                <li class=\"item\">\r\n                  <div class=\"product-img\">\r\n                    <img src=\"dist/img/default-50x50.gif\" alt=\"Product Image\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                    <a href=\"javascript:void(0)\" class=\"product-title\">PlayStation 4\r\n                      <span class=\"label label-success pull-right\">$399</span></a>\r\n                        <span class=\"product-description\">\r\n                          PlayStation 4 500GB Console (PS4)\r\n                        </span>\r\n                  </div>\r\n                </li>\r\n                <!-- /.item -->\r\n              </ul>\r\n            </div>\r\n            <div class=\"footer\">\r\n              <a href=\"javascript:void(0)\" class=\"uppercase\">View All Products</a>\r\n            </div>\r\n          </app-Box>\r\n\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n      <!-- /.row -->"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "\r\n<!-- /.row -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <app-Box  [boxControls]='boxControls'>\r\n\r\n      <div class=\"body\"><div class=\"row\">\r\n          \r\n          <div class=\"col-md-12\">\r\n              <p class=\"text-center\">\r\n                <strong>My Betted Free Games</strong>\r\n              </p>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\" style=\"background-color: gainsboro;padding:20px;box-sizing: border-box;\" *ngFor=\"let game of getParticipentedGames(true);\">\r\n                    <div  class=\"col-md-8 col-lg-8 col-sm-6 col-xs-12\"  style=\"background-color:white;box-shadow: 7px 7px 5px -5px grey;padding:10px;margin-bottom:10px;\"  (click)=\"_Globals.getAppGameByGameId(game._id,true)\">\r\n                    <table class=\"table table-striped\">\r\n                        <tbody>\r\n                          <tr>\r\n                            <td class=\"col-md-4\">RemainPositions</td>\r\n                            <td class=\"col-md-4\">{{game.RemainPositions}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td class=\"col-md-4\">StartOn</td>\r\n                            <td class=\"col-md-4\">{{game.StartOn}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td class=\"col-md-4\">EndAt</td>\r\n                            <td class=\"col-md-4\">{{game.EndAt}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td class=\"col-md-4\">TotalPositions</td>\r\n                            <td class=\"col-md-4\">{{game.TotalPositions}}</td>\r\n                          </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <ul *ngIf=\"_Globals.getAppGameByGameId(game._id,true)!=undefined\" >\r\n                      <li *ngFor=\"let position of _Globals.getAppGameByGameId(game._id,true).Positions\" (click)=\"_Globals.betOnGamePosition(true,game._id,position._id)\">{{position.Title}}</li>\r\n                    </ul>\r\n                    <circle-progress\r\n                      [percent]=\"getTime(game.StartOn,game.EndAt)\"\r\n                      [radius]= \"60\"\r\n                      [space]= \"-10\"\r\n                      [outerStrokeWidth]= \"10\"\r\n                      [outerStrokeColor]= \"'#4882c2'\"\r\n                      [outerStrokeLinecap]= \"butt\"\r\n                      [innerStrokeColor]= \"'#e7e8ea'\"\r\n                      [innerStrokeWidth]= \"10\"\r\n                      [title]= \"UI\"\r\n                      [subtitle]= \"UI\"\r\n                      [animateTitle]= \"false\"\r\n                      [animationDuration]= \"0\"\r\n                      [showUnits]= \"false\"\r\n                      [showBackground]= \"false\"\r\n                      [clockwise]= \"false\"\r\n                    ></circle-progress>\r\n                  </div>\r\n                  <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-12\" style=\"background-color: #f4f4f4;\" >\r\n                    <div style=\"max-height: 265px;min-height: 265px;overflow: auto;\">\r\n                      <ul class=\"contacts-list\" style=\"background-color:#3c8dbc\" *ngIf=\"game.GameGroup!=undefined;\" >\r\n                        <li   *ngFor=\"let message of game.GameGroup.Messages\">\r\n                            <a>\r\n                                <img alt=\"User Image\" class=\"contacts-list-img\" [src]=\"group\" onError=\"this.src='./Content/Images/profile.png';\" >\r\n                    \r\n                                <div class=\"contacts-list-info\">\r\n                                    <span class=\"contacts-list-name\">\r\n                                        {{message.message}}\r\n                                        <small class=\"contacts-list-date pull-right\">Time</small>\r\n                                    </span>\r\n                                <span class=\"contacts-list-msg\">Text</span>\r\n                                </div>\r\n                                \r\n                            </a>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                    <div>\r\n                      <form action=\"#\" method=\"post\">\r\n                        <div class=\"input-group\">\r\n                          <input (keyup.enter)='sendMessageToGameGroup(gameMessage.value,game._id,true);gameMessage.value=\"\";' type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\"  #gameMessage >\r\n                            <span class=\"input-group-btn\">\r\n                            <button  (click)='sendMessageToGameGroup(gameMessage.value,game._id,true);gameMessage.value=\"\";' type=\"button\" class=\"btn btn-info btn-flat\">Send</button>\r\n                            </span>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"col-md-12\">\r\n                <p class=\"text-center\">\r\n                  <strong>My Betted Paid Games</strong>\r\n                </p>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\" style=\"background-color: gainsboro;padding:20px;box-sizing: border-box;\" *ngFor=\"let game of getParticipentedGames(false);\">\r\n                      <div  class=\"col-md-8 col-lg-8 col-sm-6 col-xs-12\" style=\"background-color:white;box-shadow: 7px 7px 5px -5px grey;padding:10px;margin-bottom:10px;\"  (click)=\"_Globals.getAppGameByGameId(game._id,false)\" >\r\n                      <table class=\"table table-striped\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td class=\"col-md-4\">RemainPositions</td>\r\n                              <td class=\"col-md-4\">{{game.RemainPositions}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-md-4\">StartOn</td>\r\n                              <td class=\"col-md-4\">{{game.StartOn}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-md-4\">EndAt</td>\r\n                              <td class=\"col-md-4\">{{game.EndAt}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-md-4\">TotalPositions</td>\r\n                              <td class=\"col-md-4\">{{game.TotalPositions}}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                      </table>\r\n\r\n                      <ul *ngIf=\"_Globals.getAppGameByGameId(game._id,false)!=undefined\" >\r\n                        <li *ngFor=\"let position of _Globals.getAppGameByGameId(game._id,false).Positions\"  (click)=\"_Globals.betOnGamePosition(false,game._id,position._id)\">{{position.Title}}</li>\r\n                      </ul>\r\n                    </div>\r\n                    \r\n                  <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-12\" style=\"background-color: #f4f4f4;\" >\r\n                    <div style=\"max-height: 265px;min-height: 265px;overflow: auto;\">\r\n                      <ul class=\"contacts-list\" style=\"background-color:#3c8dbc\" *ngIf=\"game.GameGroup!=undefined;\" >\r\n                        <li   *ngFor=\"let message of game.GameGroup.Messages\">\r\n                            <a>\r\n                                <img alt=\"User Image\" class=\"contacts-list-img\" [src]=\"group\" onError=\"this.src='./Content/Images/profile.png';\" >\r\n                    \r\n                                <div class=\"contacts-list-info\">\r\n                                    <span class=\"contacts-list-name\">\r\n                                        {{message.message}}\r\n                                        <small class=\"contacts-list-date pull-right\">Time</small>\r\n                                    </span>\r\n                                <span class=\"contacts-list-msg\">Text</span>\r\n                                </div>\r\n                                \r\n                            </a>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                    <div>\r\n                      <form action=\"#\" method=\"post\">\r\n                        <div class=\"input-group\">\r\n                          <input (keyup.enter)='sendMessageToGameGroup(gameMessage.value,game._id,false);gameMessage.value=\"\";' type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\"  #gameMessage >\r\n                            <span class=\"input-group-btn\">\r\n                            <button  (click)='sendMessageToGameGroup(gameMessage.value,game._id,false);gameMessage.value=\"\";' type=\"button\" class=\"btn btn-info btn-flat\">Send</button>\r\n                            </span>\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer\">\r\n      </div>\r\n    </app-Box>\r\n    <!-- /.box -->\r\n  </div>\r\n  <!-- /.col -->\r\n</div>\r\n\r\n<!-- /.row -->\r\n\r\n\r\n<!-- /.row -->\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-Box  [boxControls]='boxControls'>\r\n\r\n        <div class=\"body\"><div class=\"row\">\r\n            \r\n            <div class=\"col-md-12\">\r\n                <p class=\"text-center\">\r\n                  <strong>Free Games</strong>\r\n                </p>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\" style=\"background-color: gainsboro;padding:20px;box-sizing: border-box;\" *ngFor=\"let game of getNonParticipentGames(true);\">\r\n                      <div style=\"background-color:white;box-shadow: 7px 7px 5px -5px grey;padding:10px;margin-bottom:10px;\"  >\r\n                      <table class=\"table table-striped\" (click)=\"betOnGame(true,game._id)\">\r\n                          <tbody>\r\n                            <tr>\r\n                              <td class=\"col-md-4\">RemainPositions</td>\r\n                              <td class=\"col-md-4\">{{game.RemainPositions}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-md-4\">StartOn</td>\r\n                              <td class=\"col-md-4\">{{game.StartOn}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-md-4\">EndAt</td>\r\n                              <td class=\"col-md-4\">{{game.EndAt}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                              <td class=\"col-md-4\">TotalPositions</td>\r\n                              <td class=\"col-md-4\">{{game.TotalPositions}}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"col-md-12\">\r\n                  <p class=\"text-center\">\r\n                    <strong>Paid Games</strong>\r\n                  </p>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\" style=\"background-color: gainsboro;padding:20px;box-sizing: border-box;\" *ngFor=\"let game of getNonParticipentGames(false);\">\r\n                        <div style=\"background-color:white;box-shadow: 7px 7px 5px -5px grey;padding:10px;margin-bottom:10px;\"  >\r\n                        <table class=\"table table-striped\" (click)=\"betOnGame(false,game._id)\">\r\n                            <tbody>\r\n                              <tr>\r\n                                <td class=\"col-md-4\">RemainPositions</td>\r\n                                <td class=\"col-md-4\">{{game.RemainPositions}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"col-md-4\">StartOn</td>\r\n                                <td class=\"col-md-4\">{{game.StartOn}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"col-md-4\">EndAt</td>\r\n                                <td class=\"col-md-4\">{{game.EndAt}}</td>\r\n                              </tr>\r\n                              <tr>\r\n                                <td class=\"col-md-4\">TotalPositions</td>\r\n                                <td class=\"col-md-4\">{{game.TotalPositions}}</td>\r\n                              </tr>\r\n                            </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n  \r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer\">\r\n        </div>\r\n      </app-Box>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n\r\n<!-- /.row -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- /.row -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-Box  [boxControls]='boxControls'>\r\n\r\n        <div class=\"body\"><div class=\"row\">\r\n            \r\n            <div class=\"col-md-12\">\r\n                <p class=\"text-center\">\r\n                  <strong>Free Board</strong>\r\n                </p>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\" style=\"background-color: gainsboro;padding:20px;box-sizing: border-box;\" *ngFor=\"let appGame of getFreeGames();\">\r\n                      <p>{{appGame.Name}}</p>\r\n                      <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\" *ngFor=\"let challange of appGame.FreeGameChallenges;\" (click)=\"createGame(appGame.IsFree,challange._id)\"><div style=\"background-color:white;box-shadow: 7px 7px 5px -5px grey;padding:10px;margin-bottom:10px;\"  >\r\n                          <table class=\"table table-striped\">\r\n                              <tbody>\r\n                                <tr>\r\n                                  <td class=\"col-md-4\">Title</td>\r\n                                  <td class=\"col-md-4\">{{challange.Title}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td class=\"col-md-4\">BettablePositions</td>\r\n                                  <td class=\"col-md-4\">{{challange.BettablePositions}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td class=\"col-md-4\">ComissionPercent</td>\r\n                                  <td class=\"col-md-4\">{{challange.ComissionPercent}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td class=\"col-md-4\">GameTime</td>\r\n                                  <td class=\"col-md-4\">{{challange.GameTime}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td class=\"col-md-4\">BoardPrice</td>\r\n                                  <td class=\"col-md-4\">{{challange.BoardPrice}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td class=\"col-md-4\">NoOfPositions</td>\r\n                                  <td class=\"col-md-4\">{{challange.NoOfPositions}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                  <td class=\"col-md-4\">CoinsPerEachPosition</td>\r\n                                  <td class=\"col-md-4\">{{challange.CoinsPerEachPosition}}</td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                      </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"col-md-12\">\r\n                  <p class=\"text-center\">\r\n                    <strong>Paid Board</strong>\r\n                  </p>\r\n\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-12 col-lg-12 col-sm-12 col-xs-12\" style=\"background-color: gainsboro;padding:20px;box-sizing: border-box;\" *ngFor=\"let appGame of getPaidGames();\">\r\n                        <p>{{appGame.Name}}</p>\r\n                        <div class=\"col-md-6 col-lg-6 col-sm-12 col-xs-12\" *ngFor=\"let challange of appGame.Challenges;\" (click)=\"createGame(appGame.IsFree,challange._id)\"><div style=\"background-color:white;box-shadow: 7px 7px 5px -5px grey;padding:10px;margin-bottom:10px;\"  >\r\n                          <table class=\"table table-striped\">\r\n                              <tbody>\r\n                                  <tr>\r\n                                      <td class=\"col-md-4\">Title</td>\r\n                                      <td class=\"col-md-4\">{{challange.Title}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"col-md-4\">BettablePositions</td>\r\n                                      <td class=\"col-md-4\">{{challange.BettablePositions}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"col-md-4\">ComissionPercent</td>\r\n                                      <td class=\"col-md-4\">{{challange.ComissionPercent}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"col-md-4\">GameTime</td>\r\n                                      <td class=\"col-md-4\">{{challange.GameTime}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"col-md-4\">BoardPrice</td>\r\n                                      <td class=\"col-md-4\">{{challange.BoardPrice}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"col-md-4\">NoOfPositions</td>\r\n                                      <td class=\"col-md-4\">{{challange.NoOfPositions}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                      <td class=\"col-md-4\">CoinsPerEachPosition</td>\r\n                                      <td class=\"col-md-4\">{{challange.CoinsPerEachPosition}}</td>\r\n                                    </tr>\r\n                              </tbody>\r\n                            </table>\r\n                        </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  \r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer\">\r\n          \r\n        </div>\r\n      </app-Box>\r\n      <!-- /.box -->\r\n    </div>\r\n    <!-- /.col -->\r\n  </div>\r\n\r\n<!-- /.row -->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "<!-- Main row -->\r\n      <div class=\"row\">\r\n        <!-- Left col -->\r\n        <div class=\"col-md-4\">\r\n          <app-Box   [boxControls]='profileBoxControls' *ngIf=\"_Globals.Profile!=undefined\">\r\n            <div class=\"body\" >\r\n                <div class=\"form-group has-feedback\">\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Profile Name\"   [(ngModel)]='_Globals.Profile.ProfileName' [ngModelOptions]=\"{standalone: true}\">\r\n                  <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"First Name\"   [(ngModel)]='_Globals.Profile.FirstName' [ngModelOptions]=\"{standalone: true}\">\r\n                  <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Last Name\"   [(ngModel)]='_Globals.Profile.LastName' [ngModelOptions]=\"{standalone: true}\">\r\n                  <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <a href=\"javascript:void(0)\" style=\"margin-bottom: 15px;\" class=\"btn btn-sm btn-info btn-flat pull-right\" (click)=\"updateProfile()\">Update</a>\r\n                </div>\r\n                \r\n                <div class=\"form-group has-feedback\" style=\"clear:both;\"> \r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\"   [(ngModel)]='_Globals.Profile.User.OldPassword' [ngModelOptions]=\"{standalone: true}\">\r\n                  <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"New Password\"   [(ngModel)]='_Globals.Profile.User.Password' [ngModelOptions]=\"{standalone: true}\">\r\n                  <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n                </div>\r\n                <div class=\"form-group has-feedback\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info btn-flat pull-right\" (click)=\"changePassword()\">Change Password</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n              <div class=\"form-group has-feedback\">\r\n                 <span class=\"\"><span style=\"font-weight:bold;\">Email: </span>{{_Globals.Profile.Email}}  </span> <span *ngIf=\"_Globals.Profile.Status>=3\"  style=\"color:green\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Verified</span><span *ngIf=\"!(_Globals.Profile.Status>=3)\"  style=\"color:red\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Not Verified</span>\r\n                </div>\r\n                <div class=\"has-feedback\">\r\n                 <span class=\"\"><span style=\"font-weight:bold;\">Mobile: </span>{{_Globals.Profile.User.Mobile}}</span> <span *ngIf=\"_Globals.Profile.Status>=4\" style=\"color:green\"><i class=\"fa fa-check\" aria-hidden=\"true\" ></i> Verified</span><span *ngIf=\"!(_Globals.Profile.Status>=4)\"  style=\"color:red\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Not Verified</span>\r\n                </div>\r\n              \r\n            </div>\r\n          \r\n          </app-Box>\r\n        </div>\r\n        <!-- /.col -->\r\n\r\n        <div class=\"col-md-8\">\r\n          \r\n          <app-Box   [boxControls]='friendsBoxControls'>\r\n            <div class=\"body\">\r\n              <ul class=\"products-list product-list-in-box\">\r\n                <li class=\"item\"  *ngFor=\"let profile of _Globals.Profiles; let i=index;\" (click)=\"addUserGroup(profile)\">\r\n                  <div class=\"product-img\">\r\n                      <img [src]=\"(profile == undefined ? '' : profile.ProfilePic)\"  onError=\"this.src='./Content/Images/profile.png';\" class=\"img-circle\" alt=\"User Image\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                    <a href=\"javascript:void(0)\" class=\"product-title\">\r\n                        <span class=\"product-description\">\r\n                          {{profile.ProfileName}}\r\n                        </span>\r\n                        </a>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <div class=\"footer\">\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" name=\"q\" placeholder=\"Search...\" type=\"text\" [(ngModel)]='searchedName'>\r\n                    <span class=\"input-group-btn\"  (click)=\"searchProfiles()\">\r\n                      <button class=\"btn btn-flat\" id=\"search-btn\" name=\"search\"><i class=\"fa fa-search\"></i>\r\n                      </button>\r\n                    </span>\r\n              </div>\r\n            </div>\r\n          </app-Box>\r\n\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n      <!-- /.row -->"

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<!-- /.row -->\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <app-Box  [boxControls]='boxControls'>\r\n\r\n            <div class=\"body\"><div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                  <p class=\"text-center\">\r\n                    <strong>Settings</strong>\r\n                  </p>\r\n\r\n                  <div class=\"chart\">\r\n                    \r\n                    <canvas id=\"salesChart\" style=\"height: 180px;\"></canvas>\r\n                  </div>\r\n                  \r\n                </div>\r\n                \r\n                <div class=\"col-md-4\">\r\n                  <p class=\"text-center\">\r\n                    <strong>Goal Completion</strong>\r\n                  </p>\r\n\r\n                  <div class=\"progress-group\">\r\n                    <span class=\"progress-text\">Add Products to Cart</span>\r\n                    <span class=\"progress-number\"><b>160</b>/200</span>\r\n\r\n                    <div class=\"progress sm\">\r\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 80%\"></div>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"progress-group\">\r\n                    <span class=\"progress-text\">Complete Purchase</span>\r\n                    <span class=\"progress-number\"><b>310</b>/400</span>\r\n\r\n                    <div class=\"progress sm\">\r\n                      <div class=\"progress-bar progress-bar-red\" style=\"width: 80%\"></div>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"progress-group\">\r\n                    <span class=\"progress-text\">Visit Premium Page</span>\r\n                    <span class=\"progress-number\"><b>480</b>/800</span>\r\n\r\n                    <div class=\"progress sm\">\r\n                      <div class=\"progress-bar progress-bar-green\" style=\"width: 80%\"></div>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"progress-group\">\r\n                    <span class=\"progress-text\">Send Inquiries</span>\r\n                    <span class=\"progress-number\"><b>250</b>/500</span>\r\n\r\n                    <div class=\"progress sm\">\r\n                      <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\"></div>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </div>\r\n                \r\n              </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3 col-xs-6\">\r\n                  <div class=\"description-block border-right\">\r\n                    <span class=\"description-percentage text-green\"><i class=\"fa fa-caret-up\"></i> 17%</span>\r\n                    <h5 class=\"description-header\">$35,210.43</h5>\r\n                    <span class=\"description-text\">TOTAL REVENUE</span>\r\n                  </div>\r\n                  <!-- /.description-block -->\r\n                </div>\r\n                <!-- /.col -->\r\n                <div class=\"col-sm-3 col-xs-6\">\r\n                  <div class=\"description-block border-right\">\r\n                    <span class=\"description-percentage text-yellow\"><i class=\"fa fa-caret-left\"></i> 0%</span>\r\n                    <h5 class=\"description-header\">$10,390.90</h5>\r\n                    <span class=\"description-text\">TOTAL COST</span>\r\n                  </div>\r\n                  <!-- /.description-block -->\r\n                </div>\r\n                <!-- /.col -->\r\n                <div class=\"col-sm-3 col-xs-6\">\r\n                  <div class=\"description-block border-right\">\r\n                    <span class=\"description-percentage text-green\"><i class=\"fa fa-caret-up\"></i> 20%</span>\r\n                    <h5 class=\"description-header\">$24,813.53</h5>\r\n                    <span class=\"description-text\">TOTAL PROFIT</span>\r\n                  </div>\r\n                  <!-- /.description-block -->\r\n                </div>\r\n                <!-- /.col -->\r\n                <div class=\"col-sm-3 col-xs-6\">\r\n                  <div class=\"description-block\">\r\n                    <span class=\"description-percentage text-red\"><i class=\"fa fa-caret-down\"></i> 18%</span>\r\n                    <h5 class=\"description-header\">1200</h5>\r\n                    <span class=\"description-text\">GOAL COMPLETIONS</span>\r\n                  </div>\r\n                  <!-- /.description-block -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </app-Box>\r\n          <!-- /.box -->\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n      <!-- /.row -->\r\n"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<div id=\"ChatWindow\" \r\n\t\t[class.negativeZIndexHide]='settings.negativeZindex' \r\n\t\t[class.fadeOutLeft]='settings.fadeOutLeft' \r\n\t\t[class.fadeInRight]='settings.fadeInRight' \r\n\t\tclass=\"col-md-4 col-sm-6 animated fadeOutLeft negativeZIndexHide\" \r\n\t\tstyle=\"bottom: 60px;right: 0px;\">\r\n\t<!-- DIRECT CHAT -->\r\n\r\n\t\r\n\t<app-Box (toggleChatContacts)='toggleChatContacts()' (toggleChatWindow)='toggleChatWindow()' [boxControls]='boxControls' >\r\n\t\t<div class=\"body\">\r\n\t\t\t\r\n\t\t\t<!-- direct-chat-messages -->\r\n\t\t\t<div class=\"direct-chat-messages\" #chatMessagePanel >\r\n\t\t\t\t<app-ChatMessageList ></app-ChatMessageList>\r\n\t\t\t</div>\r\n\t\t\t<!--/.direct-chat-messages-->\r\n\r\n\t\t\t<!-- Contacts are loaded here -->\r\n\t\t\t<div class=\"direct-chat-contacts\">\r\n\t\t\t\t<app-ChatProfileList (viewUserChat)='selectUser($event)' ></app-ChatProfileList>\r\n\t\t\t<!-- /.contatcts-list -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"footer\">\r\n\t\t\t<form action=\"#\" method=\"post\"  *ngIf=\"_Globals.CurrentGroupData!=undefined\">\r\n\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t<input (keyup.enter)=\"sendMessageToUser()\" type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\" [(ngModel)]='boxMessage' >\r\n\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t<button  (click)='sendMessageToUser()' type=\"button\" class=\"btn btn-info btn-flat\">Send</button>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\r\n\t</app-Box>\r\n\t\r\n\t<!--/.direct-chat -->\r\n</div>\r\n<!-- /.col -->\r\n\t\r\n<div id=\"small-chat\"  [class.active]='settings.chatButtonActive'  class=\"close-chat\" (click)=\"toggleChatWindow()\">\r\n\r\n    <span class=\"badge badge-warning pull-right\"></span>\r\n    <!--<span class=\"badge badge-warning pull-right\">5</span>-->\r\n    <a class=\"open-small-chat\">\r\n        <i class=\"fa fa-comments\" [class.fa-comments]='settings.facomments' [class.fa-remove]='settings.faremove'></i>\r\n\r\n    </a>\r\n</div>"

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

module.exports = "<ul class=\"contacts-list\" *ngIf=\"_Globals!=undefined && _Globals.CurrentGroupData!=undefined\">\r\n    <li  *ngFor=\"let message of _Globals.CurrentGroupData.Messages\">\r\n        <a >\r\n            <img alt=\"User Image\" class=\"contacts-list-img\" [src]=\"group\" onError=\"this.src='./Content/Images/profile.png';\" >\r\n\r\n            <div class=\"contacts-list-info\">\r\n                <span class=\"contacts-list-name\">\r\n                    {{message.message}}\r\n                    <small class=\"contacts-list-date pull-right\">Time</small>\r\n                </span>\r\n            <span class=\"contacts-list-msg\">Text</span>\r\n            </div>\r\n            \r\n        </a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

module.exports = "<ul class=\"contacts-list\" *ngIf=\"_Globals!=undefined\">\r\n    <li *ngFor=\"let group of _Globals.Profile.UserGroups; let i=index;\" (click)='getMessages(group._id)'>\r\n        <a >\r\n            <img alt=\"User Image\" class=\"contacts-list-img\" [src]=\"group\" onError=\"this.src='./Content/Images/profile.png';\" >\r\n\r\n            <div class=\"contacts-list-info\">\r\n                <span class=\"contacts-list-name\">\r\n                    {{group.GroupName}}\r\n\r\n                    <i *ngIf=\"!group.IsGroup\" class=\"fa fa-circle  pull-right\" style=\"font-size:16px;\" [class.text-success]='group' [class.text-danger]='!group' ></i>\r\n                    \r\n                    <small class=\"contacts-list-date pull-right\">time</small>\r\n                    \r\n                </span>\r\n            <span class=\"contacts-list-msg\">Text</span>\r\n            </div>\r\n            \r\n        </a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box\">\n <div class=\"login-logo\">\n    <!--<a [routerLink]=\"['/register']\"><b>Admin</b>LTE</a>-->\n  </div>\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Choose Password</p>\n\n    <form action=\"../../index.html\" method=\"post\">\n      \n      <div class=\"form-group has-feedback\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]='profile.User.Password' [ngModelOptions]=\"{standalone: true}\"/>\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        \n        <!-- /.col -->\n        <div class=\"col-xs-12\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)='choosePassword($event)'>Add Password</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->"

/***/ }),

/***/ 334:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"content-wrapper\" (changeOpacity)='changeContentOpacity($event)' [style.opacity]=\"contentOpacity\">\r\n  <section class=\"content\">\r\n    <Account *ngIf=\"currentView==3\"></Account>\r\n    <Dashboard *ngIf=\"currentView==0\"></Dashboard>\r\n    <Gameboard *ngIf=\"currentView==1\"></Gameboard>\r\n    <Profile *ngIf=\"currentView==2\"></Profile>\r\n    <Settings *ngIf=\"currentView==4\"></Settings>\r\n  </section>\r\n</div>"

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n    <div class=\"pull-right hidden-xs\">\r\n      \r\n    </div>\r\n    <strong>Copyright &copy; 2016-2017 <a href=\"http://myweb.com\">My website</a>.</strong> All rights\r\n    reserved.\r\n    <p>\r\n        <a>About Us</a>\r\n        <a>Privacy policy</a>\r\n        <a>Terms & Conditions</a>\r\n    </p>\r\n</footer>"

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n\r\n    <!-- Logo -->\r\n    <a class=\"logo hidden-xs\">\r\n      <!-- mini logo for sidebar mini 50x50 pixels -->\r\n      <span class=\"logo-mini pull-right\">\r\n\t\t<img src=\"content/images/favicon.ico\" class=\"img-circle\" style=\"width: 50px;\" alt=\"User Image\">\r\n\t  </span>\r\n      <!-- logo for regular state and mobile devices -->\r\n      <span class=\"logo-lg\"><img src=\"content/images/favicon.ico\" class=\"img-circle pull-left\" style=\"width: 40px;padding-top: 5px;\" alt=\"User Image\"><b>Web</b>Applicaion</span>\r\n    </a>\r\n\r\n    <!-- Header Navbar: style can be found in header.less -->\r\n    <nav class=\"navbar navbar-static-top\">\r\n      <!-- Sidebar toggle button-->\r\n      <a class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\" (click)=\"toggleMenu()\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n      </a>\r\n\t    <span class=\"logo-lg\"><img src=\"content/images/favicon.ico\" class=\"img-circle hidden-sm hidden-md hidden-lg \" style=\"width: 40px;padding-top: 5px;\" alt=\"User Image\"></span>\r\n      <!-- Navbar Right Menu -->\r\n      <PopOverMenu (viewProfile)=\"viewProfiles($event)\" [propOverDropdowns]='proverItems' ></PopOverMenu>\r\n\r\n    </nav>\r\n  </header>"

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [class.sidebar-collapse]='isMenuExpanded'  [class.sidebar-mini]='isMenuExpanded'[class.sidebar-open]='isMenuExpanded' >\r\n\r\n  <app-header (viewProfile)=\"viewProfiles($event)\" (togglesideMenu)='togglesideMenu($event)' [proverItems]='configuarion.popOver' ></app-header>\r\n  <app-LeftMenu (updaateContent)=\"updaateContents($event)\" [treeItems]='configuarion.treeItems'></app-LeftMenu>\r\n  <app-ContentPlaceholder [profileDetails]=\"configuarion.profileInfo\" [currentView]=\"currentView\" [contentOpacity]='contentOpacity' [boxControls]='configuarion.boxControls'></app-ContentPlaceholder>\r\n  <app-Footer></app-Footer>\r\n  <app-RightMenu></app-RightMenu>\r\n  <app-Chat  (changeOpacity)='changeContentOpacity($event)'  [boxControls]='configuarion.chatBoxControls' (sendMessage)='sendMessage($event)'></app-Chat>\r\n\r\n</div>"

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

module.exports = " <aside class=\"main-sidebar\">\r\n    <!-- sidebar: style can be found in sidebar.less -->\r\n    <section class=\"sidebar\">\r\n      <!-- Sidebar user panel -->\r\n      <div class=\"user-panel\">\r\n        <div class=\"pull-left image\">\r\n          <img [src]=\"(_Globals.Profile == undefined ? '' : _Globals.Profile.ProfilePic)\"  onError=\"this.src='./Content/Images/profile.png';\"  class=\"img-circle\" alt=\"User Image\">\r\n        </div>\r\n        <div class=\"pull-left info\">\r\n          <p>{{_Globals.Profile == undefined ? '' :_Globals.Profile.ProfileName}}</p>\r\n          <a (click)='togglesideOnlineStatus($event)' style=\"line-height:16px;\"><i class=\"fa fa-power-off\" style=\"font-size:16px;\" [class.text-success]='_Globals.Profile == undefined ? false : _Globals.Profile.Live' [class.text-danger]='_Globals.Profile == undefined ? true : !_Globals.Profile.Live'></i> Online</a>\r\n        </div>\r\n        <div class=\"info\" style=\"padding-bottom: 0px;padding-left: 0px;position: relative;left: 0px;color:#607D8B;clear: both;margin-top: 55px;clear: both;padding-top: 15px;line-height: 10px;border-top:1px solid;\">\r\n          <p>Acc Balance : <span style=\"float: right;\">{{_Globals.Profile == undefined || _Globals.Profile.Account == undefined ? 0 :_Globals.Profile.Account.Rupees | currency:'INR':true}}</span></p>\r\n          <p>Free Game Coins  : <span style=\"float: right;\">{{_Globals.Profile == undefined || _Globals.Profile.Account == undefined ? 0 :_Globals.Profile.Account.FreeCoins }}c</span></p>\r\n          <p>Game Coins  : <span style=\"float: right;\">{{_Globals.Profile == undefined || _Globals.Profile.Account == undefined ? 0 :_Globals.Profile.Account.RealCoins }}c</span></p>\r\n        </div>\r\n      </div>\r\n      <!-- search form -->\r\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\" id=\"sidebar-form-search\">\r\n        <div class=\"input-group\">\r\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n              <span class=\"input-group-btn\">\r\n                <button name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n                </button>\r\n              </span>\r\n        </div>\r\n      </form>\r\n      <!-- /.search form -->\r\n      <!-- sidebar menu: : style can be found in sidebar.less -->\r\n      <app-MenuTree [treeItems]='treeItems' (updaateContent)=\"updaateContents($event)\" ></app-MenuTree>\r\n    </section>\r\n    <!-- /.sidebar -->\r\n  </aside>"

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box\">\n  <div class=\"register-logo\">\n    <a><b>Admin</b>LTE</a>\n  </div>\n\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Mobile number</p>\n\n    <form action=\"../../index.html\" method=\"post\">\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" [(ngModel)]='profile.User.Mobile' [ngModelOptions]=\"{standalone: true}\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <!-- /.col -->\n        \n        <div class=\"col-xs-12\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)='addMobileNo($event)'>Send OTP</button>\n        </div>\n        <!-- /.col -->\n      </div>\n      <p></p>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"OTP\"  [(ngModel)]='profile.User.MobileOtp' [ngModelOptions]=\"{standalone: true}\">\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <!-- /.col -->\n        <div class=\"col-xs-12\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)='verifyMobile($event)'>Verify OTP</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box\">\r\n <div class=\"login-logo\">\r\n    <!--<a [routerLink]=\"['/register']\"><b>Admin</b>LTE</a>-->\r\n  </div>\r\n  <div class=\"register-box-body\" *ngIf=\"RecoverWindowType==1 \">\r\n    <p class=\"login-box-msg\">Recover Account</p>\r\n\r\n    <form action=\"../../index.html\" method=\"post\">\r\n      \r\n      <div class=\"form-group has-feedback\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email or Mobile No\" [(ngModel)]='user.Email' [ngModelOptions]=\"{standalone: true}\"/>\r\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n      </div>\r\n      <div class=\"row\">\r\n        \r\n        <!-- /.col -->\r\n        <div class=\"col-xs-12\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)='recoverAccount($event)'>Recover Account</button>\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  \r\n  <div class=\"register-box-body\"  *ngIf=\"RecoverWindowType==2|| RecoverWindowType==4\">\r\n    <p class=\"login-box-msg\">Choose New Password</p>\r\n\r\n    <form action=\"../../index.html\" method=\"post\">\r\n      \r\n      <div class=\"form-group has-feedback\" *ngIf=\"RecoverWindowType==2\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Otp\" [(ngModel)]='user.RecoverHash' [ngModelOptions]=\"{standalone: true}\"/>\r\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input type=\"Password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]='user.Password' [ngModelOptions]=\"{standalone: true}\"/>\r\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        \r\n        <!-- /.col -->\r\n        <div class=\"col-xs-12\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)='recoverPassword($event)'>Update Password</button>\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n\r\n  <div class=\"register-box-body\"  *ngIf=\"RecoverWindowType==3\">\r\n      <p class=\"login-box-msg\">Your recover link has been sent you your email. Please open that link.\r\n    </div>\r\n\r\n\r\n  <!-- /.form-box -->\r\n</div>\r\n<!-- /.register-box -->\r\n\r\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\r\n    <!-- Create the tabs -->\r\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n      <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n      <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n    </ul>\r\n    <!-- Tab panes -->\r\n    <div class=\"tab-content\">\r\n      <!-- Home tab content -->\r\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\r\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n        <ul class=\"control-sidebar-menu\">\r\n          <li>\r\n            <a>\r\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n                <p>Will be 23 on April 24th</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\r\n\r\n                <p>New phone +1(800)555-1234</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\r\n\r\n                <p>nora@example.com</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\r\n\r\n              <div class=\"menu-info\">\r\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\r\n\r\n                <p>Execution time 5 seconds</p>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- /.control-sidebar-menu -->\r\n\r\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n        <ul class=\"control-sidebar-menu\">\r\n          <li>\r\n            <a>\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Custom Template Design\r\n                <span class=\"label label-danger pull-right\">70%</span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Update Resume\r\n                <span class=\"label label-success pull-right\">95%</span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a>\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Laravel Integration\r\n                <span class=\"label label-warning pull-right\">50%</span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <h4 class=\"control-sidebar-subheading\">\r\n                Back End Framework\r\n                <span class=\"label label-primary pull-right\">68%</span>\r\n              </h4>\r\n\r\n              <div class=\"progress progress-xxs\">\r\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\r\n              </div>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <!-- /.control-sidebar-menu -->\r\n\r\n      </div>\r\n      <!-- /.tab-pane -->\r\n\r\n      <!-- Settings tab content -->\r\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n        <form method=\"post\">\r\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Report panel usage\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n            <p>\r\n              Some information about this general settings option\r\n            </p>\r\n          </div>\r\n          <!-- /.form-group -->\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Allow mail redirect\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n            <p>\r\n              Other sets of options are available\r\n            </p>\r\n          </div>\r\n          <!-- /.form-group -->\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Expose author name in posts\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n\r\n            <p>\r\n              Allow the user to show his name in blog posts\r\n            </p>\r\n          </div>\r\n          <!-- /.form-group -->\r\n\r\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Show me as online\r\n              <input type=\"checkbox\" class=\"pull-right\" checked>\r\n            </label>\r\n          </div>\r\n          <!-- /.form-group -->\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Turn off notifications\r\n              <input type=\"checkbox\" class=\"pull-right\">\r\n            </label>\r\n          </div>\r\n          <!-- /.form-group -->\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"control-sidebar-subheading\">\r\n              Delete chat history\r\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\r\n            </label>\r\n          </div>\r\n          <!-- /.form-group -->\r\n        </form>\r\n      </div>\r\n      <!-- /.tab-pane -->\r\n    </div>\r\n  </aside>"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box\">\n  <div class=\"register-logo\">\n    <a><b>Admin</b>LTE</a>\n  </div>\n\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Please verify your email. <a (click)='resendVerificationEmail($event)'>Click here</a> to resend verification email.</p>\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\" [class.collapsed-box]='iscollapsed' [class.isDisplayNone]='isClosed' [class.direct-chat]='boxControls.isChatBox' [class.direct-chat-info]='boxControls.isChatBox'  [class.direct-chat-contacts-open]='boxControls.isContactsOpen'>\r\n  <div class=\"box-header with-border\">\r\n    <h3 class=\"box-title\">{{boxControls.title}}</h3>\r\n    <div class=\"box-tools pull-right\">\r\n      <!-- Buttons, labels, and many other things can be placed here! -->\r\n      <!-- Here is a label for example -->\r\n        <img  *ngFor=\"let image of boxControls.images\" src={{image.src}}  class=\"direct-chat-img\"/>\r\n        <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" (click)=\"toggleCollaps($event)\"><i class=\"fa\"[class.fa-plus]='iscollapsed' [class.fa-minus]='!iscollapsed'  [class.isDisplayNone]='!boxControls.collapse'></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-box-tool\" title=\"Contacts\" data-widget=\"chat-pane-toggle\" (click)=\"toggleContactWindow()\" [class.isDisplayNone]='!boxControls.chat'>\r\n\t\t\t\t\t<i class=\"fa fa-comments\"></i></button>\r\n        <app-DropdownMenu [class.isDisplayNone]='boxControls.settings.hide' [settingList]='boxControls.settings.settingList'></app-DropdownMenu>\r\n        <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\" (click)=\"closeBox($event)\" [class.isDisplayNone]='!boxControls.close'><i class=\"fa fa-times\"></i></button>\r\n        <span  *ngFor=\"let label of boxControls.lables\"   class=\"label label-primary\">{{label.text}}</span>\r\n    </div><!-- /.box-tools -->\r\n  </div><!-- /.box-header -->\r\n  <div class=\"box-body\" [style.min-height]=\"boxControls.minHeight ? boxControls.minHeight : 'none'\"  [style.max-height]=\"boxControls.maxHeight ? boxControls.maxHeight : 'none'\" style=\"overflow-x:hidden;overflow-y:auto;\">\r\n    <ng-content select='.body'></ng-content>\r\n  </div><!-- /.box-body -->\r\n  <div class=\"box-footer\" [class.isDisplayNone]='!boxControls.footer'>\r\n    <ng-content select='.footer'></ng-content>\r\n  </div><!-- box-footer -->\r\n</div><!-- /.box -->"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\" [class.open]='isOpenedDropdown'>\r\n    <button type=\"button\" class=\"btn btn-box-tool dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" (click)='toggleDropdown($event)'>\r\n    <i class=\"fa fa-wrench\"></i></button>\r\n\r\n    <ul class=\"dropdown-menu\" role=\"menu\">\r\n        <li *ngFor='let item of settingList' [class.divider]='item.isDivider' ><a href=\"#\">{{item.title}}</a></li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "\r\n<ul class=\"menu\">\r\n    <li *ngFor=\"let item of listItems\"><!-- start message -->\r\n        <a >\r\n            <div class=\"pull-left\">\r\n            <img [src]=\"item.Image\" class=\"img-circle\" alt=\"User Image\">\r\n            </div>\r\n            <h4>\r\n            {{item.Title}}\r\n            <small><i class=\"fa fa-clock-o\"></i> {{item.Time}}</small>\r\n            </h4>\r\n            <p>{{item.Text}}</p>\r\n        </a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "\r\n<ul class=\"menu\">\r\n    <li *ngFor=\"let item of listItems\">\r\n        <a  >\r\n            <i class=\"fa fa-users text-aqua\"></i> {{item.Title}}\r\n        </a>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"navbar-custom-menu\">\r\n    <ul class=\"nav navbar-nav\">\r\n         \r\n        <li *ngFor=\"let dropItem of propOverDropdowns; let i=index\" class=\"dropdown messages-menu\" [class.open]='expandedPopover == i' (click)='popoverClicked($event,i)'>\r\n             <a   class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i [class]=\"dropItem.icon\"></i>\r\n                <span class=\"label label-success\">{{dropItem.body.length}}</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li class=\"header\">{{dropItem.heading}}</li>\r\n                <li *ngIf=\"!dropItem.isSmallList\"><app-MediumList [listItems]=\"dropItem.body\"></app-MediumList></li>\r\n                <li *ngIf=\"dropItem.isSmallList\"><app-SimpleList [listItems]=\"dropItem.body\"></app-SimpleList></li>\r\n                <li class=\"footer\"><a >{{dropItem.footer}}</a></li>\r\n            </ul>\r\n        </li>\r\n\r\n\r\n        <!-- User Account: style can be found in dropdown.less -->\r\n        <li *ngIf=\"_Globals.Profile!=undefined\" class=\"dropdown user user-menu\"  [class.open]='expandedPopover == 106' (click)='popoverClicked($event,106)'>\r\n            <a   class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <img [src]=\"(_Globals.Profile == undefined ? '' : _Globals.Profile.ProfilePic)\" onError=\"this.src='./Content/Images/profile.png';\" class=\"user-image\" alt=\"User Image\">\r\n                <span class=\"hidden-xs\">{{_Globals.Profile == undefined ? '' :_Globals.Profile.ProfileName}}</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <!-- User image -->\r\n                <li class=\"user-header\">\r\n                <img [src]=\"(_Globals.Profile == undefined ? '' : _Globals.Profile.ProfilePic)\"  onError=\"this.src='./Content/Images/profile.png';\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n                <p>\r\n                    {{_Globals.Profile == undefined ? '' :_Globals.Profile.ProfileName}}\r\n                    <small>{{_Globals.Profile == undefined ? '' :_Globals.Profile.Email}}</small>\r\n                </p>\r\n                </li>\r\n                \r\n                <!-- Menu Footer-->\r\n                <li class=\"user-footer\">\r\n                <div class=\"pull-left\">\r\n                    <a   class=\"btn btn-info btn-flat\" (click)='profileView($event)'>Profile</a>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                    <a   class=\"btn btn-info btn-flat\"   (click)='signOut($event)'>Sign out</a>\r\n                </div>\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <!-- Control Sidebar Toggle Button \r\n        <li>\r\n            <a   data-toggle=\"control-sidebar\"  (click)='popoverClicked($event,4)'><i class=\"fa fa-gears\"></i></a>\r\n        </li>\r\n        -->\r\n    </ul>\r\n</div>"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = " <ul class=\"sidebar-menu\">\r\n        \r\n        <li *ngFor=\"let treeItem of treeItems; let i=index;\" class=\"treeview\" [class.active]='isActiveTree==i'>\r\n          <a (click)=\"expandTree(i)\">\r\n              <i [class]=\"treeItem.icon\"></i>\r\n              <span>{{treeItem.menuItem}}</span>\r\n              <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n                <span *ngFor=\"let rightItem of treeItem.rightContent\" class=\"label label-primary pull-right\">{{rightItem.title}}</span>\r\n              </span>\r\n            </a>\r\n            <ul class=\"treeview-menu\">\r\n              <li *ngFor=\"let subMenu of treeItem.subMenu; let j =index;\" [class.active]='isSubActiveTree==j'>\r\n                <a (click)=\"selectTree(j)\">\r\n                  <i [class]=\"subMenu.icon\"></i>\r\n                  {{subMenu.subMenuItem}}\r\n                  <span class=\"pull-right-container\">\r\n                    <span *ngFor=\"let subRightItem of subMenu.rightContent\" class=\"label label-primary pull-right\">{{subRightItem.title}}</span>\r\n                  </span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n        \r\n        </li>\r\n\r\n      </ul>"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h1>Hi {{currentUser.firstName}}!</h1>\n    <p>You're logged in with Angular 2!!</p>\n    <h3>All registered users:</h3>\n    <ul>\n        <li *ngFor=\"let user of users\">\n            {{user.username}} ({{user.firstName}} {{user.lastName}})\n            - <a (click)=\"deleteUser(user.id)\">Delete</a>\n        </li>\n    </ul>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-box\">\n  <div class=\"login-logo\">\n    <!--<a [routerLink]=\"['/register']\"><b>Admin</b>LTE</a>-->\n    <a [routerLink]=\"['/ChoosePassword']\"><b>Admin</b>LTE</a>\n  </div>\n  <!-- /.login-logo -->\n  <div class=\"login-box-body\">\n    <p class=\"login-box-msg\">Sign in to start your session</p>\n\n    <form>\n      <div class=\"form-group has-feedback\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\"   [(ngModel)]='profile.User.Email' [ngModelOptions]=\"{standalone: true}\">\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\"   [(ngModel)]='profile.User.Password' [ngModelOptions]=\"{standalone: true}\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n            <label>\n              <input type=\"checkbox\"> Remember Me\n            </label>\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\"  (click)='login($event)'>Sign In</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n\n    <div class=\"social-auth-links text-center\">\n      <p>- OR -</p>\n      <a href=\"/auth/facebook\" class=\"btn btn-block btn-social btn-facebook btn-flat\"><i class=\"fa fa-facebook\"></i> Sign in using\n        Facebook</a>\n      <a href=\"/auth/google\" class=\"btn btn-block btn-social btn-google btn-flat\"><i class=\"fa fa-google-plus\"></i> Sign in using\n        Google+</a>\n    </div>\n    <!-- /.social-auth-links -->\n\n    <a [routerLink]=\"['/RecoverAccount/Recover']\" >I forgot my password</a><br>\n    <a [routerLink]=\"['/register']\" class=\"text-center\">Register a new membership</a>\n\n  </div>\n  <!-- /.login-box-body -->\n</div>\n<!-- /.login-box -->\n\n"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "<div class=\"register-box\">\n  <div class=\"register-logo\">\n    <a [routerLink]=\"['/login']\" ><b>Admin</b>LTE</a>\n  </div>\n\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Register a new membership</p>\n\n    <form action=\"../../index.html\" method=\"post\">\n      <div class=\"form-group has-feedback\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Full name\" [(ngModel)]='profile.ProfileName' [ngModelOptions]=\"{standalone: true}\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]='profile.User.Email' [ngModelOptions]=\"{standalone: true}\">\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  [(ngModel)]='profile.User.Password' [ngModelOptions]=\"{standalone: true}\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n            <label>\n              <input type=\"checkbox\"> I agree to the <a href=\"#\">terms</a>\n            </label>\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n          <button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" (click)='regiserUser($event)'>Register</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n\n    <div class=\"social-auth-links text-center\">\n      <p>- OR -</p>\n      <a href=\"/auth/facebook\" class=\"btn btn-block btn-social btn-facebook btn-flat\"><i class=\"fa fa-facebook\"></i> Sign up using\n        Facebook</a>\n      <a href=\"/auth/google\" class=\"btn btn-block btn-social btn-google btn-flat\"><i class=\"fa fa-google-plus\"></i> Sign up using\n        Google+</a>\n    </div>\n\n    <a [routerLink]=\"['/login']\"  class=\"text-center\">I already have a membership</a>\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->"

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SocketManager__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppData__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Profile_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketFunctions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketFunctions = (function () {
    function SocketFunctions(_appData, _SocketService, _profileService) {
        this._appData = _appData;
        this._SocketService = _SocketService;
        this._profileService = _profileService;
    }
    SocketFunctions.prototype.sendMessage = function (groupMessage) {
        this._SocketService.Send({ controller: 'UserGroup', method: 'SendGroupMessages', data: groupMessage });
    };
    SocketFunctions.prototype.sendGameMessage = function (gameGroupMessage) {
        this._SocketService.Send({ controller: 'AppGame', method: 'SendGameGroupMessages', data: gameGroupMessage });
    };
    SocketFunctions.prototype.getGroupMessages = function (groupId, previousMessageId) {
        this._SocketService.Send({ controller: 'UserGroup', method: 'GetGroupMessages', data: { GroupId: groupId, PreviousMessageId: previousMessageId } });
    };
    SocketFunctions.prototype.getAppGames = function () {
        this._SocketService.Send({ controller: 'AppGame', method: 'GetAppGames', data: {} });
    };
    SocketFunctions.prototype.getAccount = function () {
        this._SocketService.Send({ controller: 'Profile', method: 'GetAccount', data: {} });
    };
    SocketFunctions.prototype.getFreeRunningGames = function () {
        this._SocketService.Send({ controller: 'AppGame', method: 'GetFreeGames', data: {} });
    };
    SocketFunctions.prototype.getPaidRunningGames = function () {
        this._SocketService.Send({ controller: 'AppGame', method: 'GetPaidGames', data: {} });
    };
    SocketFunctions.prototype.createGame = function (data) {
        console.log(data);
        this._SocketService.Send({ controller: 'AppGame', method: 'CreateGame', data: data });
    };
    SocketFunctions.prototype.betOnGame = function (data) {
        this._SocketService.Send({ controller: 'AppGame', method: 'BetOnGame', data: data });
    };
    SocketFunctions.prototype.getMyJoinedGames = function () {
        this._SocketService.Send({ controller: 'AppGame', method: 'GetMyJoinedGames', data: {} });
    };
    SocketFunctions.prototype.betOnGamePosition = function (IsFree, gameId, Position) {
        this._SocketService.Send({ controller: 'AppGame', method: 'BetOnGamePosition', data: { IsFree: IsFree, GameId: gameId, Position: Position } });
    };
    SocketFunctions.prototype.getGameGroupDetails = function (IsFree) {
        var _this = this;
        if (!IsFree)
            this._appData.Profile.PaidGames.forEach(function (element) {
                _this._SocketService.Send({ controller: 'AppGame', method: 'GetGameGroupDetails', data: { IsFree: IsFree, GameId: element._id } });
            });
        else
            this._appData.Profile.FreeGames.forEach(function (element) {
                _this._SocketService.Send({ controller: 'AppGame', method: 'GetGameGroupDetails', data: { IsFree: IsFree, GameId: element._id } });
            });
    };
    //Filters
    SocketFunctions.prototype.getAppGameByChallengeId = function (challengeId, IsFree) {
        if (challengeId == undefined)
            return undefined;
        if (IsFree) {
            return this._appData.Profile.AppGames.find(function (_a) {
                var FreeGameChallenges = _a.FreeGameChallenges;
                if (FreeGameChallenges.length > 0)
                    return FreeGameChallenges.find(function (_a) {
                        var _id = _a._id;
                        return _id == challengeId;
                    })._id == challengeId;
                else
                    return undefined;
            });
        }
        else {
            return this._appData.Profile.AppGames.find(function (_a) {
                var Challenges = _a.Challenges;
                if (Challenges.length > 0)
                    return Challenges.find(function (_a) {
                        var _id = _a._id;
                        return _id == challengeId;
                    })._id == challengeId;
                else
                    return undefined;
            });
        }
    };
    SocketFunctions.prototype.getChallengeIdByGameId = function (gameId, IsFree) {
        if (IsFree) {
            var fetchedChallenges = this._appData.Profile.FreeGames.filter(function (_a) {
                var _id = _a._id;
                return [gameId].includes(_id);
            });
            if (fetchedChallenges.length > 0)
                return fetchedChallenges[0].ChallengeId;
            else
                return undefined;
        }
        else {
            var fetchedChallenges = this._appData.Profile.PaidGames.filter(function (_a) {
                var _id = _a._id;
                return [gameId].includes(_id);
            });
            if (fetchedChallenges.length > 0)
                return fetchedChallenges[0].ChallengeId;
            else
                return undefined;
        }
    };
    SocketFunctions.prototype.getAppGameByGameId = function (gameId, IsFree) {
        if (IsFree) {
            return this.getAppGameByChallengeId(this.getChallengeIdByGameId(gameId, IsFree), IsFree);
        }
        else {
            return this.getAppGameByChallengeId(this.getChallengeIdByGameId(gameId, IsFree), IsFree);
        }
    };
    SocketFunctions.prototype.initializeData = function () {
        var _this = this;
        console.log('Coming');
        //Observable.interval(1000).map(tick => (new Date().getTime()) + ((new Date().getTimezoneOffset()) * 60000)).share().subscribe(time => {this.currentTime = time;});
        this._appData.Profile = new __WEBPACK_IMPORTED_MODULE_4__Models__["a" /* IProfile */]();
        this._profileService.getProfile().subscribe(function (profile) {
            _this._appData.Profile = new __WEBPACK_IMPORTED_MODULE_4__Models__["a" /* IProfile */](profile.data._id, profile.data.Email, profile.data.ProfileName, profile.data.FirstName, profile.data.LastName, profile.data.ProfilePic, profile.data.Location, profile.data.Live, profile.data.IsActive, profile.data.Status, profile.data.User, profile.data.Account);
            _this._SocketService.Send({ controller: 'UserGroup', method: 'getUserGroup', data: {} });
            _this.getAppGames();
            _this.getPaidRunningGames();
            _this.getFreeRunningGames();
            _this.getMyJoinedGames();
        });
    };
    return SocketFunctions;
}());
SocketFunctions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__AppData__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__AppData__["a" /* AppData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__SocketManager__["a" /* SocketManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__SocketManager__["a" /* SocketManager */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Profile_service__["a" /* ProfileService */]) === "function" && _c || Object])
], SocketFunctions);

var _a, _b, _c;
//# sourceMappingURL=SocketFunctions.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientWraper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpClientWraper = (function () {
    function HttpClientWraper(http) {
        this.http = http;
    }
    HttpClientWraper.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', localStorage.getItem('currentUser'));
    };
    HttpClientWraper.prototype.get = function (url) {
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpClientWraper.prototype.post = function (url, data) {
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpClientWraper.prototype.put = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.put(url, data, {
            headers: headers
        });
    };
    HttpClientWraper.prototype.delete = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, {
            headers: headers
        });
    };
    return HttpClientWraper;
}());
HttpClientWraper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HttpClientWraper);

var _a;
//# sourceMappingURL=HttpClientWraper.js.map

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(184);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HttpClientWraper__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getProfile = function () {
        return this.http.get('http://localhost:3002/api/profile')
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ProfileService.prototype.updateProfile = function (_Globals) {
        return this.http.put('http://localhost:3002/api/profile', _Globals.Profile)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    ProfileService.prototype.updateLiveStatus = function (IsLive) {
        return !IsLive;
    };
    ProfileService.prototype.searchProfiles = function (name) {
        return this.http.get('http://localhost:3002/api/profile/SearchProfile/ByName/' + name)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__HttpClientWraper__["a" /* HttpClientWraper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__HttpClientWraper__["a" /* HttpClientWraper */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=Profile.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IProfile; });
/* unused harmony export IUser */
/* unused harmony export IAccount */
/* unused harmony export ITransactionType */
/* unused harmony export ITransactionStatus */
/* unused harmony export IMoneyTransaction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IUserGroup; });
/* unused harmony export IGameGroup */
/* unused harmony export IMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IGroupMessage; });
/* unused harmony export IGameStatus */
/* unused harmony export IAppGame */
/* unused harmony export IPosition */
/* unused harmony export IGameChallenge */
/* unused harmony export IFreeGameChallenge */
/* unused harmony export IGame */
/* unused harmony export IFreeGame */
/* unused harmony export IGameUserBetting */
/* unused harmony export IFreeGameUserBetting */
/* unused harmony export IGameBetPosition */
/* unused harmony export IFreeGameBetPosition */
/* unused harmony export IGameWinPosition */
/* unused harmony export IFreeGameWinPosition */
/* unused harmony export ISocketMessage */
var IProfile = (function () {
    function IProfile(_id, Email, ProfileName, FirstName, LastName, ProfilePic, Location, Live, IsActive, Status, User, Account, UserGroups, Transactions, AppGames) {
        this._id = _id;
        this.Email = Email;
        this.ProfileName = ProfileName;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.ProfilePic = ProfilePic;
        this.Location = Location;
        this.Live = Live;
        this.IsActive = IsActive;
        this.Status = Status;
        this.User = User || new IUser();
        this.Account = Account || new IAccount();
        this.UserGroups = UserGroups || new Array();
        this.Transactions = Transactions || new Array();
        this.AppGames = AppGames || new Array();
        this.PaidGames = new Array();
        this.FreeGames = new Array();
        this.MyBettedPaidGames = [];
        this.MyBettedFreeGames = [];
        this.MyBoardGames = [];
    }
    return IProfile;
}());

var IUser = (function () {
    function IUser() {
    }
    return IUser;
}());

var IAccount = (function () {
    function IAccount() {
    }
    return IAccount;
}());

var ITransactionType = (function () {
    function ITransactionType() {
    }
    return ITransactionType;
}());

var ITransactionStatus = (function () {
    function ITransactionStatus() {
    }
    return ITransactionStatus;
}());

var IMoneyTransaction = (function () {
    function IMoneyTransaction() {
        this.Type = new ITransactionType();
        this.Status = new ITransactionStatus();
    }
    return IMoneyTransaction;
}());

var IUserGroup = (function () {
    function IUserGroup() {
        this.Participants = new Array();
        this.Messages = new Array();
    }
    return IUserGroup;
}());

var IGameGroup = (function () {
    function IGameGroup() {
        this.Participants = new Array();
        this.Messages = new Array();
    }
    return IGameGroup;
}());

var IMessage = (function () {
    function IMessage() {
        this.sender = new IProfile();
    }
    return IMessage;
}());

var IGroupMessage = (function () {
    function IGroupMessage() {
        this.UserGroup = new IUserGroup();
        this.Message = new IMessage();
    }
    return IGroupMessage;
}());

var IGameStatus = (function () {
    function IGameStatus() {
    }
    return IGameStatus;
}());

var IAppGame = (function () {
    function IAppGame() {
        this.Challenges = new Array();
        this.FreeGameChallenges = new Array();
        this.Positions = new Array();
    }
    return IAppGame;
}());

var IPosition = (function () {
    function IPosition() {
        this.AppGame = new IAppGame();
    }
    return IPosition;
}());

var IGameChallenge = (function () {
    function IGameChallenge() {
        this.Games = new Array();
    }
    return IGameChallenge;
}());

var IFreeGameChallenge = (function () {
    function IFreeGameChallenge() {
        this.FreeGames = new Array();
    }
    return IFreeGameChallenge;
}());

var IGame = (function () {
    function IGame() {
        this.GameUserBettings = new Array();
        this.GameGroup = new IGameGroup();
        this.Status = new IGameStatus();
    }
    return IGame;
}());

var IFreeGame = (function () {
    function IFreeGame() {
        this.GameUserBettings = new Array();
        this.GameGroup = new IGameGroup();
        this.Status = new IGameStatus();
    }
    return IFreeGame;
}());

var IGameUserBetting = (function () {
    function IGameUserBetting() {
        this.Game = new IGame();
        this.User = new IProfile();
    }
    return IGameUserBetting;
}());

var IFreeGameUserBetting = (function () {
    function IFreeGameUserBetting() {
        this.Game = new IFreeGame();
        this.User = new IProfile();
    }
    return IFreeGameUserBetting;
}());

var IGameBetPosition = (function () {
    function IGameBetPosition() {
        this.UserBet = new IGameUserBetting();
        this.Position = new IPosition();
    }
    return IGameBetPosition;
}());

var IFreeGameBetPosition = (function () {
    function IFreeGameBetPosition() {
        this.UserBet = new IFreeGameUserBetting();
        this.Position = new IPosition();
    }
    return IFreeGameBetPosition;
}());

var IGameWinPosition = (function () {
    function IGameWinPosition() {
        this.Game = new IGame();
        this.Position = new IPosition();
    }
    return IGameWinPosition;
}());

var IFreeGameWinPosition = (function () {
    function IFreeGameWinPosition() {
        this.Game = new IFreeGame();
        this.Position = new IPosition();
    }
    return IFreeGameWinPosition;
}());

var ISocketMessage = (function () {
    function ISocketMessage() {
    }
    return ISocketMessage;
}());

//# sourceMappingURL=Models.js.map

/***/ })

},[623]);
//# sourceMappingURL=main.bundle.js.map