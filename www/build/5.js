webpackJsonp([5],{

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(912);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());

//# sourceMappingURL=items.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_service__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsService = /** @class */ (function () {
    function TabsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'tabs'; };
        this.getTitle = function () { return 'Tabs'; };
        this.getAllThemes = function () {
            return [
                { "title": "Footer tab - text", "theme": "layout1" },
                { "title": "Footer tab - icons", "theme": "layout2" },
                { "title": "Header tab - text", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.charAt(0).toUpperCase() +
                menuItem.slice(1)]();
        };
        /** Settings Tabs Footer tab - text  **/
        this.getDataForTab1 = function () {
            return {
                "items": [
                    {
                        "title": "Rachel	McGrath",
                        "subtitle": "@rachel.mcgrath",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/1.jpg"
                    },
                    {
                        "title": "Claire	Johnston",
                        "subtitle": "@claire.johnston",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/2.jpg"
                    },
                    {
                        "title": "Ella	Chapman",
                        "subtitle": "@ella.chapman",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/3.jpg"
                    },
                    {
                        "title": "Una	Davies",
                        "subtitle": "@una.davies",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/4.jpg"
                    },
                    {
                        "title": "Natalie	Forsyth",
                        "subtitle": "@natalie.forsyth",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/6.jpg"
                    },
                    {
                        "title": "Deirdre	Bond",
                        "subtitle": "@deirdre.bond",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/5.jpg"
                    },
                    {
                        "title": "Claire	Metcalfe",
                        "subtitle": "@claire.metcalfe",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/7.jpg"
                    }
                ]
            };
        };
        this.getDataForTab2 = function () {
            return {
                "items": [
                    {
                        "title": "Caroline	Hodges",
                        "subtitle": "@caroline.hodges",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/8.jpg"
                    },
                    {
                        "title": "Natalie	Mitchell",
                        "subtitle": "@natalie.mitchell",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "title": "Amy	Marshall",
                        "subtitle": "@amy.marshall",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "title": "Deirdre	Bell",
                        "subtitle": "@deirdre.bell",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "title": "Bernadette	Kelly",
                        "subtitle": "@bernadette.kelly",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/12.jpg"
                    },
                    {
                        "title": "Jan	Black",
                        "subtitle": "@jan.black",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/13.jpg"
                    },
                    {
                        "title": "Joan	Parr",
                        "subtitle": "@joan.parr",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/14.jpg"
                    }
                ]
            };
        };
        this.getDataForTab3 = function () {
            return {
                "items": [
                    {
                        "title": "Victoria	Pullman",
                        "subtitle": "@victoria.pullman",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/15.jpg"
                    },
                    {
                        "title": "Lauren	Cameron",
                        "subtitle": "@lauren.cameron",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/16.jpg"
                    },
                    {
                        "title": "Rachel	McGrath",
                        "subtitle": "@rachel.mcgrath",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/17.jpg"
                    },
                    {
                        "title": "Claire	Johnston",
                        "subtitle": "@claire.johnston",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/18.jpg"
                    },
                    {
                        "title": "Ella	Chapman",
                        "subtitle": "@ella.chapman",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/19.jpg"
                    },
                    {
                        "title": "Natalie	Forsyth",
                        "subtitle": "@natalie.forsyth",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/20.jpg"
                    },
                    {
                        "title": "Caroline	Hodges",
                        "subtitle": "@caroline.hodges",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/21.jpg"
                    }
                ]
            };
        };
        this.getDataForTab4 = function () {
            return {
                "items": [
                    {
                        "title": "Deirdre	Bell",
                        "subtitle": "@deirdre.bell",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/22.jpg"
                    },
                    {
                        "title": "Bernadette	Kelly",
                        "subtitle": "@bernadette.kelly",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/23.jpg"
                    },
                    {
                        "title": "Yvonne	Parsons",
                        "subtitle": "@yvonne.parsons",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/24.jpg"
                    },
                    {
                        "title": "Joan	Parr",
                        "subtitle": "@joan.parr",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/1.jpg"
                    }
                ]
            };
        };
        this.getDataForTab5 = function () {
            return {
                "items": [
                    {
                        "title": "Leah	Parr",
                        "subtitle": "@leah.parr",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/2.jpg"
                    },
                    {
                        "title": "Megan	Wallace",
                        "subtitle": "@megan.wallace",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/3.jpg"
                    },
                    {
                        "title": "Ella	Hodges",
                        "subtitle": "@ella.hodges",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/4.jpg"
                    },
                    {
                        "title": "Jan	Roberts",
                        "subtitle": "@jan.roberts",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/5.jpg"
                    }
                ]
            };
        };
        /** Settings Tabs Footer tab - icons  **/
        this.getDataForTab6 = function () {
            return {
                "items": [
                    {
                        "price": "$13.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/1.jpg"
                    },
                    {
                        "price": "$32.06",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/2.jpg"
                    },
                    {
                        "price": "$45.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/3.jpg"
                    },
                    {
                        "price": "$13.69",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/4.jpg"
                    },
                    {
                        "price": "$3.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/6.jpg"
                    },
                ]
            };
        };
        this.getDataForTab7 = function () {
            return {
                "items": [
                    {
                        "price": "$40.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/6.jpg"
                    },
                    {
                        "price": "$46.60",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/7.jpg"
                    },
                    {
                        "price": "$13.05",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/8.jpg"
                    },
                    {
                        "price": "$22.56",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/9.jpg"
                    },
                    {
                        "price": "$23.22",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/10.jpg"
                    },
                ]
            };
        };
        this.getDataForTab8 = function () {
            return {
                "items": [
                    {
                        "price": "$53.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/7.jpg"
                    },
                    {
                        "price": "$22.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/6.jpg"
                    },
                    {
                        "price": "$23.08",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/4.jpg"
                    },
                    {
                        "price": "$13.14",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/3.jpg"
                    },
                    {
                        "price": "$43.55",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/2.jpg"
                    },
                ]
            };
        };
        this.getDataForTab9 = function () {
            return {
                "items": [
                    {
                        "price": "$43.01",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/8.jpg"
                    },
                    {
                        "price": "$22.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/9.jpg"
                    },
                    {
                        "price": "$23.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/10.jpg"
                    },
                    {
                        "price": "$13.11",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/11.jpg"
                    },
                    {
                        "price": "$13.16",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/12.jpg"
                    },
                ]
            };
        };
        this.getDataForTab10 = function () {
            return {
                "items": [
                    {
                        "price": "$23.06",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/0.jpg"
                    },
                    {
                        "price": "$31.16",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/2.jpg"
                    },
                    {
                        "price": "$38.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/3.jpg"
                    },
                    {
                        "price": "$40.99",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/4.jpg"
                    },
                    {
                        "price": "$63.66",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/5.jpg"
                    },
                ]
            };
        };
        /** Settings Tabs Header tab - text  **/
        this.getDataForTab11 = function () {
            return {
                "items": [
                    {
                        "title": "Ella	Hodges",
                        "subtitle": "ella.hodges@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/0.jpg"
                    },
                    {
                        "title": "Megan	Wallace",
                        "subtitle": "megan.wallace@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/1.jpg"
                    },
                    {
                        "title": "Theresa	Slater",
                        "subtitle": "theresa.slater@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/2.jpg"
                    },
                    {
                        "title": "Kylie	Clarkson",
                        "subtitle": "kylie.clarkson@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/3.jpg"
                    },
                    {
                        "title": "Blake	Baker	",
                        "subtitle": "blake.baker@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/21.jpg"
                    },
                    {
                        "title": "Jack	Arnold	",
                        "subtitle": "jack.arnold@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/20.jpg"
                    },
                    {
                        "title": "Anne	Lambert",
                        "subtitle": "anne.lambert@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/19.jpg"
                    }
                ]
            };
        };
        this.getDataForTab12 = function () {
            return {
                "items": [
                    {
                        "title": "Amy	Lee",
                        "subtitle": "amy.lee@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/18.jpg"
                    },
                    {
                        "title": "Mary	Watson",
                        "subtitle": "mary.watson@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/17.jpg"
                    },
                    {
                        "title": "Yvonne	Hardacre",
                        "subtitle": "yvonne.hardacre@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/16.jpg"
                    },
                    {
                        "title": "Audrey	Ball",
                        "subtitle": "audrey.ball@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/15.jpg"
                    },
                    {
                        "title": "Anne	Russell",
                        "subtitle": "anne.russell@emai",
                        "price": "get",
                        "avatar": "assets/images/avatar/14.jpg"
                    },
                    {
                        "title": "Rachel	Grant",
                        "subtitle": "rachel.grant@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/13.jpg"
                    },
                    {
                        "title": "Katherine	Welch",
                        "subtitle": "katherine.welch@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/12.jpg"
                    }
                ]
            };
        };
        this.getDataForTab13 = function () {
            return {
                "items": [
                    {
                        "title": "Emily	Walsh",
                        "subtitle": "emily.walsh@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "title": "Sonia	Bailey",
                        "subtitle": "sonia.bailey@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "title": "Jennifer	Bell",
                        "subtitle": "jennifer.bell@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "title": "Alison	Hamilton",
                        "subtitle": "alison.hamilton@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/8.jpg"
                    },
                    {
                        "title": "Irene	Oliver",
                        "subtitle": "irene.oliver@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/7.jpg"
                    },
                    {
                        "title": "Alison	Jones",
                        "subtitle": "alison.jones@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/6.jpg"
                    },
                    {
                        "title": "Pippa	Wright",
                        "subtitle": "pippa.wright@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/5.jpg"
                    }
                ]
            };
        };
        this.getDataForTab14 = function () {
            return {
                "items": [
                    {
                        "title": "Maria	Payne",
                        "subtitle": "maria.payne@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/4.jpg"
                    },
                    {
                        "title": "Hannah	Coleman",
                        "subtitle": "hannah.coleman@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/3.jpg"
                    },
                    {
                        "title": "Sally	James",
                        "subtitle": "sally.james@emai",
                        "price": "get",
                        "avatar": "assets/images/avatar/2.jpg"
                    },
                    {
                        "title": "Julia	Walker",
                        "subtitle": "julia.walker@email",
                        "price": "get",
                        "avatar": "assets/images/avatar/1.jpg"
                    }
                ]
            };
        };
        this.getDataForLayout1 = function () {
            return [];
        };
        this.getDataForLayout2 = function () {
            return [];
        };
        this.getDataForLayout3 = function () {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    TabsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('tab/' + item)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    TabsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_5__toast_service__["a" /* ToastService */]])
    ], TabsService);
    return TabsService;
}());

//# sourceMappingURL=tabs-service.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_register_service__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__ = __webpack_require__(928);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__ = __webpack_require__(929);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__ = __webpack_require__(930);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__ = __webpack_require__(931);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__ = __webpack_require__(932);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_maps_service__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_range_service__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_select_service__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__ = __webpack_require__(939);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var ItemsPage = /** @class */ (function () {
    // services: array
    function ItemsPage(navCtrl, textViewService, spinnerService, imageGalleryService, searchBarService, checkBoxService, parallaxService, wizardService, tabsService, listViewService, listViewExpandableService, listViewDragAndDropService, listViewSwipeToDismissService, listViewAppearanceAnimationService, listViewGoogleCardsService, listViewStickyListHeaderService, loginService, registerService, splashScreenService, httpService, validationService, mailChimpService, mapsService, qRCodeService, radioButtonService, rangeService, toggleService, selectService, actionSheetService, alertCtrl, ga, navParams) {
        this.navCtrl = navCtrl;
        this.textViewService = textViewService;
        this.spinnerService = spinnerService;
        this.imageGalleryService = imageGalleryService;
        this.searchBarService = searchBarService;
        this.checkBoxService = checkBoxService;
        this.parallaxService = parallaxService;
        this.wizardService = wizardService;
        this.tabsService = tabsService;
        this.listViewService = listViewService;
        this.listViewExpandableService = listViewExpandableService;
        this.listViewDragAndDropService = listViewDragAndDropService;
        this.listViewSwipeToDismissService = listViewSwipeToDismissService;
        this.listViewAppearanceAnimationService = listViewAppearanceAnimationService;
        this.listViewGoogleCardsService = listViewGoogleCardsService;
        this.listViewStickyListHeaderService = listViewStickyListHeaderService;
        this.loginService = loginService;
        this.registerService = registerService;
        this.splashScreenService = splashScreenService;
        this.httpService = httpService;
        this.validationService = validationService;
        this.mailChimpService = mailChimpService;
        this.mapsService = mapsService;
        this.qRCodeService = qRCodeService;
        this.radioButtonService = radioButtonService;
        this.rangeService = rangeService;
        this.toggleService = toggleService;
        this.selectService = selectService;
        this.actionSheetService = actionSheetService;
        this.alertCtrl = alertCtrl;
        this.ga = ga;
        this.listServices = {};
        this.setGoogleAnalytics();
        this.listServices = {
            'checkBoxes': this.checkBoxService,
            'login': this.loginService,
            'register': this.registerService,
            'imageGallery': this.imageGalleryService,
            'textViews': this.textViewService,
            'spinner': this.spinnerService,
            'parallax': this.parallaxService,
            'wizard': this.wizardService,
            'searchBars': this.searchBarService,
            'tabs': this.tabsService,
            'listViews': this.listViewService,
            'expandable': this.listViewExpandableService,
            'dragAndDrop': this.listViewDragAndDropService,
            'swipeToDismiss': this.listViewSwipeToDismissService,
            'appearanceAnimation': this.listViewAppearanceAnimationService,
            'googleCards': this.listViewGoogleCardsService,
            'stickyListHeader': this.listViewStickyListHeaderService,
            'splashScreens': this.splashScreenService,
            'maps': this.mapsService,
            'qrcode': this.qRCodeService,
            'radioButton': this.radioButtonService,
            'range': this.rangeService,
            'toggle': this.toggleService,
            'select': this.selectService,
            'actionSheet': this.actionSheetService
        };
        this.componentName = navParams.get('componentName');
        this.service = this.listServices[this.componentName];
        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
            this.eventTrackView(this.title);
        }
        else {
            navCtrl.setRoot("HomePage");
            return;
        }
    }
    ItemsPage_1 = ItemsPage;
    ItemsPage.prototype.selectPageForOpen = function (value) {
        var page;
        switch (value) {
            case "spinner":
                page = "ItemDetailsPageSpinner";
                break;
            case "textViews":
                page = "ItemDetailsPageTextView";
                break;
            case "splashScreens":
                page = "ItemDetailsPageSplashScreen";
                break;
            case "searchBars":
                page = "ItemDetailsPageSearchBar";
                break;
            case "checkBoxes":
                page = "ItemDetailsPageCheckBox";
                break;
            case "wizard":
                page = "ItemDetailsPageWizard";
                break;
            case "tabs":
                page = "ItemDetailsPageTabs";
                break;
            case "login":
                page = "ItemDetailsPageLogin";
                break;
            case "register":
                page = "ItemDetailsPageRegister";
                break;
            case "expandable":
                page = "ItemDetailsPageExpandable";
                break;
            case "swipeToDismiss":
                page = "ItemDetailsPageSwipeToDismiss";
                break;
            case "dragAndDrop":
                page = "ItemDetailsPageDragAndDrop";
                break;
            case "appearanceAnimation":
                page = "ItemDetailsPageAppearanceAnimation";
                break;
            case "googleCards":
                page = "ItemDetailsPageGoogleCard";
                break;
            case "stickyListHeader":
                page = "ItemDetailsPageStickyListHeader";
                break;
            case "parallax":
                page = "ItemDetailsPageParallax";
                break;
            case "maps":
                page = "ItemDetailsPageMaps";
                break;
            case "imageGallery":
                page = "ItemDetailsPageImageGallery";
                break;
            case "qrcode":
                page = "ItemDetailsPageQRCode";
                break;
            case "radioButton":
                page = "ItemDetailsPageRadioButton";
                break;
            case "range":
                page = "ItemDetailsPageRange";
                break;
            case "toggle":
                page = "ItemDetailsPageToggle";
                break;
            case "select":
                page = "ItemDetailsPageSelect";
                break;
            case "actionSheet":
                page = "ItemDetailsPageActionSheet";
                break;
            default:
                page = "ItemDetailsPage";
        }
        return page;
    };
    ItemsPage.prototype.openPage = function (page) {
        if (__WEBPACK_IMPORTED_MODULE_6__services_app_settings__["a" /* AppSettings */].SUBSCRIBE) {
            if (this.mailChimpService.showMailChimpForm()) {
                this.mailChimpService.setMailChimpForm(false);
                this.showPrompt();
            }
            else {
                this.navigation(page);
            }
        }
        else {
            this.navigation(page);
        }
    };
    ItemsPage.prototype.navigation = function (page) {
        if (page.listView) {
            this.navCtrl.push(ItemsPage_1, {
                componentName: page.theme
            });
        }
        else {
            this.navCtrl.push(this.selectPageForOpen(this.componentName), {
                service: this.service,
                page: page
            });
        }
    };
    ItemsPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'STAY TUNED FOR NEW <br> THEMES AND FREEBIES',
            message: "SUBSCRIBE TO <br> OUR NEWSLETTER",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your e-mail'
                },
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        if (data) {
                            if (_this.validationService.isMail(data.email)) {
                                _this.httpService.sendData(data.email).subscribe(function (data) {
                                    _this.mailChimpService.hideMailChimp();
                                }, function (err) {
                                    alert(err);
                                }, null);
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    ItemsPage.prototype.setGoogleAnalytics = function () {
        var _this = this;
        if (window.location.hostname != "localhost") {
            this.ga.startTrackerWithId("UA-35500609-14").then(function () {
                _this.ga.trackEvent("active", "user", "click");
            });
        }
        else {
            console.log("Start Tracker");
        }
    };
    ItemsPage.prototype.eventTrackView = function (event) {
        if (window.location.hostname != "localhost") {
            this.ga.trackView(event, "Items", false);
            this.ga.trackEvent("openPage", event, "click");
        }
        else {
            console.log("event:" + event);
        }
    };
    ItemsPage = ItemsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ryanjbrant/Repos/ionicTemplate/src/pages/items/items.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title text-capitalize>{{title}}</ion-title>\n\n        <!-- <a header-button ion-button icon-left outline button-clear-outline\n\n    href="https://codecanyon.net/item/ionic-2-ui-themetemplate-app-material-design-yellow-dark/19375225?ref=CreativeForm">\n\n      BUY NOW\n\n    </a> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n    <ion-list no-padding no-margin no-lines *ngIf="pages.length">\n\n        <button ion-item item-title paddinge-left border *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n    </button>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/ryanjbrant/Repos/ionicTemplate/src/pages/items/items.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__["a" /* MailChimpService */], __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__["a" /* TextViewService */], __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__["a" /* SpinnerService */],
                __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__["a" /* SplashScreenService */], __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_15__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__["a" /* SearchBarService */], __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__["a" /* CheckBoxService */], __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__["a" /* WizardService */], __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__["a" /* TabsService */], __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__["a" /* ParallaxService */],
                __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__["a" /* ListViewService */], __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__["a" /* ListViewExpandableService */], __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__["a" /* ListViewDragAndDropService */], __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__["a" /* ImageGalleryService */],
                __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__["a" /* ListViewSwipeToDismissService */], __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__["a" /* ListViewGoogleCardsService */], __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__["a" /* ListViewAppearanceAnimationService */], __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__["a" /* ListViewStickyListHeaderService */],
                __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__services_validation__["a" /* ValidationService */], __WEBPACK_IMPORTED_MODULE_25__services_maps_service__["a" /* MapsService */], __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__["a" /* QRCodeService */], __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__["a" /* RadioButtonService */], __WEBPACK_IMPORTED_MODULE_28__services_range_service__["a" /* RangeService */],
                __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__["a" /* ToggleService */], __WEBPACK_IMPORTED_MODULE_30__services_select_service__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__["a" /* ActionSheetService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__["a" /* TextViewService */],
            __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__["a" /* SpinnerService */],
            __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__["a" /* ImageGalleryService */],
            __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__["a" /* SearchBarService */],
            __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__["a" /* CheckBoxService */],
            __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__["a" /* ParallaxService */],
            __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__["a" /* WizardService */],
            __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__["a" /* TabsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__["a" /* ListViewService */],
            __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__["a" /* ListViewExpandableService */],
            __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__["a" /* ListViewDragAndDropService */],
            __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__["a" /* ListViewSwipeToDismissService */],
            __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__["a" /* ListViewAppearanceAnimationService */],
            __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__["a" /* ListViewGoogleCardsService */],
            __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__["a" /* ListViewStickyListHeaderService */],
            __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_15__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__["a" /* SplashScreenService */],
            __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__["a" /* MailChimpService */],
            __WEBPACK_IMPORTED_MODULE_25__services_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__["a" /* QRCodeService */],
            __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__["a" /* RadioButtonService */],
            __WEBPACK_IMPORTED_MODULE_28__services_range_service__["a" /* RangeService */],
            __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__["a" /* ToggleService */],
            __WEBPACK_IMPORTED_MODULE_30__services_select_service__["a" /* SelectService */],
            __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__["a" /* ActionSheetService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ItemsPage);
    return ItemsPage;
    var ItemsPage_1;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/**
 * Created by DRAGAN on 3/22/2017.
 */


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    Object.defineProperty(HttpService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    HttpService.prototype.sendData = function (email) {
        var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    return HttpService;
}());

//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/**
 * Created by DRAGAN on 3/22/2017.
 */
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.isMail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidationService;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailChimpService; });
var MailChimpService = /** @class */ (function () {
    function MailChimpService() {
    }
    MailChimpService.prototype.showMailChimpForm = function () {
        var mailChimp = localStorage.getItem("mailChimp") == "true";
        var mailChimpLocal = localStorage.getItem("mailChimpLocal") == "true";
        if (mailChimp) {
            return false;
        }
        else {
            return mailChimpLocal;
        }
    };
    MailChimpService.prototype.setMailChimpForm = function (isVisible) {
        localStorage.setItem("mailChimpLocal", isVisible + "");
    };
    MailChimpService.prototype.hideMailChimp = function () {
        localStorage.setItem("mailChimp", "true");
    };
    return MailChimpService;
}());

//# sourceMappingURL=mail-chimp-service.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckBoxService = /** @class */ (function () {
    function CheckBoxService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'checkBoxes'; };
        this.getTitle = function () { return 'Check Boxes'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "With Avatar", "theme": "layout2" },
                { "title": "With Details", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onButton: function (item) {
                    that.toastCtrl.presentToast(item.title);
                }
            };
        };
        this.getDataForLayout1 = function () {
            return {
                "title": "Contacts",
                "items": [
                    {
                        "id": 1,
                        "title": "marshall@yahoo.com",
                        "isChecked": false
                    },
                    {
                        "id": 2,
                        "title": "cain@outlook.com",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "meadows@mail.com",
                        "isChecked": true
                    },
                    {
                        "id": 3,
                        "title": "cain@outlook.com",
                        "isChecked": true
                    },
                    {
                        "id": 5,
                        "title": "meadows@mail.com",
                        "isChecked": true
                    },
                    {
                        "id": 6,
                        "title": "valdez@yahoo.com",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "norris@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 8,
                        "title": "wiley@outlook.com",
                        "isChecked": true
                    },
                    {
                        "id": 9,
                        "title": "norris@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 10,
                        "title": "wiley@outlook.com",
                        "isChecked": true
                    },
                    {
                        "id": 11,
                        "title": "miles@mail.com",
                        "isChecked": true
                    },
                    {
                        "id": 12,
                        "title": "gaines@yahoo.com",
                        "isChecked": true
                    },
                    {
                        "id": 13,
                        "title": "fletcher@outlook.com",
                        "isChecked": true
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "title": "Followers",
                "items": [
                    {
                        "id": 1,
                        "title": "Grant Marshall",
                        "subtitle": "@grant333",
                        "isChecked": false,
                        "image": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Pena Valdez",
                        "subtitle": "@penaxxy",
                        "isChecked": false,
                        "image": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Jessica Miles",
                        "subtitle": "@jessica957",
                        "isChecked": true,
                        "image": "assets/images/avatar/3.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Kerri Barber",
                        "subtitle": "@kerri333",
                        "isChecked": true,
                        "image": "assets/images/avatar/4.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Natasha Gamble",
                        "subtitle": "@natashaxxy",
                        "isChecked": true,
                        "image": "assets/images/avatar/5.jpg"
                    },
                    {
                        "id": 6,
                        "title": "White Castaneda",
                        "subtitle": "@white34",
                        "isChecked": true,
                        "image": "assets/images/avatar/6.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Vanessa Ryan",
                        "subtitle": "@vanessa957",
                        "isChecked": true,
                        "image": "assets/images/avatar/7.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Meredith Hendricks",
                        "subtitle": "@meredith957",
                        "isChecked": true,
                        "image": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Carol Kelly",
                        "subtitle": "@carolm_e",
                        "isChecked": true,
                        "image": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Barrera Ramsey",
                        "subtitle": "@barreraxxy",
                        "isChecked": true,
                        "image": "assets/images/avatar/3.jpg"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "title": "Wish list",
                "items": [
                    {
                        "id": 1,
                        "title": "Brogan",
                        "subtitle": "Chad",
                        "isChecked": true,
                        "detail": "225 Bills Place"
                    },
                    {
                        "id": 2,
                        "title": "Rehrersburg",
                        "subtitle": "Romania",
                        "isChecked": false,
                        "detail": "266 Tiffany Place"
                    },
                    {
                        "id": 3,
                        "title": "Durham",
                        "subtitle": "Mauritania",
                        "isChecked": false,
                        "detail": "240 Hillel Place"
                    },
                    {
                        "id": 4,
                        "title": "Callaghan",
                        "subtitle": "Tonga",
                        "isChecked": true,
                        "detail": "933 Stryker Street"
                    },
                    {
                        "id": 5,
                        "title": "Manitou",
                        "subtitle": "Norway",
                        "isChecked": true,
                        "detail": "222 Duffield Street"
                    },
                    {
                        "id": 6,
                        "title": "Curtice",
                        "subtitle": "Nauru",
                        "isChecked": true,
                        "detail": "225 Bills Place"
                    },
                    {
                        "id": 7,
                        "title": "Barronett",
                        "subtitle": "Iran",
                        "isChecked": true,
                        "detail": "266 Tiffany Place"
                    },
                    {
                        "id": 8,
                        "title": "Williston",
                        "subtitle": "Ireland",
                        "isChecked": true,
                        "detail": "240 Hillel Place"
                    },
                    {
                        "id": 9,
                        "title": "Norvelt",
                        "subtitle": "Indonesia",
                        "isChecked": true,
                        "detail": "500 Gold Street"
                    },
                    {
                        "id": 10,
                        "title": "Keller",
                        "subtitle": "Austria",
                        "isChecked": true,
                        "detail": "463 Harbor Court"
                    },
                    {
                        "id": 11,
                        "title": "Maxville",
                        "subtitle": "Panama",
                        "isChecked": true,
                        "detail": "26 Tiffany Place"
                    }
                ]
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    CheckBoxService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('checkBoxes/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    CheckBoxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], CheckBoxService);
    return CheckBoxService;
}());

//# sourceMappingURL=check-box-service.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewService; });
var TextViewService = /** @class */ (function () {
    function TextViewService() {
        var _this = this;
        this.getId = function () { return 'textViews'; };
        this.getTitle = function () { return 'Typo + small components'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "all" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForAll = function () {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    TextViewService.prototype.load = function (url) {
        return null;
    };
    ;
    return TextViewService;
}());

//# sourceMappingURL=text-view-service.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpinnerService = /** @class */ (function () {
    function SpinnerService(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.getId = function () { return 'spinners'; };
        this.getTitle = function () { return 'Spinners'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "all" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.getDataForAll = function () {
            return [
                { "icon": "tail-spin" },
                { "icon": "oval" },
                { "icon": "audio" },
                { "icon": "bars" },
                { "icon": "hearts" },
                { "icon": "three-dots" },
                { "icon": "puff" },
                { "icon": "grid" },
                { "icon": "ball-triangle" },
                { "icon": "circles" }
            ];
        };
        this.prepareParams = function (item) {
            return {
                spinner: true,
                title: item.title,
                data: _this.getDataForAll(),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    SpinnerService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForAll());
            observer.complete();
        });
    };
    SpinnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */]])
    ], SpinnerService);
    return SpinnerService;
}());

//# sourceMappingURL=spinner-service.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashScreenService = /** @class */ (function () {
    function SplashScreenService(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.getId = function () { return 'splashScreens'; };
        this.getTitle = function () { return 'Splash screens'; };
        this.getAllThemes = function () {
            return [
                { "title": "Animation Logo + Ken Burns", "theme": "layout1" },
                { "title": "Logo + fade in + Ken Burns", "theme": "layout2" },
                { "title": "Logo + Title + Ken Burns", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/splashscreen/2.jpg",
                "logo": "assets/images/logo/4.png",
                "title": ""
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/splashscreen/3.jpg",
                "logo": "assets/images/logo/3.png",
                "title": ""
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/splashscreen/1.jpg",
                "logo": "assets/images/logo/4.png",
                "title": "Welcome to our new iOS 11 theme"
            };
        };
        this.getEventsForTheme = function (menuItem, navCtrl) {
            return {
                "onRedirect": function () {
                    navCtrl.pop();
                }
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item, navCtrl) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item, navCtrl)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    SplashScreenService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForTheme(item));
            observer.complete();
        });
    };
    SplashScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */]])
    ], SplashScreenService);
    return SplashScreenService;
}());

//# sourceMappingURL=splash-screen-service.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchBarService = /** @class */ (function () {
    function SearchBarService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'searchBars'; };
        this.getTitle = function () { return 'Search bars'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "Field + header", "theme": "layout2" },
                { "title": "Field + header 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "Simple",
                "items": [
                    {
                        "title": "Friends",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/1.jpg"
                    },
                    {
                        "title": "Enemies",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/2.jpg"
                    },
                    {
                        "title": "Neutral",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/3.jpg"
                    },
                    {
                        "title": "Family",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/4.jpg"
                    },
                    {
                        "title": "Guests",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/5.jpg"
                    },
                    {
                        "title": "Students",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/6.jpg"
                    },
                    {
                        "title": "Friends",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/7.jpg"
                    },
                    {
                        "title": "Enemies",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/8.jpg"
                    },
                    {
                        "title": "Neutral",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
                        "image": "assets/images/background/9.jpg"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "Field + header",
                "title": "Just type",
                "headerImage": "assets/images/background/1.jpg",
                "items": [
                    {
                        "title": "Grant Marshall",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/1.jpg",
                        "button": "GET"
                    },
                    {
                        "title": "Pena Valdez",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/2.jpg",
                        "button": "GET"
                    },
                    {
                        "title": "Jessica Miles",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/3.jpg",
                        "button": "GET"
                    },
                    {
                        "title": "Kerri Barber",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/4.jpg",
                        "button": "GET"
                    },
                    {
                        "title": "Natasha Gamble",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/5.jpg",
                        "button": "GET"
                    },
                    {
                        "title": "White Castaneda",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/6.jpg",
                        "button": "GET"
                    },
                    {
                        "title": "Vanessa Ryan",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/7.jpg",
                        "button": "GET"
                    },
                    {
                        "title": "Meredith Hendricks",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/8.jpg",
                        "button": "GET"
                    },
                    {
                        "title": "Carol Kelly",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing",
                        "avatar": "assets/images/avatar/9.jpg",
                        "button": "GET"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "headerTitle": "Field + header 2",
                "title": "Search Friends",
                "items": [
                    {
                        "id": 1,
                        "title": "Barrera Ramsey",
                        "subtitle": "@barrera",
                        "detail": "Brogan",
                        "avatar": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Julia Petersen",
                        "subtitle": "@petersen3",
                        "detail": "Rehrersburg",
                        "avatar": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Holman Valencia",
                        "subtitle": "@valencia14",
                        "detail": "Durham",
                        "avatar": "assets/images/avatar/3.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Marisa Cain",
                        "subtitle": "@marisacain",
                        "detail": "Callaghan",
                        "avatar": "assets/images/avatar/4.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Dejesus Norris",
                        "subtitle": "@dejesusno",
                        "detail": "Manitou",
                        "avatar": "assets/images/avatar/5.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Gayle Gaines",
                        "subtitle": "@gaylega",
                        "detail": "Weedville",
                        "avatar": "assets/images/avatar/6.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Prince Phelps",
                        "subtitle": "@prince45",
                        "detail": "Curtice",
                        "avatar": "assets/images/avatar/7.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Keri Hudson",
                        "subtitle": "@keri444",
                        "detail": "Barronett",
                        "avatar": "assets/images/avatar/8.jpg"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onTextChange': function (text) {
                    that.toastCtrl.presentToast(text);
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    SearchBarService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('searchBars/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    SearchBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], SearchBarService);
    return SearchBarService;
}());

//# sourceMappingURL=search-bar-service.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WizardService = /** @class */ (function () {
    function WizardService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'wizard'; };
        this.getTitle = function () { return 'Wizard'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple + image", "theme": "layout1" },
                { "title": "Big image", "theme": "layout2" },
                { "title": "Big Image + Text", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "btnPrev": "Previous",
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "Welcome to our new iOS style theme",
                        "description": "Finished layouts and components for Ionic 3. Ready to use!"
                    },
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "For Developers",
                        "description": "Save hours of developing. Tons of funcional components."
                    },
                    {
                        "logo": "assets/images/logo/2.png",
                        "title": "For Designers",
                        "description": "Endless possibilities. Combine layouts as you wish."
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/images/background/9.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/images/background/8.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/images/background/10.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "backgroundImage": "assets/images/background/21.jpg",
                        "subtitle": "Page 1",
                        "title": "Lorem ipsum dolor sit amet, consectetur"
                    },
                    {
                        "backgroundImage": "assets/images/background/22.jpg",
                        "subtitle": "Page 2",
                        "title": "Lorem ipsum dolor sit amet, consectetur"
                    },
                    {
                        "backgroundImage": "assets/images/background/23.jpg",
                        "subtitle": "Page 3",
                        "title": "Lorem ipsum dolor sit amet, consectetur"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onFinish': function (event) {
                    that.toastCtrl.presentToast("Finish");
                }
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    WizardService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('wizard/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ;
    WizardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], WizardService);
    return WizardService;
}());

//# sourceMappingURL=wizard-service.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = /** @class */ (function () {
    function LoginService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'login'; };
        this.getTitle = function () { return 'Login pages'; };
        this.getAllThemes = function () {
            return [
                { "title": "Login + logo 1", "theme": "layout1" },
                { "title": "Login + logo 2", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "username": "Enter your username",
                "password": "Enter your password",
                "labelUsername": "USERNAME",
                "labelPassword": "PASSWORD",
                "register": "Register now!",
                "forgotPassword": "Forgot password?",
                "login": "Login",
                "subtitle": "Welcome",
                "title": "Login to your account",
                "skip": "Skip",
                "logo": "assets/images/logo/2.png"
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "forgotPassword": "Forgot password?",
                "subtitle": "Welcome",
                "labelUsername": "USERNAME",
                "labelPassword": "PASSWORD",
                "title": "Login to your account",
                "username": "Enter your username",
                "password": "Enter your password",
                "register": "Register",
                "login": "Login",
                "skip": "Skip",
                "logo": "assets/images/logo/2.png"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onLogin: function (params) {
                    that.toastCtrl.presentToast('onLogin');
                },
                onForgot: function () {
                    that.toastCtrl.presentToast('onForgot');
                },
                onRegister: function (params) {
                    that.toastCtrl.presentToast('onRegister');
                },
                onSkip: function (params) {
                    that.toastCtrl.presentToast('onSkip');
                },
                onFacebook: function (params) {
                    that.toastCtrl.presentToast('onFacebook');
                },
                onTwitter: function (params) {
                    that.toastCtrl.presentToast('onTwitter');
                },
                onGoogle: function (params) {
                    that.toastCtrl.presentToast('onGoogle');
                },
                onPinterest: function (params) {
                    that.toastCtrl.presentToast('onPinterest');
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    LoginService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('login/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterService = /** @class */ (function () {
    function RegisterService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'register'; };
        this.getTitle = function () { return 'Register pages'; };
        this.getAllThemes = function () {
            return [
                { "title": "Register + logo", "theme": "layout1" },
                { "title": "Register + image", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "toolbarTitle": "Register + logo",
                "logo": "assets/images/logo/2.png",
                "register": "register",
                "title": "Register your new account",
                "username": "Enter your username",
                "city": "Your home town",
                "country": "Where are you from?",
                "password": "Enter your password",
                "email": "Your e-mail address",
                "skip": "Skip",
                "lableUsername": "USERNAME",
                "lablePassword": "PASSWORD",
                "lableEmail": "E-MAIL",
                "lableCountry": "COUNTRY",
                "lableCity": "CITY"
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "toolbarTitle": "Register + image",
                "title": "Register",
                "background": "assets/images/background/2.jpg",
                "username": "Enter your username",
                "city": "Your home town",
                "country": "Where are you from?",
                "password": "Enter your password",
                "email": "Your e-mail address",
                "register": "register",
                "lableUsername": "USERNAME",
                "lablePassword": "PASSWORD",
                "lableEmail": "E-MAIL",
                "lableCountry": "COUNTRY",
                "lableCity": "CITY"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onRegister: function (params) {
                    that.toastCtrl.presentToast('onRegister');
                },
                onSkip: function (params) {
                    that.toastCtrl.presentToast('onSkip');
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    RegisterService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('register/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=register-service.js.map

/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewService; });
var ListViewService = /** @class */ (function () {
    function ListViewService() {
        var _this = this;
        this.getId = function () { return 'listViews'; };
        this.getTitle = function () { return 'List views'; };
        this.getAllThemes = function () {
            return [
                { "title": "Expandable", "theme": "expandable", "listView": true },
                { "title": "Drag&Drop", "theme": "dragAndDrop", "listView": true },
                { "title": "Swipe-to-dismiss", "theme": "swipeToDismiss", "listView": true },
                { "title": "Appearance animations", "theme": "appearanceAnimation", "listView": true },
                { "title": "Google Cards", "theme": "googleCards", "listView": true },
                { "title": "Sticky List Header", "theme": "stickyListHeader", "listView": true },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    ListViewService.prototype.load = function (url) {
        return null;
    };
    ;
    return ListViewService;
}());

//# sourceMappingURL=list-view-service.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewExpandableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewExpandableService = /** @class */ (function () {
    function ListViewExpandableService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'expandable'; };
        this.getTitle = function () { return 'Expandable'; };
        this.getAllThemes = function () {
            return [
                { "title": "List big image", "theme": "layout1" },
                { "title": "Full image with CTA", "theme": "layout2" },
                { "title": "Centered with header", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "header": "Friends",
                "items": [
                    {
                        "id": 1,
                        "title": "Harriette Velandia",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "image": "assets/images/avatar/15.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Jessica Miles",
                                "description": "NYC",
                                "image": "assets/images/avatar/10.jpg",
                                "details": "3 miles"
                            },
                            {
                                "id": 2,
                                "title": "Pena Valdez",
                                "description": "Rehrersburg",
                                "image": "assets/images/avatar/11.jpg",
                                "details": "3.1 miles"
                            },
                            {
                                "id": 3,
                                "title": "Jessica Miles",
                                "description": "Brogan",
                                "image": "assets/images/avatar/12.jpg",
                                "details": "3.2 miles"
                            },
                            {
                                "id": 4,
                                "title": "Meredith Hendricks",
                                "description": "Callaghan",
                                "image": "assets/images/avatar/13.jpg",
                                "details": "2.5 miles"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Margie Kasten",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "image": "assets/images/avatar/2.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Carol Kelly",
                                "description": "Blackgum",
                                "image": "assets/images/avatar/14.jpg",
                                "details": "2.1 miles"
                            },
                            {
                                "id": 2,
                                "title": "Barrera Ramsey",
                                "description": "Williston",
                                "image": "assets/images/avatar/15.jpg",
                                "details": "2.6 miles"
                            },
                            {
                                "id": 3,
                                "title": "Julia Petersen",
                                "description": "Norvelt",
                                "image": "assets/images/avatar/14.jpg",
                                "details": "2.8 miles"
                            },
                            {
                                "id": 4,
                                "title": "Holman Valencia",
                                "description": "Keller",
                                "image": "assets/images/avatar/13.jpg",
                                "details": "3.0 miles"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Faythe Pitts",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "image": "assets/images/avatar/3.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Marisa Cain",
                                "description": "Maxville",
                                "image": "assets/images/avatar/11.jpg",
                                "details": "1.0 miles"
                            },
                            {
                                "id": 2,
                                "title": "Dejesus Norris",
                                "description": "Bannock",
                                "image": "assets/images/avatar/12.jpg",
                                "details": "1.1 miles"
                            },
                            {
                                "id": 3,
                                "title": "Lara Lynn",
                                "description": "Singer",
                                "image": "assets/images/avatar/13.jpg",
                                "details": "2.0 miles"
                            },
                            {
                                "id": 4,
                                "title": "Burns Marks",
                                "description": "Nutrioso",
                                "image": "assets/images/avatar/14.jpg",
                                "details": "3.0 miles"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Doloritas Parent",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "image": "assets/images/avatar/4.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Byrd Hewitt",
                                "description": "Bluetown",
                                "image": "assets/images/avatar/0.jpg",
                                "details": "1.1 miles"
                            },
                            {
                                "id": 2,
                                "title": "Guerrero Woodard",
                                "description": "Fairhaven",
                                "image": "assets/images/avatar/1.jpg",
                                "details": "3.2 miles"
                            },
                            {
                                "id": 3,
                                "title": "Solis Mullen",
                                "description": "Caledonia",
                                "image": "assets/images/avatar/2.jpg",
                                "details": "2.3 miles"
                            },
                            {
                                "id": 4,
                                "title": "Guy Mccoy",
                                "description": "Strykersville",
                                "image": "assets/images/avatar/3.jpg",
                                "details": "1.4 miles"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Opal Shaham",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "image": "assets/images/avatar/5.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Cline Lindsay",
                                "description": "Caspar",
                                "image": "assets/images/avatar/14.jpg",
                                "details": "2.0 miles"
                            },
                            {
                                "id": 2,
                                "title": "Juliette Medina",
                                "description": "Blue",
                                "image": "assets/images/avatar/15.jpg",
                                "details": "1.0 miles"
                            },
                            {
                                "id": 3,
                                "title": "Mildred Clark",
                                "description": "Vincent",
                                "image": "assets/images/avatar/6.jpg",
                                "details": "4.0 miles"
                            },
                            {
                                "id": 4,
                                "title": "Valdez Bruce",
                                "description": "Hollins",
                                "image": "assets/images/avatar/7.jpg",
                                "details": "5.0 miles"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Pandora Hart",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "image": "assets/images/avatar/18.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Wilkerson Hardin",
                                "description": "Evergreen",
                                "image": "assets/images/avatar/14.jpg",
                                "details": "2.0 miles"
                            },
                            {
                                "id": 2,
                                "title": "Daisy Mcintyre",
                                "description": "Greenwich",
                                "image": "assets/images/avatar/15.jpg",
                                "details": "2.1 miles"
                            },
                            {
                                "id": 3,
                                "title": "Savage Mayer",
                                "description": "Summerset",
                                "image": "assets/images/avatar/6.jpg",
                                "details": "2.9 miles"
                            },
                            {
                                "id": 4,
                                "title": "Mann Cox",
                                "description": "Marne",
                                "image": "assets/images/avatar/7.jpg",
                                "details": "3.0 miles"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Main Stage Event",
                        "subtitle": "Monday, 15th Oct. 2017",
                        "backgroundImage": "assets/images/background/1.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Read more",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 2,
                        "title": "Free Ride",
                        "subtitle": "Wendsday, 21st Oct. 2017",
                        "backgroundImage": "assets/images/background/2.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Read more",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 3,
                        "title": "Mountain Tour",
                        "subtitle": "Wednesday, July 05, 1983",
                        "backgroundImage": "assets/images/background/0.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Read more",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 4,
                        "title": "Sea Tour",
                        "subtitle": "Sunday, October 08, 1921",
                        "backgroundImage": "assets/images/background/5.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Read more",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 5,
                        "title": "Bridge Tour",
                        "subtitle": "Monday, June 26, 1949",
                        "backgroundImage": "assets/images/background/6.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Read more",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 6,
                        "title": "Open Air Concert",
                        "subtitle": "Thursday, May 19, 1992",
                        "backgroundImage": "assets/images/background/7.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Read more",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "button": "Refine",
                "header": "Filters",
                "items": [
                    {
                        "id": 1,
                        "title": "T-Shirt",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "false"
                            },
                            {
                                "title": "l",
                                "isChecked": "true"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "true"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Pants",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "false"
                            },
                            {
                                "title": "m",
                                "isChecked": "false"
                            },
                            {
                                "title": "l",
                                "isChecked": "true"
                            },
                            {
                                "title": "xl",
                                "isChecked": "true"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "true"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Jacket",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "true"
                            },
                            {
                                "title": "l",
                                "isChecked": "true"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Shoes",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "false"
                            },
                            {
                                "title": "m",
                                "isChecked": "false"
                            },
                            {
                                "title": "l",
                                "isChecked": "false"
                            },
                            {
                                "title": "xl",
                                "isChecked": "true"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "true"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Hoodies",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "true"
                            },
                            {
                                "title": "l",
                                "isChecked": "false"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "bikini",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "true"
                            },
                            {
                                "title": "l",
                                "isChecked": "false"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "blazer",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "true"
                            },
                            {
                                "title": "l",
                                "isChecked": "false"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "boots",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "true"
                            },
                            {
                                "title": "l",
                                "isChecked": "false"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "title": "coat",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "true"
                            },
                            {
                                "title": "l",
                                "isChecked": "false"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "title": "dress",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "true"
                            },
                            {
                                "title": "l",
                                "isChecked": "false"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 11,
                        "title": "gloves",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "s",
                                "isChecked": "true"
                            },
                            {
                                "title": "m",
                                "isChecked": "true"
                            },
                            {
                                "title": "l",
                                "isChecked": "false"
                            },
                            {
                                "title": "xl",
                                "isChecked": "false"
                            },
                            {
                                "title": "xxl",
                                "isChecked": "false"
                            }
                        ]
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onRates': function (index) {
                    that.toastCtrl.presentToast("Rates " + (index + 1));
                },
                'onCheckBoxClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onButtonClick': function (item) {
                    that.toastCtrl.presentToast("Refine");
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewExpandableService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/expandable/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ListViewExpandableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewExpandableService);
    return ListViewExpandableService;
}());

//# sourceMappingURL=list-view-expandable-service.js.map

/***/ }),

/***/ 926:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewDragAndDropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewDragAndDropService = /** @class */ (function () {
    function ListViewDragAndDropService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'dragAndDrop'; };
        this.getTitle = function () { return 'Drag and Drop'; };
        this.getAllThemes = function () {
            return [
                { "title": "Small item + header", "theme": "layout1" },
                { "title": "Products + CTA header", "theme": "layout2" },
                { "title": "Medium item with avatar", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "header": "Distance",
                "items": [
                    {
                        "id": 1,
                        "title": "Brogan",
                        "subtitle": "Chad",
                        "textIcon": "7186 km"
                    },
                    {
                        "id": 2,
                        "title": "Rehrersburg",
                        "subtitle": "Mauritania",
                        "textIcon": "2281 km"
                    },
                    {
                        "id": 3,
                        "title": "Callaghan",
                        "subtitle": "Tonga",
                        "textIcon": "1748 km"
                    },
                    {
                        "id": 4,
                        "title": "Manitou",
                        "subtitle": "Norway",
                        "textIcon": "3450 km"
                    },
                    {
                        "id": 5,
                        "title": "Barronett",
                        "subtitle": "Iran",
                        "textIcon": "7374 km"
                    },
                    {
                        "id": 6,
                        "title": "Urie",
                        "subtitle": "Swaziland",
                        "textIcon": "6070 km"
                    },
                    {
                        "id": 7,
                        "title": "Blackgum",
                        "subtitle": "Uruguay",
                        "textIcon": "8158 km"
                    },
                    {
                        "id": 8,
                        "title": "Williston",
                        "subtitle": "Ireland",
                        "textIcon": "292 km"
                    },
                    {
                        "id": 9,
                        "title": "Keller",
                        "subtitle": "Austria",
                        "textIcon": "9231 km"
                    },
                    {
                        "id": 10,
                        "title": "Maxville",
                        "subtitle": "Panama",
                        "textIcon": "9972 km"
                    },
                    {
                        "id": 11,
                        "title": "Madrid",
                        "subtitle": "Singapore",
                        "textIcon": "9720 km"
                    },
                    {
                        "id": 12,
                        "title": "Fairacres",
                        "subtitle": "Colombia",
                        "textIcon": "988 km"
                    },
                    {
                        "id": 13,
                        "title": "Vincent",
                        "subtitle": "Antarctica",
                        "textIcon": "1000 km"
                    },
                    {
                        "id": 14,
                        "title": "Hollins",
                        "subtitle": "Wallis and Futuna Islands",
                        "textIcon": "2565 km"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "header": "Cart",
                "title": "Make order now!",
                "subtitle": "Reorder list by your wish.",
                "button": "get",
                "items": [
                    {
                        "id": 1,
                        "title": "Swim suit",
                        "subtitle": "20% Off",
                        "image": "assets/images/avatar/17.jpg",
                        "price": "$5.99"
                    },
                    {
                        "id": 2,
                        "title": "Hat",
                        "subtitle": "2% Off",
                        "image": "assets/images/avatar/18.jpg",
                        "price": "$21.60"
                    },
                    {
                        "id": 3,
                        "title": "Sweater",
                        "subtitle": "29% Off",
                        "image": "assets/images/avatar/19.jpg",
                        "price": "$27.90"
                    },
                    {
                        "id": 4,
                        "title": "Shirt",
                        "subtitle": "10% Off",
                        "image": "assets/images/avatar/20.jpg",
                        "price": "$35.00"
                    },
                    {
                        "id": 5,
                        "title": "Top",
                        "subtitle": "24% Off",
                        "image": "assets/images/avatar/21.jpg",
                        "price": "$3.99"
                    },
                    {
                        "id": 6,
                        "title": "pullover",
                        "subtitle": "4% Off",
                        "image": "assets/images/avatar/22.jpg",
                        "price": "$5.99"
                    },
                    {
                        "id": 7,
                        "title": "tog",
                        "subtitle": "30% Off",
                        "image": "assets/images/avatar/11.jpg",
                        "price": "$15.99"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "header": "Followers",
                "button": "Confirm",
                "items": [
                    {
                        "id": 1,
                        "title": "Grant Marshall",
                        "subtitle": "@grant333",
                        "image": "assets/images/avatar/0.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Pena Valdez",
                        "subtitle": "@penaxxy",
                        "image": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Jessica Miles",
                        "subtitle": "@jessica957",
                        "image": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Kerri Barber",
                        "subtitle": "@kerri333",
                        "image": "assets/images/avatar/3.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Natasha Gamble",
                        "subtitle": "@natashaxxy",
                        "image": "assets/images/avatar/4.jpg"
                    },
                    {
                        "id": 6,
                        "title": "White Castaneda",
                        "subtitle": "@white34",
                        "image": "assets/images/avatar/5.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Vanessa Ryan",
                        "subtitle": "@vanessa957",
                        "image": "assets/images/avatar/6.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Meredith Hendricks",
                        "subtitle": "@meredith957",
                        "image": "assets/images/avatar/7.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Carol Kelly",
                        "subtitle": "@carolm_e",
                        "image": "assets/images/avatar/8.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Victoria Mitchell",
                        "subtitle": "@barreraxxy",
                        "image": "assets/images/avatar/9.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Barrera Ramsey",
                        "subtitle": "@barrera898",
                        "image": "assets/images/avatar/10.jpg"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onProceed': function (item) {
                    that.toastCtrl.presentToast("Proceed");
                },
                'onButtonGetClick': function (item) {
                    that.toastCtrl.presentToast("Confirm");
                },
                'onButtonClick': function (item) {
                    that.toastCtrl.presentToast("Confirm");
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewDragAndDropService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/dragAndDrop/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ListViewDragAndDropService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewDragAndDropService);
    return ListViewDragAndDropService;
}());

//# sourceMappingURL=list-view-drag-and-drop-service.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewSwipeToDismissService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewSwipeToDismissService = /** @class */ (function () {
    function ListViewSwipeToDismissService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'swipeToDismiss'; };
        this.getTitle = function () { return 'Swipe to dismiss'; };
        this.getAllThemes = function () {
            return [
                { "title": "Small item + header", "theme": "layout1" },
                { "title": "Products + CTA", "theme": "layout2" },
                { "title": "Full width image", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "header": "Inbox",
                "title": "12 new mesages",
                "subtitle": "Mark all messages as read.",
                "button": "ok",
                "items": [
                    {
                        "id": 1,
                        "title": "Grant Marshall",
                        "subtitle": "Subtitle",
                        "textIcon": "6min ago",
                        "icon": "ios-information-circle-outline",
                        "delate": "Delete",
                        "reply": "Reply"
                    },
                    {
                        "id": 2,
                        "title": "Pena Valdez",
                        "subtitle": "Subtitle",
                        "textIcon": "58min ago",
                        "icon": "ios-information-circle-outline",
                        "delate": "Delete",
                        "reply": "Reply"
                    },
                    {
                        "id": 3,
                        "title": "Jessica Miles",
                        "subtitle": "Subtitle",
                        "textIcon": "92min ago",
                        "icon": "ios-information-circle-outline",
                        "delate": "Delete",
                        "reply": "Reply"
                    },
                    {
                        "id": 4,
                        "title": "Kerri Barber",
                        "subtitle": "Subtitle",
                        "textIcon": "93min ago",
                        "icon": "ios-information-circle-outline",
                        "delate": "Delete",
                        "reply": "Reply"
                    },
                    {
                        "id": 5,
                        "title": "Natasha Gamble",
                        "subtitle": "Subtitle",
                        "textIcon": "43min ago",
                        "icon": "ios-information-circle-outline",
                        "delate": "Delete",
                        "reply": "Reply"
                    },
                    {
                        "id": 6,
                        "title": "White Castaneda",
                        "subtitle": "Subtitle",
                        "textIcon": "62min ago",
                        "icon": "ios-information-circle-outline",
                        "delate": "Delete",
                        "reply": "Reply"
                    },
                    {
                        "id": 7,
                        "title": "Vanessa Ryan",
                        "subtitle": "Subtitle",
                        "textIcon": "81min ago",
                        "icon": "ios-information-circle-outline",
                        "delate": "Delete",
                        "reply": "Reply"
                    },
                    {
                        "id": 8,
                        "title": "Meredith Hendricks",
                        "subtitle": "Subtitle",
                        "textIcon": "51min ago",
                        "icon": "ios-information-circle-outline",
                        "delate": "Delete",
                        "reply": "Reply"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "header": "Following",
                "items": [
                    {
                        "id": 1,
                        "title": "Grant Marshall",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/17.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 2,
                        "title": "Pena Valdez",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/18.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 3,
                        "title": "Jessica Miles",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/19.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 4,
                        "title": "Kerri Barber",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/20.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 5,
                        "title": "Natasha Gamble",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/21.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 6,
                        "title": "White Castaneda",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/22.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 7,
                        "title": "Vanessa Ryan",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/11.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 8,
                        "title": "Carol Kelly",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/17.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 9,
                        "title": "Barrera Ramsey",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/18.jpg",
                        "ionBadge": "follow",
                        "delate": "Delete"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Free Ride",
                        "subtitle": "Monday, 15th Oct. 2017",
                        "image": "assets/images/background/4.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 2,
                        "title": "Main Stage Event",
                        "subtitle": "Thursday, 20th Feb. 2017",
                        "image": "assets/images/background/0.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 3,
                        "title": "Mountain Tour",
                        "subtitle": "Friday, 10th Aug. 2017",
                        "image": "assets/images/background/3.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 4,
                        "title": "Sea Tour",
                        "subtitle": "Wednesday, 17th May 2016",
                        "image": "assets/images/background/5.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 5,
                        "title": "Open Air Concert",
                        "subtitle": "Sunday, 11th June 2017",
                        "image": "assets/images/background/6.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 6,
                        "title": "Bridge Tour",
                        "subtitle": "Friday, 10th Jan. 2017",
                        "image": "assets/images/background/1.jpg",
                        "delate": "Delete"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onDelete': function (item) {
                    that.toastCtrl.presentToast("Delete " + item.title);
                },
                'onButtonGetClick': function (item) {
                    that.toastCtrl.presentToast("Like");
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewSwipeToDismissService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/swipeToDismiss/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ListViewSwipeToDismissService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewSwipeToDismissService);
    return ListViewSwipeToDismissService;
}());

//# sourceMappingURL=list-view-swipe-to-dismiss-service.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewAppearanceAnimationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewAppearanceAnimationService = /** @class */ (function () {
    function ListViewAppearanceAnimationService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'appearanceAnimations'; };
        this.getTitle = function () { return 'Appearance animations'; };
        this.getAllThemes = function () {
            return [
                { "title": "Fade in left", "theme": "layout1" },
                { "title": "Fade in right", "theme": "layout2" },
                { "title": "Fade in down", "theme": "layout3" },
                { "title": "Fade in", "theme": "layout4" },
                { "title": "Zoom in", "theme": "layout5" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this.getAnimationData();
        };
        this.getAnimationData = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Isaac Raid",
                        "image": "assets/images/avatar/0.jpg",
                        "favorite": true
                    },
                    {
                        "id": 2,
                        "title": "Jason Graham",
                        "image": "assets/images/avatar/1.jpg",
                        "favorite": false
                    },
                    {
                        "id": 3,
                        "title": "Abigail Ross",
                        "image": "assets/images/avatar/2.jpg",
                        "favorite": true
                    },
                    {
                        "id": 4,
                        "title": "Justin Rutherford",
                        "image": "assets/images/avatar/3.jpg",
                        "favorite": false
                    },
                    {
                        "id": 5,
                        "title": "Nicholas Henderson",
                        "image": "assets/images/avatar/4.jpg",
                        "favorite": false
                    },
                    {
                        "id": 6,
                        "title": "Elizabeth Mackenzie",
                        "image": "assets/images/avatar/5.jpg",
                        "favorite": true
                    },
                    {
                        "id": 7,
                        "title": "Melanie Ferguson",
                        "image": "assets/images/avatar/6.jpg",
                        "favorite": false
                    },
                    {
                        "id": 8,
                        "title": "Fiona Kelly",
                        "image": "assets/images/avatar/7.jpg",
                        "favorite": true
                    },
                    {
                        "id": 9,
                        "title": "Nicholas King",
                        "image": "assets/images/avatar/8.jpg",
                        "favorite": true
                    },
                    {
                        "id": 10,
                        "title": "Victoria Mitchell",
                        "image": "assets/images/avatar/9.jpg",
                        "favorite": true
                    },
                    {
                        "id": 11,
                        "title": "Sophie Lyman",
                        "image": "assets/images/avatar/10.jpg",
                        "favorite": false
                    },
                    {
                        "id": 12,
                        "title": "Carl Ince",
                        "image": "assets/images/avatar/11.jpg",
                        "favorite": false
                    },
                    {
                        "id": 13,
                        "title": "Michelle Slater",
                        "image": "assets/images/avatar/12.jpg",
                        "favorite": false
                    },
                    {
                        "id": 14,
                        "title": "Ryan Mathis",
                        "image": "assets/images/avatar/13.jpg",
                        "favorite": false
                    },
                    {
                        "id": 15,
                        "title": "Julia Grant",
                        "image": "assets/images/avatar/14.jpg",
                        "favorite": false
                    },
                    {
                        "id": 16,
                        "title": "Hannah Martin",
                        "image": "assets/images/avatar/15.jpg",
                        "favorite": false
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onFavorite': function (item) {
                    item.favorite = !item.favorite;
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewAppearanceAnimationService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/appearanceAnimations/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ListViewAppearanceAnimationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewAppearanceAnimationService);
    return ListViewAppearanceAnimationService;
}());

//# sourceMappingURL=list-view-appearance-animation-service.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewGoogleCardsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewGoogleCardsService = /** @class */ (function () {
    function ListViewGoogleCardsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'googleCards'; };
        this.getTitle = function () { return 'Google Cards'; };
        this.getAllThemes = function () {
            return [
                { "title": "Full image cards", "theme": "layout1" },
                { "title": "Styled cards 2", "theme": "layout2" },
                { "title": "Styled cards", "theme": "layout3" }
            ];
        };
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Free Ride",
                        "backgroundImage": "assets/images/background/0.jpg",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    },
                    {
                        "id": 2,
                        "title": "Mountain Tour",
                        "backgroundImage": "assets/images/background/1.jpg",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    },
                    {
                        "id": 3,
                        "title": "Sea Tour",
                        "backgroundImage": "assets/images/background/2.jpg",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    },
                    {
                        "id": 4,
                        "title": "Main Stage Event",
                        "backgroundImage": "assets/images/background/3.jpg",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    },
                    {
                        "id": 5,
                        "title": "Open Air Concert",
                        "backgroundImage": "assets/images/background/4.jpg",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    },
                    {
                        "id": 6,
                        "title": "Free Ride Tour",
                        "backgroundImage": "assets/images/background/5.jpg",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    },
                    {
                        "id": 7,
                        "title": "Free Ride",
                        "backgroundImage": "assets/images/background/6.jpg",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Green Cactus",
                        "subtitle": "Family: Cactaceae",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/8.jpg",
                        "button": "$14.90",
                        "shareIcon": "more"
                    },
                    {
                        "id": 2,
                        "title": "Red Cactus",
                        "subtitle": "Family: Cactaceae",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/10.jpg",
                        "button": "$13.99",
                        "shareIcon": "more"
                    },
                    {
                        "id": 3,
                        "title": "Colors Cactus",
                        "subtitle": "Family: Cactaceae",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/11.jpg",
                        "button": "$35.05",
                        "shareIcon": "more"
                    },
                    {
                        "id": 4,
                        "title": "Cactus",
                        "subtitle": "Family: Cactaceae",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/13.jpg",
                        "button": "$33.99",
                        "shareIcon": "more"
                    },
                    {
                        "id": 5,
                        "title": "Big Cactus",
                        "subtitle": "Family: Cactaceae",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
                        "image": "assets/images/background/12.jpg",
                        "button": "$10.60",
                        "shareIcon": "more"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "category": "best offer",
                        "image": "assets/images/background/2.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "West Avenue, NYC",
                        "button": "$35.99"
                    },
                    {
                        "id": 2,
                        "category": "main event",
                        "image": "assets/images/background/1.jpg",
                        "title": "Open Air Concert",
                        "subtitle": "Hyde Park, London",
                        "button": "$12.99"
                    },
                    {
                        "id": 3,
                        "category": "Best Tourt",
                        "image": "assets/images/background/0.jpg",
                        "title": "Sea ture",
                        "subtitle": "Guilin, Kweilin",
                        "button": "$13.45"
                    },
                    {
                        "id": 4,
                        "category": "Mountain",
                        "image": "assets/images/background/3.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "SMountain Trout Camp",
                        "button": "$38.60"
                    },
                    {
                        "id": 5,
                        "category": "Bridge Tour",
                        "image": "assets/images/background/4.jpg",
                        "title": "Bridge Tour",
                        "subtitle": "BridgeClimb, Sydney",
                        "button": "$40.85"
                    },
                    {
                        "id": 6,
                        "category": "best events",
                        "image": "assets/images/background/5.jpg",
                        "title": "Main Stage Event",
                        "subtitle": "Hyde Park, London ",
                        "button": "$56.55"
                    }
                ]
            };
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onExplore': function (item) {
                    that.toastCtrl.presentToast("Explore");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onLike': function (item) {
                    that.toastCtrl.presentToast("onLike");
                },
                'onFavorite': function (item) {
                    that.toastCtrl.presentToast("onFavorite");
                },
                'onFab': function (item) {
                    that.toastCtrl.presentToast("Fab");
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewGoogleCardsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/googleCards/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ListViewGoogleCardsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewGoogleCardsService);
    return ListViewGoogleCardsService;
}());

//# sourceMappingURL=list-view-google-card-service.js.map

/***/ }),

/***/ 930:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewStickyListHeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewStickyListHeaderService = /** @class */ (function () {
    function ListViewStickyListHeaderService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'stickyListHeader'; };
        this.getTitle = function () { return 'Sticky List header'; };
        this.getAllThemes = function () {
            return [
                { "title": "Basic", "theme": "layout1" },
                { "title": "Product", "theme": "layout2" },
                { "title": "Post", "theme": "layout3" }
            ];
        };
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "groupName": "Jazz",
                        "items": [
                            {
                                "id": 1,
                                "title": "Dejesus Norris",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$58.99",
                                "subtitle": "58 songs"
                            },
                            {
                                "id": 2,
                                "title": "Gayle Gaines",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$16.99",
                                "subtitle": "16 songs"
                            },
                            {
                                "id": 3,
                                "title": "Prince Phelps",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$8.29",
                                "subtitle": "92 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Blues",
                        "items": [
                            {
                                "id": 1,
                                "title": "Keri Hudson",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$13.95",
                                "subtitle": "93 songs"
                            },
                            {
                                "id": 2,
                                "title": "Duran Clayton",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$3.89",
                                "subtitle": "43 songs"
                            },
                            {
                                "id": 3,
                                "title": "Schmidt English",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$45.06",
                                "subtitle": "62 songs"
                            },
                            {
                                "id": 4,
                                "title": "Lara Lynn",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$56.66",
                                "subtitle": "81 songs"
                            },
                            {
                                "id": 5,
                                "title": "Perry Bradley",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$6.78",
                                "subtitle": "2 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Rock and roll",
                        "items": [
                            {
                                "id": 1,
                                "title": "Randall Hurley",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$3.99",
                                "subtitle": "4 songs"
                            },
                            {
                                "id": 2,
                                "title": "Josefa Gardner",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$9.99",
                                "subtitle": "51 songs"
                            },
                            {
                                "id": 3,
                                "title": "Vega Hayes",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$7.99",
                                "subtitle": "40 songs"
                            },
                            {
                                "id": 4,
                                "title": "Burns Marks",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$45.99",
                                "subtitle": "58 songs"
                            },
                            {
                                "id": 5,
                                "title": "Byrd Hewitt",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$39.75",
                                "subtitle": "55 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "R&B",
                        "items": [
                            {
                                "id": 1,
                                "title": "Solis Mullen",
                                "image": "assets/images/avatar/0.jpg",
                                "price": "$34.59",
                                "subtitle": "41 songs"
                            },
                            {
                                "id": 2,
                                "title": "Lottie Stone",
                                "image": "assets/images/avatar/1.jpg",
                                "price": "$44.99",
                                "subtitle": "48 songs"
                            },
                            {
                                "id": 3,
                                "title": "Bates Dunn",
                                "image": "assets/images/avatar/2.jpg",
                                "price": "$89.45",
                                "subtitle": "70 songs"
                            },
                            {
                                "id": 4,
                                "title": "Benton Willis",
                                "image": "assets/images/avatar/3.jpg",
                                "price": "$3.10",
                                "subtitle": "6 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Country Song",
                        "items": [
                            {
                                "id": 1,
                                "title": "Barbara Bernard",
                                "image": "assets/images/avatar/4.jpg",
                                "price": "$7.99",
                                "subtitle": "85 songs"
                            },
                            {
                                "id": 2,
                                "title": "Megan Singleton",
                                "image": "assets/images/avatar/5.jpg",
                                "price": "$7.39",
                                "subtitle": "59 songs"
                            },
                            {
                                "id": 3,
                                "title": "Guy Mccoy",
                                "image": "assets/images/avatar/6.jpg",
                                "price": "$13.99",
                                "subtitle": "24 songs"
                            },
                            {
                                "id": 4,
                                "title": "Cline Lindsay",
                                "image": "assets/images/avatar/7.jpg",
                                "price": "$75.95",
                                "subtitle": "40 songs"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "groupName": "Shirts",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Shirt",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/15.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/17.jpg",
                                "image5": "assets/images/background/18.jpg",
                                "price": "$33.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Trendy Black Shirt",
                                "image1": "assets/images/background/18.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$28.17",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "Shoes",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Shoes",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/19.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/17.jpg",
                                "price": "$31.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Black Shoes",
                                "image1": "assets/images/background/17.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$25.69",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 3,
                                "title": "Trendy Shoes",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/18.jpg",
                                "image4": "assets/images/background/19.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$13.66",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "Jacket",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White Jacket",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/18.jpg",
                                "image3": "assets/images/background/17.jpg",
                                "image4": "assets/images/background/16.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$17.89",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Trendy Black Jacket",
                                "image1": "assets/images/background/15.jpg",
                                "image2": "assets/images/background/16.jpg",
                                "image3": "assets/images/background/17.jpg",
                                "image4": "assets/images/background/18.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$55.01",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 3,
                                "title": "Brown Jacket",
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/18.jpg",
                                "image4": "assets/images/background/19.jpg",
                                "image5": "assets/images/background/15.jpg",
                                "price": "$14.45",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "T-Shirt",
                        "items": [
                            {
                                "id": 1,
                                "title": "Trendy White T-Shirt",
                                "image1": "assets/images/background/19.jpg",
                                "image2": "assets/images/background/15.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/17.jpg",
                                "image5": "assets/images/background/18.jpg",
                                "price": "$17.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "title": "Black T-Shirt",
                                "image1": "assets/images/background/18.jpg",
                                "image2": "assets/images/background/17.jpg",
                                "image3": "assets/images/background/16.jpg",
                                "image4": "assets/images/background/15.jpg",
                                "image5": "assets/images/background/19.jpg",
                                "price": "$44.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "groupName": "Yesterday",
                        "dateTime": "January 19, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Julia Petersen",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/1.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Holman Valencia",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/2.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    },
                    {
                        "groupName": "Today",
                        "dateTime": "June 26, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Marisa Cain",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/3.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Dejesus Norris",
                                "title": "Lorem ipsum dolor sit amet.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/4.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    },
                    {
                        "groupName": "tomorrow",
                        "dateTime": "August 07, 2017.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Gayle Gaines",
                                "title": "Lorem ipsum dolor sit amet, consectetur.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/5.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Prince Phelps",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/5.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onProceed': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onBuy': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast(item);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewStickyListHeaderService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/stickyListHeader/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ListViewStickyListHeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewStickyListHeaderService);
    return ListViewStickyListHeaderService;
}());

//# sourceMappingURL=list-view-sticky-list-header-service.js.map

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParallaxService = /** @class */ (function () {
    function ParallaxService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'parallax'; };
        this.getTitle = function () { return 'Parallax'; };
        this.getAllThemes = function () {
            return [
                { "title": "News List", "theme": "layout1" },
                { "title": "Profile", "theme": "layout2" },
                { "title": "Product", "theme": "layout3" },
                { "title": "News", "theme": "layout4" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "News List",
                "headerImage": "assets/images/background-small/0.jpg",
                "title": "What models will do when robots take their jobs?",
                "subtitle": "Showbiz",
                "items": [
                    {
                        "id": 1,
                        "title": "Grant Marshall",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/0.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 2,
                        "title": "Pena Valdez",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/1.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 3,
                        "title": "Jessica Miles",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/2.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 4,
                        "title": "Kerri Barber",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/3.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 5,
                        "title": "Natasha Gamble",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/4.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 6,
                        "title": "White Castaneda",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/5.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 7,
                        "title": "Vanessa Ryan",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/6.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 8,
                        "title": "Meredith Hendricks",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/7.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 9,
                        "title": "Carol Kelly",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/1.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 10,
                        "title": "Barrera Ramsey",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/2.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 11,
                        "title": "Julia Petersen",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/0.jpg",
                        "imageAlt": "avatar",
                        "button": "READ"
                    },
                    {
                        "id": 12,
                        "title": "Holman Valencia",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/3.jpg",
                        "imageAlt": "Presque Isle Harbor",
                        "button": "READ"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "Profile",
                "headerImage": "assets/images/background-small/1.jpg",
                "avatar": "assets/images/avatar/3.jpg",
                "title": "Bruce Wilkerson",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "items": [
                    {
                        "id": 1,
                        "avatar": "assets/images/avatar/1.jpg",
                        "title": "Grant Marshall",
                        "subtitle": "@grant333",
                        "button": "Follow"
                    },
                    {
                        "id": 2,
                        "avatar": "assets/images/avatar/2.jpg",
                        "title": "Pena Valdez",
                        "subtitle": "@penaxxy",
                        "button": "Follow"
                    },
                    {
                        "id": 3,
                        "avatar": "assets/images/avatar/3.jpg",
                        "title": "Jessica Miles",
                        "subtitle": "@jessica957",
                        "button": "Follow"
                    },
                    {
                        "id": 4,
                        "avatar": "assets/images/avatar/4.jpg",
                        "title": "Kerri Barber",
                        "subtitle": "@kerri333",
                        "button": "Follow"
                    },
                    {
                        "id": 5,
                        "avatar": "assets/images/avatar/19.jpg",
                        "title": "Natasha Gamble",
                        "subtitle": "@natashaxxy",
                        "button": "Follow"
                    },
                    {
                        "id": 6,
                        "avatar": "assets/images/avatar/20.jpg",
                        "title": "White Castaneda",
                        "subtitle": "@white34",
                        "button": "Follow"
                    },
                    {
                        "id": 7,
                        "avatar": "assets/images/avatar/14.jpg",
                        "title": "Vanessa Rya",
                        "subtitle": "@vanessa957",
                        "button": "Follow"
                    },
                    {
                        "id": 8,
                        "avatar": "assets/images/avatar/5.jpg",
                        "title": "Meredith Hendricks",
                        "subtitle": "@meredith957",
                        "button": "Follow"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "headerTitle": "Product",
                "headerImage": "assets/images/background-small/4.jpg",
                "shareIcon": "more",
                "items": [
                    {
                        "id": 1,
                        "category": "NEW OFFER",
                        "title": "Super & Black",
                        "subtitle": "Available Now",
                        "button": "$63.99",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "productDescriptions": [
                            {
                                "id": 1,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            },
                            {
                                "id": 2,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            },
                            {
                                "id": 3,
                                "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            },
                            {
                                "id": 4,
                                "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout4 = function () {
            return {
                "headerTitle": "News",
                "headerImage": "assets/images/background-small/3.jpg",
                "title": "Infinit bridge made in China. Locals said that is not possible to see end of bridge. 7 people lost during walk.",
                "subtitle": "by Name Surname",
                "category": "ENGINEERING",
                "avatar": "assets/images/avatar/3.jpg",
                "shareIcon": "more",
                "items": [
                    {
                        "id": 1,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 2,
                        "title": "Lorem ipsum dolor sit amet",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 3,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    },
                    {
                        "id": 4,
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onProceed': function (item) {
                    that.toastCtrl.presentToast("onProceed");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ParallaxService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('parallax/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ParallaxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ParallaxService);
    return ParallaxService;
}());

//# sourceMappingURL=parallax-service.js.map

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageGalleryService = /** @class */ (function () {
    function ImageGalleryService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'imageGallery'; };
        this.getTitle = function () { return 'Image Gallery'; };
        this.getAllThemes = function () {
            return [
                { "title": "Full gallery 1", "theme": "layout1" },
                { "title": "Thumb grid", "theme": "subcategory" },
                { "title": "Full gallery 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Brogan",
                        "image": "assets/images/gallery/brogan/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/brogan/14.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/brogan/6.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/brogan/15.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/brogan/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/brogan/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/brogan/13.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/brogan/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/brogan/11.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/brogan/12.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/brogan/13.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/brogan/7.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/brogan/5.jpg"
                            },
                            {
                                "id": 16,
                                "image": "assets/images/gallery/brogan/16.jpg"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Rehrersburg",
                        "image": "assets/images/gallery/brogan/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/brogan/5.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/brogan/6.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/brogan/7.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/brogan/8.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/brogan/14.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/brogan/3.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/brogan/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/brogan/11.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/brogan/12.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/brogan/9.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/brogan/15.jpg"
                            },
                            {
                                "id": 16,
                                "image": "assets/images/gallery/brogan/0.jpg"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Durham",
                        "image": "assets/images/gallery/brogan/18.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/brogan/7.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/brogan/8.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/brogan/9.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/brogan/11.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/brogan/14.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/brogan/3.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/brogan/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/brogan/11.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/brogan/12.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/brogan/19.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/brogan/18.jpg"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Callaghan",
                        "image": "assets/images/gallery/brogan/20.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/brogan/11.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/brogan/12.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/brogan/13.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/brogan/14.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/brogan/15.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/brogan/16.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/brogan/17.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/brogan/19.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/brogan/18.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/brogan/1.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/brogan/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/brogan/5.jpg"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Manitou",
                        "image": "assets/images/gallery/brogan/17.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/brogan/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/brogan/12.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/brogan/13.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/brogan/16.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/brogan/15.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/brogan/20.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/brogan/17.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/brogan/19.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/brogan/18.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/brogan/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/brogan/5.jpg"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Weedville",
                        "image": "assets/images/gallery/brogan/3.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/brogan/20.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/brogan/19.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/brogan/12.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/brogan/13.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/brogan/16.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/brogan/15.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/brogan/5.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/brogan/17.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/brogan/19.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/brogan/18.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/brogan/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/brogan/5.jpg"
                            },
                            {
                                "id": 16,
                                "image": "assets/images/gallery/brogan/0.jpg"
                            },
                            {
                                "id": 17,
                                "image": "assets/images/gallery/brogan/1.jpg"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Curtice",
                        "image": "assets/images/gallery/brogan/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/brogan/3.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/brogan/5.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/brogan/7.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/brogan/8.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/brogan/14.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/brogan/20.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/brogan/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/brogan/8.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/brogan/12.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/brogan/9.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/brogan/15.jpg"
                            },
                            {
                                "id": 16,
                                "image": "assets/images/gallery/brogan/0.jpg"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Barronett",
                        "image": "assets/images/gallery/brogan/19.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/brogan/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/brogan/12.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/brogan/13.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/brogan/16.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/brogan/15.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/brogan/20.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/brogan/17.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/brogan/19.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/brogan/18.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/brogan/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/brogan/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/brogan/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/brogan/4.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/brogan/5.jpg"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForSubcategory = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/gallery/brogan/16.jpg"
                    },
                    {
                        "id": 2,
                        "image": "assets/images/gallery/brogan/15.jpg"
                    },
                    {
                        "id": 3,
                        "image": "assets/images/gallery/brogan/13.jpg"
                    },
                    {
                        "id": 4,
                        "image": "assets/images/gallery/brogan/7.jpg"
                    },
                    {
                        "id": 5,
                        "image": "assets/images/gallery/brogan/8.jpg"
                    },
                    {
                        "id": 6,
                        "image": "assets/images/gallery/brogan/14.jpg"
                    },
                    {
                        "id": 7,
                        "image": "assets/images/gallery/brogan/20.jpg"
                    },
                    {
                        "id": 8,
                        "image": "assets/images/gallery/brogan/4.jpg"
                    },
                    {
                        "id": 9,
                        "image": "assets/images/gallery/brogan/9.jpg"
                    },
                    {
                        "id": 10,
                        "image": "assets/images/gallery/brogan/10.jpg"
                    },
                    {
                        "id": 11,
                        "image": "assets/images/gallery/brogan/8.jpg"
                    },
                    {
                        "id": 12,
                        "image": "assets/images/gallery/brogan/12.jpg"
                    },
                    {
                        "id": 13,
                        "image": "assets/images/gallery/brogan/2.jpg"
                    },
                    {
                        "id": 14,
                        "image": "assets/images/gallery/brogan/9.jpg"
                    },
                    {
                        "id": 15,
                        "image": "assets/images/gallery/brogan/15.jpg"
                    },
                    {
                        "id": 16,
                        "image": "assets/images/gallery/brogan/0.jpg"
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Nutrioso",
                        "subtitle": "Friday, August 07, 2017",
                        "image": "assets/images/gallery/nutrioso/15.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/nutrioso/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/nutrioso/4.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/nutrioso/7.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/nutrioso/12.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/nutrioso/17.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/nutrioso/20.jpg"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Bluetown",
                        "subtitle": "Wednesday, July 05, 2017",
                        "image": "assets/images/gallery/bluetown/11.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/bluetown/20.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/bluetown/19.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/bluetown/18.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/bluetown/17.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/bluetown/16.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/bluetown/15.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/bluetown/14.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/bluetown/13.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/bluetown/12.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/bluetown/11.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/bluetown/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/bluetown/9.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/bluetown/8.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/bluetown/7.jpg"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Fairhaven",
                        "subtitle": "Sunday, October 08, 2016",
                        "image": "assets/images/gallery/fairhaven/16.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/fairhaven/4.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/fairhaven/5.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/fairhaven/6.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/fairhaven/7.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/fairhaven/17.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/fairhaven/18.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/fairhaven/19.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/fairhaven/20.jpg"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Fredericktown",
                        "subtitle": "Monday, June 26, 2017",
                        "image": "assets/images/gallery/fredericktown/11.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/fredericktown/16.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/fredericktown/15.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/fredericktown/14.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/fredericktown/13.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/fredericktown/12.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/fredericktown/11.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/fredericktown/10.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/fredericktown/9.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/fredericktown/8.jpg"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Caledonia",
                        "subtitle": "Thursday, May 19, 2016",
                        "image": "assets/images/gallery/caledonia/3.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/caledonia/0.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/caledonia/1.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/caledonia/2.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/caledonia/3.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/caledonia/4.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/caledonia/5.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/caledonia/6.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/caledonia/7.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/caledonia/17.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/caledonia/18.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/caledonia/19.jpg"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Bend",
                        "subtitle": "Monday, September 01, 2016",
                        "image": "assets/images/gallery/bend/14.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/bend/15.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/bend/16.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/bend/17.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/bend/18.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/bend/19.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/bend/20.jpg"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Madrid",
                        "subtitle": "Tuesday, September 05, 2016",
                        "image": "assets/images/gallery/madrid/8.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/madrid/10.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/madrid/12.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/madrid/13.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/madrid/15.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/madrid/16.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/madrid/17.jpg"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Fairacres",
                        "subtitle": "Saturday, April 25, 2016",
                        "image": "assets/images/gallery/fairacres/18.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/fairacres/12.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/fairacres/13.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/fairacres/14.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/fairacres/15.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/fairacres/16.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/fairacres/11.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/fairacres/10.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/fairacres/9.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/fairacres/8.jpg"
                            }
                        ]
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            console.log(_this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1));
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ImageGalleryService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('imageGallery/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ImageGalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], ImageGalleryService);
    return ImageGalleryService;
}());

//# sourceMappingURL=image-gallery-service.js.map

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapsService = /** @class */ (function () {
    function MapsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'maps'; };
        this.getTitle = function () { return 'Maps'; };
        this.getAllThemes = function () {
            return [
                { "title": "GMAPS + Location  Details", "theme": "layout1" },
                { "title": "GMAPS + About Us", "theme": "layout2" },
                { "title": "Full Screen View", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "GMAPS + Location  Details",
                "title": "Museum of Modern Art",
                "reviews": "4.12 (78 reviews)",
                "contentTitle": "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
                "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                "icon": "checkmark-circle",
                "location": "Design street, New York, USA",
                "time": "8:00 to 16:00 working days",
                "phone": "33 222 11",
                "webSite": "www.csform.com",
                "email": "dev@csform.com",
                "iconsStars": [
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": false
                    }
                ],
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "GMAPS + About Us",
                "title": "Creative Studio Form",
                "titleDescription": "Design & Development agency",
                "contentTitle": "About us",
                "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                "icon": "checkmark-circle",
                "location": "Design street, New York, USA",
                "time": "8:00 to 16:00 working days",
                "phone": "33 222 11",
                "webSite": "www.csform.com",
                "email": "dev@csform.com",
                "titleMap": "Here we are :",
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "title": "Your location",
                "headerTitle": "Full Screen View",
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onRates': function (index) {
                    that.toastCtrl.presentToast("Rates " + (index + 1));
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    MapsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('maps/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    MapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], MapsService);
    return MapsService;
}());

//# sourceMappingURL=maps-service.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QRCodeService = /** @class */ (function () {
    function QRCodeService(loadingService, toastCtrl) {
        var _this = this;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'qrcode'; };
        this.getTitle = function () { return 'QRCode'; };
        this.getAllThemes = function () {
            return [
                { "title": "Layout 1", "theme": "layout1" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {};
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    QRCodeService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForTheme(item));
            observer.complete();
        });
    };
    QRCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], QRCodeService);
    return QRCodeService;
}());

//# sourceMappingURL=qrcode-service.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RadioButtonService = /** @class */ (function () {
    function RadioButtonService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'radioButton'; };
        this.getTitle = function () { return 'Radio Button'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "With avatars", "theme": "layout2" },
                { "title": "Simple 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "title": "Your country",
                "selectedItem": 3,
                "items": [
                    { "id": 1, "title": "Mayotte" },
                    { "id": 2, "title": "El Salvador" },
                    { "id": 4, "title": "Slovak Republic" },
                    { "id": 3, "title": "Myanmar" },
                    { "id": 5, "title": "Sudan" },
                    { "id": 6, "title": "Venezuela" },
                    { "id": 7, "title": "Canada" },
                    { "id": 8, "title": "French Polynesia" },
                    { "id": 9, "title": "Zambia" },
                    { "id": 10, "title": "Libya" },
                    { "id": 11, "title": "Swaziland" },
                    { "id": 12, "title": "Uruguay" },
                    { "id": 13, "title": "Ireland" }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "title": "Following",
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "Julia Petersen", "subtitle": "@julia333", "avatar": "assets/images/avatar/0.jpg" },
                    { "id": 2, "title": "Holman Valencia", "subtitle": "@holmanval", "avatar": "assets/images/avatar/1.jpg" },
                    { "id": 4, "title": "Marisa Cain", "subtitle": "@marisa", "avatar": "assets/images/avatar/2.jpg" },
                    { "id": 3, "title": "Dejesus Norris", "subtitle": "@norris", "avatar": "assets/images/avatar/3.jpg" },
                    { "id": 5, "title": "Gayle Gaines", "subtitle": "@Gayle", "avatar": "assets/images/avatar/4.jpg" },
                    { "id": 6, "title": "Prince Phelps", "subtitle": "@phelps123", "avatar": "assets/images/avatar/5.jpg" },
                    { "id": 7, "title": "Keri Hudson", "subtitle": "@kerri333", "avatar": "assets/images/avatar/6.jpg" },
                    { "id": 8, "title": "Duran Clayton", "subtitle": "@duran44", "avatar": "assets/images/avatar/7.jpg" },
                    { "id": 9, "title": "Lara Lynn", "subtitle": "@lara", "avatar": "assets/images/avatar/8.jpg" },
                    { "id": 10, "title": "Perry Bradley", "subtitle": "@bradley", "avatar": "assets/images/avatar/9.jpg" }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "title": "Loctions",
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "Brogan", "subtitle": "Chad" },
                    { "id": 2, "title": "Rehrersburg", "subtitle": "Romania" },
                    { "id": 4, "title": "Durham", "subtitle": "Mauritania" },
                    { "id": 3, "title": "Callaghan", "subtitle": "Tonga" },
                    { "id": 5, "title": "Manitou", "subtitle": "Norway" },
                    { "id": 6, "title": "Weedville", "subtitle": "Northern Mariana Islands" },
                    { "id": 7, "title": "Curtice", "subtitle": "Nauru" },
                    { "id": 8, "title": "Barronett", "subtitle": "Iran" },
                    { "id": 9, "title": "Urie", "subtitle": "Swaziland" },
                    { "id": 10, "title": "Blackgum", "subtitle": "Uruguay" },
                    { "id": 11, "title": "Bannock", "subtitle": "Mayotte" },
                    { "id": 12, "title": "Singer", "subtitle": "El Salvador" },
                    { "id": 13, "title": "Nutrioso", "subtitle": "Slovak Republic" }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    RadioButtonService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('radioButton/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    RadioButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RadioButtonService);
    return RadioButtonService;
}());

//# sourceMappingURL=radio-button-service.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RangeService = /** @class */ (function () {
    function RangeService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'range'; };
        this.getTitle = function () { return 'Range'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "layout1" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "layout1": {
                    "title": "BASIC",
                    "value": 10
                },
                "layout2": {
                    "title": "WITH ICONS",
                    "iconLeft": "volume-mute",
                    "iconRight": "volume-up",
                    "min": "-200",
                    "max": "200",
                    "value": 0
                },
                "layout3": {
                    "textLeft": "A",
                    "textRight": "A",
                    "title": "WITH PREDEFINED STEPS",
                    "min": "1000",
                    "max": "2000",
                    "step": "100",
                    "value": 20
                },
                "layout4": {
                    "title": "TWO SLIDERS",
                    "min": "1",
                    "max": "100",
                    "step": "10",
                    "value": {
                        "lower": 20,
                        "upper": 70
                    },
                    "textLeft": "1",
                    "textRight": "10"
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onChange': function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    RangeService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('ranges')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ;
    RangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RangeService);
    return RangeService;
}());

//# sourceMappingURL=range-service.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToggleService = /** @class */ (function () {
    function ToggleService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'toggle'; };
        this.getTitle = function () { return 'Toggle'; };
        this.getAllThemes = function () {
            return [
                { "title": "With avatars", "theme": "layout1" },
                { "title": "Simple 2", "theme": "layout2" },
                { "title": "Simple", "theme": "layout3" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "title": "With avatars",
                "items": [
                    {
                        "id": 0,
                        "title": "Chloe\tGibson",
                        "subtitle": "chloe.gibson@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/0.jpg"
                    },
                    {
                        "id": 1,
                        "title": "Amy\tKing",
                        "subtitle": "amy.king@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/1.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Jasmine\tStewart",
                        "subtitle": "jasmine.stewart@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/2.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Lillian\tSpringer",
                        "subtitle": "lillian.springer@emai",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/3.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Sophie\tDyer",
                        "subtitle": "sophie.dyer@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/4.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Julia\tLawrence",
                        "subtitle": "julia.lawrence@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/5.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Grace\tLambert",
                        "subtitle": "grace.lambert@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/6.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Amanda\tLawrence",
                        "subtitle": "amanda.lawrence@emai",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/7.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Sally\tReid",
                        "subtitle": "sally.reid@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/8.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Alison\tParsons",
                        "subtitle": "alison.parsons@emai",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Faith\tAvery",
                        "subtitle": "faith.avery@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Amelia\tMathis",
                        "subtitle": "amelia.mathis@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "id": 12,
                        "title": "Sarah\tReid",
                        "subtitle": "sarah.reid@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/12.jpg"
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "title": "Simple 2",
                "items": [
                    {
                        "id": 1,
                        "title": "marshall@yahoo.com",
                        "subtitle": "Grant",
                        "isChecked": true
                    },
                    {
                        "id": 2,
                        "title": "valdez@yahoo.com",
                        "subtitle": "Pena",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "miles@mail.com",
                        "subtitle": "Jessica",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "barber@gmail.com",
                        "subtitle": "Kerri",
                        "isChecked": false
                    },
                    {
                        "id": 5,
                        "title": "gamble@outlook.com",
                        "subtitle": "Natasha",
                        "isChecked": false
                    },
                    {
                        "id": 6,
                        "title": "castaneda@mail.com",
                        "subtitle": "White",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "ryan@mail.com",
                        "subtitle": "Vanessa",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "hendricks@yahoo.com",
                        "subtitle": "Meredith",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "kelly@mail.com",
                        "subtitle": "Carol",
                        "isChecked": false
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "title": "Simple",
                "items": [
                    {
                        "id": 0,
                        "title": "Romania",
                        "isChecked": true
                    },
                    {
                        "id": 1,
                        "title": "Mauritania",
                        "isChecked": false
                    },
                    {
                        "id": 2,
                        "title": "Tonga",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "Norway",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "Northern Mariana Islands",
                        "isChecked": true
                    },
                    {
                        "id": 5,
                        "title": "Nauru",
                        "isChecked": true
                    },
                    {
                        "id": 6,
                        "title": "Iran",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "Swaziland",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "Uruguay",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "Ireland",
                        "isChecked": false
                    },
                    {
                        "id": 10,
                        "title": "Indonesia",
                        "isChecked": false
                    },
                    {
                        "id": 11,
                        "title": "Austria",
                        "isChecked": false
                    },
                    {
                        "id": 12,
                        "title": "Panama",
                        "isChecked": false
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ToggleService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('toggle/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ToggleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ToggleService);
    return ToggleService;
}());

//# sourceMappingURL=toggle-service.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectService = /** @class */ (function () {
    function SelectService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'select'; };
        this.getTitle = function () { return 'Select'; };
        this.getAllThemes = function () {
            return [
                { "title": "Single Select", "theme": "layout1" },
                { "title": "Multi Select", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {
                "title": "Select",
                "layout1": {
                    "title": "City",
                    "selectedItem": 12,
                    "header": "Basic dialog",
                    "items": [
                        {
                            "id": 12,
                            "title": "New York"
                        },
                        {
                            "id": 14,
                            "title": "Paris"
                        },
                        {
                            "id": 13,
                            "title": "Amsterdam"
                        },
                        {
                            "id": 15,
                            "title": "Gotham City"
                        }
                    ]
                },
                "layout2": {
                    "title": "Country",
                    "header": "One touch dialog",
                    "selectedItem": 22,
                    "items": [
                        {
                            "id": 22,
                            "title": "USA"
                        },
                        {
                            "id": 24,
                            "title": "France"
                        },
                        {
                            "id": 23,
                            "title": "Netherland"
                        },
                        {
                            "id": 25,
                            "title": "Gothamland"
                        }
                    ]
                },
                "layout3": {
                    "title": "Address",
                    "header": "With Action sheet",
                    "selectedItem": 31,
                    "items": [
                        {
                            "id": 31,
                            "title": "Choose address"
                        },
                        {
                            "id": 32,
                            "title": "222 Duffield Street"
                        },
                        {
                            "id": 34,
                            "title": "198 Clark Street"
                        },
                        {
                            "id": 33,
                            "title": "588 Kenmore Terrace"
                        }
                    ]
                },
                "layout4": {
                    "title": "Date",
                    "header": "Two option select",
                    "selectedItemMonth": 38,
                    "selectedItemYear": 50,
                    "itemsMonth": [
                        {
                            "id": 38,
                            "title": "January"
                        },
                        {
                            "id": 39,
                            "title": "February"
                        },
                        {
                            "id": 40,
                            "title": "March"
                        },
                        {
                            "id": 41,
                            "title": "April"
                        },
                        {
                            "id": 42,
                            "title": "May"
                        },
                        {
                            "id": 43,
                            "title": "June"
                        },
                        {
                            "id": 44,
                            "title": "July"
                        },
                        {
                            "id": 45,
                            "title": "August"
                        },
                        {
                            "id": 46,
                            "title": "September"
                        },
                        {
                            "id": 47,
                            "title": "October"
                        },
                        {
                            "id": 48,
                            "title": "November"
                        },
                        {
                            "id": 49,
                            "title": "December"
                        }
                    ],
                    "itemsYears": [
                        {
                            "id": 50,
                            "title": "2009"
                        },
                        {
                            "id": 51,
                            "title": "2010"
                        },
                        {
                            "id": 52,
                            "title": "2011"
                        },
                        {
                            "id": 53,
                            "title": "2012"
                        },
                        {
                            "id": 54,
                            "title": "2013"
                        },
                        {
                            "id": 55,
                            "title": "2014"
                        },
                        {
                            "id": 56,
                            "title": "2015"
                        },
                        {
                            "id": 57,
                            "title": "2016"
                        },
                        {
                            "id": 58,
                            "title": "2017"
                        }
                    ]
                },
                "layout5": {
                    "title": "Country",
                    "header": "One touch dialog",
                    "selectedItem": 22,
                    "items": [
                        {
                            "id": 22,
                            "title": "USA"
                        },
                        {
                            "id": 24,
                            "title": "France"
                        },
                        {
                            "id": 23,
                            "title": "Netherland"
                        },
                        {
                            "id": 25,
                            "title": "Gothamland"
                        }
                    ]
                },
                "layout6": {
                    "title": "Date",
                    "header": "Two option select",
                    "selectedItemMonth": 38,
                    "selectedItemYear": 50,
                    "itemsMonth": [
                        {
                            "id": 38,
                            "title": "January"
                        },
                        {
                            "id": 39,
                            "title": "February"
                        },
                        {
                            "id": 40,
                            "title": "March"
                        },
                        {
                            "id": 41,
                            "title": "April"
                        },
                        {
                            "id": 42,
                            "title": "May"
                        },
                        {
                            "id": 43,
                            "title": "June"
                        },
                        {
                            "id": 44,
                            "title": "July"
                        },
                        {
                            "id": 45,
                            "title": "August"
                        },
                        {
                            "id": 46,
                            "title": "September"
                        },
                        {
                            "id": 47,
                            "title": "October"
                        },
                        {
                            "id": 48,
                            "title": "November"
                        },
                        {
                            "id": 49,
                            "title": "December"
                        }
                    ],
                    "itemsYears": [
                        {
                            "id": 50,
                            "title": "2009"
                        },
                        {
                            "id": 51,
                            "title": "2010"
                        },
                        {
                            "id": 52,
                            "title": "2011"
                        },
                        {
                            "id": 53,
                            "title": "2012"
                        },
                        {
                            "id": 54,
                            "title": "2013"
                        },
                        {
                            "id": 55,
                            "title": "2014"
                        },
                        {
                            "id": 56,
                            "title": "2015"
                        },
                        {
                            "id": 57,
                            "title": "2016"
                        },
                        {
                            "id": 58,
                            "title": "2017"
                        }
                    ]
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    SelectService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('select')
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    SelectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], SelectService);
    return SelectService;
}());

//# sourceMappingURL=select-service.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActionSheetService = /** @class */ (function () {
    function ActionSheetService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'actionSheet'; };
        this.getTitle = function () { return 'Action Sheet'; };
        this.getAllThemes = function () {
            return [
                { "title": "Basic", "theme": "layout1" },
                { "title": "News", "theme": "layout2" },
                { "title": "With Text Header", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "Basic",
                "headerImage": "assets/images/background-small/4.jpg",
                "shareIcon": "more",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Add to Cart",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "Delete Item"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "title": "Isaac Raid",
                        "subtitle": "Subtitle Text",
                        "category": "NEW GAME",
                        "button": "$3.99",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "productDescriptions": [
                            {
                                "id": 1,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            },
                            {
                                "id": 2,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            },
                            {
                                "id": 3,
                                "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            },
                            {
                                "id": 4,
                                "description": "passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "News",
                "headerImage": "assets/images/background-small/3.jpg",
                "title": "Infinit bridge made in China. Locals said that is not possible to see end of bridge. 7 people lost during walk.",
                "subtitle": "by Name Surname",
                "category": "ENGINEERING",
                "avatar": "assets/images/avatar/3.jpg",
                "shareIcon": "more",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Add to Cart",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "Delete Item"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 2,
                        "title": "Lorem ipsum dolor sit amet",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 3,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    },
                    {
                        "id": 4,
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            };
        };
        this.getDataForLayout3 = function () {
            return {
                "headerTitle": "With Text Header",
                "shareIcon": "more",
                "actionSheet": {
                    "title": "Choose what to do with this card?",
                    "buttons": [
                        {
                            "text": "Read more",
                            "role": "destructive"
                        },
                        {
                            "text": "Add to Favorites"
                        },
                        {
                            "text": "Delete Card"
                        },
                        {
                            "text": "Disable Card"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "category": "best offer",
                        "image": "assets/images/background/2.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "West Avenue, NYC",
                        "button": "$35.99"
                    },
                    {
                        "id": 2,
                        "category": "main event",
                        "image": "assets/images/background/1.jpg",
                        "title": "Open Air Concert",
                        "subtitle": "Hyde Park, London",
                        "button": "$12.99"
                    },
                    {
                        "id": 3,
                        "category": "Best Tourt",
                        "image": "assets/images/background/0.jpg",
                        "title": "Sea ture",
                        "subtitle": "Guilin, Kweilin",
                        "button": "$13.45"
                    },
                    {
                        "id": 4,
                        "category": "Mountain",
                        "image": "assets/images/background/3.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "SMountain Trout Camp",
                        "button": "$38.60"
                    },
                    {
                        "id": 5,
                        "category": "Bridge Tour",
                        "image": "assets/images/background/4.jpg",
                        "title": "Bridge Tour",
                        "subtitle": "BridgeClimb, Sydney",
                        "button": "$40.85"
                    },
                    {
                        "id": 6,
                        "category": "best events",
                        "image": "assets/images/background/5.jpg",
                        "title": "Main Stage Event",
                        "subtitle": "Hyde Park, London ",
                        "button": "$56.55"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onItemClickActionSheet': function (item) {
                    that.toastCtrl.presentToast(item.button.text);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ActionSheetService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('actionSheet/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    ActionSheetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ActionSheetService);
    return ActionSheetService;
}());

//# sourceMappingURL=action-sheet-service.js.map

/***/ })

});
//# sourceMappingURL=5.js.map