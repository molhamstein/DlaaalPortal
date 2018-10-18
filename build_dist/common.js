(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/main/content/cities/cities.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/content/cities/cities.service.ts ***!
  \*******************************************************/
/*! exports provided: CitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesService", function() { return CitiesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/main/content/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/app.exception */ "./src/app/main/content/shared/app.exception.ts");
/* harmony import */ var _shared_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/app.settings */ "./src/app/main/content/shared/app.settings.ts");
/* harmony import */ var _shared_helpers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helpers.service */ "./src/app/main/content/shared/helpers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CitiesService = /** @class */ (function () {
    // onUsersChanged: BehaviorSubject<any> = new BehaviorSubject({});
    // onSearchTextChanged: Subject<any> = new Subject();
    function CitiesService(http, authService, helpers) {
        this.http = http;
        this.authService = authService;
        this.helpers = helpers;
        this.items = [];
    }
    CitiesService.prototype.listing = function (pageIndex, pageSize, startedWith) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        if (startedWith === void 0) { startedWith = ''; }
        return new Promise(function (resolve, reject) {
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/cities?access_token=' + _this.authService.getToken())
                .subscribe(function (items) {
                console.log(items);
                _this.items = items;
                resolve({
                    items: _this.items.slice(),
                    totalCount: _this.items.length
                });
            }, function (error) {
                console.log(error);
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
            });
        });
    };
    CitiesService.prototype.item = function (itemId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // send get request
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/cities/' + itemId)
                .subscribe(function (item) {
                console.log(item);
                resolve(item);
            }, function (error) {
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"]('unknown exception'));
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
            });
        });
    };
    CitiesService.prototype.delete = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var index = _this.items.indexOf(item);
            _this.http.delete(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/cities/' + item.id + '?access_token=' + _this.authService.getToken())
                .subscribe(function (data) {
                console.log(data);
                _this.items.splice(index, 1);
                resolve(true);
            }, function (error) {
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"](error));
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
            });
        });
    };
    CitiesService.prototype.update = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/cities/' + item.id + '?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                console.log(data);
                resolve(true);
            }, function (error) {
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"](error));
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
            });
        });
    };
    CitiesService.prototype.add = function (item) {
        var _this = this;
        console.log("item ", item);
        return new Promise(function (resolve, reject) {
            _this.http.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/cities/?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                console.log(data);
                resolve(true);
            }, function (error) {
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"](error));
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
            });
        });
    };
    CitiesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_5__["HelpersService"]])
    ], CitiesService);
    return CitiesService;
}());



/***/ }),

/***/ "./src/app/main/content/users/users.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/content/users/users.service.ts ***!
  \*****************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _shared_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/app.settings */ "./src/app/main/content/shared/app.settings.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/main/content/auth/auth.service.ts");
/* harmony import */ var _shared_helpers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/helpers.service */ "./src/app/main/content/shared/helpers.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/app.exception */ "./src/app/main/content/shared/app.exception.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersService = /** @class */ (function () {
    // onUsersChanged: BehaviorSubject<any> = new BehaviorSubject({});
    // onSearchTextChanged: Subject<any> = new Subject();
    function UsersService(http, authService, helpers) {
        this.http = http;
        this.authService = authService;
        this.helpers = helpers;
        this.items = [];
    }
    UsersService.prototype.listing = function (pageIndex, pageSize, startedWith) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        if (startedWith === void 0) { startedWith = ''; }
        return new Promise(function (resolve, reject) {
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/users?access_token=' + _this.authService.getToken())
                .subscribe(function (items) {
                console.log('items ', items);
                _this.items = items;
                resolve({
                    items: _this.items.slice(),
                    totalCount: _this.items.length
                });
            }, function (error) {
                console.log(error);
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
            });
        });
    };
    UsersService.prototype.item = function (itemId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // send get request
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/users/' + itemId)
                .subscribe(function (item) {
                resolve(item);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"]('unknown exception'));
            });
        });
    };
    UsersService.prototype.delete = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var index = _this.items.indexOf(item);
            _this.http.put(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/users/' + item.id + '/deactivate?access_token=' + _this.authService.getToken(), null)
                .subscribe(function (data) {
                _this.items[index].status = 'deactivated';
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    UsersService.prototype.update = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/users/' + item.id + '?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    UsersService.prototype.add = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/users/?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                console.log(data);
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_2__["HelpersService"]])
    ], UsersService);
    return UsersService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map