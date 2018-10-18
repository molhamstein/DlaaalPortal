(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-categories-categories-module~main-content-lazy-child-lazy-child-module"],{

/***/ "./src/app/main/content/GUID/GUID.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/content/GUID/GUID.module.ts ***!
  \**************************************************/
/*! exports provided: GUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUID", function() { return GUID; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Hala on 4/10/2018.
 */

var GUID = /** @class */ (function () {
    function GUID() {
    }
    GUID.prototype.newGuid = function () {
        return Date.now() + '-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    GUID = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            providers: [],
            declarations: [],
            exports: []
        }),
        __metadata("design:paramtypes", [])
    ], GUID);
    return GUID;
}());



/***/ }),

/***/ "./src/app/main/content/categories/categories.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/content/categories/categories.service.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
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






var CategoriesService = /** @class */ (function () {
    // onUsersChanged: BehaviorSubject<any> = new BehaviorSubject({});
    // onSearchTextChanged: Subject<any> = new Subject();
    function CategoriesService(http, authService, helpers) {
        this.http = http;
        this.authService = authService;
        this.helpers = helpers;
        this.items = [];
    }
    CategoriesService.prototype.listing = function (pageIndex, pageSize, startedWith) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        if (startedWith === void 0) { startedWith = ''; }
        return new Promise(function (resolve, reject) {
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories')
                .subscribe(function (items) {
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
    CategoriesService.prototype.item = function (itemId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/' + itemId)
                .subscribe(function (item) {
                resolve(item);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"]('unknown exception'));
            });
        });
    };
    CategoriesService.prototype.delete = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var index = _this.items.indexOf(item);
            _this.http.delete(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/' + item.id + '?access_token=' + _this.authService.getToken())
                .subscribe(function (data) {
                _this.items.splice(index, 1);
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    CategoriesService.prototype.update = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/' + item.id + '?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    CategoriesService.prototype.add = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                console.log(data);
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    CategoriesService.prototype.uploadImages = function (items) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/files/images/upload?access_token=' + _this.authService.getToken(), items)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_2__["HelpersService"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/main/content/categories/subCategories/subCategories.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/categories/subCategories/subCategories.service.ts ***!
  \********************************************************************************/
/*! exports provided: SubCategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoriesService", function() { return SubCategoriesService; });
/* harmony import */ var _shared_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/app.settings */ "./src/app/main/content/shared/app.settings.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/main/content/auth/auth.service.ts");
/* harmony import */ var _shared_helpers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/helpers.service */ "./src/app/main/content/shared/helpers.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/app.exception */ "./src/app/main/content/shared/app.exception.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubCategoriesService = /** @class */ (function () {
    // onUsersChanged: BehaviorSubject<any> = new BehaviorSubject({});
    // onSearchTextChanged: Subject<any> = new Subject();
    function SubCategoriesService(http, authService, helpers) {
        this.http = http;
        this.authService = authService;
        this.helpers = helpers;
        this.items = [];
    }
    SubCategoriesService.prototype.listing = function (categoryId, pageIndex, pageSize, startedWith) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        if (startedWith === void 0) { startedWith = ''; }
        return new Promise(function (resolve, reject) {
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/' + categoryId + '/subCategories')
                .subscribe(function (items) {
                console.log('SubCategory ', items);
                _this.items = items;
                resolve({
                    items: _this.items.slice(),
                    totalCount: _this.items.length
                });
            }, function (error) {
                console.log(error);
            });
        });
    };
    SubCategoriesService.prototype.add = function (categoryId, item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/' + categoryId + '/subCategories?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                console.log(data);
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    /*item(itemId: string): Promise<any> {
      return new Promise((resolve, reject) => {
        //send get request
        this.http.get<Category>(AppSettings.baseUrl+'/categories/'+itemId)
        .subscribe(
          item => {
            resolve(item);
          },
          error => {
            reject(new AppException('unknown exception'));
          }
        );
      });
    }
  */
    SubCategoriesService.prototype.delete = function (categoryId, item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var index = _this.items.indexOf(item);
            _this.http.delete(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/' + categoryId + '/subCategories/' + item.id + '?access_token=' + _this.authService.getToken())
                .subscribe(function (data) {
                // this.items.splice(index, 1);
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    SubCategoriesService.prototype.deleteAll = function (categoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/' + categoryId + '/subCategories?access_token=' + _this.authService.getToken())
                .subscribe(function (data) {
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    SubCategoriesService.prototype.update = function (categoryId, item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_shared_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].baseUrl + '/categories/' + categoryId + '/subCategories/' + item.id + '?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                console.log('data ', data);
                resolve(true);
            }, function (error) {
                console.log('error ', error);
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_5__["AppException"](error));
            });
        });
    };
    SubCategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_2__["HelpersService"]])
    ], SubCategoriesService);
    return SubCategoriesService;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-categories-categories-module~main-content-lazy-child-lazy-child-module.js.map