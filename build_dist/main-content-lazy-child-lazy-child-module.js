(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-lazy-child-lazy-child-module"],{

/***/ "./node_modules/angular2-image-upload/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/angular2-image-upload/index.js ***!
  \*****************************************************/
/*! exports provided: ImageUploadModule, ImageUploadComponent, FileHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_image_upload_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/image-upload.module */ "./node_modules/angular2-image-upload/lib/image-upload.module.js");
/* harmony import */ var _lib_image_upload_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_image_upload_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function() { return _lib_image_upload_module__WEBPACK_IMPORTED_MODULE_0__["ImageUploadModule"]; });

/* harmony import */ var _lib_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/image-upload/image-upload.component */ "./node_modules/angular2-image-upload/lib/image-upload/image-upload.component.js");
/* harmony import */ var _lib_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return _lib_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__["ImageUploadComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileHolder", function() { return _lib_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_1__["FileHolder"]; });





/***/ }),

/***/ "./node_modules/angular2-image-upload/lib/file-drop.directive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/angular2-image-upload/lib/file-drop.directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var FileDropDirective = (function () {
    function FileDropDirective() {
        this.fileOver = new core_1.EventEmitter();
        this.fileDrop = new core_1.EventEmitter();
    }
    FileDropDirective.prototype.onDrop = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        event.preventDefault();
        var files = this.filterFiles(dataTransfer.files);
        event.preventDefault();
        this.fileOver.emit(false);
        this.fileDrop.emit(files);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var dataTransfer = FileDropDirective.getDataTransfer(event);
        if (!FileDropDirective.hasFiles(dataTransfer.types)) {
            return;
        }
        dataTransfer.dropEffect = 'copy';
        event.preventDefault();
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.filterFiles = function (files) {
        if (!this.accept || this.accept.length === 0) {
            return files;
        }
        var acceptedFiles = [];
        for (var i = 0; i < files.length; i++) {
            for (var j = 0; j < this.accept.length; j++) {
                if (FileDropDirective.matchRule(this.accept[j], files[i].type)) {
                    acceptedFiles.push(files[i]);
                    break;
                }
            }
        }
        return acceptedFiles;
    };
    FileDropDirective.getDataTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    };
    FileDropDirective.hasFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        if (types.contains) {
            return types.contains('Files');
        }
        return false;
    };
    FileDropDirective.matchRule = function (rule, candidate) {
        return new RegExp("^" + rule.split("*").join(".*") + "$").test(candidate);
    };
    return FileDropDirective;
}());
FileDropDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[fileDrop]'
            },] },
];
FileDropDirective.ctorParameters = function () { return []; };
FileDropDirective.propDecorators = {
    'accept': [{ type: core_1.Input },],
    'fileOver': [{ type: core_1.Output },],
    'fileDrop': [{ type: core_1.Output },],
    'onDrop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
    'onDragLeave': [{ type: core_1.HostListener, args: ['dragleave', ['$event'],] },],
    'onDragOver': [{ type: core_1.HostListener, args: ['dragover', ['$event'],] },],
};
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/angular2-image-upload/lib/image-upload.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/angular2-image-upload/lib/image-upload.module.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/angular2-image-upload/lib/file-drop.directive.js");
var image_upload_component_1 = __webpack_require__(/*! ./image-upload/image-upload.component */ "./node_modules/angular2-image-upload/lib/image-upload/image-upload.component.js");
var image_service_1 = __webpack_require__(/*! ./image-upload/image.service */ "./node_modules/angular2-image-upload/lib/image-upload/image.service.js");
var ImageUploadModule = (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule.forRoot = function () {
        return {
            ngModule: ImageUploadModule,
            providers: [image_service_1.ImageService]
        };
    };
    return ImageUploadModule;
}());
ImageUploadModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule, http_1.HttpModule],
                declarations: [image_upload_component_1.ImageUploadComponent, file_drop_directive_1.FileDropDirective],
                exports: [image_upload_component_1.ImageUploadComponent]
            },] },
];
ImageUploadModule.ctorParameters = function () { return []; };
exports.ImageUploadModule = ImageUploadModule;


/***/ }),

/***/ "./node_modules/angular2-image-upload/lib/image-upload/image-upload.component.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular2-image-upload/lib/image-upload/image-upload.component.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var image_service_1 = __webpack_require__(/*! ./image.service */ "./node_modules/angular2-image-upload/lib/image-upload/image.service.js");
var FileHolder = (function () {
    function FileHolder(src, file) {
        this.src = src;
        this.file = file;
        this.pending = false;
    }
    return FileHolder;
}());
exports.FileHolder = FileHolder;
var ImageUploadComponent = (function () {
    function ImageUploadComponent(imageService) {
        var _this = this;
        this.imageService = imageService;
        this.files = [];
        this.fileCounter = 0;
        this.fileOver = false;
        this.showFileTooLargeMessage = false;
        this.beforeUpload = function (data) { return data; };
        this.buttonCaption = 'Select Images';
        this.cssClass = 'img-ul';
        this.clearButtonCaption = 'Clear';
        this.dropBoxMessage = 'Drop your images here!';
        this.max = 100;
        this.preview = true;
        this.withCredentials = false;
        this.uploadedFiles = [];
        this.removed = new core_1.EventEmitter();
        this.uploadStateChanged = new core_1.EventEmitter();
        this.uploadFinished = new core_1.EventEmitter();
        this.pendingFilesCounter = 0;
        this.onFileOver = function (isOver) { return _this.fileOver = isOver; };
        this.countRemainingSlots = function () { return _this.max - _this.fileCounter; };
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        if (!this.fileTooLargeMessage) {
            this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
        }
        this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map(function (ext) { return 'image/' + ext; }) : ['image/*'];
    };
    ImageUploadComponent.prototype.deleteAll = function () {
        var _this = this;
        this.files.forEach(function (f) { return _this.removed.emit(f); });
        this.files = [];
        this.fileCounter = 0;
        this.inputElement.nativeElement.value = '';
    };
    ImageUploadComponent.prototype.deleteFile = function (file) {
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        this.removed.emit(file);
    };
    ImageUploadComponent.prototype.ngOnChanges = function (changes) {
        if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
            this.processUploadedFiles();
        }
    };
    ImageUploadComponent.prototype.onFileChange = function (files) {
        var remainingSlots = this.countRemainingSlots();
        var filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;
        if (this.url && filesToUploadNum != 0) {
            this.uploadStateChanged.emit(true);
        }
        this.fileCounter += filesToUploadNum;
        this.showFileTooLargeMessage = false;
        this.uploadFiles(files, filesToUploadNum);
    };
    ImageUploadComponent.prototype.onResponse = function (response, fileHolder) {
        fileHolder.serverResponse = response;
        fileHolder.pending = false;
        this.uploadFinished.emit(fileHolder);
        if (--this.pendingFilesCounter == 0) {
            this.uploadStateChanged.emit(false);
        }
    };
    ImageUploadComponent.prototype.processUploadedFiles = function () {
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            var data = this.uploadedFiles[i];
            var fileBlob = void 0, file = void 0, fileUrl = void 0;
            if (data instanceof Object) {
                fileUrl = data.url;
                fileBlob = (data.blob) ? data.blob : new Blob([data]);
                file = new File([fileBlob], data.fileName);
            }
            else {
                fileUrl = data;
                fileBlob = new Blob([fileUrl]);
                file = new File([fileBlob], fileUrl);
            }
            this.files.push(new FileHolder(fileUrl, file));
        }
    };
    ImageUploadComponent.prototype.uploadFiles = function (files, filesToUploadNum) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _loop_1, this_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var file, beforeUploadResult, img, reader;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        file = files[i];
                                        if (this_1.maxFileSize && file.size > this_1.maxFileSize) {
                                            this_1.fileCounter--;
                                            this_1.inputElement.nativeElement.value = '';
                                            this_1.showFileTooLargeMessage = true;
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, this_1.beforeUpload({ file: file, url: this_1.url, abort: false })];
                                    case 1:
                                        beforeUploadResult = _a.sent();
                                        if (beforeUploadResult.abort) {
                                            this_1.fileCounter--;
                                            this_1.inputElement.nativeElement.value = '';
                                            return [2 /*return*/, "continue"];
                                        }
                                        img = document.createElement('img');
                                        img.src = window.URL.createObjectURL(beforeUploadResult.file);
                                        reader = new FileReader();
                                        reader.addEventListener('load', function (event) {
                                            var fileHolder = new FileHolder(event.target.result, beforeUploadResult.file);
                                            _this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
                                            _this.files.push(fileHolder);
                                        }, false);
                                        reader.readAsDataURL(beforeUploadResult.file);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < filesToUploadNum)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ImageUploadComponent.prototype.uploadSingleFile = function (fileHolder, url, customForm) {
        var _this = this;
        if (url === void 0) { url = this.url; }
        if (url) {
            this.pendingFilesCounter++;
            fileHolder.pending = true;
            this.imageService
                .postImage(this.url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
                .subscribe(function (response) { return _this.onResponse(response, fileHolder); }, function (error) {
                _this.onResponse(error, fileHolder);
                _this.deleteFile(fileHolder);
            });
        }
        else {
            this.uploadFinished.emit(fileHolder);
        }
    };
    return ImageUploadComponent;
}());
ImageUploadComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'image-upload',
                template: "\n    <div\n         fileDrop\n         [accept]=\"supportedExtensions\"\n         (fileOver)=\"onFileOver($event)\"\n         (fileDrop)=\"onFileChange($event)\"\n         [ngClass]=\"cssClass\"\n         [ngClass]=\"{'img-ul-file-is-over': fileOver}\"     \n         [ngStyle]=\"style?.layout\"\n    >\n      <div class=\"img-ul-file-upload img-ul-hr-inline-group\">    \n        <label class=\"img-ul-upload img-ul-button\" [ngStyle]=\"style?.selectButton\">\n          <span [innerText]=\"buttonCaption\"></span>\n          <input\n            type=\"file\"\n            [accept]=\"supportedExtensions\"\n            multiple (change)=\"onFileChange(input.files)\"\n            #input>\n        </label>\n        <label *ngIf=\"fileCounter > 0\" class=\"img-ul-clear img-ul-button\" (click)=\"deleteAll()\" [ngStyle]=\"style?.clearButton\">\n          <span [innerText]=\"clearButtonCaption\"></span>\n        </label>\n        <div class=\"img-ul-drag-box-msg\" [innerText]=\"dropBoxMessage\"></div>\n      </div>\n\n      <p class=\"img-ul-file-too-large\" *ngIf=\"showFileTooLargeMessage\" [innerText]=\"fileTooLargeMessage\"></p>\n\n      <div *ngIf=\"preview\" class=\"img-ul-container img-ul-hr-inline-group\" [ngStyle]=\"style?.previewPanel\">\n        <div\n          class=\"img-ul-image\"\n          *ngFor=\"let file of files\"\n          [ngStyle]=\"{'background-image': 'url('+ file.src +')'}\"\n        >\n          <div *ngIf=\"file.pending\" class=\"img-ul-loading-overlay\">\n            <div class=\"img-ul-spinning-circle\"></div>\n          </div>\n          <div *ngIf=\"!file.pending\" class=\"img-ul-x-mark\" (click)=\"deleteFile(file)\">\n            <span class=\"img-ul-close\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                styles: ["\n    .img-ul {\n        --active-color: #3C9;\n        --common-radius: 3px;\n        background-color: #f8f8f8;\n        border-radius: var(--common-radius);\n        border: #d0d0d0 dashed 1px;\n        font-family: sans-serif;\n        position: relative;\n        color: #9b9b9b;\n    }\n\n    .img-ul-file-is-over {\n        border: var(--active-color) solid;\n    }\n\n    .img-ul-hr-inline-group:after {\n        clear: both;\n        content: \"\";\n        display: table;\n    }\n\n    .img-ul-file-upload {    \n        padding: 16px;\n    }\n\n    .img-ul-drag-box-msg {    \n        display: inline-block;\n        font-weight: 600;\n        margin-left: 12px;\n        padding-top: 14px;\n    }\n\n    label.img-ul-button input[type=file] {\n        display: none;\n        position: fixed;\n        top: -99999px;\n    }\n\n    .img-ul-clear {\n        background-color: #FF0000;\n    }\n\n    .img-ul-upload {\n        background-color: var(--active-color);\n    }\n\n    .img-ul-button {\n        -moz-box-shadow: 2px 2px 4px 0 rgba(148, 148, 148, 0.6);\n        -webkit-box-shadow: 2px 2px 4px 0 rgba(148, 148, 148, 0.6);\n        box-shadow: 2px 2px 4px 0 rgba(148, 148, 148, 0.6);\n        color: #FFF;\n        cursor: pointer;\n        display: inline-block;\n        float: left;\n        font-size: 1.25em;\n        font-weight: 500;\n        padding: 10px;\n        text-transform: uppercase;\n    }\n\n    .img-ul-button:active span {\n        display: block;\n        position: relative;\n        top: 1px;\n    }\n\n    .img-ul-container {\n        background-color: #fdfdfd;\n        padding: 0 10px;\n    }\n\n    .img-ul-image {    \n        background: center center no-repeat;\n        background-size: contain;\n        display: inline-block;\n        float: left;\n        height: 86px;\n        margin: 6px;\n        position: relative;\n        width: 86px;\n    }\n\n    .img-ul-x-mark {\n        background-color: #000;\n        border-radius: 2px;\n        color: #FFF;\n        cursor: pointer;\n        float: right;\n        height: 20px;\n        margin: 2px;\n        opacity: .7;\n        text-align: center;\n        width: 20px;\n    }\n\n    .img-ul-close {\n        height: 20px;\n        opacity: .7;\n        padding-right: 3px;\n        position: relative;\n        width: 20px;\n    }\n\n    .img-ul-x-mark:hover .img-ul-close {\n        opacity: 1;\n    }\n\n    .img-ul-close:before, .img-ul-close:after {\n        background-color: #FFF;\n        border-radius: 2px;\n        content: '';\n        height: 15px;\n        position: absolute;\n        top: 0;\n        width: 2px;\n    }\n\n    .img-ul-close:before {\n        transform: rotate(45deg);\n    }\n\n    .img-ul-close:after {\n        transform: rotate(-45deg);\n    }\n\n    .img-ul-loading-overlay {\n        background-color: #000;\n        bottom: 0;\n        left: 0;\n        opacity: .7;\n        position: absolute;\n        right: 0;\n        top: 0;\n    }\n\n    .img-ul-spinning-circle {\n        height: 30px;\n        width: 30px;\n        margin: auto;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        border-radius: 50%;\n        border: 3px solid rgba(255, 255, 255, 0);\n        border-top: 3px solid #FFF;\n        border-right: 3px solid #FFF;\n        -webkit-animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n        animation: spinner 2s infinite cubic-bezier(0.085, 0.625, 0.855, 0.360);\n    }\n\n    .img-ul-file-too-large {\n        color: red;\n        padding: 0 15px;\n    }\n\n    @-webkit-keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n\n      100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n      }\n    }\n  "]
            },] },
];
ImageUploadComponent.ctorParameters = function () { return [
    { type: image_service_1.ImageService, },
]; };
ImageUploadComponent.propDecorators = {
    'beforeUpload': [{ type: core_1.Input },],
    'buttonCaption': [{ type: core_1.Input },],
    'cssClass': [{ type: core_1.Input, args: ['class',] },],
    'clearButtonCaption': [{ type: core_1.Input },],
    'dropBoxMessage': [{ type: core_1.Input },],
    'fileTooLargeMessage': [{ type: core_1.Input },],
    'headers': [{ type: core_1.Input },],
    'max': [{ type: core_1.Input },],
    'maxFileSize': [{ type: core_1.Input },],
    'preview': [{ type: core_1.Input },],
    'partName': [{ type: core_1.Input },],
    'style': [{ type: core_1.Input },],
    'supportedExtensions': [{ type: core_1.Input, args: ['extensions',] },],
    'url': [{ type: core_1.Input },],
    'withCredentials': [{ type: core_1.Input },],
    'uploadedFiles': [{ type: core_1.Input },],
    'removed': [{ type: core_1.Output },],
    'uploadStateChanged': [{ type: core_1.Output },],
    'uploadFinished': [{ type: core_1.Output },],
    'inputElement': [{ type: core_1.ViewChild, args: ['input',] },],
};
exports.ImageUploadComponent = ImageUploadComponent;


/***/ }),

/***/ "./node_modules/angular2-image-upload/lib/image-upload/image.service.js":
/*!******************************************************************************!*\
  !*** ./node_modules/angular2-image-upload/lib/image-upload/image.service.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.postImage = function (url, image, headers, partName, customFormData, withCredentials) {
        if (partName === void 0) { partName = 'image'; }
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        var options = new http_1.RequestOptions();
        if (withCredentials) {
            options.withCredentials = withCredentials;
        }
        if (headers) {
            options.headers = new http_1.Headers(headers);
        }
        var formData = new FormData();
        for (var key in customFormData) {
            formData.append(key, customFormData[key]);
        }
        formData.append(partName, image);
        return this.http.post(url, formData, options);
    };
    return ImageService;
}());
ImageService.decorators = [
    { type: core_1.Injectable },
];
ImageService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.ImageService = ImageService;


/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"order\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\"\n         fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button class=\"mr-16\" mat-icon-button [routerLink]=\"'/advertisements'\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n\n        <div class=\"product-image mr-8 mr-sm-16\" *fuseIfOnDom\n             [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n          <img *ngIf=\"advert.images.length != 0\" [src]=\"advert.images[0]\">\n        </div>\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\"\n             *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n          <div class=\"h2\">\n            {{advert.title}}\n          </div>\n\n        </div>\n      </div>\n      <!-- / APP TITLE -->\n\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n\n      <!-- CONTENT -->\n      <div class=\"content\">\n\n        <mat-tab-group>\n\n          <mat-tab label=\"Advertisement Details\">\n\n            <div class=\"invoice tab-content p-24\" fusePerfectScrollbar>\n\n              <div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\n\n                <div class=\"invoice-container\">\n\n                  <!-- INVOICE -->\n                  <div class=\"card\">\n\n                    <div class=\"header1\">\n                      <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n                        <div class=\"client\">\n                          <div class=\"invoice-number\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"mat-headline\">{{advert.title}}</span>\n                            <mat-icon *ngIf=\"advert.status==='active'\" class=\"mb-12 ml-4 green\">check_circle</mat-icon>\n                            <mat-icon *ngIf=\"advert.status==='closed'\" class=\"mb-12 ml-4 red\">highlight_off</mat-icon>\n                          </div>\n\n                          <span class=\"title\">{{advert.description}}</span>\n                          <br/>\n                          <br/>\n                          <span class=\"title\">({{advert.price | number}} S.P)</span>\n                          <br/>\n                          <mat-divider></mat-divider>\n                          <br/>\n                          <div class=\"info\">\n                            <div class=\"email\">{{advert.createdAt.toString().split('T')[0]}}</div>\n                            <div class=\"phone\">{{advert.phone}}</div>\n                            <div class=\"address\">{{advert.address}}</div>\n                          </div>\n                          <br/>\n                          <mat-divider></mat-divider>\n                          <br/>\n                          <div class=\"info\">\n                           <!-- <div>Bookmarked\n                              <mat-icon *ngIf=\"advert.isBookmarked==true\" class=\" green\">check_circle</mat-icon>\n                              <mat-icon *ngIf=\"advert.isBookmarked==false\" class=\" red\">highlight_off</mat-icon>\n                            </div>-->\n                            <div >Views Count <span class=\"number\">{{advert.viewsCount}}</span>\n                            </div>\n                            <div *ngIf=\"advert.owner\">Owner <span class=\"number\">{{advert.owner.firstName}} {{advert.owner.lastName}}</span></div>\n                            <div *ngIf=\"advert.city\">City <span class=\"number\">{{advert.city.name}} </span></div>\n                            <div *ngIf=\"advert.category\">Category <span class=\"number\">{{advert.category.title}} </span></div>\n                            <div *ngIf=\"advert.subCategory\">Sub Category <span class=\"number\">{{advert.subCategory.title}} </span></div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <!-- / INVOICE -->\n\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n          <mat-tab label=\"Advertisement Images\">\n            <div class=\"tab-content p-24\" fusePerfectScrollbar>\n              <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap>\n\n                <div *ngIf=\"advert.images.length === 0\"\n                     class=\"product-image\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\n                  <img class=\"media\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\n                </div>\n\n                <div *ngFor=\"let image of advert.images\">\n                  <div *ngIf=\"advert.images.length > 0\"\n                       class=\"product-image  m-16\" fxlayout=\"row\" fxLayoutAlign=\"center center\">\n                    <img class=\"media\" [src]=\"image\" >\n                  </div>\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n\n        </mat-tab-group>\n\n      </div>\n      <!-- / CONTENT -->\n\n    </div>\n    <!-- / CONTENT CARD -->\n\n  </div>\n  <!-- / CENTER -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#order .header .product-image {\n  overflow: hidden;\n  width: 56px;\n  height: 56px; }\n  #order .header .product-image img {\n    height: 100%;\n    width: 100%;\n    max-width: none;\n    border-radius: 50%; }\n  #order .header .subtitle {\n  margin: 6px 0 0 0; }\n  #order .content .mat-tab-group,\n#order .content .mat-tab-body-wrapper,\n#order .content .tab-content {\n  flex: 1 1 auto;\n  max-width: 100%; }\n  #order .content .tab-content {\n  flex: 1 1 auto; }\n  #order .content .tab-content .product-image {\n    width: 200px;\n    /*max-width: 200px;\n        min-width: 200px;*/ }\n  #order .content .tab-content .product-image img {\n      -o-object-fit: cover;\n         object-fit: cover;\n      width: 100%;\n      height: 200px; }\n  #order .content .tab-content.products .product-row {\n    cursor: pointer; }\n  #order .content .tab-content.invoice {\n    /* PRINT STYLES */ }\n  #order .content .tab-content.invoice #invoice.compact {\n      padding: 0;\n      overflow: auto; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container {\n        padding: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n          width: 900px;\n          max-width: 900px;\n          padding: 64px 88px;\n          overflow: hidden;\n          background: #FFFFFF; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number {\n            font-size: 18px;\n            padding-bottom: 2px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .green {\n              color: green; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .red {\n              color: red; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .title {\n              color: rgba(0, 0, 0, 0.54); }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .invoice-number .number {\n              padding-left: 6px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date {\n            font-size: 18px;\n            padding-bottom: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date .title {\n              color: rgba(0, 0, 0, 0.54); }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .due-date .date {\n              padding-left: 6px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info {\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 22px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .number {\n              padding-left: 6px;\n              color: black; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .green {\n              font-size: 16px;\n              color: green; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .client .info .red {\n              font-size: 16px;\n              color: red; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer {\n            padding-right: 66px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .logo {\n              width: 200px;\n              padding: 0 8px;\n              border-right: 1px solid rgba(255, 255, 255, 0.7); }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header1 .issuer .info {\n              padding: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 64px;\n            font-size: 15px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n              padding-left: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n              padding-right: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 16px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 8px;\n              font-size: 12px;\n              color: rgba(0, 0, 0, 0.54);\n              max-width: 360px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 32px 0 72px 0; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              text-align: right;\n              font-size: 16px;\n              font-weight: 500;\n              color: rgba(0, 0, 0, 0.54);\n              border-bottom: none;\n              padding: 4px 8px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 32px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 24px 8px;\n              border-top: 1px solid rgba(0, 0, 0, 0.12);\n              font-size: 35px;\n              font-weight: 300;\n              color: black; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n            font-size: 15px;\n            font-weight: 500;\n            margin-bottom: 24px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo, #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            -ms-flex: 0 1 auto; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n            width: 32px;\n            min-width: 32px;\n            margin-right: 24px; }\n  #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 12px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            line-height: 18px; }\n  @media print {\n      #order .content .tab-content.invoice {\n        /* Invoice Specific Styles */ }\n        #order .content .tab-content.invoice #invoice.compact .invoice-container {\n          padding: 0; }\n          #order .content .tab-content.invoice #invoice.compact .invoice-container .card {\n            width: 100%;\n            min-width: 0;\n            background: none;\n            padding: 0;\n            box-shadow: none; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .invoice-date {\n              margin-bottom: 16pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .header .issuer {\n              padding-right: 0;\n              margin-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table {\n              margin-top: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n                font-size: 10pt;\n                max-width: 60pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                  padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n                padding-left: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n                padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .title {\n                font-size: 10pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table .detail {\n                margin-top: 4pt;\n                font-size: 9pt;\n                max-width: none; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer {\n              margin: 16pt 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n                font-size: 13pt;\n                padding: 4pt 4pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                  text-align: left;\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                  padding-right: 0; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n                padding-bottom: 16pt; }\n              #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n                padding: 16pt 4pt 0 4pt;\n                font-size: 16pt; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                  padding-left: 0; }\n                #order .content .tab-content.invoice #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                  padding-right: 0; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .note {\n              font-size: 10pt;\n              margin-bottom: 8pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .logo {\n              margin-right: 8pt; }\n            #order .content .tab-content.invoice #invoice.compact .invoice-container .card .footer .small-note {\n              font-size: 8pt;\n              line-height: normal; } }\n  #order .content .mat-tab-body-content {\n  display: flex; }\n  #order .content .mat-tab-label {\n  height: 64px; }\n  #order .content table {\n  table-layout: fixed; }\n"

/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AdvertisementDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementDetailsComponent", function() { return AdvertisementDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/animations */ "./src/app/core/animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvertisementDetailsComponent = /** @class */ (function () {
    function AdvertisementDetailsComponent(route) {
        this.route = route;
    }
    AdvertisementDetailsComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.data['serverResult']) {
            this.advert = this.route.snapshot.data['serverResult'];
        }
    };
    AdvertisementDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertisement-details',
            template: __webpack_require__(/*! ./advertisement-details.component.html */ "./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.html"),
            styles: [__webpack_require__(/*! ./advertisement-details.component.scss */ "./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdvertisementDetailsComponent);
    return AdvertisementDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n        <button class=\"mr-0 mr-sm-16\" mat-icon-button [routerLink]=\"'/advertisements'\">\n          <mat-icon>arrow_back</mat-icon>\n        </button>\n\n        <!-- <div class=\"product-image mr-8 mr-sm-16\" *fuseIfOnDom\n              [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n           <img *ngIf=\"!userForm.value.avatar || userForm.value.avatar == ''\" [src]=\"defaultAvatar\">\n           <img *ngIf=\"userForm.value.avatar && userForm.value.avatar != ''\" [src]=\"userForm.value.avatar\">\n         </div>-->\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start start\" *fuseIfOnDom\n             [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">\n          <div class=\"h2\" *ngIf=\"isEditMode\">\n            {{advertForm.title}}\n          </div>\n          <div class=\"h2\" *ngIf=\"!isEditMode\">\n            New Advertisement\n          </div>\n          <div class=\"subtitle secondary-text\">\n            <span>Advertisement Details</span>\n          </div>\n        </div>\n      </div>\n      <!-- / APP TITLE -->\n\n      <button mat-raised-button class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n              [disabled]=\"advertForm.status == 'INVALID'\n              || advertForm.controls.images.value.length === 0\"\n              (click)=\"f.ngSubmit.emit()\" type=\"submit\">\n        <span>SAVE</span>\n      </button>\n      <!-- <button mat-raised-button class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n               (click)=\"uploadImages(advertForm.controls.images.value)\">\n         <span>aa</span>\n       </button>-->\n      <!-- <button mat-raised-button class=\"save-product-button mat-white-bg mt-16 mt-sm-0\"\n               (click)=\"printt(advertForm.value)\">\n         <span>bb</span>\n       </button>-->\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n\n      <!-- CONTENT -->\n      <div class=\"content\">\n        <form [formGroup]=\"advertForm\" novalidate (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"product w-100-p\"\n              fxLayout=\"column\" fxFlex>\n          <mat-tab-group (selectChange)=\"fixBug($event.index)\">\n\n            <mat-tab label=\"Basic Info\">\n\n              <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"tab-content p-24\" fusePerfectScrollbar fxFlex=\"80%\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">web</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput formControlName=\"title\" name=\"title\" placeholder=\"Title\"\n                             required>\n                      <mat-error *ngIf=\"advertForm.controls.title.invalid\">{{getErrorMessage('title','required','')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">attach_money</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput name=\"price\" type=\"number\" min=\"0\" formControlName=\"price\"\n                             placeholder=\"Price\" required>\n                      <mat-error *ngIf=\"advertForm.controls.price.invalid\">{{getErrorMessage('price','required','',\n                        'min')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">call</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input type=\"text\" formControlName=\"phone\" matInput name=\"phone\"\n                             placeholder=\"Phone\">\n                      <mat-error *ngIf=\"advertForm.controls.phone.invalid\">{{getErrorMessage('phone','', 'pattern',\n                        '')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">remove_red_eye</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput name=\"viewsCount\" type=\"number\" placeholder=\"Views Count\" min=\"0\"\n                             formControlName=\"viewsCount\">\n                      <mat-error *ngIf=\"advertForm.controls.viewsCount.invalid\">{{getErrorMessage('viewsCount','', '',\n                        'min')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">accessibility</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <mat-select placeholder=\"Status\" name=\"status\" ([value])=\"advertForm.value.status\"\n                                  formControlName=\"status\">\n                        <mat-option value=\"active\">Active</mat-option>\n                        <mat-option value=\"closed\">Closed</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">description</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <textarea matInput name=\"description\" rows=\"4\" formControlName=\"description\"\n                                placeholder=\"Description\" required></textarea>\n                      <mat-error *ngIf=\"advertForm.controls.description.invalid\">\n                        {{getErrorMessage('description','required','', '')}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                </div>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Images*\">\n              <div class=\"images-tab\" fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"images-wrapper tab-content p-24\" fusePerfectScrollbar fxFlex=\"80%\">\n                  <image-upload\n                    [uploadedFiles]=\"advertForm.controls.images.value\" max=\"20\"\n                    (uploadFinished)=\"onUploadFinished($event)\"\n                    (removed)=\"onRemoved($event)\"\n                  ></image-upload>\n                </div>\n              </div>\n            </mat-tab>\n            <mat-tab label=\"Other Info\">\n\n              <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                <div class=\"tab-content p-24\" fusePerfectScrollbar fxFlex=\"100%\">\n                  <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                     <mat-checkbox formControlName=\"isBookmarked\" name=\"isBookmarked\">Is Bookmarked</mat-checkbox>\n                   </div>-->\n\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">place</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput name=\"address\" placeholder=\"Address\" formControlName=\"address\">\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">date_range</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <input matInput [matDatepicker]=\"picker\" name=\"createdAt\" placeholder=\"Created At\"\n                             (focus)=\"picker.open()\" formControlName=\"createdAt\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">accessibility</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <mat-select placeholder=\"Owner\" [(value)]=\"advertForm.value.ownerId\" name=\"ownerId\"\n                                  formControlName=\"ownerId\">\n                        <mat-option value=\"\">None</mat-option>\n                        <mat-option *ngFor=\"let owner of users\" [value]=\"owner.id\">{{owner.firstName}}\n                          {{owner.lastName}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">location_city</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <mat-select placeholder=\"City\" [(value)]=\"advertForm.value.cityId\" name=\"cityId\"\n                                  formControlName=\"cityId\">\n                        <mat-option value=\"\">None</mat-option>\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.id\">{{city.name}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                  <div class=\"categories\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                    <mat-icon class=\"mr-12 mt-12\">group_work</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <mat-select placeholder=\"Category\" [(value)]=\"advertForm.value.categoryId\" name=\"categoryId\"\n                                  formControlName=\"categoryId\">\n                        <!--<mat-option value=\"\" (click)=\"setSelectedCategory('')\">None</mat-option>-->\n                        <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\"\n                                    (click)=\"setSelectedCategory(category)\">\n                          <!--<img [src]=\"category.image\" [alt]=\"category.image\">-->\n                          {{category.title}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\"\n                       *ngIf=\"advert.category && advert.category!==null && advert.category!==''\">\n                    <mat-icon class=\"mr-12 mt-12\">group_work</mat-icon>\n                    <mat-form-field class=\"w-100-p\">\n                      <mat-select placeholder=\"Sub Category\" [(value)]=\"advertForm.value.subCategoryId\"\n                                  name=\"subCategoryId\"\n                                  formControlName=\"subCategoryId\">\n                        <!--<mat-option value=\"\" (click)=\"setSelectedSubCategory('')\">None</mat-option>-->\n                        <mat-option *ngFor=\"let subCategory of advert.category.subCategories\" [value]=\"subCategory.id\"\n                                    (click)=\"setSelectedSubCategory(subCategory)\">\n                          {{subCategory.title}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div *ngIf=\"subCategoryFields && subCategoryFields.controls['fields']\">\n                    <div>\n                      <h3>Sub-Category Fields</h3>\n                    </div>\n                    <div>\n                      <div *ngIf=\"advertForm.value.subCategoryId\" [formGroup]=\"subCategoryFields\">\n                        <mat-accordion *ngIf=\"showMe\">\n                          <div formArrayName=\"fields\">\n                            <mat-expansion-panel\n                              *ngFor=\"let field of subCategoryFields.controls['fields'].controls; let i = index\"\n                              [expanded]=\"false\">\n                              <!--(click)=\"setSelectedFieldsPanel(field)\"-->\n                              <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                  <h3 class=\"text-bold\"> {{field.value.key}}</h3>\n                                </mat-panel-title>\n                              </mat-expansion-panel-header>\n                              <div>\n                                <!--1-->\n                                <div formGroupName=\"{{i}}\" fxLayout=\"column\">\n                                  <div fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                                    <button mat-icon-button>\n                                      <mat-icon>subdirectory_arrow_right</mat-icon>\n                                    </button>\n                                    <button mat-icon-button (click)=\"removeSomething([{val:i, remove: true}], 'subCategoryFields')\"\n                                            matTooltip=\"Remove {{field.controls.key.value}}\">\n                                      <mat-icon>delete</mat-icon>\n                                    </button>\n                                    <mat-form-field class=\"w-100-p\">\n                                      <input matInput name=\"fieldkey\" placeholder=\"Key\" formControlName=\"key\" required>\n                                    </mat-form-field>\n                                    <mat-form-field class=\"w-100-p\"\n                                                    *ngIf=\"field.controls.type.value === 'text' || field.controls.type.value === 'choose'\">\n                                      <input matInput name=\"fieldkey\" placeholder=\"Value\" formControlName=\"value\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'number'\">\n                                      <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Value\"\n                                             formControlName=\"value\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"w-100-p\">\n                                      <input type=\"number\" matInput name=\"fieldPriority\" placeholder=\"Priority\"\n                                             formControlName=\"priority\">\n                                    </mat-form-field>\n                                    <mat-form-field class=\"w-100-p\">\n                                      <mat-select placeholder=\"Type\" name=\"fieldtype\" formControlName=\"type\"\n                                                  ([value])=\"field.controls.type.value\"\n                                                  (change)=\"onSelectType([{val:i, type:'choose'}], field.controls.type.value, 'subCategoryFields')\">\n                                        <mat-option value=\"text\">Text</mat-option>\n                                        <mat-option value=\"number\">Number</mat-option>\n                                        <mat-option value=\"choose\">Select</mat-option>\n                                      </mat-select>\n                                    </mat-form-field>\n                                  </div>\n                                  <!--2-->\n                                  <div\n                                    *ngIf=\"field.controls.type.value === 'choose' && field.controls.values && field.controls.values.length>0\"\n                                    formArrayName=\"values\" fxLayout=\"column\">\n                                    <div class=\"ml-32\" *ngFor=\"let vv of field.controls.values.controls; let j = index\"\n                                         fxLayout=\"column\">\n                                      <div fxLayout=\"column\" formGroupName=\"{{j}}\">\n                                        <div fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                                          <button mat-icon-button>\n                                            <mat-icon>subdirectory_arrow_right</mat-icon>\n                                          </button>\n                                          <button mat-icon-button\n                                                  (click)=\"removeSomething([{val: i}, {val: j, remove: true}], 'subCategoryFields')\"\n                                                  matTooltip=\"Remove {{vv.controls.value.value}}\">\n                                            <mat-icon>delete</mat-icon>\n                                          </button>\n                                          <mat-form-field class=\"w-100-p\" fxFlex=\"30%\">\n                                            <input matInput name=\"fieldvalue\" placeholder=\"Value\" formControlName=\"value\">\n                                          </mat-form-field>\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <button class=\"ml-32\" type=\"button\" mat-icon-button\n                                            (click)=\"addSomething([{val: i, add: true}], 'subCategoryFields')\"\n                                            matTooltip=\"Add Value to {{field.controls.key.value}}\">\n                                      <mat-icon aria-label=\"add value\">add</mat-icon>\n                                    </button>\n                                  </div>\n                                </div>\n\n                               <!-- <div formGroupName=\"{{i}}\" fxLayout=\"row\" fxLayoutGap=\"2rem\" fxFlex=\"10%\">\n                                  <mat-form-field class=\"w-100-p\">\n                                    <input matInput name=\"fieldkey\" placeholder=\"Field Key\" formControlName=\"key\"\n                                           required>\n                                  </mat-form-field>\n                                  <mat-form-field class=\"w-100-p\"\n                                                  *ngIf=\"field.controls.type.value === 'text' || field.controls.type.value === 'choose'\">\n                                    <input matInput name=\"fieldkey\" placeholder=\"Field Value\" formControlName=\"value\">\n                                  </mat-form-field>\n                                  <mat-form-field class=\"w-100-p\"\n                                                  *ngIf=\"field.controls.type.value === 'number'\">\n                                    <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Field Value\"\n                                           formControlName=\"value\">\n                                  </mat-form-field>\n                                  <mat-form-field class=\"w-100-p\">\n                                    <mat-select placeholder=\"Field Type\" name=\"fieldtype\" formControlName=\"type\"\n                                                ([value])=\"field.controls.type.value\"\n                                                (change)=\"onSelectType([{val:i, type:'choose'}], field.controls.type.value, 'subCategoryFields')\">\n                                      <mat-option value=\"text\">Text</mat-option>\n                                      <mat-option value=\"number\">Number</mat-option>\n                                      <mat-option value=\"choose\">Select</mat-option>\n                                    </mat-select>\n                                  </mat-form-field>\n                                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n                                    <div fxFlex=\"56%\"\n                                         *ngIf=\"field.value.type === 'choose' && field.value.values && field.value.values.length>0\"\n                                         fxLayout=\"column\"\n                                         formArrayName=\"values\">\n                                      <div *ngFor=\"let vv of field.controls.values.controls; let j = index \">\n                                        <div fxLayout=\"row\" formGroupName=\"{{j}}\" fxFlex=\"30%\" fxLayoutGap=\"2rem\">\n                                          <mat-form-field class=\"w-100-p\">\n                                            <input matInput name=\"fieldvalue\" placeholder=\"Value\"\n                                                   formControlName=\"value\">\n                                          </mat-form-field>\n\n                                          &lt;!&ndash;3&ndash;&gt;\n                                          &lt;!&ndash;<div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex=\"240%\">\n                                            <div *ngIf=\"vv.controls.fields \"\n                                                 fxLayout=\"column\"\n                                                 formArrayName=\"fields\">\n                                              <div *ngFor=\"let ff of vv.controls.fields.controls; let k = index \">\n                                                <div fxLayout=\"row\" formGroupName=\"{{k}}\" fxLayoutGap=\"2rem\"\n                                                     fxFlex=\"12%\">\n                                                  <mat-form-field class=\"w-100-p\">\n                                                    <input matInput name=\"ff\" placeholder=\"Field Key\"\n                                                           formControlName=\"key\">\n                                                  </mat-form-field>\n                                                  <mat-form-field class=\"w-100-p\">\n                                                    <mat-select name=\"fft\" placeholder=\"Field Type\"\n                                                                formControlName=\"type\"\n                                                                ([value])=\"ff.controls.type.value\"\n                                                                (change)=\"onSelectType([{val:i}, {val:j}, {val:k,type:'choose'}], ff.controls.type.value,'subCategoryFields')\">\n                                                      <mat-option value=\"text\">Text</mat-option>\n                                                      <mat-option value=\"number\">Number</mat-option>\n                                                      <mat-option value=\"choose\">Select</mat-option>\n                                                    </mat-select>\n                                                  </mat-form-field>\n\n\n                                                  &lt;!&ndash;4&ndash;&gt;\n\n                                                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxFlex=\"90%\">\n                                                    <div\n                                                      *ngIf=\"ff.controls.type.value === 'choose' \" fxLayout=\"column\"\n                                                      formArrayName=\"values\">\n                                                      <div\n                                                        *ngFor=\"let vvv of ff.controls.values.controls; let e = index \">\n                                                        <div fxLayout=\"row\" formGroupName=\"{{e}}\" fxFlex=\"25%\">\n                                                          <mat-form-field class=\"w-100-p\">\n                                                            <input matInput name=\"fieldvalue\" placeholder=\"Value\"\n                                                                   formControlName=\"value\">\n                                                          </mat-form-field>\n                                                          <button type=\"button\" mat-icon-button color=\"warn\"\n                                                                  (click)=\"removeSomething([{val:i}, {val:j}, {val:k}, {val:e, remove:true}], 'subCategoryFields')\"\n                                                                  matTooltip=\"Remove {{vvv.controls.value.value}}\">\n                                                            <mat-icon aria-label=\"remove\">delete</mat-icon>\n                                                          </button>\n                                                        </div>\n                                                      </div>\n                                                      <button matTooltip=\"Add Value to {{ff.controls.key.value}}\"\n                                                              type=\"button\"\n                                                              mat-icon-button color=\"warn\"\n                                                              (click)=\"addSomething([{val:i}, {val:j}, {val:k,add:true}], 'subCategoryFields')\">\n                                                        <mat-icon aria-label=\"add value\">add</mat-icon>\n                                                      </button>\n                                                      <br/>\n                                                      <br/>\n                                                      <br/>\n                                                      <br/>\n                                                    </div>\n                                                  </div>\n                                                  &lt;!&ndash;/4&ndash;&gt;\n                                                  <button type=\"button\" mat-icon-button mat-raised-button color=\"warn\"\n                                                          (click)=\"removeSomething([{val:i},{val:j},{val:k, remove:true}], 'subCategoryFields')\"\n                                                          matTooltip=\"Remove {{ff.controls.key.value}}\">\n                                                    <mat-icon aria-label=\"remove\">delete</mat-icon>\n                                                  </button>\n                                                </div>\n                                              </div>\n                                              <button matTooltip=\"Add Field {{vv.controls.value.value}}\" type=\"button\"\n                                                      mat-raised-button\n                                                      mat-icon-button color=\"warn\"\n                                                      (click)=\"addSomething([{val: i}, {val:j,add:true}], 'subCategoryFields')\">\n                                                <mat-icon aria-label=\"add field\">add</mat-icon>\n                                              </button>\n                                              <br/>\n                                              <br/>\n                                              <br/>\n                                              <br/>\n                                            </div>\n\n                                            <br/>\n                                            <br/>\n                                            <br/>\n                                            <br/>\n                                          </div>&ndash;&gt;\n                                          &lt;!&ndash;/3&ndash;&gt;\n\n                                          <button type=\"button\" mat-raised-button mat-icon-button color=\"primary\"\n                                                  (click)=\"removeSomething([{val: i}, {val: j, remove: true}], 'subCategoryFields')\"\n                                                  matTooltip=\"Remove {{vv.controls.value.value}}\">\n                                            <mat-icon aria-label=\"remove\">delete</mat-icon>\n                                          </button>\n                                        </div>\n                                      </div>\n                                      <button type=\"button\" mat-raised-button mat-icon-button color=\"primary\"\n                                              (click)=\"addSomething([{val: i, add: true}], 'subCategoryFields')\"\n                                              matTooltip=\"Add Value to {{field.controls.key.value}}\">\n                                        <mat-icon aria-label=\"add value\">add</mat-icon>\n                                      </button>\n                                      <br/>\n                                      <br/>\n                                      <br/>\n                                      <br/>\n                                    </div>\n\n                                    <button type=\"button\" mat-raised-button mat-icon-button color=\"accent\"\n                                            (click)=\"removeSomething([{val:i, remove: true}], 'subCategoryFields')\"\n                                            matTooltip=\"Remove {{field.controls.key.value}}\">\n                                      <mat-icon aria-label=\"remove\">delete</mat-icon>\n                                    </button>\n                                  </div>\n                                </div>-->\n                              </div>\n                            </mat-expansion-panel>\n                          </div>\n\n                        </mat-accordion>\n\n                        <!--<div *ngFor=\"let field of advertForm.controls.fields.controls; let i = index\">\n                          <div [formGroupName]=\"i\" fxLayout=\"row\" fxLayoutGap=\"2rem\">\n                            <mat-form-field class=\"w-100-p\" fxFlex=\"30%\" fxFlex=\"20%\">\n                              <input matInput name=\"fieldkey\" placeholder=\"Field Key\" formControlName=\"key\">\n                            </mat-form-field>\n                            <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'text' || field.controls.type.value === 'choose'\" fxFlex=\"20%\">\n                              <input  type=\"text\" matInput name=\"fieldkey\" placeholder=\"Field Value\" formControlName=\"value\">\n                            </mat-form-field>\n                            <mat-form-field class=\"w-100-p\" *ngIf=\"field.controls.type.value === 'number'\" fxFlex=\"20%\">\n                              <input type=\"number\" matInput name=\"fieldkey\" placeholder=\"Field Value\" formControlName=\"value\">\n                            </mat-form-field>\n                            <mat-form-field class=\"w-100-p\" fxFlex=\"20%\">\n                              <mat-select placeholder=\"Field Type\" name=\"fieldtype\" formControlName=\"type\"\n                                          ([value])=\"type\"\n                                          (change)=\"selectFieldType(field.controls.type.value, field, i)\">\n                                <mat-option value=\"text\">Text</mat-option>\n                                <mat-option value=\"number\">Number</mat-option>\n                                <mat-option value=\"choose\">Select</mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                            &lt;!&ndash;<div fxLayout=\"column\">&ndash;&gt;\n\n                              <div  *ngIf=\"field.controls.type.value === 'choose' && field.controls.values\" fxLayout=\"column\"\n                                    formArrayName=\"values\">\n                                <div  *ngFor=\"let vv of field.controls.values.controls; let j = index \">\n                                  <div fxLayout=\"row\">\n                                    <mat-form-field class=\"w-100-p\">\n                                      <input matInput name=\"fieldvalue\" placeholder=\"Value\" [formControlName]=\"j\">\n                                    </mat-form-field>\n                                    <button type=\"button\" mat-icon-button color=\"warn\" (click)=\"removeValue(i, j)\">\n                                      <mat-icon aria-label=\"remove\">close</mat-icon>\n                                    </button>\n                                  </div>\n                                </div>\n\n                                <button type=\"button\" mat-icon-button color=\"accent\" (click)=\"addValue(i)\">\n                                   <mat-icon aria-label=\"addd\">add</mat-icon>\n                                </button>\n                              </div>\n                            &lt;!&ndash;</div>&ndash;&gt;\n                            <button type=\"button\" mat-icon-button color=\"warn\" (click)=\"removeField(i)\">\n                              <mat-icon aria-label=\"remove\">close</mat-icon>\n                            </button>\n                          </div>\n\n                        </div>-->\n                      </div>\n                      <button *ngIf=\"advert.subCategory\" type=\"button\" mat-icon-button\n                              (click)=\"addSomething(null, 'subCategoryFields')\"\n                              matTooltip=\"Add Field to the Sub-Category {{advert.subCategory.title}}\">\n                        <mat-icon aria-label=\"add field\">add</mat-icon>\n                      </button>\n                    </div>\n                  </div>\n\n\n                </div>\n              </div>\n            </mat-tab>\n          </mat-tab-group>\n        </form>\n\n        <!--<pre> {{advertForm.value | json}} </pre>-->\n        <!-- / CONTENT -->\n\n      </div>\n      <!-- / CONTENT CARD -->\n\n    </div>\n    <!-- / CENTER -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#product .center .content-card .content .product .mat-tab-group {\n  /*  .categories{\n                      img{\n                        width: 50px;\n                        max-width: 50px;\n                        border-radius: 50%;\n                      }\n                    }*/\n  /* .customClass{\n                      background: #43a047;\n                    }*/ }\n  #product .center .content-card .content .product .mat-tab-group .images-tab .test {\n    background: #43a047; }\n  #product .center .content-card .content .product .mat-tab-group .images-tab .test .img-ul-image {\n      background-size: cover !important; }\n  #product .center .content-card .content .product .mat-tab-group .images-tab .test .customClass {\n      background-color: #dd3;\n      border-radius: 5px;\n      margin: 5px;\n      width: 500px; }\n  #product .center .content-card .content .product .mat-tab-group .images-tab .test .customClass .img-ul-upload {\n        background: #43a047; }\n  #product .center .content-card .content .product .mat-tab-group .images-tab .test .customClass .img-ul-upload {\n      background-color: #000 !important; }\n  #product .center .content-card .content .product .mat-tab-group .images-tab .test .customClass .img-ul-clear {\n      background-color: #B819BB !important; }\n  #product .center .content-card .content .product .mat-tab-group .images-tab .test .customClass .img-ul-drag-box-msg {\n      color: purple !important; }\n  #product .center .content-card .content .product .mat-tab-group .images-tab .test .customClass .img-ul-container {\n      background-color: #FF6CAD !important; }\n"

/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AdvertisementEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementEditComponent", function() { return AdvertisementEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/animations */ "./src/app/core/animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_enums_page_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/enums/page-action */ "./src/app/main/content/shared/enums/page-action.ts");
/* harmony import */ var _lazy_child_advertisements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lazy-child/advertisements.service */ "./src/app/main/content/lazy-child/advertisements.service.ts");
/* harmony import */ var _lazy_child_advertisement_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lazy-child/advertisement.model */ "./src/app/main/content/lazy-child/advertisement.model.ts");
/* harmony import */ var _GUID_GUID_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../GUID/GUID.module */ "./src/app/main/content/GUID/GUID.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_helpers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helpers.service */ "./src/app/main/content/shared/helpers.service.ts");
/* harmony import */ var _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/splash-screen.service */ "./src/app/core/services/splash-screen.service.ts");
/* harmony import */ var _cities_cities_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../cities/cities.service */ "./src/app/main/content/cities/cities.service.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../categories/categories.service */ "./src/app/main/content/categories/categories.service.ts");
/* harmony import */ var _categories_subCategories_subCategories_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../categories/subCategories/subCategories.service */ "./src/app/main/content/categories/subCategories/subCategories.service.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../users/users.service */ "./src/app/main/content/users/users.service.ts");
/* harmony import */ var _shared_app_settings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/app.settings */ "./src/app/main/content/shared/app.settings.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/main/content/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AdvertisementEditComponent = /** @class */ (function () {
    // @ViewChild('file') fileSelector: ElementRef;
    function AdvertisementEditComponent(route, router, citiesService, categoriesService, subCategoriesService, usersService, advertisementsService, loadingScreen, helpers, authService, formBuilder) {
        this.route = route;
        this.router = router;
        this.citiesService = citiesService;
        this.categoriesService = categoriesService;
        this.subCategoriesService = subCategoriesService;
        this.usersService = usersService;
        this.advertisementsService = advertisementsService;
        this.loadingScreen = loadingScreen;
        this.helpers = helpers;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.isEditMode = false;
        this.cities = [];
        this.categories = [];
        this.users = [];
        this.finalValues = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.fieldsPanelOpen = false;
        this.showMe = false;
        this.advert = new _lazy_child_advertisement_model__WEBPACK_IMPORTED_MODULE_5__["Advertisement"]();
        this.Guid = new _GUID_GUID_module__WEBPACK_IMPORTED_MODULE_6__["GUID"]();
        this.selectedFieldPanel = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null) });
    }
    AdvertisementEditComponent.prototype.fixBug = function (index) {
        if (index === 2) {
            this.showMe = true;
        }
        else {
            this.showMe = false;
        }
    };
    AdvertisementEditComponent.prototype.getErrorMessage = function (fieldName, required, phone, min) {
        return this.advertForm.controls[fieldName].hasError(required) ? 'You must enter a value' :
            this.advertForm.controls[fieldName].hasError(phone) ? 'Not a valid phone' :
                this.advertForm.controls[fieldName].hasError(min) ? 'The value must be more than 0' :
                    '';
    };
    AdvertisementEditComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.listing().then(function (serverResult) {
            console.log('usersService', serverResult);
            _this.users = serverResult.items;
        }).catch(function (reason) {
            console.log('error ', reason);
        });
    };
    AdvertisementEditComponent.prototype.getCities = function () {
        var _this = this;
        this.citiesService.listing().then(function (serverResult) {
            console.log('CitiesService', serverResult);
            _this.cities = serverResult.items;
        }).catch(function (reason) {
            console.log('error ', reason);
        });
    };
    AdvertisementEditComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.listing().then(function (serverResult) {
            console.log('getCategories', serverResult);
            _this.categories = serverResult.items;
        }).catch(function (reason) {
            console.log('error ', reason);
        });
    };
    AdvertisementEditComponent.prototype.getSubCategories = function (category) {
        if (category) {
            category.subCategories = [];
            this.subCategoriesService.listing(category.id).then(function (serverResult) {
                console.log('subCategories', serverResult);
                category.subCategories = serverResult.items;
            }).catch(function (reason) {
                console.log('error ', reason);
            });
        }
    };
    AdvertisementEditComponent.prototype.setSelectedCategory = function (category) {
        this.advert.category = category;
        this.subCategoryFields = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        if (category && category !== null && category !== '')
            this.getSubCategories(category);
        else
            this.advertForm.value.subCategoryId = '';
    };
    AdvertisementEditComponent.prototype.setSelectedSubCategory = function (subCategory) {
        console.log('subCategory ', subCategory);
        console.log('this.advertForm ', this.advertForm);
        this.advert.subCategory = subCategory;
        this.subCategoryFields = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        if (!subCategory || subCategory == null || subCategory === '') {
        }
        else {
            if (subCategory.fields)
                this.subCategoryFields = this.createForm(subCategory);
        }
    };
    AdvertisementEditComponent.prototype.submit = function () {
        var _this = this;
        console.log('submit 1');
        console.log('this.subCategoryFields ', this.subCategoryFields.value);
        this.advertForm.value.fields = this.subCategoryFields.value.fields ? this.subCategoryFields.value.fields : null;
        console.log('this.advertForm add', this.advertForm.value);
        // this.advertForm.value.fields = this.advert.subCategory.fields;
        if (this.isEditMode) {
            console.log('this.advertForm edit', this.advertForm.value);
            this.advertisementsService.update(this.advertForm.value).then(function (val) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_3__["PageAction"].Update, true, 'advertisements');
                _this.router.navigate(['/advertisements']);
                _this.loadingScreen.hide();
            }, function (reason) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_3__["PageAction"].Update, false, 'advertisements');
                _this.loadingScreen.hide();
                console.log('error ', reason);
            });
        }
        else {
            delete this.advertForm.value.id;
            console.log('this.advertForm add', this.advertForm.value);
            this.advertisementsService.add(this.advertForm.value).then(function (val) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_3__["PageAction"].Create, true, 'advertisements');
                _this.router.navigate(['/advertisements']);
                _this.loadingScreen.hide();
            }, function (reason) {
                _this.helpers.showActionSnackbar(_shared_enums_page_action__WEBPACK_IMPORTED_MODULE_3__["PageAction"].Create, false, 'advertisements');
                _this.loadingScreen.hide();
                console.log('error ', reason);
            });
        }
    };
    AdvertisementEditComponent.prototype.uploadImages = function (images) {
        var _this = this;
        console.log('images ', images);
        if (images && images.length > 0) {
            var formData = new FormData();
            var arr_1 = [], append = false;
            for (var i = 0; i < images.length; i++) {
                // console.log('typeof images[i] ', typeof images[i]);
                if (typeof images[i] !== 'string') {
                    formData.append('file', images[i]);
                    append = true;
                }
                else
                    arr_1.push(images[i]);
            }
            console.log('append ', append);
            if (append)
                this.advertisementsService.uploadImages(formData).then(function (val) {
                    _this.advertForm.value.images = arr_1.concat(val);
                    _this.submit();
                }, function (reason) {
                    console.log('error ', reason);
                });
            else {
                this.advertForm.value.images = images;
                this.submit();
            }
        }
    };
    AdvertisementEditComponent.prototype.onSubmit = function (thisAdvertForm) {
        console.log('onSubmit ', thisAdvertForm);
        console.log('this.advertForm.controls.images.value ', this.advertForm);
        if (thisAdvertForm.valid) {
            this.loadingScreen.show();
            // this.advertForm.value.fields = this.prepareFields();
            this.uploadImages(this.advertForm.controls.images.value);
        }
    };
    AdvertisementEditComponent.prototype.uploadService = function () {
        return "'" + _shared_app_settings__WEBPACK_IMPORTED_MODULE_14__["AppSettings"].baseUrl + '/files/images/upload?access_token=' + this.authService.getToken() + "'";
    };
    AdvertisementEditComponent.prototype.onUploadFinished = function (event) {
        // console.log('event ', event);
        this.advertForm.controls.images.value.push(event.file);
        // console.log('this.advertForm.controls.images.value ', this.advertForm.controls.images.value);
    };
    AdvertisementEditComponent.prototype.onRemoved = function (event) {
        //  console.log('event ', event);
        // console.log('file', event.file);
        for (var i = 0; i < this.advertForm.controls.images.value.length; i++) {
            // console.log("this.advertForm.controls.images.value[i] ", this.advertForm.controls.images.value[i]);
            // console.log("event.file.src ", event.src);
            if (this.advertForm.controls.images.value[i] === event.src
                || this.advertForm.controls.images.value[i] === event.file) {
                this.advertForm.controls.images.value.splice(i, 1);
                break;
            }
        }
        /*for (let i = 0; i < this.advertForm.controls.images.value.length; i++) {
          if (event.file.src.split(':')[0] === 'http') {
            if (this.advertForm.controls.images.value[i] === event.file.src) {
              this.advertForm.controls.images.value.splice(i, 1);
              break;
            }
          }else {
            if (this.advertForm.controls.images.value[i] === event.file) {
              this.advertForm.controls.images.value.splice(i, 1);
              break;
            }
          }
        }*/
        // console.log('this.advertForm.controls.images.value ', this.advertForm.controls.images.value);
    };
    //============================================================================//
    AdvertisementEditComponent.prototype.setSelectedFieldsPanel = function (field) {
        console.log('field ', field);
        this.selectedFieldPanel = field;
        console.log('selectedFieldPanel.value._id == field.value._id ', this.selectedFieldPanel.value._id, field.value._id);
        //this.fieldsPanelOpen = !this.fieldsPanelOpen;
    };
    AdvertisementEditComponent.prototype.addSomething = function (levels, from) {
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
                    //alert()
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
        }
    };
    AdvertisementEditComponent.prototype.removeSomething = function (levels, from) {
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
    };
    AdvertisementEditComponent.prototype.onSelectType = function (level, type, from) {
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
    AdvertisementEditComponent.prototype.createItem = function (obj) {
        //console.log('choose ', obj);
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
                priority: obj.priority,
                values: this.formBuilder.array(subArr)
            });
        }
        else {
            return this.formBuilder.group({
                _id: obj._id || this.Guid.newGuid(),
                key: obj.key || 'New Field',
                type: obj.type || '',
                value: obj.value || '',
                priority: obj.priority,
                values: this.formBuilder.array([])
            });
        }
    };
    AdvertisementEditComponent.prototype.createSubItem3 = function (subItem) {
        //console.log('subItem ', subItem);
        return this.formBuilder.group({
            value: subItem.value || ''
        });
    };
    AdvertisementEditComponent.prototype.createSubItem2 = function (subItem) {
        // console.log('createSubItem2' ,subItem);
        if (subItem.type == 'choose' && subItem.values && subItem.values.length > 0) {
            var subArr = [];
            for (var i = 0; i < subItem.values.length; i++) {
                subArr.push(this.createSubItem3(subItem.values[i]));
            }
            return this.formBuilder.group({
                _id: subItem._id || this.Guid.newGuid(),
                key: subItem.key,
                type: subItem.type,
                priority: subItem.priority,
                value: subItem.value,
                values: this.formBuilder.array(subArr)
            });
        }
        else {
            return this.formBuilder.group({
                _id: subItem._id || this.Guid.newGuid(),
                key: subItem.key,
                type: subItem.type,
                priority: subItem.priority,
                value: subItem.value,
                values: this.formBuilder.array([])
            });
        }
    };
    AdvertisementEditComponent.prototype.createSubItem = function (subItem) {
        /* if (subItem.fields && subItem.fields.length > 0) {
           var subArr = [];
           for (var i = 0; i < subItem.fields.length; i++) {
             subArr.push(this.createSubItem2(subItem.fields[i]));
           }
           return this.formBuilder.group({
             value: subItem.value || '',
             fields: this.formBuilder.array(subArr)
           });
         } else {*/
        return this.formBuilder.group({
            value: subItem.value || '',
        });
        //}
    };
    AdvertisementEditComponent.prototype.createForm = function (obj) {
        if (obj.fields && obj.fields.length > 0) {
            var arr = [];
            for (var i = 0; i < obj.fields.length; i++) {
                //console.log('obj.fields[i] ', obj.fields[i]);
                arr.push(this.createItem(obj.fields[i]));
            }
            //console.log('arr', arr);
            return this.formBuilder.group({
                fields: this.formBuilder.array(arr)
            });
        }
        else {
            return this.formBuilder.group({
                fields: this.formBuilder.array([])
            });
        }
    };
    //============================================================================//
    AdvertisementEditComponent.prototype.ngOnInit = function () {
        this.isEditMode = this.route.snapshot.data['isEditMode'];
        if (this.route.snapshot.data['serverResult']) {
            this.advert = this.route.snapshot.data['serverResult'];
            if (this.advert.category !== null)
                this.getSubCategories(this.advert.category);
        }
        console.log('advert.subCategory ', this.advert);
        this.advertForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.id),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]),
            images: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.images),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[+]?[0-9]*\\.?[0-9]*')]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.status),
            fields: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({}),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.address),
            viewsCount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.viewsCount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]),
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.createdAt),
            isBookmarked: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.isBookmarked),
            cityId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.cityId),
            ownerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.ownerId),
            categoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.categoryId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            subCategoryId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.advert.subCategoryId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        console.log('advertForm ', this.advertForm);
        this.getCities();
        this.getCategories();
        this.getUsers();
        if (!this.isEditMode) {
            this.advertForm.controls.ownerId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](JSON.parse(localStorage.me).id);
            /// console.log('this.advertForm.controls.ownerId ', this.advertForm.controls.ownerId);
        }
        else {
            if (this.advert.subCategory && this.advert.subCategory !== null) {
                console.log('this.advert.subCategory ', this.advert.subCategory);
                this.subCategoryFields = this.createForm(this.advert);
                console.log('this.subCategoryFields ', this.subCategoryFields);
            }
        }
    };
    AdvertisementEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advertisement-edit',
            template: __webpack_require__(/*! ./advertisement-edit.component.html */ "./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.html"),
            styles: [__webpack_require__(/*! ./advertisement-edit.component.scss */ "./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _cities_cities_service__WEBPACK_IMPORTED_MODULE_10__["CitiesService"],
            _categories_categories_service__WEBPACK_IMPORTED_MODULE_11__["CategoriesService"],
            _categories_subCategories_subCategories_service__WEBPACK_IMPORTED_MODULE_12__["SubCategoriesService"],
            _users_users_service__WEBPACK_IMPORTED_MODULE_13__["UsersService"],
            _lazy_child_advertisements_service__WEBPACK_IMPORTED_MODULE_4__["AdvertisementsService"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_9__["FuseSplashScreenService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_8__["HelpersService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AdvertisementEditComponent);
    return AdvertisementEditComponent;
}());



/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"users\" class=\"page-layout carded fullwidth\" fusePerfectScrollbar>\n\n  <!-- TOP BACKGROUND -->\n  <div class=\"top-bg mat-accent-bg\"></div>\n  <!-- / TOP BACKGROUND -->\n\n  <!-- CENTER -->\n  <div class=\"center\">\n\n    <!-- HEADER -->\n    <div class=\"header white-fg\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-xs=\"row\"\n         fxLayoutAlign.gt-xs=\"space-between center\">\n\n      <!-- APP TITLE -->\n      <div class=\"logo my-12 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\n          web\n        </mat-icon>\n        <span class=\"logo-text h1\" *fuseIfOnDom\n              [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Advertisements</span>\n      </div>\n      <!-- / APP TITLE -->\n      <!-- SEARCH -->\n      <div class=\"search-input-wrapper ml-8 m-sm-0\"\n           fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <label class=\"mr-8\">\n          <mat-icon class=\"secondary-text\">search</mat-icon>\n        </label>\n        <mat-form-field floatPlaceholder=\"never\" fxFlex=\"1 0 auto\">\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n      </div>\n      <!-- / SEARCH -->\n\n      <!--Add BUTTON-->\n      <button mat-raised-button class=\"reference-button mat-white-bg mt-16 mt-sm-0\" aria-label=\"new\"\n              [routerLink]=\"'/advertisements/new'\">\n        <!--<mat-icon>add</mat-icon>-->\n        <span>New</span>\n      </button>\n      <!-- / Add BUTTON-->\n    </div>\n    <!-- / HEADER -->\n\n    <!-- CONTENT CARD -->\n    <div class=\"content-card mat-white-bg\">\n      <div class=\"table-loading-shade\" *ngIf=\"isLoadingResults || isRateLimitReached\">\n        <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n        <div class=\"table-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n          No Data Available\n        </div>\n      </div>\n\n      <mat-table #table [dataSource]=\"dataSource\" [@animateStagger]=\"{value:'50'}\" class=\"items-table\"\n                 fusePerfectScrollbar>\n\n        <!-- Id Column -->\n        <ng-container cdkColumnDef=\"id\">\n          <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm fxFlex=\"10%\">ID</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\" fxHide fxShow.gt-sm fxFlex=\"10%\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n            <p class=\" text-truncate mat-caption m-0\">{{item.id.slice(0, 10)}}</p>\n            <p class=\"text-truncate  mat-caption m-0\">{{item.id.slice(10,20)}}</p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Image Column -->\n        <ng-container cdkColumnDef=\"image\">\n          <mat-header-cell *cdkHeaderCellDef>Image</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <img class=\"item-image\"\n                 *ngIf=\"item.images[0]\" [alt]=\"item.title\"\n                 [src]=\"item.images[0]\"/>\n            <img *ngIf=\"!item.images[0]\" [src]=\"'assets/images/ecommerce/product-image-placeholder.png'\">\n          </mat-cell>\n        </ng-container>\n\n        <ng-container cdkColumnDef=\"title\">\n          <mat-header-cell *cdkHeaderCellDef>Title</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <p class=\"text-truncate font-weight-600\">{{item.title}}</p>\n          </mat-cell>\n        </ng-container>\n\n\n        <ng-container cdkColumnDef=\"price\">\n          <mat-header-cell *cdkHeaderCellDef>Price</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n            <p class=\"email text-truncate\">\n              {{item.price | number}} S.P\n            </p>\n          </mat-cell>\n        </ng-container>\n\n\n        <ng-container cdkColumnDef=\"city\">\n          <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>City</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\" fxHide fxShow.gt-sm>\n            <p class=\"text-truncate\" *ngIf=\"item.city\">\n              {{item.city.name}}\n            </p>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Status Column -->\n        <ng-container cdkColumnDef=\"status\">\n          <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Active</mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\" fxHide fxShow.gt-sm>\n            <mat-icon *ngIf=\"item.status == 'active'\" class=\"active-icon mat-green-600-bg s-16\">check</mat-icon>\n            <mat-icon *ngIf=\"item.status != 'active'\" class=\"active-icon mat-red-500-bg s-16\">check</mat-icon>\n          </mat-cell>\n        </ng-container>\n        <!-- Buttons Column -->\n        <ng-container cdkColumnDef=\"buttons\">\n          <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\n          <mat-cell *cdkCellDef=\"let item\">\n\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\n\n              <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\n                      (click)=\"$event.stopPropagation();\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n\n              <mat-menu #moreMenu=\"matMenu\">\n                <button mat-menu-item aria-label=\"edit\" (click)=\"routeTo(item, 'edit')\">\n                  <mat-icon>edit</mat-icon>\n                  <span>Edit</span>\n                </button>\n\n                <button mat-menu-item aria-label=\"remove\" (click)=\"routeTo(item, 'delete')\" class>\n                  <mat-icon>delete</mat-icon>\n                  <span>Delete</span>\n                </button>\n              </mat-menu>\n            </div>\n\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *cdkRowDef=\"let item; columns: displayedColumns;\" (click)=\"routeTo(item, 'details')\" matRipple\n                 [@animate]=\"{value:'*',params:{y:'100%'}}\"\n                 class=\"item\">\n        </mat-row>\n      </mat-table>\n\n      <mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\" [pageSizeOptions]=[10,20,30]>\n      </mat-paginator>\n    </div>\n    <!-- / CONTENT CARD -->\n  </div>\n  <!-- / CENTER -->\n</div>\n"

/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header .search-input-wrapper {\n  max-width: 480px; }\n@media (max-width: 599px) {\n  :host .header {\n    height: 176px !important;\n    min-height: 176px !important;\n    max-height: 176px !important; } }\n@media (max-width: 599px) {\n  :host .top-bg {\n    height: 240px; } }\n:host .items-table {\n  flex: 1 1 auto;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .items-table .mat-header-row {\n    min-height: 64px; }\n:host .items-table .item {\n    position: relative;\n    cursor: pointer;\n    height: 84px; }\n:host .items-table .mat-cell {\n    min-width: 0;\n    display: flex;\n    align-items: center; }\n:host .items-table .mat-column-id {\n    flex: 0 1 84px; }\n:host .items-table .mat-column-image {\n    flex: 0 1 84px; }\n:host .items-table .mat-column-image .item-image {\n      width: 52px;\n      height: 52px; }\n:host .items-table .mat-column-buttons {\n    flex: 0 1 80px; }\n:host .items-table .active-icon {\n    border-radius: 50%; }\n:host .table-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 26px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n:host .table-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n:host .table-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n:host .mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AdvertisementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementListComponent", function() { return AdvertisementListComponent; });
/* harmony import */ var _advertisements_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../advertisements.service */ "./src/app/main/content/lazy-child/advertisements.service.ts");
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







var AdvertisementListComponent = /** @class */ (function () {
    function AdvertisementListComponent(AdvertisementsService, router, activatedRoute, dialog, loadingScreen) {
        this.AdvertisementsService = AdvertisementsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.loadingScreen = loadingScreen;
        this.displayedColumns = ['id', 'image', 'title', 'price', 'city', 'status', 'buttons'];
        this.btnState = false;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = 0;
        this.startedWith = '';
    }
    AdvertisementListComponent.prototype.ngOnDestroy = function () {
        this.onPageChangeSubscription.unsubscribe();
    };
    AdvertisementListComponent.prototype.routeTo = function (item, to) {
        if (to === 'delete')
            this.deleteItem(item);
        else
            this.router.navigate(['/advertisements', item.id, to]);
    };
    AdvertisementListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AdvertisementListComponent.prototype.deleteItem = function (item) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete the advertisement?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log("item ", item);
                _this.loadingScreen.show();
                _this.AdvertisementsService.delete(item).then(function (serverResult) {
                    console.log('delete user serverResult! ', serverResult);
                    _this.dataSource.data = _this.dataSource.data.filter(function (item1) { return item1 !== item; });
                    _this.loadingScreen.hide();
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
    AdvertisementListComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        var serverResult = this.activatedRoute.snapshot.data['serverResult'];
        this.dataSource.data = serverResult.items;
        this.resultsLength = serverResult.totalCount;
        this.onPageChangeSubscription = this.paginator.page.subscribe(function (pageEvent) {
            // make http request to get users in pageIndex: pageEvent.index
            // this.usersService.listing(pageEvent.pageIndex, pageEvent.pageSize, this.startedWith)
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AdvertisementListComponent.prototype, "paginator", void 0);
    AdvertisementListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-advertisement-list',
            template: __webpack_require__(/*! ./advertisement-list.component.html */ "./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.html"),
            styles: [__webpack_require__(/*! ./advertisement-list.component.scss */ "./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.scss")],
            animations: _core_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_advertisements_service__WEBPACK_IMPORTED_MODULE_0__["AdvertisementsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _core_services_splash_screen_service__WEBPACK_IMPORTED_MODULE_1__["FuseSplashScreenService"]])
    ], AdvertisementListComponent);
    return AdvertisementListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement.model.ts ***!
  \****************************************************************/
/*! exports provided: Advertisement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Advertisement", function() { return Advertisement; });
var Advertisement = /** @class */ (function () {
    function Advertisement() {
        this.id = 0;
        this.title = null;
        this.description = null;
        this.images = [];
        this.price = null;
        this.fields = [];
        this.address = null;
        this.phone = null;
        this.status = null;
        this.viewsCount = 0;
        this.createdAt = new Date();
        this.isBookmarked = false;
        this.cityId = null;
        this.city = null;
        this.ownerId = null;
        this.owner = null;
        this.categoryId = null;
        this.category = null;
        this.subCategoryId = null;
        this.subCategory = null;
    }
    return Advertisement;
}());



/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisement.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisement.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: AdvertisementResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementResolver", function() { return AdvertisementResolver; });
/* harmony import */ var _advertisements_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advertisements.service */ "./src/app/main/content/lazy-child/advertisements.service.ts");
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


var AdvertisementResolver = /** @class */ (function () {
    function AdvertisementResolver(advertisementsService) {
        this.advertisementsService = advertisementsService;
    }
    AdvertisementResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var resolverType = route.data['resolverType'];
            if (resolverType === 'list') {
                _this.advertisementsService.listing().then(function (serverResult) {
                    resolve(serverResult);
                }, function (reason) {
                    console.log(reason);
                });
            }
            else {
                var itemId = route.params['id'];
                _this.advertisementsService.item(itemId).then(function (serverResult) {
                    resolve(serverResult);
                }, function (reason) {
                });
            }
        });
    };
    AdvertisementResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_advertisements_service__WEBPACK_IMPORTED_MODULE_0__["AdvertisementsService"]])
    ], AdvertisementResolver);
    return AdvertisementResolver;
}());



/***/ }),

/***/ "./src/app/main/content/lazy-child/advertisements.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/content/lazy-child/advertisements.service.ts ***!
  \*******************************************************************/
/*! exports provided: AdvertisementsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementsService", function() { return AdvertisementsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/main/content/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/app.exception */ "./src/app/main/content/shared/app.exception.ts");
/* harmony import */ var _shared_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/app.settings */ "./src/app/main/content/shared/app.settings.ts");
/* harmony import */ var _shared_helpers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helpers.service */ "./src/app/main/content/shared/helpers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { RequestOptions } from '@angular/http';
var AdvertisementsService = /** @class */ (function () {
    // onUsersChanged: BehaviorSubject<any> = new BehaviorSubject({});
    // onSearchTextChanged: Subject<any> = new Subject();
    function AdvertisementsService(http, router, authService, helpers) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.helpers = helpers;
        this.items = [];
    }
    AdvertisementsService.prototype.listing = function (pageIndex, pageSize, startedWith) {
        var _this = this;
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        if (startedWith === void 0) { startedWith = ''; }
        return new Promise(function (resolve, reject) {
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/advertisemets?access_token=' + _this.authService.getToken())
                .subscribe(function (items) {
                _this.items = items;
                resolve({
                    items: _this.items.slice(),
                    totalCount: _this.items.length
                });
            }, function (error) {
                console.log(error);
                var me = _this.authService.getToken();
                if (me !== '') {
                    localStorage.clear();
                    _this.router.navigate(['/auth/login']);
                }
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
            });
        });
    };
    AdvertisementsService.prototype.item = function (itemId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('item ');
            _this.http.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/advertisemets/' + itemId)
                .subscribe(function (item) {
                console.log('item 2');
                resolve(item);
            }, function (error) {
                console.log('item 3');
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"]('unknown exception'));
            });
        });
    };
    AdvertisementsService.prototype.delete = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var index = _this.items.indexOf(item);
            _this.http.delete(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/advertisemets/' + item.id + '?access_token=' + _this.authService.getToken())
                .subscribe(function (data) {
                _this.items.splice(index, 1);
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"](error));
            });
        });
    };
    AdvertisementsService.prototype.update = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.patch(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/advertisemets/' + item.id + '?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"](error));
            });
        });
    };
    AdvertisementsService.prototype.add = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/advertisemets/?access_token=' + _this.authService.getToken(), item)
                .subscribe(function (data) {
                resolve(true);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"](error));
            });
        });
    };
    AdvertisementsService.prototype.uploadImages = function (items) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"].baseUrl + '/files/images/upload?access_token=' + _this.authService.getToken(), items)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                _this.helpers.showActionSnackbar(null, false, '', { style: 'failed-snackbar' });
                reject(new _shared_app_exception__WEBPACK_IMPORTED_MODULE_3__["AppException"](error));
            });
        });
    };
    AdvertisementsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _shared_helpers_service__WEBPACK_IMPORTED_MODULE_5__["HelpersService"]])
    ], AdvertisementsService);
    return AdvertisementsService;
}());



/***/ }),

/***/ "./src/app/main/content/lazy-child/lazy-child.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/content/lazy-child/lazy-child.module.ts ***!
  \**************************************************************/
/*! exports provided: LazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _advertisement_list_advertisement_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advertisement-list/advertisement-list.component */ "./src/app/main/content/lazy-child/advertisement-list/advertisement-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _advertisement_edit_advertisement_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertisement-edit/advertisement-edit.component */ "./src/app/main/content/lazy-child/advertisement-edit/advertisement-edit.component.ts");
/* harmony import */ var _advertisement_details_advertisement_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advertisement-details/advertisement-details.component */ "./src/app/main/content/lazy-child/advertisement-details/advertisement-details.component.ts");
/* harmony import */ var _advertisement_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advertisement.resolver */ "./src/app/main/content/lazy-child/advertisement.resolver.ts");
/* harmony import */ var _advertisements_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertisements.service */ "./src/app/main/content/lazy-child/advertisements.service.ts");
/* harmony import */ var _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/modules/shared.module */ "./src/app/core/modules/shared.module.ts");
/* harmony import */ var _cities_cities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../cities/cities.service */ "./src/app/main/content/cities/cities.service.ts");
/* harmony import */ var _categories_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../categories/categories.service */ "./src/app/main/content/categories/categories.service.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../users/users.service */ "./src/app/main/content/users/users.service.ts");
/* harmony import */ var _categories_subCategories_subCategories_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../categories/subCategories/subCategories.service */ "./src/app/main/content/categories/subCategories/subCategories.service.ts");
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-image-upload */ "./node_modules/angular2-image-upload/index.js");
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
                component: _advertisement_list_advertisement_list_component__WEBPACK_IMPORTED_MODULE_1__["AdvertisementListComponent"],
                resolve: {
                    serverResult: _advertisement_resolver__WEBPACK_IMPORTED_MODULE_5__["AdvertisementResolver"]
                },
                data: { resolverType: 'list' }
            },
            {
                path: 'new',
                component: _advertisement_edit_advertisement_edit_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisementEditComponent"],
                data: {
                    isEditMode: false
                }
            },
            {
                path: ':id/details',
                component: _advertisement_details_advertisement_details_component__WEBPACK_IMPORTED_MODULE_4__["AdvertisementDetailsComponent"],
                resolve: {
                    serverResult: _advertisement_resolver__WEBPACK_IMPORTED_MODULE_5__["AdvertisementResolver"]
                },
                data: {
                    resolverType: 'item',
                }
            },
            {
                path: ':id/edit',
                component: _advertisement_edit_advertisement_edit_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisementEditComponent"],
                resolve: {
                    serverResult: _advertisement_resolver__WEBPACK_IMPORTED_MODULE_5__["AdvertisementResolver"]
                },
                data: {
                    resolverType: 'item',
                    isEditMode: true
                }
            }
        ]
    }
];
var LazyModule = /** @class */ (function () {
    function LazyModule() {
    }
    LazyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _core_modules_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_12__["ImageUploadModule"].forRoot(),
            ],
            declarations: [_advertisement_list_advertisement_list_component__WEBPACK_IMPORTED_MODULE_1__["AdvertisementListComponent"], _advertisement_edit_advertisement_edit_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisementEditComponent"], _advertisement_details_advertisement_details_component__WEBPACK_IMPORTED_MODULE_4__["AdvertisementDetailsComponent"]],
            providers: [_advertisement_resolver__WEBPACK_IMPORTED_MODULE_5__["AdvertisementResolver"], _advertisements_service__WEBPACK_IMPORTED_MODULE_6__["AdvertisementsService"], _cities_cities_service__WEBPACK_IMPORTED_MODULE_8__["CitiesService"], _categories_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"], _categories_subCategories_subCategories_service__WEBPACK_IMPORTED_MODULE_11__["SubCategoriesService"], _users_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LazyModule);
    return LazyModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-lazy-child-lazy-child-module.js.map