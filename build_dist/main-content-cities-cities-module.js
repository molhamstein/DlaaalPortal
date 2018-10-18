(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-cities-cities-module"],{

/***/ "./src/app/main/content/cities/cities.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/content/cities/cities.module.ts ***!
  \******************************************************/
/*! exports provided: CitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesModule", function() { return CitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/modules/shared.module */ "./src/app/core/modules/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _city_list_city_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city-list/city-list.component */ "./src/app/main/content/cities/city-list/city-list.component.ts");
/* harmony import */ var _city_edit_city_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city-edit/city-edit.component */ "./src/app/main/content/cities/city-edit/city-edit.component.ts");
/* harmony import */ var _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./city-detail/city-detail.component */ "./src/app/main/content/cities/city-detail/city-detail.component.ts");
/* harmony import */ var _city_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./city.resolver */ "./src/app/main/content/cities/city.resolver.ts");
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cities.service */ "./src/app/main/content/cities/cities.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _city_list_city_list_component__WEBPACK_IMPORTED_MODULE_3__["CityListComponent"],
                resolve: {
                    serverResult: _city_resolver__WEBPACK_IMPORTED_MODULE_6__["CityResolver"]
                },
                data: { resolverType: 'list' }
            },
            {
                path: 'new',
                component: _city_edit_city_edit_component__WEBPACK_IMPORTED_MODULE_4__["CityEditComponent"],
                data: {
                    isEditMode: false
                }
            },
            {
                path: ':id/details',
                component: _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_5__["CityDetailComponent"],
                resolve: {
                    serverResult: _city_resolver__WEBPACK_IMPORTED_MODULE_6__["CityResolver"]
                },
                data: {
                    resolverType: 'item',
                }
            },
            {
                path: ':id/edit',
                component: _city_edit_city_edit_component__WEBPACK_IMPORTED_MODULE_4__["CityEditComponent"],
                resolve: {
                    serverResult: _city_resolver__WEBPACK_IMPORTED_MODULE_6__["CityResolver"]
                },
                data: {
                    resolverType: 'item',
                    isEditMode: true
                }
            }
        ]
    }
];
var CitiesModule = /** @class */ (function () {
    function CitiesModule() {
    }
    CitiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            declarations: [_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_3__["CityListComponent"], _city_edit_city_edit_component__WEBPACK_IMPORTED_MODULE_4__["CityEditComponent"], _city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_5__["CityDetailComponent"]],
            providers: [_city_resolver__WEBPACK_IMPORTED_MODULE_6__["CityResolver"], _cities_service__WEBPACK_IMPORTED_MODULE_7__["CitiesService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CitiesModule);
    return CitiesModule;
}());



/***/ }),

/***/ "./src/app/main/content/cities/city-detail/city-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/cities/city-detail/city-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"city\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\"\n         fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button class=\"mr-16\" mat-icon-button [routerLink]=\"'/cities'\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n             *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n          <div class=\"h2\">\n            {{city.name}}\n          </div>\n\n        </div>\n      </div>\n      <!-- / APP TITLE -->\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n\n      <!-- CONTENT -->\n      <div class=\"content\">\n\n        <mat-tab-group>\n\n          <mat-tab label=\"City Details\">\n\n            <div class=\"invoice tab-content p-24\" fusePerfectScrollbar>\n\n              <div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\n\n                <div class=\"invoice-container\">\n\n                  <!-- INVOICE -->\n                  <div class=\"card\">\n\n                    <div class=\"header1\">\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n                        <div class=\"client\">\n                          <div class=\"invoice-number\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"mat-headline\">{{city.name}}</span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <!-- / INVOICE -->\n\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n\n        </mat-tab-group>\n\n      </div>\n      <!-- / CONTENT -->\n\n    </div>\n    <!-- / CONTENT CARD -->\n\n  </div>\n  <!-- / CENTER -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/cities/city-detail/city-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/cities/city-detail/city-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#city .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px; }\n  #city .header .product-image img {\n    height: 100%;\n    width: 100%;\n    max-width: none;\n    border-radius: 50%; }\n  #city .header .subtitle {\n  margin: 6px 0 0 0; }\n  #city .content .mat-tab-group,\n#city .content .mat-tab-body-wrapper,\n#city .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n  #city .content .tab-content {\n  flex: 1 1 auto; }\n  #city .content .tab-content.products .product-row {\n    cursor: pointer; }\n  #city .content .tab-content.invoice {\n    /* PRINT STYLES */ }\n  #city .content .tab-content.invoice #invoice.compact {\n      padding: 0;\n      overflow: auto; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container {\n        padding: 16px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card {\n          width: 900px;\n          max-width: 900px;\n          padding: 64px 88px;\n          overflow: hidden;\n          background: #FFFFFF; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number {\n            font-size: 18px;\n            padding-bottom: 2px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .green {\n              color: green; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .red {\n              color: red; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .title {\n              color: rgba(0, 0, 0, 0.54); }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .number {\n              padding-left: 6px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date {\n            font-size: 18px;\n            padding-bottom: 16px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date .title {\n              color: rgba(0, 0, 0, 0.54); }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date .date {\n              padding-left: 6px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info {\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 22px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .number {\n              padding-left: 6px;\n              color: black; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .green {\n              font-size: 16px;\n              color: green; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .red {\n              font-size: 16px;\n              color: red; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer {\n            padding-right: 66px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .logo {\n              width: 200px;\n              padding: 0 8px;\n              border-right: 1px solid rgba(255, 255, 255, 0.7); }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .info {\n              padding: 16px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 64px;\n            font-size: 15px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n              padding-left: 8px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n              padding-right: 8px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 8px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 8px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 16px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 8px;\n              font-size: 12px;\n              color: rgba(0, 0, 0, 0.54);\n              max-width: 360px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 32px 0 72px 0; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              text-align: right;\n              font-size: 16px;\n              font-weight: 500;\n              color: rgba(0, 0, 0, 0.54);\n              border-bottom: none;\n              padding: 4px 8px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 32px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 24px 8px;\n              border-top: 1px solid rgba(0, 0, 0, 0.12);\n              font-size: 35px;\n              font-weight: 300;\n              color: black; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n            font-size: 15px;\n            font-weight: 500;\n            margin-bottom: 24px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo, #city .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            -ms-flex: 0 1 auto; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n            width: 32px;\n            min-width: 32px;\n            margin-right: 24px; }\n  #city .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 12px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 18px; }\n  @media print {\n      #city .content .tab-content.invoice {\n        /* Invoice Specific Styles */ }\n        #city .content .tab-content.invoice #invoice.compact .invoice-container {\n          padding: 0; }\n          #city .content .tab-content.invoice #invoice.compact .invoice-container .card {\n            width: 100%;\n            min-width: 0;\n            background: none;\n            padding: 0;\n            box-shadow: none; }\n            #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n              margin-bottom: 16pt; }\n            #city .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n              padding-right: 0;\n              margin-right: 0; }\n            #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n              margin-top: 16pt; }\n              #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n                font-size: 10pt;\n                max-width: 60pt; }\n                #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                  padding-left: 0; }\n                #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                  padding-right: 0; }\n              #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n                padding-left: 0; }\n              #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n                padding-right: 0; }\n              #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n                font-size: 10pt; }\n              #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n                margin-top: 4pt;\n                font-size: 9pt;\n                max-width: none; }\n            #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n              margin: 16pt 0; }\n              #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n                font-size: 13pt;\n                padding: 4pt 4pt; }\n                #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                  text-align: left;\n                  padding-left: 0; }\n                #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                  padding-right: 0; }\n              #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n                padding-bottom: 16pt; }\n              #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n                padding: 16pt 4pt 0 4pt;\n                font-size: 16pt; }\n                #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                  padding-left: 0; }\n                #city .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                  padding-right: 0; }\n            #city .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n              font-size: 10pt;\n              margin-bottom: 8pt; }\n            #city .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n              margin-right: 8pt; }\n            #city .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n              font-size: 8pt;\n              line-height: normal; } }\n  #city .content .mat-tab-body-content {\n  display: flex; }\n  #city .content .mat-tab-label {\n  height: 64px; }\n  #city .content table {\n  table-layout: fixed; }\n"

/***/ }),

/***/ "./src/app/main/content/cities/city-detail/city-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/cities/city-detail/city-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: CityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailComponent", function() { return CityDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/animations */ "./src/app/core/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityDetailComponent = /** @class */ (function () {
    function CityDetailComponent(route) {
        this.route = route;
    }
    CityDetailComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.data['serverResult']) {
            this.city = this.route.snapshot.data['serverResult'];
        }
    };
    CityDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city-detail',
            template: __webpack_require__(/*! ./city-detail.component.html */ "./src/app/main/content/cities/city-detail/city-detail.component.html"),
            styles: [__webpack_require__(/*! ./city-detail.component.scss */ "./src/app/main/content/cities/city-detail/city-detail.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CityDetailComponent);
    return CityDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/content/cities/city-edit/city-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/content/cities/city-edit/city-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"city\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button class=\"mr-0 mr-sm-16\" mat-icon-button [routerLink]=\"'/cities'\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" *fuseIfOnDom\n             [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n          <div class=\"h2\" *ngIf=\"isEditMode\">\n            {{cityForm.value.name}}\n          </div>\n          <div class=\"h2\" *ngIf=\"!isEditMode\">\n            New City\n          </div>\n          <div class=\"subtitle secondary-text\">\n            <span>City Details</span>\n          </div>\n        </div>\n      </div>\n      <!-- / APP TITLE -->\n\n\n      <button mat-raised-button class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n              [disabled]=\"cityForm.status == 'INVALID' || cityForm.pristine == true\"\n              (click)=\"f.ngSubmit.emit()\">\n        <span>SAVE</span>\n      </button>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n\n      <!-- CONTENT -->\n      <div class=\"content\">\n        <form [formGroup]=\"cityForm\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"product w-100-p\" fxLayout=\"column\"\n              fxFlex>\n          <mat-tab-group>\n\n            <mat-tab label=\"Basic Info\">\n\n              <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"tab-content p-24\" fusePerfectScrollbar fxFlex=\"80%\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput formControlName=\"name\" placeholder=\"Name\" required>\n                      <mat-error *ngIf=\"cityForm.controls.name.invalid\">{{getErrorMessage('name','required','', '')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </mat-tab>\n\n          </mat-tab-group>\n        </form>\n        <!-- / CONTENT -->\n\n      </div>\n      <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/cities/city-edit/city-edit.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/content/cities/city-edit/city-edit.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#city .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px; }\n  #city .header .product-image img {\n    height: 100%;\n    width: 100%;\n    max-width: none;\n    border-radius: 50%; }\n  #city .header .subtitle {\n  margin: 6px 0 0 0; }\n  #city .content .mat-tab-group,\n#city .content .mat-tab-body-wrapper,\n#city .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n  #city .content .mat-tab-body-content {\n  display: flex; }\n  #city .content .mat-tab-label {\n  height: 64px; }\n  #city .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #city .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n  #city .content .product img {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px; }\n"

/***/ }),

/***/ "./src/app/main/content/cities/city-edit/city-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/cities/city-edit/city-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: CityEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityEditComponent", function() { return CityEditComponent; });
/* harmony import */ var _shared_helpers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/helpers.service */ "./src/app/main/content/shared/helpers.service.ts");
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../cities.service */ "./src/app/main/content/cities/cities.service.ts");
/* harmony import */ var _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/services/splash-screen.service */ "./src/app/core/services/splash-screen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _city_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../city.model */ "./src/app/main/content/cities/city.model.ts");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../core/animations */ "./src/app/core/animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/enums/page-action */ "./src/app/main/content/shared/enums/page-action.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CityEditComponent = /** @class */ (function () {
    function CityEditComponent(route, router, citiesService, loadingScreen, helpers) {
        this.route = route;
        this.router = router;
        this.citiesService = citiesService;
        this.loadingScreen = loadingScreen;
        this.helpers = helpers;
        this.isEditMode = false;
        this.city = new _city_model__WEBPACK_IMPORTED_MODULE_4__["City"]();
    }
    CityEditComponent.prototype.ngOnInit = function () {
        this.isEditMode = this.route.snapshot.data['isEditMode'];
        if (this.route.snapshot.data['serverResult']) {
            this.city = this.route.snapshot.data['serverResult'];
        }
        this.cityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.city.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.city.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])
        });
    };
    CityEditComponent.prototype.getErrorMessage = function (fieldName, required) {
        return this.cityForm.controls[fieldName].hasError(required) ? 'You must enter a value' :
            '';
    };
    CityEditComponent.prototype.onSubmit = function (thisCityForm) {
        var _this = this;
        if (thisCityForm.valid) {
            this.loadingScreen.show();
            if (this.isEditMode) {
                console.log("this.cityForm edit", this.cityForm.value);
                this.citiesService.update(this.cityForm.value).then(function (val) {
                    _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__["PageAction"].Update, true, 'city');
                    _this.router.navigate(['/cities']);
                    _this.loadingScreen.hide();
                }, function (reason) {
                    _this.loadingScreen.hide();
                    console.log('error ', reason);
                    _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__["PageAction"].Update, false, 'city');
                });
            }
            else {
                delete this.cityForm.value.id;
                console.log("this.cityForm add", this.cityForm.value);
                this.citiesService.add(this.cityForm.value).then(function (val) {
                    _this.loadingScreen.hide();
                    _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__["PageAction"].Create, true, 'city');
                    _this.router.navigate(['/cities']);
                }, function (reason) {
                    _this.loadingScreen.hide();
                    _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__["PageAction"].Create, false, 'city');
                    console.log('error ', reason);
                });
            }
        }
    };
    CityEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-city-edit',
            template: __webpack_require__(/*! ./city-edit.component.html */ "./src/app/main/content/cities/city-edit/city-edit.component.html"),
            styles: [__webpack_require__(/*! ./city-edit.component.scss */ "./src/app/main/content/cities/city-edit/city-edit.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _cities_service__WEBPACK_IMPORTED_MODULE_1__["CitiesService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_2__["FuseSplashScreenService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_0__["HelpersService"]])
    ], CityEditComponent);
    return CityEditComponent;
}());



/***/ }),

/***/ "./src/app/main/content/cities/city-list/city-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/content/cities/city-list/city-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cities\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\n         fxLayoutAlign.gt-xs=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div class=\"logo my-12 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n          account_box\n        </mat-icon>\n        <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Cities</span>\n      </div>\n      <!-- / APP TITLE -->\n\n      <!-- SEARCH -->\n      <div class=\"search-input-wrapper ml-8 m-sm-0\"\n           fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <label  class=\"mr-8\">\n          <mat-icon class=\"secondary-text\">search</mat-icon>\n        </label>\n        <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n      </div>\n      <!-- / SEARCH -->\n\n       <!--Add BUTTON-->\n      <button mat-raised-button  class=\"reference-button mat-white-bg mt-16 mt-sm-0\" aria-label=\"new\" [routerLink]=\"'/cities/new'\" >\n        <!--<mat-icon>add</mat-icon>-->\n        <span>New</span>\n      </button>\n      <!-- / Add BUTTON-->\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n      <div class=\"table-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n        <div class=\"table-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n          No Data Available\n        </div>\n      </div>\n\n\n      <mat-table #table [dataSource]=\"dataSource\" [@animateStagger]=\"{value:'50'}\" class=\"items-table\"\n                 fusePerfectScrollbar>\n\n        <!-- Id Column -->\n        <ng-container cdkColumnDef=\"id\">\n          <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm fxFlex=\"10%\">ID</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\" fxHide fxShow.gt-sm fxFlex=\"10%\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n            <p class=\" text-truncate mat-caption m-0\">{{item.id.slice(0, 10)}}</p>\n            <p class=\"text-truncate  mat-caption m-0\">{{item.id.slice(10,20)}}</p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container cdkColumnDef=\"name\">\n          <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <p class=\"text-truncate font-weight-600\">{{item.name}}</p>\n          </mat-cell>\n        </ng-container>\n\n\n        <!-- Buttons Column -->\n        <ng-container cdkColumnDef=\"buttons\">\n          <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n\n              <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                      (click)=\"$event.stopPropagation();\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n\n              <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"edit\"  (click)=\"routeTo(item, 'edit')\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"remove\"   (click)=\"routeTo(item, 'delete')\" >\n                  <mat-icon color=\"warn\">delete</mat-icon>\n                  <span>Deactivate</span>\n                </button>\n              </mat-menu>\n            </div>\n\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *cdkRowDef=\"let item; columns: displayedColumns;\"  (click)=\"routeTo(item, 'details')\" matRipple\n                 [@animate]=\"{value:'*',params:{y:'100%'}}\"\n                 class=\"item\">\n        </mat-row>\n      </mat-table>\n\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\" [pageSizeOptions]=[10,20,30]>\n      </mat-paginator>\n    </div>\n    <!-- / CONTENT CARD -->\n  </div>\n  <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/cities/city-list/city-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/content/cities/city-list/city-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host .header {\n    height: 176px !important;\n    min-height: 176px !important;\n    max-height: 176px !important; } }\n@media (max-width: 599px) {\n  :host .top-bg {\n    height: 240px; } }\n:host .items-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .items-table .mat-header-row {\n    min-height: 64px; }\n:host .items-table .item {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .items-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n:host .items-table .mat-column-id {\n    flex: 0 1 84px; }\n:host .items-table .mat-column-image {\n    flex: 0 1 84px; }\n:host .items-table .mat-column-image .item-image {\n      width: 52px;\n      height: 52px; }\n:host .items-table .mat-column-buttons {\n    flex: 0 1 80px; }\n:host .items-table .active-icon {\n    border-radius: 50%; }\n:host .table-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 26px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n:host .table-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n:host .table-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n:host .mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/content/cities/city-list/city-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/cities/city-list/city-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityListComponent", function() { return CityListComponent; });
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../cities.service */ "./src/app/main/content/cities/cities.service.ts");
/* harmony import */ var _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../core/services/splash-screen.service */ "./src/app/core/services/splash-screen.service.ts");
/* harmony import */ var _core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/components/confirm-dialog/confirm-dialog.component */ "./src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../core/animations */ "./src/app/core/animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CityListComponent = /** @class */ (function () {
    function CityListComponent(citiesService, router, activatedRoute, dialog, loadingScreen) {
        this.citiesService = citiesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.loadingScreen = loadingScreen;
        this.displayedColumns = ['id', 'name', 'buttons'];
        this.btnState = false;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = 0;
        this.startedWith = '';
    }
    CityListComponent.prototype.ngOnInit = function () {
        console.log("sssss");
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        var serverResult = this.activatedRoute.snapshot.data['serverResult'];
        this.dataSource.data = serverResult.items;
        this.resultsLength = serverResult.totalCount;
        this.onPageChangeSubscription = this.paginator.page.subscribe(function (pageEvent) {
        });
    };
    CityListComponent.prototype.ngOnDestroy = function () {
        this.onPageChangeSubscription.unsubscribe();
    };
    CityListComponent.prototype.routeTo = function (item, to) {
        if (to === 'delete')
            this.deleteItem(item);
        else
            this.router.navigate(['/cities', item.id, to]);
    };
    CityListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        /* if (startedWith.length >= 2) {
           this.startedWith = startedWith;
           this.paginator.pageIndex = 0;
           this.usersService.listing(this.paginator.pageIndex,
             this.paginator.pageSize,
             startedWith).then(serverResult => {
             console.log(serverResult);
           }).catch(reason => {
             console.log('error while filtering data');
           });
         }*/
    };
    CityListComponent.prototype.deleteItem = function (item) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the city?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log('item ', item);
                // this.loadingScreen.show();
                _this.citiesService.delete(item).then(function (serverResult) {
                    console.log('delete city serverResult! ', serverResult);
                }, function (reason) {
                    // this.loadingScreen.hide();
                    console.log('delete city error! ', reason);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CityListComponent.prototype, "paginator", void 0);
    CityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-city-list',
            template: __webpack_require__(/*! ./city-list.component.html */ "./src/app/main/content/cities/city-list/city-list.component.html"),
            styles: [__webpack_require__(/*! ./city-list.component.scss */ "./src/app/main/content/cities/city-list/city-list.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_cities_service__WEBPACK_IMPORTED_MODULE_0__["CitiesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["FuseSplashScreenService"]])
    ], CityListComponent);
    return CityListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/cities/city.model.ts":
/*!***************************************************!*\
  !*** ./src/app/main/content/cities/city.model.ts ***!
  \***************************************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
var City = /** @class */ (function () {
    function City() {
        this.id = 0;
        this.name = null;
    }
    return City;
}());



/***/ }),

/***/ "./src/app/main/content/cities/city.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/main/content/cities/city.resolver.ts ***!
  \******************************************************/
/*! exports provided: CityResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityResolver", function() { return CityResolver; });
/* harmony import */ var _cities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cities.service */ "./src/app/main/content/cities/cities.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityResolver = /** @class */ (function () {
    function CityResolver(citiesService) {
        this.citiesService = citiesService;
    }
    CityResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var resolverType = route.data['resolverType'];
            if (resolverType === 'list') {
                _this.citiesService.listing().then(function (serverResult) {
                    resolve(serverResult);
                }, function (reason) {
                    console.log(reason);
                });
            }
            else {
                var itemId = route.params['id'];
                _this.citiesService.item(itemId).then(function (serverResult) {
                    resolve(serverResult);
                }, function (reason) {
                    console.log(reason);
                });
            }
        });
    };
    CityResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_cities_service__WEBPACK_IMPORTED_MODULE_0__["CitiesService"]])
    ], CityResolver);
    return CityResolver;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-cities-cities-module.js.map