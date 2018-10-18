(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-auth-auth-module"],{

/***/ "./src/app/main/content/auth/auth.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/content/auth/auth.module.ts ***!
  \**************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/modules/shared.module */ "./src/app/core/modules/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/main/content/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/main/content/auth/login/login.component.html":
/*!**************************************************************!*\
  !*** ./src/app/main/content/auth/login/login.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"column\" fusePerfectScrollbar>\n\n        <div id=\"login-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n            <div id=\"login-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\n\n                <div class=\"logo\">\n                    <img src=\"assets/images/logos/dlaaal.png\">\n                </div>\n\n                <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\n\n                <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" novalidate>\n\n                    <mat-form-field>\n                        <input matInput placeholder=\"Email\"\n                        name=\"email\"\n                        type=\"email\"\n                        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                        ngModel\n                        #email=\"ngModel\">\n                            <mat-error *ngIf=\"email.errors?.required && email.touched\">\n                                Email is required\n                            </mat-error>\n                            <mat-error *ngIf=\"email.errors?.pattern && email.touched\">\n                                Please enter a valid email address\n                            </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <input matInput\n                        placeholder=\"Password\"\n                        name=\"password\"\n                        required\n                        type=\"password\"\n                        ngModel\n                        #password=\"ngModel\">\n                        <mat-error *ngIf=\"!password.valid && password.touched\">\n                            Password is required\n                        </mat-error>\n                    </mat-form-field>\n\n                    <button type=\"submit\" mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOG IN\"\n                    [disabled]=\"!f.valid\">\n                        LOGIN\n                    </button>\n\n                </form>\n\n            </div>\n\n        </div>\n\n    </div>\n"

/***/ }),

/***/ "./src/app/main/content/auth/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main/content/auth/login/login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #login {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/march.jpg\") no-repeat;\n  background-size: cover; }\n:host #login #login-form-wrapper {\n    flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #login #login-form-wrapper {\n        padding: 16px; } }\n:host #login #login-form-wrapper #login-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      background: #FFFFFF;\n      text-align: center;\n      box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form {\n          padding: 24px;\n          width: 100%; } }\n:host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #login #login-form-wrapper #login-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        text-align: left; }\n:host #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n:host #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form .submit-button {\n              width: 90%; } }\n:host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\n:host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n:host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        color: rgba(0, 0, 0, 0.54); }\n:host #login #login-form-wrapper #login-form .separator .text {\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n:host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n:host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form button {\n          width: 80%; } }\n:host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/content/auth/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main/content/auth/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/main/content/auth/auth.service.ts");
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/services/config.service */ "./src/app/core/services/config.service.ts");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../core/animations */ "./src/app/core/animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fuseConfig, authService, router, snackBar) {
        this.fuseConfig = fuseConfig;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.fuseConfig.setSettings({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            },
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        this.authService.login(email, password).then(function (user) {
            _this.router.navigate(['/advertisements']);
        }).catch(function (reason) {
            _this.snackBar.open(reason.errorMessage, '', {
                duration: 2000,
                extraClasses: ['failed-snackbar']
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/main/content/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/main/content/auth/login/login.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_core_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-auth-auth-module.js.map