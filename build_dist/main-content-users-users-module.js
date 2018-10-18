(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-users-users-module"],{

/***/ "./src/app/main/content/users/user-detail/user-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/users/user-detail/user-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"order\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\"\n         fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button class=\"mr-16\" mat-icon-button [routerLink]=\"'/users'\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n\n        <div class=\"product-image mr-8 mr-sm-16\" *fuseIfOnDom\n             [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n          <img *ngIf=\"!user.avatar || user.avatar == ''\" [src]=\"defaultAvatar\">\n          <img *ngIf=\"user.avatar != ''\" [src]=\"user.avatar\">\n        </div>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n             *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n          <div class=\"h2\">\n            {{user.firstName}}\n            <!--{{user.lastName}}-->\n          </div>\n\n        </div>\n      </div>\n      <!-- / APP TITLE -->\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n\n      <!-- CONTENT -->\n      <div class=\"content\">\n\n        <mat-tab-group>\n\n          <mat-tab label=\"User Details\">\n\n            <div class=\"invoice tab-content p-24\" fusePerfectScrollbar>\n\n              <div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\n\n                <div class=\"invoice-container\">\n\n                  <!-- INVOICE -->\n                  <div class=\"card\">\n\n                    <div class=\"header1\">\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n                        <div class=\"client\">\n                          <div class=\"invoice-number\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"mat-headline\">{{user.firstName}}\n                              <!--{{user.lastName}}-->\n                            </span>\n                            <mat-icon *ngIf=\"user.status==='active'\" class=\"mb-12 ml-4 green\">check_circle</mat-icon>\n                            <mat-icon *ngIf=\"user.status==='pending'\" class=\"mb-12 ml-4 red\">highlight_off</mat-icon>\n                          </div>\n\n                          <div class=\"info\">\n                            <div class=\"phone\">{{user.phone}}</div>\n                            <div class=\"email\">{{user.email}}</div>\n                            <!--<div class=\"address\">{{user.website}}</div>-->\n                          </div>\n                          <mat-divider></mat-divider>\n                          <br/>\n                          <div class=\"info\">\n                           <!-- <div>Followed\n                              <mat-icon *ngIf=\"user.isFollowed==true\" class=\" green\">check_circle</mat-icon>\n                              <mat-icon *ngIf=\"user.isFollowed==false\" class=\" red\">highlight_off</mat-icon>\n                            </div>-->\n                            <div *ngIf=\"user.isFollowed==true\">Following Count <span class=\"number\">{{user.followersCount}}</span>\n                            </div>\n                            <div>Advertisement Count <span class=\"number\">{{user.advertisementCount}} </span></div>\n\n                          </div>\n                        </div>\n\n                        <div class=\"issuer\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                          <div class=\"logo\">\n                            <img *ngIf=\"!user.avatar || user.avatar == ''\" [src]=\"defaultAvatar\">\n                            <img *ngIf=\"user.avatar && user.avatar != ''\" [src]=\"user.avatar\">\n                          </div>\n\n\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <!-- / INVOICE -->\n\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n\n        </mat-tab-group>\n\n      </div>\n      <!-- / CONTENT -->\n\n    </div>\n    <!-- / CONTENT CARD -->\n\n  </div>\n  <!-- / CENTER -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/users/user-detail/user-detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/users/user-detail/user-detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#order .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px; }\n  #order .header .product-image img {\n    height: 100%;\n    width: 100%;\n    max-width: none;\n    border-radius: 50%; }\n  #order .header .subtitle {\n  margin: 6px 0 0 0; }\n  #order .content .mat-tab-group,\n#order .content .mat-tab-body-wrapper,\n#order .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n  #order .content .tab-content {\n  flex: 1 1 auto; }\n  #order .content .tab-content.products .product-row {\n    cursor: pointer; }\n  #order .content .tab-content.invoice {\n    /* PRINT STYLES */ }\n  #order .content .tab-content.invoice #invoice.compact {\n      padding: 0;\n      overflow: auto; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container {\n        padding: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n          width: 900px;\n          max-width: 900px;\n          padding: 64px 88px;\n          overflow: hidden;\n          background: #FFFFFF; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number {\n            font-size: 18px;\n            padding-bottom: 2px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .green {\n              color: green; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .red {\n              color: red; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .title {\n              color: rgba(0, 0, 0, 0.54); }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .number {\n              padding-left: 6px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date {\n            font-size: 18px;\n            padding-bottom: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date .title {\n              color: rgba(0, 0, 0, 0.54); }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date .date {\n              padding-left: 6px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info {\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 22px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .number {\n              padding-left: 6px;\n              color: black; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .green {\n              font-size: 16px;\n              color: green; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .red {\n              font-size: 16px;\n              color: red; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer {\n            padding-right: 66px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .logo {\n              width: 200px;\n              padding: 0 8px;\n              border-right: 1px solid rgba(255, 255, 255, 0.7); }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .info {\n              padding: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 64px;\n            font-size: 15px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n              padding-left: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n              padding-right: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 8px;\n              font-size: 12px;\n              color: rgba(0, 0, 0, 0.54);\n              max-width: 360px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 32px 0 72px 0; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              text-align: right;\n              font-size: 16px;\n              font-weight: 500;\n              color: rgba(0, 0, 0, 0.54);\n              border-bottom: none;\n              padding: 4px 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 32px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 24px 8px;\n              border-top: 1px solid rgba(0, 0, 0, 0.12);\n              font-size: 35px;\n              font-weight: 300;\n              color: black; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n            font-size: 15px;\n            font-weight: 500;\n            margin-bottom: 24px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo, #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            -ms-flex: 0 1 auto; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n            width: 32px;\n            min-width: 32px;\n            margin-right: 24px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 12px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 18px; }\n  @media print {\n      #order .content .tab-content.invoice {\n        /* Invoice Specific Styles */ }\n        #order .content .tab-content.invoice #invoice.compact .invoice-container {\n          padding: 0; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n            width: 100%;\n            min-width: 0;\n            background: none;\n            padding: 0;\n            box-shadow: none; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n              margin-bottom: 16pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n              padding-right: 0;\n              margin-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n              margin-top: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n                font-size: 10pt;\n                max-width: 60pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                  padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n                padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n                font-size: 10pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n                margin-top: 4pt;\n                font-size: 9pt;\n                max-width: none; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n              margin: 16pt 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n                font-size: 13pt;\n                padding: 4pt 4pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                  text-align: left;\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                  padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n                padding-bottom: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n                padding: 16pt 4pt 0 4pt;\n                font-size: 16pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                  padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n              font-size: 10pt;\n              margin-bottom: 8pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n              margin-right: 8pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n              font-size: 8pt;\n              line-height: normal; } }\n  #order .content .mat-tab-body-content {\n  display: flex; }\n  #order .content .mat-tab-label {\n  height: 64px; }\n  #order .content table {\n  table-layout: fixed; }\n"

/***/ }),

/***/ "./src/app/main/content/users/user-detail/user-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/users/user-detail/user-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
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



var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(route) {
        this.route = route;
        this.defaultAvatar = '../../../../../assets/images/avatars/profile-grey.png';
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.data['serverResult']) {
            this.user = this.route.snapshot.data['serverResult'];
        }
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/main/content/users/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/main/content/users/user-detail/user-detail.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/content/users/user-edit/user-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/users/user-edit/user-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button class=\"mr-0 mr-sm-16\" mat-icon-button [routerLink]=\"'/users'\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n\n        <div class=\"product-image mr-8 mr-sm-16\" *fuseIfOnDom\n             [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n          <img *ngIf=\"!userForm.value.avatar || userForm.value.avatar == ''\" [src]=\"defaultAvatar\">\n          <img *ngIf=\"userForm.value.avatar && userForm.value.avatar != ''\" [src]=\"userForm.value.avatar\">\n        </div>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" *fuseIfOnDom\n             [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n          <div class=\"h2\" *ngIf=\"isEditMode\">\n            {{userForm.value.firstName}} {{userForm.value.lastName}}\n          </div>\n          <div class=\"h2\" *ngIf=\"!isEditMode\">\n            New User\n          </div>\n          <div class=\"subtitle secondary-text\">\n            <span>User Details</span>\n          </div>\n        </div>\n      </div>\n      <!-- / APP TITLE -->\n\n      <!-- <button mat-raised-button class=\"save-product-button mat-white-bg mt-16 mt-sm-0\" [disabled]=\"!f.valid\"\n               *ngIf=\"!isEditMode\"\n               (click)=\"f.ngSubmit.emit()\">\n         <span>ADD</span>\n       </button>-->\n\n      <button mat-raised-button class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n              [disabled]=\"userForm.status == 'INVALID' || userForm.pristine == true\"\n              (click)=\"f.ngSubmit.emit()\">\n        <span>SAVE</span>\n      </button>\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n\n      <!-- CONTENT -->\n      <div class=\"content\">\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"product w-100-p\" fxLayout=\"column\" fxFlex>\n          <mat-tab-group>\n\n            <mat-tab label=\"Basic Info\">\n\n              <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"tab-content p-24\" fusePerfectScrollbar fxFlex=\"80%\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput formControlName=\"firstName\" placeholder=\"User Name\" required>\n                      <mat-error *ngIf=\"userForm.controls.firstName.invalid\">{{getErrorMessage('firstName','required','', '')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                 <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">account_circle</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput name=\"lastName\" formControlName=\"lastName\" placeholder=\"Last Name\" required>\n                      <mat-error *ngIf=\"userForm.controls.lastName.invalid\">{{getErrorMessage('lastName','required','', '')}}   </mat-error>\n                    </mat-form-field>\n                  </div>-->\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngIf=\"!isEditMode\">\n                    <mat-icon class=\"mr-12 mt-12\">accessibility</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput name=\"password\" type=\"password\" formControlName=\"password\" placeholder=\"Password\" [required]=\"!isEditMode\">\n                      <mat-error *ngIf=\"userForm.controls.password.invalid\">{{getErrorMessage('password','required','', '')}} </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">call</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input type=\"text\"\n                             formControlName=\"phone\"\n                             matInput name=\"phone\" placeholder=\"Phone\" required>\n                      <mat-error *ngIf=\"userForm.controls.phone.invalid\">{{getErrorMessage('phone','required', 'pattern', '')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">email</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput name=\"email\" placeholder=\"E-mail\" required\n                             formControlName=\"email\">\n                      <mat-error *ngIf=\"userForm.controls.email.invalid\">{{getErrorMessage('email','required', '', '', 'email')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                 <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">web</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput name=\"website\" placeholder=\"Website\"\n                             formControlName=\"website\">\n                      <mat-error *ngIf=\"userForm.controls.website.invalid\">{{getErrorMessage('website','', '', 'pattern')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n-->\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">accessibility</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <mat-select placeholder=\"User Status\" name=\"status\" ([value])=\"userForm.value.status\" formControlName=\"status\" required>\n                        <mat-option value=\"active\">Active</mat-option>\n                        <mat-option value=\"pending\">Pending</mat-option>\n                        <mat-option value=\"deactivated\">Deactivated</mat-option>\n                      </mat-select>\n                      <mat-error *ngIf=\"userForm.controls.status.invalid\">{{getErrorMessage('status','required', '', '')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                </div>\n\n               <!-- <div class=\"p-4\" fxLayout=\"column\" fxLayoutGap=\"3px\" fxFlex=\"20%\">\n                  <img *ngIf=\"userForm.value.avatar && userForm.value.avatar != ''\" [src]=\"userForm.value.avatar\">\n                  &lt;!&ndash;<img *ngIf=\"!user.avatar\" src=\"https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png\">&ndash;&gt;\n                  <img *ngIf=\"!userForm.value.avatar || userForm.value.avatar == ''\" [src]=\"defaultAvatar\">\n                  <input type=\"file\" accept=\"image/*\" #file name=\"avatar\" fxHide (change)=\"onFileChange($event)\">\n                  <button mat-raised-button color=\"primary\" (click)=\"browseProfilePicture()\">Browse</button>\n                  <button mat-raised-button color=\"warn\" (click)=\"removeFile($event)\">Remove</button>\n                </div>-->\n\n              </div>\n\n\n            </mat-tab>\n\n          </mat-tab-group>\n        </form>\n        <!-- / CONTENT -->\n\n      </div>\n      <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/users/user-edit/user-edit.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/users/user-edit/user-edit.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#product .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px; }\n  #product .header .product-image img {\n    height: 100%;\n    width: 100%;\n    max-width: none;\n    border-radius: 50%; }\n  #product .header .subtitle {\n  margin: 6px 0 0 0; }\n  #product .content .mat-tab-group,\n#product .content .mat-tab-body-wrapper,\n#product .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n  #product .content .mat-tab-body-content {\n  display: flex; }\n  #product .content .mat-tab-label {\n  height: 64px; }\n  #product .content .product-image {\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  margin-right: 16px;\n  margin-bottom: 16px;\n  border: 3px solid rgba(0, 0, 0, 0.12); }\n  #product .content .product-image img {\n    height: 100%;\n    width: auto;\n    max-width: none; }\n  #product .content .product img {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px; }\n"

/***/ }),

/***/ "./src/app/main/content/users/user-edit/user-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/users/user-edit/user-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _shared_helpers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/helpers.service */ "./src/app/main/content/shared/helpers.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../users.service */ "./src/app/main/content/users/users.service.ts");
/* harmony import */ var _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/services/splash-screen.service */ "./src/app/core/services/splash-screen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../user.model */ "./src/app/main/content/users/user.model.ts");
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









var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(route, router, usersService, loadingScreen, helpers) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.loadingScreen = loadingScreen;
        this.helpers = helpers;
        this.isEditMode = false;
        this.defaultAvatar = '../../../../../assets/images/avatars/profile-grey.png';
        this.user = new _user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    UserEditComponent.prototype.ngOnInit = function () {
        this.isEditMode = this.route.snapshot.data['isEditMode'];
        if (this.route.snapshot.data['serverResult']) {
            this.user = this.route.snapshot.data['serverResult'];
        }
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.user.id),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.user.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            // lastName: new FormControl(this.user.lastName, [Validators.required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.user.status),
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.user.avatar),
            /* website: new FormControl(this.user.website, [
               Validators.pattern('[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)')
             ]),*/
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.user.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[+]?[0-9]*\\.?[0-9]*')]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.user.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ]),
        });
        if (!this.isEditMode)
            this.userForm.controls.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](this.user.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]);
    };
    UserEditComponent.prototype.getErrorMessage = function (fieldName, required, phone, website, email) {
        return this.userForm.controls[fieldName].hasError(required) ? 'You must enter a value' :
            this.userForm.controls[fieldName].hasError(phone) ? 'Not a valid phone' :
                this.userForm.controls[fieldName].hasError(email) ? 'Not a valid e-mail' :
                    this.userForm.controls[fieldName].hasError(website) ? 'Not a valid website' :
                        '';
    };
    UserEditComponent.prototype.onSubmit = function (thisUserForm) {
        var _this = this;
        if (thisUserForm.valid) {
            this.loadingScreen.show();
            if (this.isEditMode) {
                console.log("this.userForm edit", this.userForm.value);
                this.usersService.update(this.userForm.value).then(function (val) {
                    _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__["PageAction"].Update, true, 'user');
                    _this.router.navigate(['/users']);
                    _this.loadingScreen.hide();
                }, function (reason) {
                    _this.loadingScreen.hide();
                    console.log('error ', reason);
                    _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__["PageAction"].Update, false, 'user');
                });
            }
            else {
                delete this.userForm.value.avatar;
                delete this.userForm.value.id;
                console.log("this.userForm add", this.userForm.value);
                this.usersService.add(this.userForm.value).then(function (val) {
                    _this.loadingScreen.hide();
                    _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__["PageAction"].Create, true, 'user');
                    _this.router.navigate(['/users']);
                }, function (reason) {
                    _this.loadingScreen.hide();
                    // TODO specify the errors to show them
                    _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_7__["PageAction"].Create, false, 'user');
                    console.log('error ', reason);
                });
            }
        }
    };
    UserEditComponent.prototype.readFile = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var reader = new FileReader();
        reader.onloadend = function (e) {
            _this.userForm.value.avatar = reader.result;
        };
        reader.readAsDataURL(file);
    };
    UserEditComponent.prototype.browseProfilePicture = function () {
        console.log(this.fileSelector);
        this.fileSelector.nativeElement.click();
        return false;
    };
    UserEditComponent.prototype.removeFile = function (event) {
        this.userForm.value.avatar = '';
    };
    UserEditComponent.prototype.onFileChange = function (event) {
        console.log(event);
        this.readFile(event.target);
        // this.userForm.value.avatar = event.target.files[0];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], UserEditComponent.prototype, "fileSelector", void 0);
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/main/content/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/main/content/users/user-edit/user-edit.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_2__["FuseSplashScreenService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_0__["HelpersService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/main/content/users/user-list/user-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/users/user-list/user-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"users\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\n         fxLayoutAlign.gt-xs=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div class=\"logo my-12 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n          account_box\n        </mat-icon>\n        <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Users</span>\n      </div>\n      <!-- / APP TITLE -->\n\n      <!-- SEARCH -->\n      <div class=\"search-input-wrapper ml-8 m-sm-0\"\n           fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <label  class=\"mr-8\">\n          <mat-icon class=\"secondary-text\">search</mat-icon>\n        </label>\n        <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n      </div>\n      <!-- / SEARCH -->\n\n       <!--Add BUTTON-->\n      <button mat-raised-button  class=\"reference-button mat-white-bg mt-16 mt-sm-0\" aria-label=\"new\" [routerLink]=\"'/users/new'\" >\n        <!--<mat-icon>add</mat-icon>-->\n        <span>New</span>\n      </button>\n      <!-- / Add BUTTON-->\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n      <div class=\"table-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n        <div class=\"table-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n          No Data Available\n        </div>\n      </div>\n\n      <!--<div class=\"table-header\">\n        <mat-form-field>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n      </div>-->\n\n      <mat-table #table [dataSource]=\"dataSource\" [@animateStagger]=\"{value:'50'}\" class=\"items-table\"\n                 fusePerfectScrollbar>\n\n        <!-- Id Column -->\n        <ng-container cdkColumnDef=\"id\">\n          <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm fxFlex=\"10%\">ID</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\" fxHide fxShow.gt-sm fxFlex=\"10%\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n            <p class=\" text-truncate mat-caption m-0\">{{item.id.slice(0, 10)}}</p>\n            <p class=\"text-truncate  mat-caption m-0\">{{item.id.slice(10,20)}}</p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Image Column -->\n       <!-- <ng-container cdkColumnDef=\"avatar\">\n          <mat-header-cell *cdkHeaderCellDef>Image</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <img class=\"item-image\"\n                 *ngIf=\"item.avatar\" [alt]=\"item.title\"\n                 [src]=\"item.avatar\"/>\n            <img *ngIf=\"!item.avatar\" [src]=\"defaultAvatar\">\n          </mat-cell>\n        </ng-container>-->\n\n        <!-- Name Column -->\n        <ng-container cdkColumnDef=\"name\">\n          <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <p class=\"text-truncate font-weight-600\">{{item.firstName }}\n              <!--+ ' '+ item.lastName}}-->\n            </p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Email Column -->\n        <ng-container cdkColumnDef=\"email\">\n          <mat-header-cell *cdkHeaderCellDef>Email</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <p class=\"email text-truncate\">\n              {{item.email}}\n            </p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- AdsCount Column -->\n        <ng-container cdkColumnDef=\"advertisementCount\">\n          <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Ads Count</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\" fxHide fxShow.gt-sm>\n            <p class=\"text-truncate\">\n              {{item.advertisementCount}}\n            </p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container cdkColumnDef=\"status\">\n          <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Active</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\" fxHide fxShow.gt-sm>\n            <mat-icon *ngIf=\"item.status == 'active'\" class=\"active-icon mat-green-600-bg s-16\">check</mat-icon>\n            <mat-icon *ngIf=\"item.status != 'active'\" class=\"active-icon mat-red-500-bg s-16\">check</mat-icon>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Buttons Column -->\n        <ng-container cdkColumnDef=\"buttons\">\n          <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n\n              <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                      (click)=\"$event.stopPropagation();\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n\n              <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"edit\"  (click)=\"routeTo(item, 'edit')\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"remove\" [disabled]=\"item.status != 'active'\"  (click)=\"routeTo(item, 'delete')\" >\n                  <mat-icon color=\"warn\">delete</mat-icon>\n                  <span>Deactivate</span>\n                </button>\n              </mat-menu>\n            </div>\n\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *cdkRowDef=\"let item; columns: displayedColumns;\"  (click)=\"routeTo(item, 'details')\" matRipple\n                 [@animate]=\"{value:'*',params:{y:'100%'}}\"\n                 class=\"item\">\n        </mat-row>\n      </mat-table>\n\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\" [pageSizeOptions]=[10,20,30]>\n      </mat-paginator>\n    </div>\n    <!-- / CONTENT CARD -->\n  </div>\n  <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/users/user-list/user-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/users/user-list/user-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host .header {\n    height: 176px !important;\n    min-height: 176px !important;\n    max-height: 176px !important; } }\n@media (max-width: 599px) {\n  :host .top-bg {\n    height: 240px; } }\n:host .items-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .items-table .mat-header-row {\n    min-height: 64px; }\n:host .items-table .item {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .items-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n:host .items-table .mat-column-id {\n    flex: 0 1 84px; }\n:host .items-table .mat-column-image {\n    flex: 0 1 84px; }\n:host .items-table .mat-column-image .item-image {\n      width: 52px;\n      height: 52px; }\n:host .items-table .mat-column-buttons {\n    flex: 0 1 80px; }\n:host .items-table .active-icon {\n    border-radius: 50%; }\n:host .table-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 26px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n:host .table-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n:host .table-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n:host .mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/content/users/user-list/user-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/users/user-list/user-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../users.service */ "./src/app/main/content/users/users.service.ts");
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







var UserListComponent = /** @class */ (function () {
    function UserListComponent(usersService, router, activatedRoute, dialog, loadingScreen) {
        this.usersService = usersService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.loadingScreen = loadingScreen;
        this.displayedColumns = ['id', 'name', 'email', 'advertisementCount', 'status', 'buttons'];
        this.btnState = false;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = 0;
        this.startedWith = '';
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        var serverResult = this.activatedRoute.snapshot.data['serverResult'];
        this.dataSource.data = serverResult.items;
        this.resultsLength = serverResult.totalCount;
        this.onPageChangeSubscription = this.paginator.page.subscribe(function (pageEvent) {
            // make http request to get users in pageIndex: pageEvent.index
            // this.usersService.listing(pageEvent.pageIndex, pageEvent.pageSize, this.startedWith)
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.onPageChangeSubscription.unsubscribe();
    };
    UserListComponent.prototype.routeTo = function (item, to) {
        if (to === 'delete')
            this.deleteItem(item);
        else
            this.router.navigate(['/users', item.id, to]);
    };
    UserListComponent.prototype.applyFilter = function (filterValue) {
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
    UserListComponent.prototype.deleteItem = function (item) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to deactivate the user?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log('item ', item);
                // this.loadingScreen.show();
                _this.usersService.delete(item).then(function (serverResult) {
                    console.log('delete user serverResult! ', serverResult);
                    //  this.loadingScreen.hide();
                    // this.dataSource.data = serverResult.users;
                    // this.resultsLength = serverResult.totalCount;
                }, function (reason) {
                    // this.loadingScreen.hide();
                    console.log('delete user error! ', reason);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UserListComponent.prototype, "paginator", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/main/content/users/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/main/content/users/user-list/user-list.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["FuseSplashScreenService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/users/user.model.ts":
/*!**************************************************!*\
  !*** ./src/app/main/content/users/user.model.ts ***!
  \**************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.phone = '';
        this.website = '';
        this.followersCount = 0;
        this.advertisementCount = 0;
        this.isFollowed = false;
        this.email = '';
        this.token = '';
        this.status = 'active';
        this.avatar = '';
        //public avatar: string = '../../../../../assets/images/avatars/profile-grey.png';
        /*constructor(public id: number = 0, public firstName: string = 'noName',
                    public lastName: string = 'NoName', public phone: string = '',
                    public website: string = '', public followersCount: number = 0,
                    public advertisementCount: number = 0, public isFollowed: boolean = false,
                    public email: string = '', public token: string = '',
                    public status: string = '', public avatar: string = '') {
        }*/
        // constructor(id: string = '00', name: string = 'noName', avatar: string = '') {
        //     this.id = id;
        //     this.name = name;
        //     this.avatar = avatar;
        //     this.email = 'soso@soso.com';
        //     this.type = UserType.User;
        //     this.active = true;
        //     this.gender = UserGender.Male;
        //     this.phone = '4460467';
        //     this.createdAt = new Date(2017,10,1);
        // }
    }
    return User;
}());



/***/ }),

/***/ "./src/app/main/content/users/user.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/content/users/user.resolver.ts ***!
  \*****************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.service */ "./src/app/main/content/users/users.service.ts");
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


var UserResolver = /** @class */ (function () {
    function UserResolver(usersService) {
        this.usersService = usersService;
    }
    UserResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var resolverType = route.data['resolverType'];
            if (resolverType == 'list') {
                _this.usersService.listing().then(function (serverResult) {
                    resolve(serverResult);
                }, function (reason) {
                    console.log(reason);
                });
            }
            else {
                var itemId = route.params['id'];
                _this.usersService.item(itemId).then(function (serverResult) {
                    resolve(serverResult);
                }, function (reason) {
                    console.log(reason);
                });
            }
        });
    };
    UserResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/main/content/users/users.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/content/users/users.module.ts ***!
  \****************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.service */ "./src/app/main/content/users/users.service.ts");
/* harmony import */ var _user_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.resolver */ "./src/app/main/content/users/user.resolver.ts");
/* harmony import */ var _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../core/modules/shared.module */ "./src/app/core/modules/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/main/content/users/user-list/user-list.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/main/content/users/user-detail/user-detail.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/main/content/users/user-edit/user-edit.component.ts");
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
                component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"],
                resolve: {
                    serverResult: _user_resolver__WEBPACK_IMPORTED_MODULE_1__["UserResolver"]
                },
                data: { resolverType: 'list' }
            },
            {
                path: 'new',
                component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"],
                data: {
                    isEditMode: false
                }
            },
            {
                path: ':id/details',
                component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"],
                resolve: {
                    serverResult: _user_resolver__WEBPACK_IMPORTED_MODULE_1__["UserResolver"]
                },
                data: {
                    resolverType: 'item',
                }
            },
            {
                path: ':id/edit',
                component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"],
                resolve: {
                    serverResult: _user_resolver__WEBPACK_IMPORTED_MODULE_1__["UserResolver"]
                },
                data: {
                    resolverType: 'item',
                    isEditMode: true
                }
            }
        ]
    }
];
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            providers: [
                _users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"],
                _user_resolver__WEBPACK_IMPORTED_MODULE_1__["UserResolver"]
            ],
            declarations: [
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"],
                _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"],
                _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-users-users-module.js.map