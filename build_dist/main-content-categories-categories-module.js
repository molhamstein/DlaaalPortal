(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-categories-categories-module"],{

/***/ "./src/app/main/content/categories/categories.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/content/categories/categories.module.ts ***!
  \**************************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories.service */ "./src/app/main/content/categories/categories.service.ts");
/* harmony import */ var _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/modules/shared.module */ "./src/app/core/modules/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/main/content/categories/category-list/category-list.component.ts");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/main/content/categories/category-detail/category-detail.component.ts");
/* harmony import */ var _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-edit/category-edit.component */ "./src/app/main/content/categories/category-edit/category-edit.component.ts");
/* harmony import */ var _category_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category.resolver */ "./src/app/main/content/categories/category.resolver.ts");
/* harmony import */ var _categories_subCategories_subCategories_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../categories/subCategories/subCategories.service */ "./src/app/main/content/categories/subCategories/subCategories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '', children: [
            {
                path: '',
                component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"],
                resolve: {
                    serverResult: _category_resolver__WEBPACK_IMPORTED_MODULE_7__["CategoryResolver"]
                },
                data: { resolverType: 'list' }
            },
            {
                path: 'new',
                component: _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__["CategoryEditComponent"],
                data: {
                    isEditMode: false
                }
            },
            {
                path: ':id/edit',
                component: _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__["CategoryEditComponent"],
                resolve: {
                    serverResult: _category_resolver__WEBPACK_IMPORTED_MODULE_7__["CategoryResolver"]
                },
                data: {
                    resolverType: 'item',
                    isEditMode: true
                }
            },
            {
                path: ':id/details',
                component: _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_5__["CategoryDetailComponent"],
                resolve: {
                    serverResult: _category_resolver__WEBPACK_IMPORTED_MODULE_7__["CategoryResolver"]
                },
                data: {
                    resolverType: 'item',
                }
            },
        ]
    }
];
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            providers: [
                _categories_service__WEBPACK_IMPORTED_MODULE_0__["CategoriesService"],
                _category_resolver__WEBPACK_IMPORTED_MODULE_7__["CategoryResolver"],
                _categories_subCategories_subCategories_service__WEBPACK_IMPORTED_MODULE_8__["SubCategoriesService"]
            ],
            declarations: [_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoryListComponent"], _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_5__["CategoryDetailComponent"], _category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_6__["CategoryEditComponent"]]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/main/content/categories/category-detail/category-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/categories/category-detail/category-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"order\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\"\n         fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button class=\"mr-16\" mat-icon-button [routerLink]=\"'/categories'\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n\n        <div class=\"product-image mr-8 mr-sm-16\" *fuseIfOnDom\n             [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n          <img *ngIf=\"!category.image || category.image == ''\" [src]=\"defaultImage\">\n          <img *ngIf=\"category.image != ''\" [src]=\"category.image\">\n        </div>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n             *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n          <div class=\"h2\">\n            {{category.title}}\n          </div>\n\n        </div>\n      </div>\n      <!-- / APP TITLE -->\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n\n      <!-- CONTENT -->\n      <div class=\"content\">\n\n        <mat-tab-group>\n\n          <mat-tab label=\"Category Details\">\n\n            <div class=\"invoice tab-content p-24\" fusePerfectScrollbar>\n\n              <div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\n\n                <div class=\"invoice-container\">\n\n                  <!-- INVOICE -->\n                  <div class=\"card\">\n\n                    <div class=\"header1\" fxLayout=\"row\">\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" fxFlex=\"60%\">\n                        <div class=\"client\" >\n                          <div class=\"invoice-number\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"mat-headline\">{{category.title}}</span>\n                          </div>\n                          </div>\n                        </div>\n                        <div class=\"issuer\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                          <div class=\"logo\">\n                            <img *ngIf=\"!category.image || category.image == ''\" [src]=\"defaultImage\">\n                            <img *ngIf=\"category.image && category.image != ''\" [src]=\"category.image\">\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <!-- / INVOICE -->\n\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n\n        </mat-tab-group>\n\n      </div>\n      <!-- / CONTENT -->\n\n    </div>\n    <!-- / CONTENT CARD -->\n\n  </div>\n  <!-- / CENTER -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/categories/category-detail/category-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/categories/category-detail/category-detail.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#order .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px; }\n  #order .header .product-image img {\n    height: 100%;\n    width: 100%;\n    max-width: none;\n    border-radius: 50%; }\n  #order .header .subtitle {\n  margin: 6px 0 0 0; }\n  #order .content .mat-tab-group,\n#order .content .mat-tab-body-wrapper,\n#order .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n  #order .content .tab-content {\n  flex: 1 1 auto; }\n  #order .content .tab-content.products .product-row {\n    cursor: pointer; }\n  #order .content .tab-content.invoice {\n    /* PRINT STYLES */ }\n  #order .content .tab-content.invoice #invoice.compact {\n      padding: 0;\n      overflow: auto; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container {\n        padding: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n          width: 900px;\n          max-width: 900px;\n          padding: 64px 88px;\n          overflow: hidden;\n          background: #FFFFFF; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number {\n            font-size: 18px;\n            padding-bottom: 2px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .green {\n              color: green; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .red {\n              color: red; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .title {\n              color: rgba(0, 0, 0, 0.54); }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .number {\n              padding-left: 6px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date {\n            font-size: 18px;\n            padding-bottom: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date .title {\n              color: rgba(0, 0, 0, 0.54); }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date .date {\n              padding-left: 6px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info {\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 22px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .number {\n              padding-left: 6px;\n              color: black; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .green {\n              font-size: 16px;\n              color: green; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .red {\n              font-size: 16px;\n              color: red; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .logo {\n            width: 300px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .logo img {\n              -o-object-fit: cover;\n                 object-fit: cover;\n              width: 100%;\n              height: 300px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .info {\n            padding: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 64px;\n            font-size: 15px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n              padding-left: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n              padding-right: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 8px;\n              font-size: 12px;\n              color: rgba(0, 0, 0, 0.54);\n              max-width: 360px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 32px 0 72px 0; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              text-align: right;\n              font-size: 16px;\n              font-weight: 500;\n              color: rgba(0, 0, 0, 0.54);\n              border-bottom: none;\n              padding: 4px 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 32px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 24px 8px;\n              border-top: 1px solid rgba(0, 0, 0, 0.12);\n              font-size: 35px;\n              font-weight: 300;\n              color: black; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n            font-size: 15px;\n            font-weight: 500;\n            margin-bottom: 24px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo, #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            -ms-flex: 0 1 auto; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n            width: 32px;\n            min-width: 32px;\n            margin-right: 24px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 12px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 18px; }\n  @media print {\n      #order .content .tab-content.invoice {\n        /* Invoice Specific Styles */ }\n        #order .content .tab-content.invoice #invoice.compact .invoice-container {\n          padding: 0; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n            width: 100%;\n            min-width: 0;\n            background: none;\n            padding: 0;\n            box-shadow: none; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n              margin-bottom: 16pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n              padding-right: 0;\n              margin-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n              margin-top: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n                font-size: 10pt;\n                max-width: 60pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                  padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n                padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n                font-size: 10pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n                margin-top: 4pt;\n                font-size: 9pt;\n                max-width: none; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n              margin: 16pt 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n                font-size: 13pt;\n                padding: 4pt 4pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                  text-align: left;\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                  padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n                padding-bottom: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n                padding: 16pt 4pt 0 4pt;\n                font-size: 16pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                  padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n              font-size: 10pt;\n              margin-bottom: 8pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n              margin-right: 8pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n              font-size: 8pt;\n              line-height: normal; } }\n  #order .content .mat-tab-body-content {\n  display: flex; }\n  #order .content .mat-tab-label {\n  height: 64px; }\n  #order .content table {\n  table-layout: fixed; }\n"

/***/ }),

/***/ "./src/app/main/content/categories/category-detail/category-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/content/categories/category-detail/category-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
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



var CategoryDetailComponent = /** @class */ (function () {
    function CategoryDetailComponent(route) {
        this.route = route;
        this.defaultImage = '../../../../../assets/images/ecommerce/product-image-placeholder.png';
    }
    CategoryDetailComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.data['serverResult']) {
            this.category = this.route.snapshot.data['serverResult'];
        }
    };
    CategoryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-detail',
            template: __webpack_require__(/*! ./category-detail.component.html */ "./src/app/main/content/categories/category-detail/category-detail.component.html"),
            styles: [__webpack_require__(/*! ./category-detail.component.scss */ "./src/app/main/content/categories/category-detail/category-detail.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/content/categories/category-edit/category-edit.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/categories/category-edit/category-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button class=\"mr-0 mr-sm-16\" mat-icon-button [routerLink]=\"'/categories'\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n          <div class=\"h2\" *ngIf=\"isEditMode\">\n            {{categoryForm.value.title}}\n          </div>\n          <div class=\"h2\" *ngIf=\"!isEditMode\">\n            New Category\n          </div>\n          <div class=\"subtitle secondary-text\">\n            <span>Category Details</span>\n          </div>\n        </div>\n      </div>\n      <!-- / APP TITLE -->\n\n      <button mat-raised-button class=\"save-product-button mat-white-bg mt-16 mt-sm-0\" [disabled]=\"categoryForm.status == 'INVALID' || tabIndex==2\"\n        (click)=\"f.ngSubmit.emit()\">\n        <span>SAVE</span>\n      </button>\n\n      <!--<button mat-raised-button class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n              (click)=\"printt(categoryForm)\">\n        <span>ss</span>\n      </button>-->\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n\n      <!-- CONTENT -->\n      <div class=\"content\">\n        <form [formGroup]=\"categoryForm\" novalidate (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"product w-100-p\" fxLayout=\"column\"\n          fxFlex>\n          <mat-tab-group (selectedTabChange)=\"tabChanged($event);fixBug($event.index)\">\n            <mat-tab label=\"Basic Info\">\n              <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"tab-content p-24\" fxFlex=\"70%\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">group_work</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input type=\"text\" matInput formControlName=\"title\" name=\"title\" placeholder=\"Title\" required>\n                      <mat-error *ngIf=\"categoryForm.controls.title.invalid\">{{getErrorMessage('title','required','')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"p-4\" fxLayout=\"column\" fxLayoutGap=\"3px\" fxFlex=\"25%\">\n                  <img *ngIf=\"photo != ''\" [src]=\"photo\">\n                  <img *ngIf=\"photo == ''\" [src]=\"defaultImage\">\n                  <input type=\"file\" accept=\"image/*\" #file name=\"image\" fxHide (change)=\"onFileChange($event)\">\n                  <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"browseProfilePicture()\">Browse\n                  </button>\n                  <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"removeFile()\">Remove</button>\n                </div>\n              </div>\n            </mat-tab>\n\n            <mat-tab label=\"Category Fields\" *ngIf=\"isEditMode\">\n              <form class=\"tab-content p-24\" fxFlex [formGroup]=\"fieldsForm\" novalidate>\n                <mat-accordion *ngIf=\"showMe\">\n                  <div formArrayName=\"fields\" *ngIf=\"fieldsForm.controls.fields\">\n                    <mat-expansion-panel *ngFor=\"let field of fieldsForm.controls['fields'].controls; let i = index\" [expanded]=\"false\">\n                      <mat-expansion-panel-header>\n                        <mat-panel-title>\n                          <h3 class=\"text-bold\"> {{field.value.key}}</h3>\n                        </mat-panel-title>\n                        <mat-panel-description>\n\n                        </mat-panel-description>\n                      </mat-expansion-panel-header>\n\n                      <div fxLayout=\"row\">\n                        <!--1-->\n                        <button type=\"button\" mat-icon-button (click)=\"listClick($event, field)\">\n                          <mat-icon *ngIf=\"!field.showSubfolders\">keyboard_arrow_right</mat-icon>\n                          <mat-icon *ngIf=\"field.showSubfolders\">keyboard_arrow_down</mat-icon>\n                        </button>\n                        <div formGroupName=\"{{i}}\" fxLayout=\"column\">\n                          <div fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                            <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i, remove: true}], 'fieldsForm')\" matTooltip=\"Remove {{field.controls.key.value}}\">\n                              <mat-icon>delete</mat-icon>\n                            </button>\n\n                            <mat-form-field class=\"w-100-p\">\n                              <input matInput name=\"fieldkey\" placeholder=\"Key\" formControlName=\"key\" required>\n                            </mat-form-field>\n                            <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'text' || field.controls.type.value === 'choose'\">\n                              <input matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                            </mat-form-field>\n                            <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'number'\">\n                              <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                            </mat-form-field>\n                            <mat-form-field class=\"w-100-p\">\n                              <input type=\"number\" matInput name=\"fieldPriority\" placeholder=\"Priority\" formControlName=\"priority\">\n                            </mat-form-field>\n                            <mat-form-field class=\"w-100-p\">\n                              <mat-select placeholder=\"Type\" name=\"fieldtype\" formControlName=\"type\" ([value])=\"field.controls.type.value\" (change)=\"onSelectType([{val:i, type:'choose'}], field.controls.type.value, 'fieldsForm')\">\n                                <mat-option value=\"text\">Text</mat-option>\n                                <mat-option value=\"number\">Number</mat-option>\n                                <mat-option value=\"choose\">Select</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n\n                            <button type=\"button\" mat-icon-button>\n                              <mat-checkbox matTooltip=\"Is In Filter?\" formControlName=\"isInFilter\"></mat-checkbox>\n                            </button>\n\n                          </div>\n                          <!--2-->\n\n                          <div *ngIf=\"field.controls.type.value === 'choose' && field.controls.values && field.controls.values.length>0\" formArrayName=\"values\"\n                            fxLayout=\"column\">\n                            <div class=\"ml-32\" *ngFor=\"let vv of field.controls.values.controls; let j = index\" fxLayout=\"column\">\n\n                              <div fxLayout=\"column\" formGroupName=\"{{j}}\" *ngIf=\"field.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == field }\">\n                                <div fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                                  <button type=\"button\" mat-icon-button (click)=\"listClick($event, vv)\">\n                                    <mat-icon *ngIf=\"!vv.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                    <mat-icon *ngIf=\"vv.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                  </button>\n                                  <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val: i}, {val: j, remove: true}], 'fieldsForm')\" matTooltip=\"Remove {{vv.controls.value.value}}\">\n                                    <mat-icon>delete</mat-icon>\n                                  </button>\n                                  <mat-form-field class=\"w-100-p\" fxFlex=\"30%\">\n                                    <input matInput name=\"fieldvalue\" placeholder=\"Value\" formControlName=\"value\">\n                                  </mat-form-field>\n                                </div>\n                                <!--3-->\n                                <div fxLayout=\"column\">\n                                  <div *ngIf=\"vv.controls.fields && vv.controls.fields!==null && vv.controls.fields.length>0\" formArrayName=\"fields\">\n                                    <div class=\"ml-32\" *ngFor=\"let ff of vv.controls.fields.controls; let k = index\" fxLayout=\"column\">\n                                      <div fxLayout=\"column\" formGroupName=\"{{k}}\" *ngIf=\"vv.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == vv }\">\n                                        <div fxLayout=\"row\" fxLayoutGap=\"1rem\">\n                                          <button type=\"button\" mat-icon-button (click)=\"listClick($event, ff)\">\n                                            <mat-icon *ngIf=\"!ff.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                            <mat-icon *ngIf=\"ff.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                          </button>\n                                          <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i},{val:j},{val:k, remove:true}], 'fieldsForm')\" matTooltip=\"Remove {{ff.controls.key.value}}\">\n                                            <mat-icon>delete</mat-icon>\n                                          </button>\n\n\n                                          <mat-form-field class=\"w-100-p\">\n                                            <input matInput name=\"ff\" placeholder=\"Key\" formControlName=\"key\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'text' || field.controls.type.value === 'choose'\">\n                                            <input matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'number'\">\n                                            <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"w-100-p\">\n                                            <input type=\"number\" matInput name=\"fieldPriority\" placeholder=\"Priority\" formControlName=\"priority\">\n                                          </mat-form-field>\n                                          <mat-form-field class=\"w-100-p\">\n                                            <mat-select name=\"fft\" placeholder=\"Type\" formControlName=\"type\" ([value])=\"ff.controls.type.value\" (change)=\"onSelectType([{val:i}, {val:j}, {val:k,type:'choose'}], ff.controls.type.value,'fieldsForm')\">\n                                              <mat-option value=\"text\">Text</mat-option>\n                                              <mat-option value=\"number\">Number</mat-option>\n                                              <mat-option value=\"choose\">Select</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n\n                                          <button type=\"button\" mat-icon-button>\n                                            <mat-checkbox matTooltip=\"Is In Filter?\" formControlName=\"isInFilter\"></mat-checkbox>\n                                          </button>\n                                        </div>\n                                        <!--4-->\n                                        <div *ngIf=\"ff.controls.type.value === 'choose'\" formArrayName=\"values\" fxLayout=\"column\">\n                                          <div class=\"ml-32\" *ngFor=\"let vvv of ff.controls.values.controls; let e = index \">\n                                            <div fxLayout=\"column\" formGroupName=\"{{e}}\" *ngIf=\"ff.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == ff }\">\n                                              <div fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                                                <button type=\"button\" mat-icon-button (click)=\"listClick($event, vvv)\">\n                                                  <mat-icon *ngIf=\"!vvv.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                                  <mat-icon *ngIf=\"vvv.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                                </button>\n                                                <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i}, {val:j}, {val:k}, {val:e, remove:true}], 'fieldsForm')\"\n                                                  matTooltip=\"Remove {{vvv.controls.value.value}}\">\n                                                  <mat-icon>delete</mat-icon>\n                                                </button>\n                                                <mat-form-field class=\"w-100-p\" fxFlex=\"30%\">\n                                                  <input matInput name=\"fieldvalue\" placeholder=\"Value\" formControlName=\"value\">\n                                                </mat-form-field>\n                                              </div>\n                                              <!--5-->\n                                              <div fxLayout=\"column\">\n                                                <div *ngIf=\"vvv.controls.fields && vvv.controls.fields!==null && vvv.controls.fields.length>0\" formArrayName=\"fields\">\n                                                  <div class=\"ml-32\" *ngFor=\"let fff of vvv.controls.fields.controls; let kk = index\" fxLayout=\"column\">\n                                                    <div fxLayout=\"column\" formGroupName=\"{{kk}}\" *ngIf=\"vvv.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == vvv }\">\n                                                      <div fxLayout=\"row\" fxLayoutGap=\"1rem\">\n                                                        <button type=\"button\" mat-icon-button (click)=\"listClick($event, fff)\">\n                                                          <mat-icon *ngIf=\"!fff.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                                          <mat-icon *ngIf=\"fff.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                                        </button>\n                                                        <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i},{val:j},{val:k},{val:e},{val:kk, remove:true}], 'fieldsForm')\"\n                                                          matTooltip=\"Remove {{fff.controls.key.value}}\">\n                                                          <mat-icon>delete</mat-icon>\n                                                        </button>\n\n                                                        <mat-form-field class=\"w-100-p\">\n                                                          <input matInput name=\"fff\" placeholder=\"Key\" formControlName=\"key\">\n                                                        </mat-form-field>\n                                                        <mat-form-field class=\"w-100-p\" *ngIf=\"fff.controls.type.value === 'text' || fff.controls.type.value === 'choose'\">\n                                                          <input matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                                        </mat-form-field>\n                                                        <mat-form-field class=\"w-100-p\" *ngIf=\"fff.controls.type.value === 'number'\">\n                                                          <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                                        </mat-form-field>\n                                                        <mat-form-field class=\"w-100-p\">\n                                                          <input type=\"number\" matInput name=\"fieldPriority\" placeholder=\"Priority\" formControlName=\"priority\">\n                                                        </mat-form-field>\n                                                        <mat-form-field class=\"w-100-p\">\n                                                          <mat-select name=\"ffft\" placeholder=\"Type\" formControlName=\"type\" ([value])=\"fff.controls.type.value\" (change)=\"onSelectType([{val:i}, {val:j},{val:k},{val:e}, {val:kk,type:'choose'}], fff.controls.type.value,'fieldsForm')\">\n                                                            <mat-option value=\"text\">Text</mat-option>\n                                                            <mat-option value=\"number\">Number</mat-option>\n                                                            <mat-option value=\"choose\">Select</mat-option>\n                                                          </mat-select>\n                                                        </mat-form-field>\n\n                                                        <button type=\"button\" mat-icon-button>\n                                                          <mat-checkbox matTooltip=\"Is In Filter?\" formControlName=\"isInFilter\"></mat-checkbox>\n                                                        </button>\n\n                                                      </div>\n                                                      <!--6-->\n\n                                                      <div *ngIf=\"fff.controls.type.value === 'choose'\" formArrayName=\"values\">\n                                                        <div class=\"ml-32\" *ngFor=\"let vvvv of fff.controls.values.controls; let ee = index \" fxLayout=\"column\">\n                                                          <div fxLayout=\"row\" fxLayoutGap=\"2rem\" formGroupName=\"{{ee}}\" *ngIf=\"fff.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == fff }\">\n                                                            <button type=\"button\" mat-icon-button (click)=\"listClick($event, vv)\">\n                                                              <mat-icon *ngIf=\"!vvvv.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                                              <mat-icon *ngIf=\"vvvv.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                                            </button>\n                                                            <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i}, {val:j},{val:k},{val:e}, {val:kk}, {val:ee, remove:true}], 'fieldsForm')\"\n                                                              matTooltip=\"Remove {{vvvv.controls.value.value}}\">\n                                                              <mat-icon>delete</mat-icon>\n                                                            </button>\n                                                            <mat-form-field class=\"w-100-p\" fxFlex=\"30%\">\n                                                              <input matInput name=\"fieldvalue\" placeholder=\"Value\" formControlName=\"value\">\n                                                            </mat-form-field>\n                                                          </div>\n                                                        </div>\n                                                        <button class=\"ml-32\" matTooltip=\"Add Value to {{fff.controls.key.value}}\" type=\"button\" mat-icon-button (click)=\"addSomething([{val:i}, {val:j},{val:k},{val:e}, {val:kk,add:true}], 'fieldsForm');listClick($event, fff, 'open')\">\n                                                          <mat-icon aria-label=\"add value\">add</mat-icon>\n                                                        </button>\n                                                      </div>\n                                                      <!--/6 -->\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                                <button class=\"ml-32\" matTooltip=\"Add Field to {{vvv.controls.value.value}}\" type=\"button\" mat-icon-button (click)=\"addSomething([{val:i}, {val:j}, {val:k},{val:e, add: true}], 'fieldsForm');listClick($event, vvv, 'open')\">\n                                                  <mat-icon aria-label=\"add field\">add</mat-icon>\n                                                </button>\n                                              </div>\n                                              <!--/5-->\n                                            </div>\n\n\n                                          </div>\n                                          <button class=\"ml-32\" matTooltip=\"Add Value to {{ff.controls.key.value}}\" type=\"button\" mat-icon-button (click)=\"addSomething([{val:i}, {val:j}, {val:k,add:true}], 'fieldsForm');listClick($event, ff, 'open')\">\n                                            <mat-icon aria-label=\"add value\">add</mat-icon>\n                                          </button>\n                                        </div>\n                                        <!--/4 -->\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <button class=\"ml-32\" matTooltip=\"Add Field to {{vv.controls.value.value}}\" type=\"button\" mat-icon-button (click)=\"addSomething([{val: i}, {val:j,add:true}], 'fieldsForm');listClick($event, vv, 'open')\">\n                                    <mat-icon aria-label=\"add field\">add</mat-icon>\n                                  </button>\n                                </div>\n                                <!--/3-->\n                              </div>\n                            </div>\n                            <button class=\"ml-32\" type=\"button\" mat-icon-button (click)=\"addSomething([{val: i, add: true}], 'fieldsForm');listClick($event, field, 'open')\"\n                              matTooltip=\"Add Value to {{field.controls.key.value}}\">\n                              <mat-icon aria-label=\"add value\">add</mat-icon>\n                            </button>\n\n                          </div>\n                        </div>\n                        <!--/1-->\n                      </div>\n\n\n                    </mat-expansion-panel>\n                  </div>\n                  <br/>\n                  <button type=\"button\" mat-icon-button (click)=\"addSomething(null, 'fieldsForm')\" matTooltip=\"Add Field to the Category {{fieldsForm.controls.title.value}}\">\n                    <mat-icon aria-label=\"add field\">add</mat-icon>\n                  </button>\n                </mat-accordion>\n              </form>\n            </mat-tab>\n\n            <mat-tab label=\"Sub-Categories\" *ngIf=\"isEditMode\">\n              <div class=\"tab-content p-24\" fxFlex>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end end\">\n                  <button mat-button type=\"button\" color=\"warn\" *ngIf=\"isEditMode\" (click)=\"deleteAllSubCategories()\">Delete All Sub-Categories\n                  </button>\n                </div>\n                <mat-accordion *ngIf=\"showMe2\">\n                  <mat-expansion-panel *ngFor=\"let sub of subCategories, let num = index\" (opened)=\"setSelectedForm(sub)\" [expanded]=\"selectedForm && selectedForm.value.id === sub.value.id && panelOpened\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                        <h3 class=\"text-bold\"> {{sub.value.title}}</h3>\n                      </mat-panel-title>\n                      <!--<mat-panel-description>\n\n                        </mat-panel-description>-->\n                    </mat-expansion-panel-header>\n                    <div *ngIf=\"selectedForm\">\n                      <form [formGroup]=\"selectedForm\" novalidate (ngSubmit)=\"onSubmit(selectedForm)\">\n                        <mat-form-field>\n                          <input matInput formControlName=\"title\" placeholder=\"title\">\n                        </mat-form-field>\n                        <div formArrayName=\"fields\" *ngIf=\"selectedForm.controls.fields\">\n                          <div *ngFor=\"let field of getSubCategoryFields(sub); let i = index\">\n                            <div fxLayout=\"row\">\n                              <!--1-->\n                              <button type=\"button\" mat-icon-button (click)=\"listClick($event, field)\">\n                                <mat-icon *ngIf=\"!field.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                <mat-icon *ngIf=\"field.showSubfolders\">keyboard_arrow_down</mat-icon>\n                              </button>\n                              <div formGroupName=\"{{i}}\" fxLayout=\"column\">\n                                <div fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                                  <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i, remove: true}], 'selectedForm')\" matTooltip=\"Remove {{field.controls.key.value}}\">\n                                    <mat-icon>delete</mat-icon>\n                                  </button>\n\n\n                                  <mat-form-field class=\"w-100-p\">\n                                    <input matInput name=\"fieldkey\" placeholder=\"Key\" formControlName=\"key\" required>\n                                  </mat-form-field>\n                                  <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'text' || field.controls.type.value === 'choose'\">\n                                    <input matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                  </mat-form-field>\n                                  <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'number'\">\n                                    <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                  </mat-form-field>\n                                  <mat-form-field class=\"w-100-p\">\n                                    <input type=\"number\" matInput name=\"fieldPriority\" placeholder=\"Priority\" formControlName=\"priority\">\n                                  </mat-form-field>\n                                  <mat-form-field class=\"w-100-p\">\n                                    <mat-select placeholder=\"Type\" name=\"fieldtype\" formControlName=\"type\" ([value])=\"field.controls.type.value\" (change)=\"onSelectType([{val:i, type:'choose'}], field.controls.type.value, 'selectedForm')\">\n                                      <mat-option value=\"text\">Text</mat-option>\n                                      <mat-option value=\"number\">Number</mat-option>\n                                      <mat-option value=\"choose\">Select</mat-option>\n                                    </mat-select>\n                                  </mat-form-field>\n\n                                  <button type=\"button\" mat-icon-button>\n                                    <mat-checkbox matTooltip=\"Is In Filter?\" formControlName=\"isInFilter\"></mat-checkbox>\n                                  </button>\n\n                                </div>\n                                <!--2-->\n\n                                <div *ngIf=\"field.controls.type.value === 'choose' && field.controls.values && field.controls.values.length>0\" formArrayName=\"values\"\n                                  fxLayout=\"column\">\n                                  <div class=\"ml-32\" *ngFor=\"let vv of field.controls.values.controls; let j = index\" fxLayout=\"column\">\n\n                                    <div fxLayout=\"column\" formGroupName=\"{{j}}\" *ngIf=\"field.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == field }\">\n                                      <div fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                                        <button type=\"button\" mat-icon-button (click)=\"listClick($event, vv)\">\n                                          <mat-icon *ngIf=\"!vv.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                          <mat-icon *ngIf=\"vv.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                        </button>\n                                        <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val: i}, {val: j, remove: true}], 'selectedForm')\" matTooltip=\"Remove {{vv.controls.value.value}}\">\n                                          <mat-icon>delete</mat-icon>\n                                        </button>\n                                        <mat-form-field class=\"w-100-p\" fxFlex=\"30%\">\n                                          <input matInput name=\"fieldvalue\" placeholder=\"Value\" formControlName=\"value\">\n                                        </mat-form-field>\n                                      </div>\n                                      <!--3-->\n                                      <div fxLayout=\"column\">\n                                        <div *ngIf=\"vv.controls.fields && vv.controls.fields!==null && vv.controls.fields.length>0\" formArrayName=\"fields\">\n                                          <div class=\"ml-32\" *ngFor=\"let ff of vv.controls.fields.controls; let k = index\" fxLayout=\"column\">\n                                            <div fxLayout=\"column\" formGroupName=\"{{k}}\" *ngIf=\"vv.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == vv }\">\n                                              <div fxLayout=\"row\" fxLayoutGap=\"1rem\">\n                                                <button type=\"button\" mat-icon-button (click)=\"listClick($event, ff)\">\n                                                  <mat-icon *ngIf=\"!ff.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                                  <mat-icon *ngIf=\"ff.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                                </button>\n                                                <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i},{val:j},{val:k, remove:true}], 'selectedForm')\" matTooltip=\"Remove {{ff.controls.key.value}}\">\n                                                  <mat-icon>delete</mat-icon>\n                                                </button>\n\n                                                <mat-form-field class=\"w-100-p\">\n                                                  <input matInput name=\"ff\" placeholder=\"Key\" formControlName=\"key\">\n                                                </mat-form-field>\n                                                <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'text' || field.controls.type.value === 'choose'\">\n                                                  <input matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                                </mat-form-field>\n                                                <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'number'\">\n                                                  <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                                </mat-form-field>\n                                                <mat-form-field class=\"w-100-p\">\n                                                  <input type=\"number\" matInput name=\"fieldPriority\" placeholder=\"Priority\" formControlName=\"priority\">\n                                                </mat-form-field>\n                                                <mat-form-field class=\"w-100-p\">\n                                                  <mat-select name=\"fft\" placeholder=\"Type\" formControlName=\"type\" ([value])=\"ff.controls.type.value\" (change)=\"onSelectType([{val:i}, {val:j}, {val:k,type:'choose'}], ff.controls.type.value,'selectedForm')\">\n                                                    <mat-option value=\"text\">Text</mat-option>\n                                                    <mat-option value=\"number\">Number</mat-option>\n                                                    <mat-option value=\"choose\">Select</mat-option>\n                                                  </mat-select>\n                                                </mat-form-field>\n\n                                                <button type=\"button\">\n                                                  <mat-checkbox matTooltip=\"Is In Filter?\" formControlName=\"isInFilter\"></mat-checkbox>\n                                                </button>\n\n                                              </div>\n                                              <!--4-->\n                                              <div *ngIf=\"ff.controls.type.value === 'choose'\" formArrayName=\"values\" fxLayout=\"column\">\n                                                <div class=\"ml-32\" *ngFor=\"let vvv of ff.controls.values.controls; let e = index \">\n                                                  <div fxLayout=\"column\" formGroupName=\"{{e}}\" *ngIf=\"ff.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == ff }\">\n                                                    <div fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                                                      <button type=\"button\" mat-icon-button (click)=\"listClick($event, vvv)\">\n                                                        <mat-icon *ngIf=\"!vvv.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                                        <mat-icon *ngIf=\"vvv.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                                      </button>\n                                                      <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i}, {val:j}, {val:k}, {val:e, remove:true}], 'selectedForm')\"\n                                                        matTooltip=\"Remove {{vvv.controls.value.value}}\">\n                                                        <mat-icon>delete</mat-icon>\n                                                      </button>\n                                                      <mat-form-field class=\"w-100-p\" fxFlex=\"30%\">\n                                                        <input matInput name=\"fieldvalue\" placeholder=\"Value\" formControlName=\"value\">\n                                                      </mat-form-field>\n                                                    </div>\n                                                    <!--5-->\n                                                    <div fxLayout=\"column\">\n                                                      <div *ngIf=\"vvv.controls.fields && vvv.controls.fields!==null && vvv.controls.fields.length>0\" formArrayName=\"fields\">\n                                                        <div class=\"ml-32\" *ngFor=\"let fff of vvv.controls.fields.controls; let kk = index\" fxLayout=\"column\">\n                                                          <div fxLayout=\"column\" formGroupName=\"{{kk}}\" *ngIf=\"vvv.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == vvv }\">\n                                                            <div fxLayout=\"row\" fxLayoutGap=\"1rem\">\n                                                              <button type=\"button\" mat-icon-button (click)=\"listClick($event, fff)\">\n                                                                <mat-icon *ngIf=\"!fff.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                                                <mat-icon *ngIf=\"fff.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                                              </button>\n                                                              <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i},{val:j},{val:k},{val:e},{val:kk, remove:true}], 'selectedForm')\"\n                                                                matTooltip=\"Remove {{fff.controls.key.value}}\">\n                                                                <mat-icon>delete</mat-icon>\n                                                              </button>\n\n                                                              <mat-checkbox style=\"margin: 10px 0\" matTooltip=\"Is In Filter?\" formControlName=\"isInFilter\"></mat-checkbox>\n\n                                                              <mat-form-field class=\"w-100-p\">\n                                                                <input matInput name=\"fff\" placeholder=\"Key\" formControlName=\"key\">\n                                                              </mat-form-field>\n                                                              <mat-form-field class=\"w-100-p\" *ngIf=\"fff.controls.type.value === 'text' || fff.controls.type.value === 'choose'\">\n                                                                <input matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                                              </mat-form-field>\n                                                              <mat-form-field class=\"w-100-p\" *ngIf=\"fff.controls.type.value === 'number'\">\n                                                                <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                                              </mat-form-field>\n                                                              <mat-form-field class=\"w-100-p\">\n                                                                <input type=\"number\" matInput name=\"fieldPriority\" placeholder=\"Priority\" formControlName=\"priority\">\n                                                              </mat-form-field>\n                                                              <mat-form-field class=\"w-100-p\">\n                                                                <mat-select name=\"ffft\" placeholder=\"Type\" formControlName=\"type\" ([value])=\"fff.controls.type.value\" (change)=\"onSelectType([{val:i}, {val:j},{val:k},{val:e}, {val:kk,type:'choose'}], fff.controls.type.value,'selectedForm')\">\n                                                                  <mat-option value=\"text\">Text</mat-option>\n                                                                  <mat-option value=\"number\">Number</mat-option>\n                                                                  <mat-option value=\"choose\">Select</mat-option>\n                                                                </mat-select>\n                                                              </mat-form-field>\n                                                            </div>\n                                                            <!--6-->\n\n                                                            <div *ngIf=\"fff.controls.type.value === 'choose'\" formArrayName=\"values\">\n                                                              <div class=\"ml-32\" *ngFor=\"let vvvv of fff.controls.values.controls; let ee = index \" fxLayout=\"column\">\n                                                                <div fxLayout=\"row\" fxLayoutGap=\"2rem\" formGroupName=\"{{ee}}\" *ngIf=\"fff.showSubfolders\" [ngClass]=\"{ 'subfolder': selectedItem == fff }\">\n                                                                  <button type=\"button\" mat-icon-button (click)=\"listClick($event, vvvv)\">\n                                                                    <mat-icon *ngIf=\"!vvvv.showSubfolders\">keyboard_arrow_right</mat-icon>\n                                                                    <mat-icon *ngIf=\"vvvv.showSubfolders\">keyboard_arrow_down</mat-icon>\n                                                                  </button>\n                                                                  <button type=\"button\" mat-icon-button (click)=\"removeSomething([{val:i}, {val:j},{val:k},{val:e}, {val:kk}, {val:ee, remove:true}], 'selectedForm')\"\n                                                                    matTooltip=\"Remove {{vvvv.controls.value.value}}\">\n                                                                    <mat-icon>delete</mat-icon>\n                                                                  </button>\n                                                                  <mat-form-field class=\"w-100-p\" fxFlex=\"30%\">\n                                                                    <input matInput name=\"fieldvalue\" placeholder=\"Value\" formControlName=\"value\">\n                                                                  </mat-form-field>\n                                                                </div>\n                                                              </div>\n                                                              <button class=\"ml-32\" matTooltip=\"Add Value to {{fff.controls.key.value}}\" type=\"button\" mat-icon-button (click)=\"addSomething([{val:i}, {val:j},{val:k},{val:e}, {val:kk,add:true}], 'selectedForm');listClick($event, fff, 'open')\">\n                                                                <mat-icon aria-label=\"add value\">add</mat-icon>\n                                                              </button>\n                                                            </div>\n                                                            <!--/6 -->\n                                                          </div>\n                                                        </div>\n                                                      </div>\n                                                      <button class=\"ml-32\" matTooltip=\"Add Field to {{vvv.controls.value.value}}\" type=\"button\" mat-icon-button (click)=\"addSomething([{val:i}, {val:j}, {val:k},{val:e, add: true}], 'selectedForm');listClick($event, vvv, 'open')\">\n                                                        <mat-icon aria-label=\"add field\">add</mat-icon>\n                                                      </button>\n                                                    </div>\n                                                    <!--/5-->\n                                                  </div>\n\n\n                                                </div>\n                                                <button class=\"ml-32\" matTooltip=\"Add Value to {{ff.controls.key.value}}\" type=\"button\" mat-icon-button (click)=\"addSomething([{val:i}, {val:j}, {val:k,add:true}], 'selectedForm');listClick($event, ff, 'open')\">\n                                                  <mat-icon aria-label=\"add value\">add</mat-icon>\n                                                </button>\n                                              </div>\n                                              <!--/4 -->\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <button class=\"ml-32\" matTooltip=\"Add Field to {{vv.controls.value.value}}\" type=\"button\" mat-icon-button (click)=\"addSomething([{val: i}, {val:j,add:true}], 'selectedForm');listClick($event, vv, 'open')\">\n                                          <mat-icon aria-label=\"add field\">add</mat-icon>\n                                        </button>\n                                      </div>\n                                      <!--/3-->\n                                    </div>\n                                  </div>\n                                  <button class=\"ml-32\" type=\"button\" mat-icon-button (click)=\"addSomething([{val: i, add: true}], 'selectedForm');listClick($event, field, 'open')\"\n                                    matTooltip=\"Add Value to {{field.controls.key.value}}\">\n                                    <mat-icon aria-label=\"add value\">add</mat-icon>\n                                  </button>\n\n                                </div>\n                              </div>\n                              <!--/1-->\n                            </div>\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n\n                    <button type=\"button\" mat-icon-button (click)=\"addSomething(null, 'selectedForm')\" matTooltip=\"Add Main Field to the SubCategory \">\n                      <mat-icon aria-label=\"add field\">add</mat-icon>\n                    </button>\n\n                    <mat-action-row *ngIf=\"selectedForm\">\n                      <button mat-button color=\"accent\" type=\"button\" *ngIf=\"isEditMode\" matTooltip=\"Save subcategory \" (click)=\"saveSubCategory()\">Save\n                        <!--  [disabled]=\"(selectedForm.value.id === sub.value.id)&& selectedForm.status === 'INVALID')\n                                || (selectedForm.controls.fields && selectedForm.controls.fields.status === 'INVALID')\n                                ||(selectedForm.controls.fields && selectedForm.controls.fields.pristine === true)-->\n                      </button>\n\n                      <button mat-button type=\"button\" color=\"warn\" *ngIf=\"isEditMode\" (click)=\"deleteSubCategory(sub)\">Delete\n                      </button>\n                    </mat-action-row>\n                  </mat-expansion-panel>\n                </mat-accordion>\n                <button mat-icon-button type=\"button\" color=\"primary\" (click)=\"addNewSubCategory()\">\n                  <mat-icon>add</mat-icon>\n                </button>\n              </div>\n            </mat-tab>\n          </mat-tab-group>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/categories/category-edit/category-edit.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/categories/category-edit/category-edit.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#product .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px; }\n  #product .header .product-image img {\n    height: 100%;\n    width: 100%;\n    max-width: none;\n    border-radius: 50%; }\n  #product .header .subtitle {\n  margin: 6px 0 0 0; }\n  #product .content .mat-tab-body-content {\n  background: blue; }\n  #product .content .mat-tab-body-content .tab-content {\n    background: blue; }\n  #product .content .mat-tab-body-content .tab-content .mat-accordion {\n      background: blue; }\n  #product .content .mat-tab-body-content .tab-content .mat-accordion .mat-expansion-panel {\n        background: blue; }\n  #product .content .mat-tab-body-content .tab-content .mat-accordion .mat-expansion-panel .mat-expansion-panel-content {\n          overflow: unset !important; }\n  #product .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #product .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n  #product .content .product img {\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 250px;\n  /* width: 200px;\n        height: 200px;*/ }\n"

/***/ }),

/***/ "./src/app/main/content/categories/category-edit/category-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/categories/category-edit/category-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/animations */ "./src/app/core/animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories.service */ "./src/app/main/content/categories/categories.service.ts");
/* harmony import */ var _categories_category_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../categories/category.model */ "./src/app/main/content/categories/category.model.ts");
/* harmony import */ var _categories_subCategories_subCategories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../categories/subCategories/subCategories.service */ "./src/app/main/content/categories/subCategories/subCategories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/splash-screen.service */ "./src/app/core/services/splash-screen.service.ts");
/* harmony import */ var _shared_helpers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helpers.service */ "./src/app/main/content/shared/helpers.service.ts");
/* harmony import */ var _shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/enums/page-action */ "./src/app/main/content/shared/enums/page-action.ts");
/* harmony import */ var _GUID_GUID_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../GUID/GUID.module */ "./src/app/main/content/GUID/GUID.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/components/confirm-dialog/confirm-dialog.component */ "./src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//import { JsonEditorComponent, JsonEditorOptions } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';
var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(route, router, categoriesService, subCategoriesService, loadingScreen, helpers, dialog, formBuilder) {
        this.route = route;
        this.router = router;
        this.categoriesService = categoriesService;
        this.subCategoriesService = subCategoriesService;
        this.loadingScreen = loadingScreen;
        this.helpers = helpers;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.subCategories = [];
        this.isEditMode = false;
        this.photo = '';
        this.defaultImage = '../../../../../assets/images/ecommerce/product-image-placeholder.png';
        this.panelOpened = false;
        this.fieldsPanelOpen = false;
        this.finalValues = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.tabIndex = -1;
        this.showMe = false;
        this.showMe2 = false;
        this.category = new _categories_category_model__WEBPACK_IMPORTED_MODULE_4__["Category"]();
        this.Guid = new _GUID_GUID_module__WEBPACK_IMPORTED_MODULE_10__["GUID"]();
        this.data = { "products": [{ "name": "car", "product": [{ "name": "honda", "model": [{ "id": "civic", "name": "civic" }, { "id": "accord", "name": "accord" }, { "id": "crv", "name": "crv" }, { "id": "pilot", "name": "pilot" }, { "id": "odyssey", "name": "odyssey" }] }] }] };
    }
    CategoryEditComponent.prototype.fixBug = function (index) {
        if (index === 1) {
            this.showMe = true;
            this.showMe2 = false;
        }
        else if (index === 2) {
            this.showMe2 = true;
            this.showMe = false;
        }
        else {
            this.showMe = false;
            this.showMe2 = false;
        }
    };
    CategoryEditComponent.prototype.getErrorMessage = function (fieldName, required) {
        return this.categoryForm.controls[fieldName].hasError(required) ? 'You must enter a value' :
            '';
    };
    CategoryEditComponent.prototype.readFile = function (inputValue) {
        var _this = this;
        this.categoryForm.value.image = inputValue.files[0];
        var reader = new FileReader();
        reader.onloadend = function (e) {
            _this.photo = reader.result;
        };
        reader.readAsDataURL(this.categoryForm.value.image);
    };
    CategoryEditComponent.prototype.browseProfilePicture = function () {
        console.log(this.fileSelector);
        this.fileSelector.nativeElement.click();
        return false;
    };
    CategoryEditComponent.prototype.removeFile = function () {
        console.log('this.categoryForm ', this.categoryForm);
        this.photo = '';
        this.categoryForm.value.image = '';
    };
    CategoryEditComponent.prototype.onFileChange = function (event) {
        console.log(event);
        this.readFile(event.target);
    };
    CategoryEditComponent.prototype.getSubCategoryFields = function () {
        if (this.selectedForm) {
            // console.log('this.selectedForm.controls.fields.controls ', this.selectedForm.controls.fields.controls);
            return this.selectedForm.controls['fields']['controls'];
        }
    };
    CategoryEditComponent.prototype.listClick = function (event, newValue, state) {
        console.log(newValue);
        this.selectedItem = newValue;
        if (state)
            newValue.showSubfolders = true;
        else {
            newValue.showSubfolders = !newValue.showSubfolders;
        }
        event.stopPropagation();
    };
    CategoryEditComponent.prototype.addSomething = function (levels, from) {
        if (levels === void 0) { levels = null; }
        console.log("addSomething ", levels);
        if (!this[from].controls['fields']) {
            this[from].controls['fields'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        }
        if (levels == null) {
            var item = this[from];
            var subItems = item.get('fields');
            subItems.push(this.createItem(''));
        }
        else {
            if (levels[0] && levels[0].add) {
                var subItems = void 0;
                var items = this[from]['controls']['fields']['controls'][levels[0].val];
                subItems = items.get('values');
                if (!subItems || subItems == null) {
                    // alert()
                    this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
                    items = this[from]['controls']['fields']['controls'][levels[0].val];
                    subItems = items.get('values');
                    console.log('subItems', subItems);
                }
                if (levels[0].type == 'choose')
                    subItems.push(this.createSubItem(levels[0]));
                else
                    subItems.push(this.createSubItem(''));
            }
            if (levels[1] && levels[1].add) {
                var subItems = void 0;
                var items = this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val];
                subItems = items.get('fields');
                if (!subItems || subItems == null) {
                    this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
                    items = this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val];
                    subItems = items.get('fields');
                    console.log('subItems', subItems);
                }
                subItems.push(this.createSubItem2(''));
            }
            if (levels[2] && levels[2].add) {
                var subItems = void 0;
                var items = this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val];
                subItems = items.get('values');
                if (!subItems || subItems == null) {
                    // alert()
                    this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val]['controls']['values'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
                    items = this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val];
                    subItems = items.get('values');
                    console.log('subItems', subItems);
                }
                if (levels[2].type == 'choose')
                    subItems.push(this.createSubItem3(levels[2]));
                else
                    subItems.push(this.createSubItem3(''));
            }
            if (levels[3] && levels[3].add) {
                var subItems = void 0;
                var items = this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val]['controls']['values']['controls'][levels[3].val];
                subItems = items.get('fields');
                if (!subItems || subItems == null) {
                    this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val]['controls']['values']['controls'][levels[3].val]['controls']['fields'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
                    items = this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val]['controls']['values']['controls'][levels[3].val];
                    subItems = items.get('fields');
                    console.log('subItems', subItems);
                }
                subItems.push(this.createSubItem4(''));
                console.log('subItems', subItems);
            }
            if (levels[4] && levels[4].add) {
                var subItems = void 0;
                var items = this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val]['controls']['values']['controls'][levels[3].val]['controls']['fields']['controls'][levels[4].val];
                subItems = items.get('values');
                if (!subItems || subItems == null) {
                    // alert()
                    this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val]['controls']['values']['controls'][levels[3].val]['controls']['fields']['controls'][levels[4].val]['controls']['values'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
                    items = this[from]['controls']['fields']['controls'][levels[0].val]['controls']['values']['controls'][levels[1].val]['controls']['fields']['controls'][levels[2].val]['controls']['values']['controls'][levels[3].val]['controls']['fields']['controls'][levels[4].val];
                    subItems = items.get('values');
                    console.log('subItems', subItems);
                }
                if (levels[4].type == 'choose')
                    subItems.push(this.createSubItem5(levels[4]));
                else
                    subItems.push(this.createSubItem5(''));
            }
        }
    };
    CategoryEditComponent.prototype.removeSomething = function (levels, from) {
        if (levels === void 0) { levels = null; }
        if (levels[0] && levels[0].remove) {
            var level = this[from].get('fields');
            level.removeAt(levels[0].val);
        }
        if (levels[1] && levels[1].remove) {
            var level = this[from].get('fields')['controls'][levels[0].val]
                .get('values');
            level.removeAt(levels[1].val);
        }
        if (levels[2] && levels[2].remove) {
            var level = this[from].get('fields')['controls'][levels[0].val]
                .get('values')['controls'][levels[1].val]
                .get('fields');
            level.removeAt(levels[2].val);
        }
        if (levels[3] && levels[3].remove) {
            var level = this[from].get('fields')['controls'][levels[0].val]
                .get('values')['controls'][levels[1].val]
                .get('fields')['controls'][levels[2].val]
                .get('values');
            level.removeAt(levels[3].val);
        }
        if (levels[4] && levels[4].remove) {
            var level = this[from].get('fields')['controls'][levels[0].val]
                .get('values')['controls'][levels[1].val]
                .get('fields')['controls'][levels[2].val]
                .get('values')['controls'][levels[3].val]
                .get('fields');
            level.removeAt(levels[4].val);
        }
        if (levels[5] && levels[5].remove) {
            var level = this[from].get('fields')['controls'][levels[0].val]
                .get('values')['controls'][levels[1].val]
                .get('fields')['controls'][levels[2].val]
                .get('values')['controls'][levels[3].val]
                .get('fields')['controls'][levels[4].val]
                .get('values');
            level.removeAt(levels[5].val);
        }
    };
    CategoryEditComponent.prototype.onSelectType = function (level, type, from) {
        console.log('level, type ', level, type);
        if (type === 'choose') {
            if (level[0] && level[0].type == 'choose') {
                level[0].add = true;
                level[0].type = 'choose';
                this.addSomething(level, from);
            }
            else if (level[2] && level[2].type == 'choose') {
                level[2].add = true;
                console.log('level', level);
                this.addSomething(level, from);
            }
        }
    };
    CategoryEditComponent.prototype.setSelectedFieldsPanel = function (field) {
        this.selectedFieldPanel = field;
        this.fieldsPanelOpen = true;
    };
    CategoryEditComponent.prototype.setSelectedForm = function (sub, close) {
        console.log('setSelectedForm ', sub);
        this.selectedForm = sub;
        if (close == 'close')
            this.panelOpened = false;
        else
            this.panelOpened = true;
    };
    CategoryEditComponent.prototype.createItem = function (obj) {
        if (obj.type == 'choose' && obj.values && obj.values.length > 0) {
            var subArr = [];
            for (var i = 0; i < obj.values.length; i++) {
                subArr.push(this.createSubItem(obj.values[i]));
            }
            return this.formBuilder.group({
                _id: obj._id || this.Guid.newGuid(),
                key: obj.key || 'New Field',
                type: obj.type || '',
                value: obj.value || '',
                priority: obj.priority || '',
                isInFilter: obj.isInFilter || '',
                values: this.formBuilder.array(subArr)
            });
        }
        else {
            return this.formBuilder.group({
                _id: obj._id || this.Guid.newGuid(),
                key: obj.key || 'New Field',
                type: obj.type || '',
                value: obj.value || '',
                priority: obj.priority || '',
                isInFilter: obj.isInFilter || '',
                values: this.formBuilder.array([])
            });
        }
    };
    CategoryEditComponent.prototype.createSubItem5 = function (subItem) {
        console.log('createSubItem5 ');
        return this.formBuilder.group({
            value: subItem.value || ''
        });
    };
    CategoryEditComponent.prototype.createSubItem4 = function (subItem) {
        console.log('createSubItem4 ');
        if (subItem.type == 'choose' && subItem.values && subItem.values.length > 0) {
            var subArr = [];
            for (var i = 0; i < subItem.values.length; i++) {
                subArr.push(this.createSubItem5(subItem.values[i]));
            }
            return this.formBuilder.group({
                _id: subItem._id || this.Guid.newGuid(),
                key: subItem.key,
                type: subItem.type,
                priority: subItem.priority,
                isInFilter: subItem.isInFilter,
                value: subItem.value || '',
                values: this.formBuilder.array(subArr)
            });
        }
        else {
            console.log('createSubItem4 return else');
            return this.formBuilder.group({
                _id: subItem._id || this.Guid.newGuid(),
                key: subItem.key,
                type: subItem.type,
                priority: subItem.priority,
                isInFilter: subItem.isInFilter,
                value: subItem.value,
                values: this.formBuilder.array([])
            });
        }
    };
    CategoryEditComponent.prototype.createSubItem3 = function (subItem) {
        if (subItem.fields && subItem.fields.length > 0) {
            var subArr = [];
            for (var i = 0; i < subItem.fields.length; i++) {
                subArr.push(this.createSubItem4(subItem.fields[i]));
            }
            return this.formBuilder.group({
                value: subItem.value || '',
                fields: this.formBuilder.array(subArr)
            });
        }
        else {
            console.log('createSubItem3 return');
            return this.formBuilder.group({
                value: subItem.value || '',
                fields: this.formBuilder.array([])
            });
        }
    };
    CategoryEditComponent.prototype.createSubItem2 = function (subItem) {
        if (subItem.type == 'choose' && subItem.values && subItem.values.length > 0) {
            var subArr = [];
            for (var i = 0; i < subItem.values.length; i++) {
                subArr.push(this.createSubItem3(subItem.values[i]));
            }
            console.log('subArr ', subArr);
            return this.formBuilder.group({
                _id: subItem._id || this.Guid.newGuid(),
                key: subItem.key,
                type: subItem.type,
                priority: subItem.priority,
                isInFilter: subItem.isInFilter,
                value: subItem.value || '',
                values: this.formBuilder.array(subArr)
            });
        }
        else {
            return this.formBuilder.group({
                _id: subItem._id || this.Guid.newGuid(),
                key: subItem.key,
                type: subItem.type,
                priority: subItem.priority,
                isInFilter: subItem.isInFilter,
                value: subItem.value,
                values: this.formBuilder.array([])
            });
        }
    };
    CategoryEditComponent.prototype.createSubItem = function (subItem) {
        if (subItem.fields && subItem.fields.length > 0) {
            var subArr = [];
            for (var i = 0; i < subItem.fields.length; i++) {
                subArr.push(this.createSubItem2(subItem.fields[i]));
            }
            return this.formBuilder.group({
                value: subItem.value || '',
                fields: this.formBuilder.array(subArr)
            });
        }
        else {
            return this.formBuilder.group({
                value: subItem.value || '',
                fields: this.formBuilder.array([])
            });
        }
    };
    CategoryEditComponent.prototype.createForm = function (obj) {
        console.log('obj.title  ', obj.title);
        if (obj.fields && obj.fields.length > 0) {
            var arr = [];
            for (var i = 0; i < obj.fields.length; i++) {
                arr.push(this.createItem(obj.fields[i]));
            }
            return this.formBuilder.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](obj.title || 'New Sub-category', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](obj.categoryId || ''),
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](obj.id || ''),
                fields: this.formBuilder.array(arr)
            });
        }
        else {
            return this.formBuilder.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](obj.title || 'New Sub-category', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
                categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](obj.categoryId || ''),
                id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](obj.id || ''),
                fields: this.formBuilder.array([])
            });
        }
    };
    CategoryEditComponent.prototype.getSubCategoriesListing = function () {
        var _this = this;
        this.subCategories = [];
        this.loadingScreen.show();
        this.subCategoriesService.listing(this.category.id).then(function (val) {
            console.log('val.items ', val);
            for (var i = 0; i < val.items.length; i++) {
                //this.createForm(val.items[i].fields);
                _this.subCategories.push(_this.createForm(val.items[i]));
            }
            console.log('this.subCategories ', _this.subCategories);
            _this.loadingScreen.hide();
        }, function (reason) {
            _this.loadingScreen.hide();
            // console.log('error ', reason);
        });
        this.panelOpened = false;
    };
    // ===========================================================================================//
    CategoryEditComponent.prototype.saveSubCategory = function () {
        var _this = this;
        console.log('this.selectedForm.value ', this.selectedForm);
        this.loadingScreen.show();
        if (this.selectedForm.value.id === 0 || this.selectedForm.value.id === '') {
            console.log('add ');
            delete this.selectedForm.value.id;
            this.subCategoriesService.add(this.category.id, this.selectedForm.value).then(function (val) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__["PageAction"].Create, true, 'sub-Categories');
                _this.getSubCategoriesListing();
                _this.loadingScreen.hide();
            }, function (reason) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__["PageAction"].Create, false, 'sub-Categories');
                _this.loadingScreen.hide();
                console.log('error ', reason);
            });
        }
        else {
            console.log('edit ');
            this.subCategoriesService.update(this.category.id, this.selectedForm.value).then(function (val) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__["PageAction"].Update, true, 'sub-Categories');
                _this.getSubCategoriesListing();
                _this.loadingScreen.hide();
                //this.selectedForm = new FormGroup({});
                //this.panelOpened = false;
                //this.finalValues = new FormArray([]);
            }, function (reason) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__["PageAction"].Update, false, 'sub-Categories');
                _this.loadingScreen.hide();
                console.log('error ', reason);
            });
        }
    };
    CategoryEditComponent.prototype.addNewSubCategory = function () {
        var sub = this.createForm('');
        this.subCategories.push(sub);
        this.selectedForm = sub;
    };
    CategoryEditComponent.prototype.deleteSubCategory = function (item) {
        var _this = this;
        console.log('item ', item);
        if (item.value.id && item.value.id !== 0) {
            this.confirmDialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["FuseConfirmDialogComponent"], {
                disableClose: false
            });
            this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the sub-category (' + item.value.title + ') permanently?';
            this.confirmDialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.loadingScreen.show();
                    _this.subCategoriesService.delete(_this.category.id, item.value).then(function (serverResult) {
                        console.log('serverResult ', serverResult);
                        _this.subCategories = _this.subCategories.filter(function (item1) { return item1 !== item; });
                        _this.loadingScreen.hide();
                    }, function (reason) {
                        _this.loadingScreen.hide();
                        console.log(reason);
                    });
                }
                _this.confirmDialogRef = null;
            });
        }
        else {
            this.subCategories = this.subCategories.filter(function (item1) { return item1 !== item; });
        }
    };
    CategoryEditComponent.prototype.deleteAllSubCategories = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_12__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete ALL the sub-categories permanently?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.loadingScreen.show();
                _this.subCategoriesService.deleteAll(_this.category.id).then(function (serverResult) {
                    console.log('serverResult ', serverResult);
                    _this.subCategories = [];
                    _this.loadingScreen.hide();
                }, function (reason) {
                    _this.loadingScreen.hide();
                    console.log(reason);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    CategoryEditComponent.prototype.tabChanged = function (tabChangeEvent) {
        this.fieldsPanelOpen = false;
        this.panelOpened = false;
        this.tabIndex = tabChangeEvent.index;
        if (this.isEditMode && tabChangeEvent.index === 2 && this.subCategories.length === 0) {
            this.getSubCategoriesListing();
        }
    };
    CategoryEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.isEditMode) {
            console.log('this.fieldsForm edit', this.fieldsForm.value);
            if (this.fieldsForm.value.fields && this.fieldsForm.value.fields.length > 0) {
                this.categoryForm.value.fields = this.fieldsForm.value.fields;
            }
            console.log('this.categoryForm edit', this.categoryForm.value);
            this.categoriesService.update(this.categoryForm.value).then(function (val) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__["PageAction"].Update, true, 'categories');
                _this.router.navigate(['/categories']);
                _this.loadingScreen.hide();
            }, function (reason) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__["PageAction"].Update, false, 'categories');
                _this.loadingScreen.hide();
                console.log('error ', reason);
            });
        }
        else {
            delete this.categoryForm.value.id;
            console.log('this.categoryForm add', this.categoryForm.value);
            this.categoriesService.add(this.categoryForm.value).then(function (val) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__["PageAction"].Create, true, 'categories');
                _this.router.navigate(['/categories']);
                _this.loadingScreen.hide();
            }, function (reason) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_9__["PageAction"].Create, false, 'categories');
                _this.loadingScreen.hide();
                console.log('error ', reason);
            });
        }
    };
    CategoryEditComponent.prototype.uploadImages = function (image) {
        var _this = this;
        console.log('images ', image);
        if (image && image !== '') {
            var formData = new FormData();
            console.log('typeof images[i] ', typeof image);
            if (typeof image !== 'string') {
                formData.append('file', image);
                this.categoriesService.uploadImages(formData).then(function (val) {
                    _this.categoryForm.value.image = val[0];
                    _this.submit();
                }, function (reason) {
                    console.log('error ', reason);
                });
            }
            else {
                this.categoryForm.value.image = image;
                this.submit();
            }
        }
        else {
            this.submit();
        }
    };
    CategoryEditComponent.prototype.onSubmit = function (thisAdvertForm) {
        console.log('this.categoryForm ', this.categoryForm);
        if (thisAdvertForm.valid) {
            this.loadingScreen.show();
            this.uploadImages(this.categoryForm.value.image);
        }
    };
    CategoryEditComponent.prototype.ngOnInit = function () {
        console.log('this.route.snapshot.data[\'serverResult\'] ', this.route.snapshot.data['serverResult']);
        this.isEditMode = this.route.snapshot.data['isEditMode'];
        this.subCategories = [];
        if (this.route.snapshot.data['serverResult']) {
            this.category = this.route.snapshot.data['serverResult'];
            this.fieldsForm = this.createForm(this.category);
            console.log('this.fieldsForm ', this.fieldsForm);
            this.fieldsPanelOpen = false;
            this.photo = this.category.image;
        }
        else
            this.photo = '';
        this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.category.id),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.category.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.category.image)
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CategoryEditComponent.prototype, "fileSelector", void 0);
    CategoryEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-edit',
            template: __webpack_require__(/*! ./category-edit.component.html */ "./src/app/main/content/categories/category-edit/category-edit.component.html"),
            styles: [__webpack_require__(/*! ./category-edit.component.scss */ "./src/app/main/content/categories/category-edit/category-edit.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"],
            _categories_subCategories_subCategories_service__WEBPACK_IMPORTED_MODULE_5__["SubCategoriesService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_7__["FuseSplashScreenService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_8__["HelpersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());



/***/ }),

/***/ "./src/app/main/content/categories/category-list/category-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/categories/category-list/category-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"users\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\n         fxLayoutAlign.gt-xs=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div class=\"logo my-12 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n          group_work\n        </mat-icon>\n        <span class=\"logo-text h1\" *fuseIfOnDom\n              [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Categories</span>\n      </div>\n      <!-- / APP TITLE -->\n      <!-- SEARCH -->\n      <div class=\"search-input-wrapper ml-8 m-sm-0\"\n           fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <label class=\"mr-8\">\n          <mat-icon class=\"secondary-text\">search</mat-icon>\n        </label>\n        <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n      </div>\n      <!-- / SEARCH -->\n\n      <button mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\" aria-label=\"new\"\n              [routerLink]=\"'/categories/new'\">\n        <span>New</span>\n      </button>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n      <div class=\"table-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n        <div class=\"table-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n          No Data Available\n        </div>\n      </div>\n\n      <mat-table #table [dataSource]=\"dataSource\" [@animateStagger]=\"{value:'50'}\" class=\"items-table\"\n                 fusePerfectScrollbar>\n\n        <!-- Id Column -->\n        <ng-container cdkColumnDef=\"id\">\n          <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm fxFlex=\"10%\">ID</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\" fxHide fxShow.gt-sm fxFlex=\"10%\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n            <p class=\" text-truncate mat-caption m-0\">{{item.id.slice(0, 10)}}</p>\n            <p class=\"text-truncate  mat-caption m-0\">{{item.id.slice(10,20)}}</p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Image Column -->\n        <ng-container cdkColumnDef=\"image\">\n          <mat-header-cell *cdkHeaderCellDef>Image</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <img class=\"item-image\"\n                 *ngIf=\"item.image\" [alt]=\"item.title\"\n                 [src]=\"item.image\"/>\n            <img *ngIf=\"!item.image\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\n          </mat-cell>\n        </ng-container>\n\n        <!-- Title Column -->\n        <ng-container cdkColumnDef=\"title\">\n          <mat-header-cell *cdkHeaderCellDef>Title</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <p class=\"text-truncate font-weight-600\">{{item.title}}</p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Buttons Column -->\n        <ng-container cdkColumnDef=\"buttons\">\n          <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n\n              <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                      (click)=\"$event.stopPropagation();\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n\n              <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"edit\" (click)=\"editItem(item.id)\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"remove\" (click)=\"deleteItem(item)\">\n                  <mat-icon>delete</mat-icon>\n                  <span>Remove</span>\n                </button>\n              </mat-menu>\n            </div>\n\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *cdkRowDef=\"let item; columns: displayedColumns;\" (click)=\"itemDetails(item.id)\" matRipple\n                 [@animate]=\"{value:'*',params:{y:'100%'}}\"\n                 class=\"item\">\n        </mat-row>\n      </mat-table>\n\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\" [pageSizeOptions]=[10,20,30]>\n      </mat-paginator>\n    </div>\n    <!-- / CONTENT CARD -->\n  </div>\n  <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/categories/category-list/category-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/categories/category-list/category-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host .header {\n    height: 176px !important;\n    min-height: 176px !important;\n    max-height: 176px !important; } }\n@media (max-width: 599px) {\n  :host .top-bg {\n    height: 240px; } }\n:host .items-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .items-table .mat-header-row {\n    min-height: 64px; }\n:host .items-table .item {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .items-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n:host .items-table .mat-column-id {\n    flex: 0 1 84px; }\n:host .items-table .mat-column-image {\n    flex: 0 1 84px; }\n:host .items-table .mat-column-image .item-image {\n      width: 52px;\n      height: 52px; }\n:host .items-table .mat-column-buttons {\n    flex: 0 1 80px; }\n:host .items-table .active-icon {\n    border-radius: 50%; }\n:host .table-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 26px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n:host .table-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n:host .table-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n:host .mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/content/categories/category-list/category-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/categories/category-list/category-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../categories.service */ "./src/app/main/content/categories/categories.service.ts");
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







var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(categoriesService, router, activatedRoute, dialog, loadingScreen) {
        this.categoriesService = categoriesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.loadingScreen = loadingScreen;
        this.displayedColumns = ['id', 'image', 'title', 'buttons'];
        this.btnState = false;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = 0;
        this.startedWith = '';
    }
    /*routeTo(item, to: string) {
      if (to === 'delete')
        this.deleteItem(item);
      else
        this.router.navigate(['/categories', item.id, to]);
    }*/
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        var serverResult = this.activatedRoute.snapshot.data['serverResult'];
        this.dataSource.data = serverResult.items;
        this.resultsLength = serverResult.totalCount;
        this.onPageChangeSubscription = this.paginator.page.subscribe(function (pageEvent) {
            // make http request to get users in pageIndex: pageEvent.index
            _this.categoriesService.listing(pageEvent.pageIndex, pageEvent.pageSize, _this.startedWith);
        });
    };
    CategoryListComponent.prototype.ngOnDestroy = function () {
        this.onPageChangeSubscription.unsubscribe();
    };
    CategoryListComponent.prototype.editItem = function (itemId) {
        this.router.navigate(['/categories', itemId, 'edit']);
    };
    CategoryListComponent.prototype.itemDetails = function (itemId) {
        this.router.navigate(['/categories', itemId, 'details']);
    };
    CategoryListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CategoryListComponent.prototype.deleteItem = function (item) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the category?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.loadingScreen.show();
                _this.categoriesService.delete(item).then(function (serverResult) {
                    console.log("serverResult ", serverResult);
                    _this.dataSource.data = _this.dataSource.data.filter(function (item1) { return item1 !== item; });
                    _this.loadingScreen.hide();
                    /*this.dataSource.data = serverResult.users;
                    this.resultsLength = serverResult.totalCount;*/
                }, function (reason) {
                    _this.loadingScreen.hide();
                    console.log('delete category error!');
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CategoryListComponent.prototype, "paginator", void 0);
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/main/content/categories/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.scss */ "./src/app/main/content/categories/category-list/category-list.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_0__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["FuseSplashScreenService"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/categories/category.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/content/categories/category.model.ts ***!
  \***********************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, title, image) {
        if (id === void 0) { id = 0; }
        if (title === void 0) { title = ''; }
        if (image === void 0) { image = ''; }
        this.id = id;
        this.title = title;
        this.image = image;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/main/content/categories/category.resolver.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/content/categories/category.resolver.ts ***!
  \**************************************************************/
/*! exports provided: CategoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResolver", function() { return CategoryResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories.service */ "./src/app/main/content/categories/categories.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryResolver = /** @class */ (function () {
    function CategoryResolver(categoriesService) {
        this.categoriesService = categoriesService;
    }
    CategoryResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var resolverType = route.data['resolverType'];
            if (resolverType == 'list') {
                _this.categoriesService.listing().then(function (serverResult) {
                    resolve(serverResult);
                }, function (reason) {
                    console.log(reason);
                });
            }
            else {
                var itemId = route.params['id'];
                _this.categoriesService.item(itemId).then(function (serverResult) {
                    resolve(serverResult);
                }, function (reason) {
                    console.log(reason);
                });
            }
        });
    };
    CategoryResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]])
    ], CategoryResolver);
    return CategoryResolver;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-categories-categories-module.js.map