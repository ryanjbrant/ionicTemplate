webpackJsonp([26,79,80],{

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayout1Module", function() { return RegisterLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_1__ = __webpack_require__(845);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterLayout1Module = (function () {
    function RegisterLayout1Module() {
    }
    RegisterLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RegisterLayout1Module);
    return RegisterLayout1Module;
}());

//# sourceMappingURL=register-layout-1.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayout2Module", function() { return RegisterLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_2__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterLayout2Module = (function () {
    function RegisterLayout2Module() {
    }
    RegisterLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RegisterLayout2Module);
    return RegisterLayout2Module;
}());

//# sourceMappingURL=register-layout-2.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageRegisterModule", function() { return ItemDetailsPageRegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_register__ = __webpack_require__(885);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_register_layout_1_register_layout_1_module__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_layout_2_register_layout_2_module__ = __webpack_require__(596);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ItemDetailsPageRegisterModule = (function () {
    function ItemDetailsPageRegisterModule() {
    }
    ItemDetailsPageRegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_details_register__["a" /* ItemDetailsPageRegister */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_details_register__["a" /* ItemDetailsPageRegister */]),
                __WEBPACK_IMPORTED_MODULE_3__components_register_layout_1_register_layout_1_module__["RegisterLayout1Module"], __WEBPACK_IMPORTED_MODULE_4__components_register_layout_2_register_layout_2_module__["RegisterLayout2Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ItemDetailsPageRegisterModule);
    return ItemDetailsPageRegisterModule;
}());

//# sourceMappingURL=item-details-register.module.js.map

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterLayout1 = (function () {
    function RegisterLayout1() {
        var _this = this;
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password,
                    'country': _this.country,
                    'city': _this.city,
                    'email': _this.email
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout1.prototype, "events", void 0);
    RegisterLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register-layout-1',template:/*ion-inline-start:"/Users/ryanjbrant/Repos/ionicTemplate/src/components/register/layout-1/register.html"*/'<!-- Themes Register + logo -->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title *ngIf="data != null" text-left>{{data.toolbarTitle}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<!--Content -->\n\n<ion-content>\n\n    <ion-grid *ngIf="data != null">\n\n        <ion-row padding-horizontal align-items-start>\n\n            <ion-col col-12 no-padding>\n\n                <button ion-button text-capitalize button-clear clear float-right (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n            </ion-col>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <!---Logo-->\n\n                <ion-thumbnail>\n\n                    <img [src]="data.logo">\n\n                </ion-thumbnail>\n\n                <!--Form Title-->\n\n                <h1 ion-text color="accent" title>{{data.title}}</h1>\n\n                <!---Input field username-->\n\n                <ion-item no-padding>\n\n                    <ion-label color="dark" stacked>{{data.lableUsername}}</ion-label>\n\n                    <ion-input required placeholder="{{data.username}}" type="text" [(ngModel)]="username"></ion-input>\n\n                </ion-item>\n\n                <!---Input field password-->\n\n                <ion-item no-padding>\n\n                    <ion-label color="dark" stacked>{{data.lablePassword}}</ion-label>\n\n                    <ion-input required placeholder="{{data.password}}" type="password" [(ngModel)]="password"></ion-input>\n\n                </ion-item>\n\n                <!---Input field email-->\n\n                <ion-item no-padding>\n\n                    <ion-label color="dark" stacked>{{data.lableEmail}}</ion-label>\n\n                    <ion-input required placeholder="{{data.email}}" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n\n                </ion-item>\n\n                <!---Input field country-->\n\n                <ion-item no-padding>\n\n                    <ion-label color="dark" stacked>{{data.lableCountry}}</ion-label>\n\n                    <ion-input required placeholder="{{data.country}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n\n                </ion-item>\n\n                <!---Input field city-->\n\n                <ion-item no-padding>\n\n                    <ion-label stacked>{{data.lableCity}}</ion-label>\n\n                    <ion-input required placeholder="{{data.city}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city"></ion-input>\n\n                </ion-item>\n\n                <!---Register button-->\n\n                <button ion-button margin-top float-right clear button-clear text-capitalize (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/ryanjbrant/Repos/ionicTemplate/src/components/register/layout-1/register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLayout1);
    return RegisterLayout1;
}());

//# sourceMappingURL=register-layout-1.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterLayout2 = (function () {
    function RegisterLayout2() {
        var _this = this;
        this.onEvent = function (event) {
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password,
                    'country': _this.country,
                    'city': _this.city,
                    'email': _this.email
                });
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterLayout2.prototype, "events", void 0);
    RegisterLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'register-layout-2',template:/*ion-inline-start:"/Users/ryanjbrant/Repos/ionicTemplate/src/components/register/layout-2/register.html"*/'<!-- Themes Register + Image -->\n\n<ion-header>\n\n    <ion-navbar transparent>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title *ngIf="data != null" text-left>{{data.toolbarTitle}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<!--Content -->\n\n<ion-content>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row center>\n\n            <!-- Big Images Header -->\n\n            <ion-col no-padding col-12 background-size [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n\n                <!-- Header Title -->\n\n                <h1 ion-text color="light" header-title text-wrap>{{data.title}}</h1>\n\n            </ion-col>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <!--Form-->\n\n                <ion-item>\n\n                    <!---Input field username-->\n\n                    <ion-label color="dark" stacked>{{data.lableUsername}}</ion-label>\n\n                    <ion-input required placeholder="{{data.username}}" type="text" [(ngModel)]="username"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <!---Input field password-->\n\n                    <ion-label color="dark" stacked>{{data.lablePassword}}</ion-label>\n\n                    <ion-input required placeholder="{{data.password}}" type="password" [(ngModel)]="password"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <!---Input field email-->\n\n                    <ion-label color="dark" stacked>{{data.lableEmail}}</ion-label>\n\n                    <ion-input required placeholder="{{data.email}}" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <!---Input field country-->\n\n                    <ion-label color="dark" stacked>{{data.lableCountry}}</ion-label>\n\n                    <ion-input required placeholder="{{data.country}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country"></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <!---Input field city-->\n\n                    <ion-label color="dark" stacked>{{data.lableCity}}</ion-label>\n\n                    <ion-input required placeholder="{{data.city}}" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city"></ion-input>\n\n                </ion-item>\n\n                <!---Register button-->\n\n                <button ion-button float-right margin-top clear button-clear text-capitalize (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/ryanjbrant/Repos/ionicTemplate/src/components/register/layout-2/register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLayout2);
    return RegisterLayout2;
}());

//# sourceMappingURL=register-layout-2.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPageRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPageRegister = (function () {
    function ItemDetailsPageRegister(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            this.params.data = this.service.load(this.page);
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ryanjbrant/Repos/ionicTemplate/src/pages/item-details-register/item-details-register.html"*/'<!--Register page component-->\n\n<register-layout-1 *ngIf="params.registerLayout1" [data]="params.data | async" [events]="params.events">\n\n</register-layout-1>\n\n\n\n<!--Register page component-->\n\n<register-layout-2 *ngIf="params.registerLayout2" [data]="params.data | async" [events]="params.events">\n\n</register-layout-2>\n\n'/*ion-inline-end:"/Users/ryanjbrant/Repos/ionicTemplate/src/pages/item-details-register/item-details-register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ItemDetailsPageRegister);
    return ItemDetailsPageRegister;
}());

//# sourceMappingURL=item-details-register.js.map

/***/ })

});
//# sourceMappingURL=26.js.map