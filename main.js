(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/websocketchatlib/fesm5/websocketchatlib.js":
/*!*********************************************************!*\
  !*** ./dist/websocketchatlib/fesm5/websocketchatlib.js ***!
  \*********************************************************/
/*! exports provided: WebsocketchatlibService, WebsocketchatlibComponent, WebsocketchatlibModule, WebsocketchatService, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketchatlibService", function() { return WebsocketchatlibService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketchatlibComponent", function() { return WebsocketchatlibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketchatlibModule", function() { return WebsocketchatlibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketchatService", function() { return WebsocketchatService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/websocketchatlib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebsocketchatlibService = /** @class */ (function () {
    function WebsocketchatlibService() {
    }
    WebsocketchatlibService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WebsocketchatlibService.ctorParameters = function () { return []; };
    /** @nocollapse */ WebsocketchatlibService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function WebsocketchatlibService_Factory() { return new WebsocketchatlibService(); }, token: WebsocketchatlibService, providedIn: "root" });
    return WebsocketchatlibService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/websocketchatlib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebsocketchatlibComponent = /** @class */ (function () {
    function WebsocketchatlibComponent() {
    }
    /**
     * @return {?}
     */
    WebsocketchatlibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    WebsocketchatlibComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'lib-websocketchatlib',
                    template: "\n    <p>\n      websocketchatlib works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    WebsocketchatlibComponent.ctorParameters = function () { return []; };
    return WebsocketchatlibComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/websocketchatlib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebsocketchatlibModule = /** @class */ (function () {
    function WebsocketchatlibModule() {
    }
    WebsocketchatlibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [WebsocketchatlibComponent],
                    imports: [
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    ],
                    exports: [WebsocketchatlibComponent]
                },] }
    ];
    return WebsocketchatlibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/Websocketchat.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WebsocketchatService = /** @class */ (function () {
    function WebsocketchatService(http) {
        this.http = http;
        this.configUrl = 'http://localhost:1000/';
        this.webSocketurl = 'ws://localhost:1000/';
        this.loginUrl = this.configUrl + 'login';
        this.logoutUrl = this.configUrl + 'logout';
        this.oneTonemsgUrl = this.configUrl + 'oneTone';
        this.oneTmanymsgUrl = this.configUrl + 'oneTmany';
        this.usersUrl = this.configUrl + 'users';
        this.websocketUrl = this.webSocketurl + "test-one";
    }
    /**
     * @param {?} config
     * @return {?}
     */
    WebsocketchatService.prototype.initializeApp = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.configUrl = config.url;
        this.webSocketurl = config.socketurl;
        this.loginUrl = this.configUrl + 'login';
        this.logoutUrl = this.configUrl + 'logout';
        this.oneTonemsgUrl = this.configUrl + 'oneTone';
        this.oneTmanymsgUrl = this.configUrl + 'oneTmany';
        this.usersUrl = this.configUrl + 'users';
        this.websocketUrl = this.webSocketurl + "test-one";
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    WebsocketchatService.prototype.signInWithUserNameAndPassword = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        var _this = this;
        return this.http.get(this.loginUrl + '?userName=' + userName + '&password=' + password).toPromise()
            .then((/**
         * @param {?} authData
         * @return {?}
         */
        function (authData) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!authData) return [3 /*break*/, 2];
                        this.user = authData;
                        _a = this;
                        return [4 /*yield*/, new WebSocket(this.websocketUrl + "/" + authData.authToken)];
                    case 1:
                        _a.websocket = _b.sent();
                        this.websocket.onopen = this.onopen;
                        this.websocket.onclose = this.onclose;
                        this.websocket.onmessage = this.onmsg;
                        return [2 /*return*/, authData];
                    case 2: return [2 /*return*/, null];
                }
            });
        }); }));
    };
    /**
     * @return {?}
     */
    WebsocketchatService.prototype.signOut = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.logoutUrl).toPromise();
    };
    /**
     * @return {?}
     */
    WebsocketchatService.prototype.onopen = /**
     * @return {?}
     */
    function () {
        console.log("onpen");
    };
    /**
     * @return {?}
     */
    WebsocketchatService.prototype.onclose = /**
     * @return {?}
     */
    function () {
        console.log("onclose");
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    WebsocketchatService.prototype.onmsg = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        console.log(msg);
    };
    /**
     * @return {?}
     */
    WebsocketchatService.prototype.getUsers = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.usersUrl).toPromise();
    };
    /**
     * @param {?} msg
     * @param {?} fromUser
     * @param {?} toUser
     * @return {?}
     */
    WebsocketchatService.prototype.sendMsg = /**
     * @param {?} msg
     * @param {?} fromUser
     * @param {?} toUser
     * @return {?}
     */
    function (msg, fromUser, toUser) {
        /** @type {?} */
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.oneTonemsgUrl + "?fromId=" + fromUser + "&context=" + msg + "&toId=" + toUser).toPromise();
    };
    /**
     * @param {?} msg
     * @param {?} fromUser
     * @return {?}
     */
    WebsocketchatService.prototype.sendAllMsg = /**
     * @param {?} msg
     * @param {?} fromUser
     * @return {?}
     */
    function (msg, fromUser) {
        /** @type {?} */
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.get(this.oneTmanymsgUrl + "?fromId=" + fromUser + "&context=" + msg).toPromise();
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    WebsocketchatService.prototype.createUserWithEmailAndPassword = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        return this.http.get(this.oneTmanymsgUrl + '?context=' + userName).toPromise();
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    WebsocketchatService.prototype.updateProfile = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        return this.http.get(this.oneTmanymsgUrl + '?context=' + userName).toPromise();
    };
    /**
     * @return {?}
     */
    WebsocketchatService.prototype.onUsers = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    WebsocketchatService.prototype.addfriend = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.oneTmanymsgUrl + '?context=').toPromise();
    };
    /**
     * @return {?}
     */
    WebsocketchatService.prototype.joinRoom = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.oneTmanymsgUrl + '?context=').toPromise();
    };
    WebsocketchatService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    WebsocketchatService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    /** @nocollapse */ WebsocketchatService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function WebsocketchatService_Factory() { return new WebsocketchatService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: WebsocketchatService, providedIn: "root" });
    return WebsocketchatService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: model/user.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var User = /** @class */ (function () {
    function User() {
    }
    User.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ User.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function User_Factory() { return new User(); }, token: User, providedIn: "root" });
    return User;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: websocketchatlib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=websocketchatlib.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var websocketchatlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! websocketchatlib */ "./dist/websocketchatlib/fesm5/websocketchatlib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(websocketchatService, router) {
        this.websocketchatService = websocketchatService;
        this.router = router;
        this.title = 'mywebsocketlib';
        this.init();
    }
    AppComponent.prototype.init = function () {
        this.websocketchatService.initializeApp({ url: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl, socketurl: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].basesocket });
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.click = function () {
        this.websocketchatService.signInWithUserNameAndPassword("lisi", "123456")
            .then(function (data) {
            console.log(data);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [websocketchatlib__WEBPACK_IMPORTED_MODULE_2__["WebsocketchatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var websocketchatlib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! websocketchatlib */ "./dist/websocketchatlib/fesm5/websocketchatlib.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _selectuser_selectuser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selectuser/selectuser.component */ "./src/app/selectuser/selectuser.component.ts");















var appRoutes = [
    {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
        path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"]
    }, {
        path: 'users', component: _selectuser_selectuser_component__WEBPACK_IMPORTED_MODULE_13__["SelectuserComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
                _selectuser_selectuser_component__WEBPACK_IMPORTED_MODULE_13__["SelectuserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                websocketchatlib__WEBPACK_IMPORTED_MODULE_3__["WebsocketchatlibModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [websocketchatlib__WEBPACK_IMPORTED_MODULE_3__["WebsocketchatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <mat-icon class=\"example-icon example-spacer\" (click)=\"back()\">navigate_before</mat-icon>\n    <span class=\"example-spacer\">{{toUser}}</span>{{errmsg}}\n    <mat-icon class=\"example-icon\" [matMenuTriggerFor]=\"menu\">more_vert</mat-icon>\n  </mat-toolbar-row>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item>Item 1</button>\n    <button mat-menu-item>Item 2</button>\n  </mat-menu>\n</mat-toolbar>\n</div>\n<div class=\"content\">\n  <div *ngFor=\"let msg of msgList\">\n    <div *ngIf=\"msg.toId == toUser\" class=\"flexbox\">\n      <p class=\"toright\">{{msg.context}}</p>\n      <mat-icon class=\"touxiang\">room</mat-icon>\n    </div>\n\n    <div *ngIf=\"msg.toId != toUser\" class=\"flexbox\">\n      <mat-icon class=\"touxiang\">room</mat-icon>\n      <p class=\"toleft\">{{msg.context}}</p>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n<mat-toolbar>\n  <mat-toolbar-row>\n    <input class=\"example-spacer\" matInput [(ngModel)]=\"msg\" name=\"msg\" autocomplete=\"false\">\n    <button mat-button (click)=\"send()\" [disabled]=\"!msg\">send</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n</div>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header, .footer {\n  position: absolute;\n  width: 100%; }\n\n.header {\n  top: 0; }\n\n.footer {\n  bottom: 0; }\n\n.left, .right {\n  max-width: 80%; }\n\n.left {\n  margin-right: auto; }\n\n.right {\n  margin-left: auto; }\n\n.listwidth {\n  width: 100%; }\n\n.center {\n  position: absolute;\n  left: 300px;\n  right: 300px;\n  height: 100%;\n  background-color: #94fa1a; }\n\n.content {\n  position: absolute;\n  top: 56px;\n  bottom: 56px;\n  width: 100%;\n  overflow: auto; }\n\n.example-icon {\n  padding: 0 0px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.flexbox {\n  display: flex;\n  flex-flow: auto nowrap;\n  justify-content: flex-start;\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.toright {\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  max-width: 70%;\n  word-wrap: break-word;\n  word-break: break-all; }\n\n.toleft {\n  margin-right: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  max-width: 70%;\n  word-wrap: break-word;\n  word-break: break-all; }\n\n.touxiang {\n  margin-right: 5px;\n  margin-top: 2px;\n  margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9EOlxcd29ya3NwYWNlc1xcbXl3ZWJzb2NrZXRsaWIvc3JjXFxhcHBcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVSxFQUFBOztBQUVaO0VBQ0UsTUFBSyxFQUFBOztBQUVQO0VBQ0UsU0FBUSxFQUFBOztBQUVWO0VBQ0UsY0FBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsaUJBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNDLGtCQUFpQjtFQUNqQixTQUFRO0VBQ1IsWUFBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBS2Y7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFFRSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsY0FBYztFQUNkLHFCQUFvQjtFQUFDLHFCQUFvQixFQUFBOztBQUczQztFQUVFLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixjQUFjO0VBQ2QscUJBQW9CO0VBQUMscUJBQW9CLEVBQUE7O0FBRzNDO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxnQkFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXIsLmZvb3RlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4uaGVhZGVye1xyXG4gIHRvcDowO1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgYm90dG9tOjA7XHJcbn1cclxuLmxlZnQgLC5yaWdodHtcclxuICBtYXgtd2lkdGg6ODAlOyAgICAgICAgIFxyXG59XHJcbi5sZWZ0e1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG59XHJcbi5yaWdodHtcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG59XHJcblxyXG4ubGlzdHdpZHRoIHtcclxuICB3aWR0aDoxMDAlOyAgXHJcbn1cclxuLmNlbnRlcntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTsgICAgXHJcbiAgbGVmdDozMDBweDtcclxuICByaWdodDozMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0ZmExYTtcclxuXHJcbn1cclxuLmNvbnRlbnR7XHJcbiBwb3NpdGlvbjphYnNvbHV0ZTtcclxuIHRvcDo1NnB4O1xyXG4gYm90dG9tOjU2cHg7XHJcbiB3aWR0aDogMTAwJTtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZmxleGJveHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogYXV0byBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50b3JpZ2h0XHJcbntcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi10b3A6YXV0bztcclxuICBtYXJnaW4tYm90dG9tOmF1dG87XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgd29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxuXHJcbi50b2xlZnRcclxue1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIG1hcmdpbi10b3A6YXV0bztcclxuICBtYXJnaW4tYm90dG9tOmF1dG87XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgd29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxuXHJcbi50b3V4aWFuZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OjVweDtcclxuICBtYXJnaW4tdG9wOjJweDtcclxuICBtYXJnaW4tbGVmdDo1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var websocketchatlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! websocketchatlib */ "./dist/websocketchatlib/fesm5/websocketchatlib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ChatComponent = /** @class */ (function () {
    function ChatComponent(websocketService, activatedRoute, router) {
        var _this = this;
        this.websocketService = websocketService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.msgList = new Array();
        this.errmsg = null;
        this.websocketService.websocket.onmessage = function (msg) {
            console.log("收到消息：");
            console.log(msg);
            _this.msgList.push(JSON.parse(msg.data));
        };
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.toUser = this.activatedRoute.snapshot.params['id'];
    };
    ChatComponent.prototype.onmsg = function (msg) {
        console.log("收到消息：");
        console.log(msg);
        this.msgList.push(JSON.parse(msg.data));
    };
    ChatComponent.prototype.send = function () {
        var _this = this;
        this.errmsg = null;
        this.websocketService.sendMsg(this.msg, this.websocketService.user.userId, this.toUser)
            .then(function (msg) {
            if (!msg) {
                _this.errmsg = "用户未登录，无法接收信息";
                return;
            }
            _this.msgList.push(msg);
            _this.msg = null;
        }).catch(function (msg) {
            _this.errmsg = "用户未登录，无法接收信息";
        });
    };
    ChatComponent.prototype.back = function () {
        this.router.navigate(['/users']);
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [websocketchatlib__WEBPACK_IMPORTED_MODULE_2__["WebsocketchatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner></mat-spinner>"

/***/ }),

/***/ "./src/app/loading/loading.component.sass":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.sass */ "./src/app/loading/loading.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span class=\"example-spacer\">loginmmmm</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<div class=\"center\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-list role=\"list\">\r\n        <mat-list-item role=\"listitem\">\r\n          用户：<input matInput [(ngModel)]=\"user\" name=\"user\" placeholder=\"请输入用户名\" autocomplete=\"false\">\r\n        </mat-list-item>\r\n        <mat-list-item role=\"listitem\">\r\n          密码：<input matInput [(ngModel)]=\"password\" name=\"password\" placeholder=\"请输入密码\" autocomplete=\"false\">\r\n        </mat-list-item>\r\n        <mat-list-item role=\"listitem\">\r\n          <button mat-button (click)=\"login()\">login</button>\r\n        </mat-list-item>\r\n      </mat-list>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 100%; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.example-icon {\n  padding: 0 0px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.center {\n  margin-top: auto;\n  margin-bottom: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXHdvcmtzcGFjZXNcXG15d2Vic29ja2V0bGliL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var websocketchatlib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! websocketchatlib */ "./dist/websocketchatlib/fesm5/websocketchatlib.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading/loading.component */ "./src/app/loading/loading.component.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, WebsocketService, dialog) {
        this.router = router;
        this.WebsocketService = WebsocketService;
        this.dialog = dialog;
        this.errorFlag = false;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dialogRef;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                dialogRef = this.dialog.open(_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                    disableClose: true
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log('The dialog was closed');
                    if (result.flag) {
                        _this.router.navigate(['/users']);
                    }
                });
                this.WebsocketService.signInWithUserNameAndPassword(this.user, this.password)
                    .then(function (data) {
                    if (data) {
                        dialogRef.close({ flag: true });
                        console.log(data);
                    }
                    else {
                        dialogRef.close({ flag: false });
                        console.log(data);
                    }
                }).catch(function () {
                    dialogRef.close({ flag: false });
                });
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.goToRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.logginwithgoogle1 = function () {
        // this.WebsocketService.logginwithgoogle().then(function (result) {
        //   if (result.credential) {
        //     // This gives you a Google Access Token. You can use it to access the Google API.
        //     var token = result;
        //     // ...
        //   }
        //   // The signed-in user info.
        //   var user = result.user;
        //   console.log(result);
        // }).catch(function (error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   // The email of the user's account used.
        //   var email = error.email;
        //   // The firebase.auth.AuthCredential type that was used.
        //   var credential = error.credential;
        //   // ...
        // });
    };
    LoginComponent.prototype.logginwithfirebaseui = function () {
        this.router.navigate(['/firebaseui']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            websocketchatlib__WEBPACK_IMPORTED_MODULE_3__["WebsocketchatService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/selectuser/selectuser.component.html":
/*!******************************************************!*\
  !*** ./src/app/selectuser/selectuser.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <mat-icon class=\"example-icon example-spacer\"></mat-icon>\n    <span class=\"example-spacer\">用户列表</span>\n    <mat-icon class=\"example-icon\"></mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div>\n    <mat-list *ngFor=\"let user of userList\" role=\"list\">\n      <mat-list-item role=\"listitem\"  (click)=\"select(user.userName)\">\n        <mat-icon>person</mat-icon>{{user.userName}}\n      </mat-list-item>\n      <mat-divider></mat-divider>\n    </mat-list>\n</div>"

/***/ }),

/***/ "./src/app/selectuser/selectuser.component.scss":
/*!******************************************************!*\
  !*** ./src/app/selectuser/selectuser.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 0px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.footer {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  right: 0px; }\n\n.header {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px; }\n\n.content {\n  position: fixed;\n  top: 56px;\n  bottom: 112px;\n  left: 0px;\n  right: 0px;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0dXNlci9EOlxcd29ya3NwYWNlc1xcbXl3ZWJzb2NrZXRsaWIvc3JjXFxhcHBcXHNlbGVjdHVzZXJcXHNlbGVjdHVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWM7RUFDZCxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWM7RUFDZCxTQUFTO0VBQ1QsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0dXNlci9zZWxlY3R1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgcGFkZGluZzogMCAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjpmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDogNTZweDtcclxuICBib3R0b206IDExMnB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/selectuser/selectuser.component.ts":
/*!****************************************************!*\
  !*** ./src/app/selectuser/selectuser.component.ts ***!
  \****************************************************/
/*! exports provided: SelectuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectuserComponent", function() { return SelectuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var websocketchatlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! websocketchatlib */ "./dist/websocketchatlib/fesm5/websocketchatlib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SelectuserComponent = /** @class */ (function () {
    function SelectuserComponent(router, websocketService) {
        this.router = router;
        this.websocketService = websocketService;
        this.userList = new Array();
    }
    SelectuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websocketService.getUsers()
            .then(function (data) {
            data.forEach(function (element) {
                if (element.userName != _this.websocketService.user.userName) {
                    _this.userList.push(element);
                }
            });
        });
    };
    SelectuserComponent.prototype.select = function (userName) {
        this.router.navigate(['/chat', { id: userName }]);
    };
    SelectuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selectuser',
            template: __webpack_require__(/*! ./selectuser.component.html */ "./src/app/selectuser/selectuser.component.html"),
            styles: [__webpack_require__(/*! ./selectuser.component.scss */ "./src/app/selectuser/selectuser.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            websocketchatlib__WEBPACK_IMPORTED_MODULE_2__["WebsocketchatService"]])
    ], SelectuserComponent);
    return SelectuserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'https://moly.ngrok2.xiaomiqiu.cn/',
    basesocket: 'ws://moly.ngrok2.xiaomiqiu.cn/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspaces\mywebsocketlib\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map