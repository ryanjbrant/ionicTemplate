webpackJsonp([39],{

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPage9Module", function() { return TabPage9Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_page_9__ = __webpack_require__(941);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabPage9Module = (function () {
    function TabPage9Module() {
    }
    TabPage9Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_page_9__["a" /* TabPage9 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_page_9__["a" /* TabPage9 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tab_page_9__["a" /* TabPage9 */]
            ]
        })
    ], TabPage9Module);
    return TabPage9Module;
}());

//# sourceMappingURL=tab-page-9.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(184);
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






var TabsService = (function () {
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

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage9; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tabs_service__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabPage9 = (function () {
    function TabPage9(tabsService, toastCtrl) {
        var _this = this;
        this.tabsService = tabsService;
        this.toastCtrl = toastCtrl;
        this.tabsService.load("tab9").subscribe(function (snapshot) {
            _this.params = snapshot;
        });
    }
    TabPage9.prototype.ngOnChanges = function (changes) {
        this.params = changes['data'].currentValue;
    };
    TabPage9.prototype.onItemClick = function (item, e) {
        if (e) {
            e.stopPropagation();
        }
        this.toastCtrl.presentToast(item.title);
    };
    TabPage9.prototype.onShare = function (item, e) {
        if (e) {
            e.stopPropagation();
        }
        this.toastCtrl.presentToast("Share");
    };
    TabPage9 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ryanjbrant/Repos/ionicTemplate/src/pages/tab-page-9/tab-page-9.html"*/'<!---Settings TAB lauout-9-->\n\n<ion-content>\n\n    <ion-grid no-padding *ngIf="params != null">\n\n        <ion-row>\n\n            <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 tab-9 *ngFor="let item of params.items; let i = index;" (click)="onItemClick(item)">\n\n                <ion-card text-left>\n\n                    <div card-image>\n\n                        <img [src]="item.cardImage" />\n\n                        <ion-badge ion-fixed item-end class="badge-dark">{{item.price}}</ion-badge>\n\n                        <!-- Share Button -->\n\n                        <button ion-fixed item-end ion-button color="primary" button-action-shit (click)="onShare(item, $event)">\n\n                          <ion-icon name="{{item.shareIcon}}"></ion-icon>\n\n                        </button>\n\n                    </div>\n\n                    <!--Card descriptiom-->\n\n                    <ion-card-content>\n\n                        <ion-card-title>\n\n                            <h2 card-title>{{item.title}}</h2>\n\n                            <h1 card-subtitle>{{item.subtitle}}</h1>\n\n                            <p card-body-text>{{item.description}}</p>\n\n                        </ion-card-title>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/ryanjbrant/Repos/ionicTemplate/src/pages/tab-page-9/tab-page-9.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_tabs_service__["a" /* TabsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tabs_service__["a" /* TabsService */], __WEBPACK_IMPORTED_MODULE_1__services_toast_service__["a" /* ToastService */]])
    ], TabPage9);
    return TabPage9;
}());

//# sourceMappingURL=tab-page-9.js.map

/***/ })

});
//# sourceMappingURL=39.js.map