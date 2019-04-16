(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navigation Bar */\r\nnav{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    background-color: #2196f3;\r\n}\r\n.navbar-nav > li{\r\n    padding:5px;\r\n}\r\n.navbar-nav li.active > a, .navbar-nav li .nav-link:focus{\r\n    color: #fff;\r\n    transition: width .5s ease, background-color .5s ease;\r\n    font-weight: bolder;\r\n}\r\n.navbar-nav li .nav-link:hover{\r\n    color: #fff;\r\n}\r\n.navbar-nav li a, .navbar-brand{\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"navbar navbar-expand-md fixed-top justify-content-center \">\n      <a class=\"navbar-brand\" href=\"#\">CSI Worship Order</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"navbar-collapse collapse w-100\" id=\"collapsingNavbar\">\n          <ul class=\"navbar-nav w-100 justify-content-center\">\n              <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                  <a class=\"nav-link py-0\" href=\"#\" routerLink=\"worship\">Worship</a>\n              </li>\n              <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                  <a class=\"nav-link py-0\" href=\"#\" routerLink=\"psalms\">Psalms</a>\n              </li>\n              <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                  <a class=\"nav-link py-0\" href=\"#\" routerLink=\"hymns\">Hymns</a>\n              </li>\n              <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                  <a class=\"nav-link py-0\" href=\"#\" routerLink=\"lyrics\">Lyrics</a>\n              </li>\n              <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                  <a class=\"nav-link py-0\" href=\"#\" routerLink=\"second\">Second order of service</a>\n              </li>\n              <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                  <a class=\"nav-link py-0\" href=\"#\" routerLink=\"dox\">Dox</a>\n              </li>\n          </ul>\n      </div>\n  </nav>\n</div>\n\n<div class=\"container content-box\">\n  <router-outlet></router-outlet>\n</div>\n\n<script type=\"text/javascript\">\n\n    $(document).ready(function(){    \n      \n      $('.navbar-nav>li>a').on('click', function () {\n          \n          var menuText = $(this).text();\n          if(menuText == \"Worship\")\n          {\n            $('nav').css('background-color','#2196f3');\n          }\n          else if(menuText == \"Psalms\")\n          {\n            $('nav').css('background-color','#3f51b5');\n          }\n          else if(menuText == \"Hymns\")\n          {\n            $('nav').css('background-color','#673ab7');\n          }\n          else if(menuText == \"Lyrics\")\n          {\n            $('nav').css('background-color','#00bcd4');\n          }\n          else if(menuText == \"Second order of service\")\n          {\n            $('nav').css('background-color','#009688');\n          }\n          else if(menuText == \"Dox\")\n          {\n            $('nav').css('background-color','#4caf50');\n          }\n  \n      });\n    });\n  \n  </script>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'manglish';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dox_dox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dox/dox.component */ "./src/app/dox/dox.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
/* harmony import */ var _lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lyrics/lyrics.component */ "./src/app/lyrics/lyrics.component.ts");
/* harmony import */ var _hymns_hymns_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hymns/hymns.component */ "./src/app/hymns/hymns.component.ts");
/* harmony import */ var _psalms_psalms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./psalms/psalms.component */ "./src/app/psalms/psalms.component.ts");
/* harmony import */ var _worship_worship_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./worship/worship.component */ "./src/app/worship/worship.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    {
        path: 'dox',
        component: _dox_dox_component__WEBPACK_IMPORTED_MODULE_4__["DoxComponent"]
    },
    {
        path: 'second',
        component: _second_second_component__WEBPACK_IMPORTED_MODULE_5__["SecondComponent"]
    },
    {
        path: 'lyrics',
        component: _lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_6__["LyricsComponent"]
    },
    {
        path: 'hymns',
        component: _hymns_hymns_component__WEBPACK_IMPORTED_MODULE_7__["HymnsComponent"]
    },
    {
        path: 'psalms',
        component: _psalms_psalms_component__WEBPACK_IMPORTED_MODULE_8__["PsalmsComponent"]
    },
    {
        path: 'worship',
        component: _worship_worship_component__WEBPACK_IMPORTED_MODULE_9__["WorshipComponent"]
    },
    {
        path: '',
        redirectTo: '/worship',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/worship',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dox_dox_component__WEBPACK_IMPORTED_MODULE_4__["DoxComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_5__["SecondComponent"],
                _lyrics_lyrics_component__WEBPACK_IMPORTED_MODULE_6__["LyricsComponent"],
                _hymns_hymns_component__WEBPACK_IMPORTED_MODULE_7__["HymnsComponent"],
                _psalms_psalms_component__WEBPACK_IMPORTED_MODULE_8__["PsalmsComponent"],
                _worship_worship_component__WEBPACK_IMPORTED_MODULE_9__["WorshipComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dox/dox.component.css":
/*!***************************************!*\
  !*** ./src/app/dox/dox.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dox/dox.component.html":
/*!****************************************!*\
  !*** ./src/app/dox/dox.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span style=\"text-align: center\"><h3>DOXOLOGY</h3></span>\n<pre>\n<div id=\"dox\">\n1\n\nPithaavu putthra aathmaavaam \nThrithwatthin aeka daivamaam \nAvannu vandanam yoagyam \nAvan maathram sathya daivam\n\n2\n\nOnnaayi bharichu vaazhunna \nThriyaeka daivamaakunna \nPitha, suthan, shudhaathmane \nSthuthikka naam dine dine\n\n3\n\nKartthaave ippoahl njangalle \nNee noakki rakshikkanhame \nNjangalkku ninte \nSthuthippaan thunakkename\n\n4\n\nSarvvashishatthin thaathane \nVaazhtthuveen loakaraakave \nVazhtthuveen swarga senayum \nVaazhthin pitha puthrathmane\n\n5\n\nPithaavinnum than puthranum \nMahathwam nalkatte \nVishsutdhanaayaathmaavinnum \nSalkeerthi paadatte \nManam sthothram adhikaram \nKunjaattinnu labhikkenam \nYeshu kristhu rakshithavu \nHalleluyya, Halleluyya \nHalleluyya, sthuthippin \n\n6\n\nEnnekkum mahathvam, Ekapitha, \nEnnekkum mahathuam, Ekasutha, \n\nEnnum ennekkume, \nEvam bbavikkatte \nEkatmavayonum \nEttam sthuthi\n\n7\n\nDhaivame anugrehikka \nSamadhanamai ayekka \nNin dhasare innum ennum \nKarunayode kaakkuka\n\n8\n\nHalleluya, njangalsthothram \nKaikkollename pithaa! \nHoshayanna, nin mahathwam \nKanikkename sada! \nHalleluyya, halleluyya \nHalleluyyaa aamaen \nHalleluyya, halleluyya \nHalleluyyaa aamaen\n\n9\n\nYesuvin kripaa kadaksham \nMaa pithavin snehavum \nDhaiva atmavin samsargam \nEnnum ingundankenam, \nHalleluya-Halleluya \nHalleluya amen..\n\n10\n\nKaanumvare ini nam thammil \nKoode irikkatte Dhaivam \nThan divya nadathippale \nKathu paalikkatte ningale\n\nEni naam... Eni naam \nYesu mun chaerum vare \nEni naam... Eni naam \nCherum vare palikatte than\n\n11\n\nKristhuvin Samaadhanam \nVaasamakatte nammil \nThan mukhathin prakaasam \nKleshamellam neekkatte\n\nThan thirukkarangalal \nAasirvaadathe nalki \nEnnumennum krupayal \nKaathu sookshicheedatte\n\n12\n\nSarvva budhiyum kaviyum daivasamadanam \nYeshumasiha than arivilum snehathilum \nKakkatte nammude manasukal \nChinthakal sarvum enenekkume\n\n13\n\nPithruputhrathmanam thriekante \nAassissukal \nUndayidatini ella janam \nmel enume \nSarvasakthanam daivam ningale \nPaalikkatte swar samadanathil\n</div>\n</pre>"

/***/ }),

/***/ "./src/app/dox/dox.component.ts":
/*!**************************************!*\
  !*** ./src/app/dox/dox.component.ts ***!
  \**************************************/
/*! exports provided: DoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoxComponent", function() { return DoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoxComponent = /** @class */ (function () {
    function DoxComponent() {
    }
    DoxComponent.prototype.ngOnInit = function () {
    };
    DoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dox',
            template: __webpack_require__(/*! ./dox.component.html */ "./src/app/dox/dox.component.html"),
            styles: [__webpack_require__(/*! ./dox.component.css */ "./src/app/dox/dox.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DoxComponent);
    return DoxComponent;
}());



/***/ }),

/***/ "./src/app/hymns/hymns.component.css":
/*!*******************************************!*\
  !*** ./src/app/hymns/hymns.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hymns/hymns.component.html":
/*!********************************************!*\
  !*** ./src/app/hymns/hymns.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let hymnheader of hymnsHeaderList; let i=index\">\n    <div class=\"accordion\" [attr.id]=\"'accordion' + i\">\n        <div class=\"card\">\n            <div class=\"card-header\" [attr.id]=\"'heading' + i\">\n                <h5 class=\"mb-0\">\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + i\"\n                        aria-expanded=\"true\" [attr.aria-controls]=\"'collapse' + i\">\n                        {{hymnheader}}\n                    </button>\n                </h5>\n            </div>\n            <div [attr.id]=\"'collapse' + i\" class=\"collapse hide angular-with-newlines\" [attr.aria-labelledby]=\"'heading'+ i\" [attr.data-parent]=\"'#accordion' + i\">\n                <div class=\"card-body\">\n                    {{hymnsValueList[i]}}\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/hymns/hymns.component.ts":
/*!******************************************!*\
  !*** ./src/app/hymns/hymns.component.ts ***!
  \******************************************/
/*! exports provided: HymnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HymnsComponent", function() { return HymnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/common.service */ "./src/service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HymnsComponent = /** @class */ (function () {
    function HymnsComponent(commonService) {
        this.commonService = commonService;
        this.hymnsHeaderList = [];
        this.hymnsValueList = [];
    }
    HymnsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getPrayerList().subscribe(function (data) {
            var headerTempList, valTempList = "";
            data.forEach(function (pitem) {
                if (pitem.key == "hymns_header") {
                    headerTempList = pitem.payload.val();
                }
                if (pitem.key == "hymns_content") {
                    valTempList = pitem.payload.val();
                }
            });
            _this.hymnsHeaderList = headerTempList.split(',');
            var re = /\|/gi;
            var tList = valTempList.replace(re, "\n\n");
            _this.hymnsValueList = tList.split(',');
        });
    };
    HymnsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hymns',
            template: __webpack_require__(/*! ./hymns.component.html */ "./src/app/hymns/hymns.component.html"),
            styles: [__webpack_require__(/*! ./hymns.component.css */ "./src/app/hymns/hymns.component.css")]
        }),
        __metadata("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], HymnsComponent);
    return HymnsComponent;
}());



/***/ }),

/***/ "./src/app/lyrics/lyrics.component.css":
/*!*********************************************!*\
  !*** ./src/app/lyrics/lyrics.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lyrics/lyrics.component.html":
/*!**********************************************!*\
  !*** ./src/app/lyrics/lyrics.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let lyricsheader of lyricsHeaderList; let i=index\">\n    <div class=\"accordion\" [attr.id]=\"'accordion' + i\">\n        <div class=\"card\">\n            <div class=\"card-header\" [attr.id]=\"'heading' + i\">\n                <h5 class=\"mb-0\">\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + i\"\n                        aria-expanded=\"true\" [attr.aria-controls]=\"'collapse' + i\">\n                        {{lyricsheader}}\n                    </button>\n                </h5>\n            </div>\n            <div [attr.id]=\"'collapse' + i\" class=\"collapse hide angular-with-newlines\" [attr.aria-labelledby]=\"'heading'+ i\" [attr.data-parent]=\"'#accordion' + i\">\n                <div class=\"card-body\">\n                    {{lyricsValueList[i]}}\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/lyrics/lyrics.component.ts":
/*!********************************************!*\
  !*** ./src/app/lyrics/lyrics.component.ts ***!
  \********************************************/
/*! exports provided: LyricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyricsComponent", function() { return LyricsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/common.service */ "./src/service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LyricsComponent = /** @class */ (function () {
    function LyricsComponent(commonService) {
        this.commonService = commonService;
        this.lyricsHeaderList = [];
        this.lyricsValueList = [];
    }
    LyricsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getPrayerList().subscribe(function (data) {
            var headerTempList, valTempList = "";
            data.forEach(function (pitem) {
                if (pitem.key == "lyrics_header") {
                    headerTempList = pitem.payload.val();
                }
                if (pitem.key == "lyrics_content") {
                    valTempList = pitem.payload.val();
                }
            });
            _this.lyricsHeaderList = headerTempList.split(',');
            var re = /\|/gi;
            var tList = valTempList.replace(re, "\n\n");
            _this.lyricsValueList = tList.split(',');
        });
    };
    LyricsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lyrics',
            template: __webpack_require__(/*! ./lyrics.component.html */ "./src/app/lyrics/lyrics.component.html"),
            styles: [__webpack_require__(/*! ./lyrics.component.css */ "./src/app/lyrics/lyrics.component.css")]
        }),
        __metadata("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], LyricsComponent);
    return LyricsComponent;
}());



/***/ }),

/***/ "./src/app/psalms/psalms.component.css":
/*!*********************************************!*\
  !*** ./src/app/psalms/psalms.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/psalms/psalms.component.html":
/*!**********************************************!*\
  !*** ./src/app/psalms/psalms.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let psalmheader of psalmsHeaderList; let i=index\">\n    <div class=\"accordion\" [attr.id]=\"'accordion' + i\">\n        <div class=\"card\">\n            <div class=\"card-header\" [attr.id]=\"'heading' + i\">\n                <h5 class=\"mb-0\">\n                    <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" [attr.data-target]=\"'#collapse' + i\"\n                        aria-expanded=\"true\" [attr.aria-controls]=\"'collapse' + i\">\n                        {{psalmheader}}\n                    </button>\n                </h5>\n            </div>\n            <div [attr.id]=\"'collapse' + i\" class=\"collapse hide angular-with-newlines\" [attr.aria-labelledby]=\"'heading'+ i\" [attr.data-parent]=\"'#accordion' + i\">\n                <div class=\"card-body\">\n                    {{psalmsValueList[i]}}\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/psalms/psalms.component.ts":
/*!********************************************!*\
  !*** ./src/app/psalms/psalms.component.ts ***!
  \********************************************/
/*! exports provided: PsalmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PsalmsComponent", function() { return PsalmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/common.service */ "./src/service/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PsalmsComponent = /** @class */ (function () {
    function PsalmsComponent(commonService) {
        this.commonService = commonService;
        this.psalmsHeaderList = [];
        this.psalmsValueList = [];
    }
    PsalmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getPrayerList().subscribe(function (data) {
            var headerTempList, valTempList = "";
            data.forEach(function (pitem) {
                if (pitem.key == "psalm_header") {
                    headerTempList = pitem.payload.val();
                }
                if (pitem.key == "psalm_content") {
                    valTempList = pitem.payload.val();
                }
            });
            _this.psalmsHeaderList = headerTempList.split(',');
            var re = /\|/gi;
            var tList = valTempList.replace(re, "\n\n");
            _this.psalmsValueList = tList.split(',');
        });
    };
    PsalmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-psalms',
            template: __webpack_require__(/*! ./psalms.component.html */ "./src/app/psalms/psalms.component.html"),
            styles: [__webpack_require__(/*! ./psalms.component.css */ "./src/app/psalms/psalms.component.css")]
        }),
        __metadata("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], PsalmsComponent);
    return PsalmsComponent;
}());



/***/ }),

/***/ "./src/app/second/second.component.css":
/*!*********************************************!*\
  !*** ./src/app/second/second.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/second/second.component.html":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"second\">\n  <span style=\"text-align:center;\">\n      <h3>SECOND ORDER OF SERVICE</h3>\n  </span>\n  <pre>\n  Pre-Sermon: Second order\n  SECOND ORDER OF SERVICE\n  \n  All stand\n  \n  Minister:\n  \n  Namukku Daivatthe Aaradhikkam\n  \n  The minister may read one or more verses from the Bible such as the following:\n  \n  Daivam aathmavakunnu; avane namaskarikkunnavar aathmaavilum sathyatthilum \n  namaskarikkennam John 4: 24\n  \n  Nammude Pithavaya Daivatthinkal ninnum Kartthavaaya Yeshukristhuvinkal ninnum ningalkku \n  kripayum samadhanavum undaakatte Rom. 1: 4\n  \n  Ithu Yehova undaakkiya divasam, innu naam santhoshichu aanandikka Ps. 118: 24\n  \n  Evening : Sooryante udayam muthal asthamanam vare yahovayude naamam sthuthikka ppeduma-rakatte. Ps. 113: 3\n  \n  Minister: Karthaave, njangallude adharangalle thurakkenname\n  \n  People: Ennaal njangallude vay ninte sthuthiye varnnikkum\n  \n  Minister: Pithavinum puthranum parissudh-aathmavinnum mahathwam undaakatte\n  \n  People: Adiyinkalum ippozhum ennekkum ulla prakaaram thanne. Amen Thritwatthinu Sthuthi\n  \n  Minister: Sainnyangallude Daivamaya karthavu parishuddhen, parishuddhen, parishuddhen, aakashavum bhoomiyum ninte\n  mahathwam-kondu nirranjirikkunnu. Mahonnathanaya karthave, ninakku mahathwam undakatte.\n  \n  People: Karthavinte naamathil vannavanum varuvanirikkunnavanum vazhthappettavan akunnu. Unnathangallil sthuthi.\n  \n  Minister: Daivame nee parishuddhen akunnu\n  \n  People: Daivame nee parishuddhenakunnu\n  \n  Minister: Sarva shakthane nee parishuddhenakunnu\n  \n  People: Sarva shakthane nee parishuddhenakunnu\n  \n  Minister: Marannamillatthavane nee parishuddhenakunnu\n  \n  People: Marannam-illatth-avane nee parishuddhen akunnu\n  \n  Minister: Njangallkkuvendi krooshikkappetta njangallude veendeduppu kaaranaya karthave, njangallodu \n  karunnacheyyenname.\n  \n  People: Njangallkkuvendi krooshlkkappetta njangallude veendeduppu kaaranaya karthave, njangallodu\n  karunnacheyyenname.\n  \n  Minister: Parishuddhathmavaya karthave, njangallodu karunnacheyyenname\n  \n  People: Parishuddhathmavaya karthave, njangallodu karunnacheyyenname\n  \n  Minister: Karthave, njangallude prardhanaka-llum sthothrangallum kaikkondu njangallodu karunnayundakenname.\n  \n  People: Karthave, kripathonni njangallodu karunna cheyyenname\n  \n  The minister says:\n  Sarva shakthanaya daiyame, njangallude karthavaya yeshukristhu mukhandaram, njangallude aaradhanayum sthothravum,\n  thirumunpake arppikkunnathinayi njangal ninte sannidhiyilekku vannirikunnu, Njangallude papangelle paramardhamay\n  ettuparrayunnathinum, mattullavarkkum njangallkum vaendi Prardhikkunnathinum njangalle sahayikkenname. Ninte\n  parishuddha vachanam sredhayode kellkkunnathinal njangal ninte namathe kooduthal yedharthamayi arriyukayum, ninte\n  kripa phalangale njangallude jeevithatthil thelliyichu kannikkukayum cheyyendathinu njangallude karthavaya\n  Yeshukristhu moolam kripa cheyyenname. Amen\n  \n  Confession\n  \n  Minister may read one or more verses from the Bible, such as the following\n  \n  Namukku paapam illa-ennu naam parrayunnu enkil namme thanne vanchikkunnu ; sathyam nammil illatheyayi. Nammude\n  paapangalle ettuparrayunnu enkil. Avan nammude paapangalle kshamichu sakala-aneethiyum-pokki, namme\n  shuddheekarikkaan thakkavannam viswasthanum neethimanum aakunnu. 1 John 1 : 8, 9\n  \n  Njaan ezhunettu appante adukkal chennu avanodu :'Appa, njaan swargathodum ninnodum paapam cheythirikkunnu. Inininte\n  makan enna perinu njaan yogyanalla'ennu parrayum. Luke. 15 : 18, 19\n  \n  Daiva raajan sameepichirikkunnu; maanasantharappettu suvisheshathil viswasippin Mark 1:15\n  \n  Namukkulla mahapurohithan nammude balaheenathayil sahathaapam kaannippam kazhiyathavanalla. Paapam ozhike\n  sarvathilum namukku thulyamayi pareekshikkappettavan athre namukkullathu Heb 4:14\n  \n  Minister: Namukku muttukutthi maunamay namme thanne shodhana cheyyam\n  \n  All kneel and are silent for a moment, after this, the minister says:\n  \n  Nammukku nammude paapangalle sarva shakthanaya Daivatthodu vinayamay ettuparayam.\n  \n  People:\n  \n  Njangallude Karthavaya daivame, njangal vicharathilum vakkilum pravarthiyilum ninakku virodhamay paapam\n  cheythirikkunnu. Njangal ninne poorna hrudayatthode snehichittilla. Njangal njangallude koottukare njangalle pole\n  snehichittilla. Njangallodu karunna-yundakenna-mennu njangal ninnodu apekshikkunnu. Njangallude paapangallil ninnum\n  njangalle shuddheekarikkayum, doshatthe jayikkuvaan njangallkku sahayikkukayum cheyyannamennu njangallude karthavaya\n  Yeshukristhu moolam njangal ninnodapekshikkunnu. Amen\n  \n  Minister : Karunnayulla karthaave ninte viswasamulla jenangal thangallude sakala papangallil ninnum\n  shuddheekarikkappettu, shaantha manassode ninne sevippanayittu avarkku paapamochanavum samadhanavum nalkennamennu\n  njangallude karthavaya Yesukristhu moolam njangal ninnodapekshikkunnu. Amen\n  \n  Part 3\n  \n  THE MINISTRY OF THE WORD OF GOD\n  \n  [DAIVA VACHANA SHUSHRUSHA]\n  \n  All stand\n  \n  The Minister says : Karthaavine sthuthippeen\n  \n  People : Karthaavinte naamam sthuthikka-ppedatte\n  \n  The following Psalm may be read responsively\n  \n  Psalm 95: 1-7\n  1. Varuveen naam Yahovaykku ullasichu ghoshikka; nammude rekshayude paraykk-arppiduka.\n  \n  2. Naam sthothrathode avante sannidhiyil chelluka; sankeerthanangallode avanu ghoshikka\n  \n  3. Yahova mahaa Daivamallo; avan sakala devanmarkkum meethe maha rajavuthanne\n  \n  4. Bhoomiyude adhobhagangal avante kaiyyil aakunnnu; parvathangallude shigharangallum avanullava.\n  \n  5. Samudram avanullathu; avan athine undakki; karayeyum avante kaikal menenjirikkunnu\n  \n  6. Varuveen, naam vannangi namaskarikka; namme nirmmicha Yahovayude munpil muttukutthuka\n  \n  7. Avan nammude Daivam akunnu; namo avan meykunna janavum avante kaikkale aadukallum thanne.\n  \n  Minister: Pithavum Puthranum Parishuddhaathmavinum mahatwam undakatte\n  \n  People: Adiyinkalum ippozhum ennekkum ullaprakaram thanne. Amen\n  \n  Psalm appointed for the day may be said or sung responsively\n  \n  The First lesson\n  \n  [Onnaam Patham]\n  \n  The song of Zachariah or Benedictus (Lk 1:68-71) may be sung responsively after the old testament reading.\n  \n  Minister: Israelinte Daivamaya Karthavu anugrahikka pettavan. Avan thante deshathe sannarssichu uddharanam cheykayum\n  \n  People : Aadimuthal thante vishuddha pravaachakanmaar mughandaram arullicheythathu pole.\n  \n  Nammude shathrukkallude vashatthu ninnum namme pakaykkunna evarudeyum kaiyyil ninnum namme rakshippan\n  \n  Thante dasanaya Davidinte Grihatthil namukku rakshayude kompu uyarthukayum cheythirikkunnathu\n  \n  Nammude pithaakkanmarodu karunna pravartthikkendathinum\n  \n  Nammude shathrukkallude kayilninnum'rakshikkappettu\n  \n  Naam aayushkkalam okkeyum bhayam koodaathe thirumunpil vishuddhiyilum neethiyilum thanne aaradhippan namukku Kripa\n  nalkumennu.\n  \n  Avan nammude pithaavaya Abrahaminodu cheytha sathyavum thante vishuddha niyamavum ortthukondum aakunnu\n  \n  Neeyo paythale atthyunnathante pravaachakan ennu villikkappedum. Kartthavinte vazhi orukkuvaanum\n  \n  Nammude Daivatthinte aardra karunnayaal avante janatthinu papamochanatthil, rakshaa parijnanam koduppaanumay nee\n  avanu munpaay nadakkum\n  \n  lrullilum maranna nizhalilum irikkunnavarkku prakaashichu, nammude kaalukalle samaadhaana maargatthil\n  nadatthendathinu\n  \n  Aa aardra karunnayal uyaratthil ninnu udayam namme sannarshichirikkunnu\n  \n  Minister : Pithavinum Puthranum parishuddha Athmavinum mahatwam undakatte\n  \n  People : Adiyinkalum ippozhum ennekkum ullaprakaram thanne. Amen.\n  \n  The Second lesson\n  \n  The following may be said after the Second Lesson\n  \n  Tedeum\n  \n  [Sabhayude Paatu]\n  \n  Daivame ninne njangal sthuthikkunnu Karthaavu nee akunnu ennu njangal anusarichukollunnu\n  \n  Nithya pithaavaya ninne bhoomlyellam vannikkunnu\n  \n  Sakala Daiva doodanmarum paramandhalangalum avayilulla sakala addhikaarangalom ninne nokki aarkkunnu\n  \n  Saynnyangallude Daivamaya karthavu parishuddhan, parishuddhan, parishuddhan;\n  \n  Aakashavum bhoomiyum ninte prabhaava mahathwamkondu nirranjirikkunnu ennu.\n  \n  Keroobukallum Saeraphukalum ninne nokki idavidaathe aarkkunnu.\n  \n  Apposthalanmaarude prabhaava samooham ninne sthuthikkunnu\n  \n  Pravachakanmaarude utthamasagham ninne sthuthikkunnu\n  \n  Rektha saakshikkarude sreshtta saynnyam ninne sthuthikkunnu\n  \n  Allavillattha mahatvamulla pithaavaya ninneyum\n  \n  Ninte vannithanaaya sathyeka puthraneyum, aswasa pradanaaya parishuddhathmavineyum lokatthil ellayidavum ulla\n  vishuddha sabha anussarichu kollunnu.\n  \n  Kristhuve; nee mahathvatthinte rajavakunnu. Nee pithaavinte nithya puthranaakunnu\n  \n  Manushyare rekshippaan nee bharamettappol kannyakayude garbhatthe verrutthil la.\n  \n  Nee marannatthinte moorchaye jayichappol ella viswasikallkkum swargarajyatthe thurrannu\n  \n  Nee Daivatlhinte valatthu bhaagatthu pithavinte prabhaavatthode irikkunnu\n  \n  Njangallude vidhi kartthaavay nee varum ennuu njangal viswasikkunnu\n  \n  Aaakayal ninte vilayeriya rektham kondu veendedutthavaraya ninte adiyarkku sahayikkennam ennu njangal\n  ninnod-apekshikkunnu\n  \n  Avare ennekkumulla mahatvathil ninte vishuddhan marodukoode ennikollenname\n  \n  Kartthave, ninte janangalle rakshichu ninte avakashatthe anugrahikkenname\n  \n  Avare bharichu ennekkum avare uyarthenname. Dinam prathi njangal ninne mahathvappedutthunnu\n  \n  Ninte namathe kaalavasanam koodathe ennum njangal vannikkukayum cheyyunnu\n  \n  Karthave innu njanngalle paapam koodathe kaatthar ullenname\n  \n  Karthaave njangalodu karunna undagkennme, njangalodle karunna undaakennme\n  \n  Kartthave, njangal ninkal asrayichirikkunna prakaaram ninte karunna njangalludemel undayirikkenname.\n  \n  Karthave njan ninkal aasrayichirikkunnu njaan orikkalum lajjappedaruthe.\n  \n  Minister: Pithavinum Puthranum parishuddha Athmavinum mahatwam undakatte\n  \n  People : Adiyinkalum ippozhum ullaprakaram thanne, Amen.\n  </pre>\n</div>"

/***/ }),

/***/ "./src/app/second/second.component.ts":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondComponent = /** @class */ (function () {
    function SecondComponent() {
    }
    SecondComponent.prototype.ngOnInit = function () {
    };
    SecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.css */ "./src/app/second/second.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/worship/worship.component.css":
/*!***********************************************!*\
  !*** ./src/app/worship/worship.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/worship/worship.component.html":
/*!************************************************!*\
  !*** ./src/app/worship/worship.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion\" id=\"accordionExample\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingOne\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                    aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                    Karthavinte Athazham: ORDER OF WORSHIP\r\n                </button>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collapseOne\" class=\"collapse hide\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n            <div class=\"card-body\">\r\n                <pre>\r\n                    A Hymn may be sung by choir near the vestry.\r\n\r\n                    The minister prays. Then announces a hymn from Praise & Worship.\r\n    \r\n                    PEOPLE STAND\r\n    \r\n                    The Choir and people sing.\r\n    \r\n                    PROCESSION\r\n    \r\n                    As the Presbyter (minister) comes to the Lord’s Table, the person with the processional Cross goes\r\n                    first, followed by Choir, then the person, who carries in both hands the Bible from which the lessons\r\n                    are to be read, then the presbyter. The minister places the Bible on the Lord’s Table or on a lectern.\r\n    \r\n                    The Presbyter says while the congregation remain standing.\r\n    \r\n                    Presbyter :\r\n    \r\n                    Namukku prarthikkam\r\n    \r\n                    Sarva sakthanaya daivame, ninakku sakala hridayangalum thurannirikunnavayum, sakala agrahangalum\r\n                    ariyappettavayum ninnil ninnum rahasyangal onnum maravillathathum akunnuvallo; njangal ninne poornamai\r\n                    snehippanum,ninte parisudha namathe yogyamai mahathva-ppeduthuvanum, ninte parishudhalmavinte\r\n                    niswasathal njangalude hridayangalile ninavukale njangalude karthavaya yesukristhu moolam\r\n                    vedippakkaname. AMEN\r\n    \r\n                    Then all sing or say\r\n    \r\n                    Congregation: Athyunnathangalil daivathinu mahathvavum, bhoomiyil daivaprasadamulla manusharku\r\n                    samadhanavum undakatte. Karthavaya daivame, swargeeya rajave, sarvasakthiyulla pithavaya daivame,njangal\r\n                    ninne sthuthikunnu, njangal ninne vazhthunnu,njangal ninne vannikkunnu, njangal nine\r\n                    mahathvappeduthunnu. Ninte valia mahathvathinai njangal ninakku sthothram cheyyunnu. Ekjathanam\r\n                    puthranaya yesukristhuvakunna karthave, karthavaya daivame, pithavinte puthra, lokathinte papathe\r\n                    chumakkunnavane, njangalude prarthana kaikollaname. Pithavaya daivathinte valathu bhagathirikkunnavane,\r\n                    njangalodu karunayundakaname. Nee mathramallo parisudhan,nee mathram karthavu, masihaye, nee mathram\r\n                    parishudhalmavinodu koode pithavaya daivathinte mahathvathil mahonnathanakunnu. AMEN\r\n    \r\n                    Our Lord’s summary of law and prophets\r\n    \r\n                    Presbyter :\r\n    \r\n                    Nammude karthavaya yesukristhu arulicheithathu :yisrayale kelka; nammude daivamaya karthavu eka\r\n                    karthavakunnu. Ninte daivamaya karthavine nee poorna hridayathodum, poorna almavinodum, poorna\r\n                    manassodum, poorna sakthiyodum snehikendathakunnu. Ethakunnu onnamathe kalpana. Randamathethu athinodu\r\n                    samam. Athayathu ninte koottukarane ninneppole thanne snehikkenam.Evayil valuthai veroru kalpanayum\r\n                    illa. Ee randu kalpanakalil sakala nyayapramanavum pravachankanmarum adangi-yirikkunnu.\r\n    \r\n                    Congregation:\r\n    \r\n                    Karthave, njangalodu karunayundai, ee kalpanayekappan njangalude hridayangale vanakkename.\r\n    \r\n                    Presbyter:\r\n    \r\n                    Sahodararare, daivathinte ettavum parisudha vachanam kelppannum, karthavinte sareera rakthangale\r\n                    kaikolluvanumnam orumichu vannirikkunnu. Athinal namukku muttukuthi mownamai nammethanne sodhana cheithu\r\n                    viswasathodum anuthapathodum avangalekku sameepikkunnathinu daivakrupa anweshikkam.\r\n    \r\n                    ALL KNEEL\r\n    \r\n                    After a short silence the presbyter continues\r\n    \r\n                    Ningalude papangalekkurichu nerayum thalparyamayum manasantharapettu, ningalude kootukarodu priyavum\r\n                    snehavumayirunnu, daivathinte kalpanakale anusarichukondum, melal avante visudha vazhikalil\r\n                    nadannukondum, puthiya jeevitham nayikkuvannum nischayichirikkunna ningal, nammude karthavaya\r\n                    yesukristhu moolam avanodu puthuthai nerappakka-ppedendathinu sarva sakthanaya daivathodu thazhmayayi\r\n                    ningalude papangale ettu paravin.\r\n    \r\n                    Congregation:\r\n    \r\n                    Swargastha pithave, njangal ninakum njangalude ayalkarkkum virodhamai papam cheithirikkunnu ennu\r\n                    ettuparayunnu. Njangal prakasathilalla, irrittilathre nadannirikkunnathu. Njangal karthavinte naman\r\n                    ucharikkunnengilum njangal anneethi vittakannittilla. Njangalodu karunay undakaname. Yesukristhu\r\n                    nimitham njangalude sakala papangaleyum njangalodu kshamikkename. Nintee parisudhalmvinal njangale\r\n                    vedippakkaneme, njangalude manasakshikale unarthename; mattullavarodu hridayapoorvam kshamippan thakka\r\n                    prapthi gangalkku nalkename. Ninte namathinte mahathvathinayi jeevante puthukkathil melal ninne sevippan\r\n                    njangalku krupa nalkenammennu gnagalude karthavaya yesu kristhu moolam njangal apekshikkunnu. AMEN\r\n    \r\n                    Presbyter:\r\n    \r\n                    Sathyamayi kristhuvil koode thangalekku thiriyunna ellavarodumulla daivathinte kripamozhi kelppin.\r\n    \r\n                    Adhvanikkunnavarum, bharam chumakkunnavarum ayullore, ellavarum ente adukkal varuvin; njan ningale\r\n                    aswasippikkum.\r\n    \r\n                    Thante ekajathanaya puthranil viswasikkunna evanum nasichupokathe nityajeevan prapikkendathinu, daivam\r\n                    avane nalkuvan thakkavannam lokathe snehichu.\r\n    \r\n                    Kristhuyesu papikale rakshippan lokathil vannu ennullathu viswasyavum ellavarum angeekarippan yogyavurn\r\n                    aya vachanam thanne.\r\n    \r\n                    Oruthan papam cheithu enkilo, neethimanaya yesukristhu enna karyasthan namukku pithavinte adukkal undu.\r\n                    Avan nammude papangalku prayaschitham akunnu.\r\n    \r\n                    Manapoorvamaya manasantharathodum, sathya viswasathodum thangaleku thiriyukayum thangalude\r\n                    sahodarangalodu kshamikkayuum cheiyunna ellavarkum papamochanam nalkumennu thante mahakarunakondu\r\n                    vagdatham cheithirikkunna swargastha pithavaya sarvasakthiyulla daivam nammude karthavaya yesukristhu\r\n                    moolam ningalodu karunayundayi ningalude sakala papangaleyum kshamichu, avayil ninnu ningale viduvichu\r\n                    sakala nanmayilum urappichu belappeduthi ningale nithyajeevangalekku pravesippikkatte.\r\n    \r\n                    Congregation:\r\n    \r\n                    Amen, daivame, ninakku sthothram.\r\n    \r\n                    Presbyter:\r\n    \r\n                    Karthavu ningalodukoode erikkatte.\r\n    \r\n                    Congregation:\r\n    \r\n                    Ningalude athmavodu koodeyum.\r\n    \r\n                    Presbyter:\r\n    \r\n                    Namukku Prarthikkam\r\n                </pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"accordion\" id=\"accordionExample2\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n                    aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n                    Sermon Affirmation of Faith\r\n                </button>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collapseTwo\" class=\"collapse hide\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample2\">\r\n            <div class=\"card-body\">\r\n                <pre>\r\n                Congregation: Sarva sakthiyulla pithavayi akashatheyum bhoomiyeyum kanappedunnavayum\r\n                kanappedathavayumayulla sakalatheyum srishtichavanaya eka daivathil njan viswasikkunnu. Daivathinte\r\n                ekajathanaya puthranayi eka karthavaya yesu kristhuvilum njan viswasikkunnu; Avan sarva lokangalkum\r\n                munpe thante pithavilninnu janippikkappettavan, daivathil ninnu daivam, prakasathilninnu prakasham,\r\n                sathyadaivathil ninnu sathyadaivam, janippikkappettavan, undakkappettavanalla, pithavinodu\r\n                ekathathvamullavan, avanal sakalavum undayi, avan manushyaraya namukum nammude rakshakkum vendi\r\n                swargathil ninnu erangi, parishudhathmavinal kanyaka mariayilninnu avatharichu manushyanayi theernnu,\r\n                ponthios peelathosinte keezhil namukku vendi kroosikkappettu, avan kashtapettu, adakkappettu,\r\n                thiruvezhuthukalin prakaram moonnam divasam uyirthezhunnettu swargathilekku kayari pithavinte valathu\r\n                bhagathu erikkunnu. Avan jeevanullavareyum marichavareyum nyayam vidhippan mahathvathode veendum varum.\r\n                Avante rajyathinu avasanam undakayilla.Karthavum jeevippikkunnavanum, pithavilninnum puthranil ninnum\r\n                purappedunnavanum, pithavinodum, puthranodumkoode vannikkappettu mahathva-ppedunnavanum,\r\n                pravachakarekkondu parayi-chavanumaya parisudhathmavilum njan viswasikkunnu. Katholikavum\r\n                appostholikavum-aya eka visudha sabhayilum njan viswasikkunnu. Papamochanathinulla eka bapthismaye njan\r\n                anusarikkunnu. Marichavarude punarudhanathinum, varuvanulla lokathile jeevanum njan kathirikkunnu. AMEN.\r\n\r\n                (After the above Nicene creed, the congregation may be seated)\r\n\r\n                ANNOUNCEMENTS\r\n\r\n                LITANY II\r\n\r\n                Melil ninnulla samadhanathinu vendiyum nammude athmakalude rakshakkuvendiyum namukku karthavinodu\r\n                prarthikkam.\r\n\r\n                Congregation:\r\n                Karthave, karunayundakaname\r\n\r\n                Loka samadhanathinu vendiyum, daivathinte visudha sabhayude kshemathinu vendiyum\r\n                sakala manushyarudeyum aikyathinu vendiyum namukku karthavinodu prarthikkam.\r\n\r\n                Congregation:\r\n                Karthave, karunayundakaname\r\n\r\n                Nammude meladhyakshanmarku vendiyum, ella sushrooshakarkku vendiyum, visheshal...enna nammude\r\n                Moderatorkku vendiyum... enna nammude Bishopinu vendiyum, avar ,sudha hridayathodum nalla\r\n                manasakshiyodum koode thangalude sishrooshaye nivathikkendathinum namukku karthavinodu prarthikkam.\r\n\r\n                Congregation:\r\n                Karthave, karunayundakaname\r\n\r\n                Nammude rajyathe ella bharanakarthakkalku vendiyum, adhikarathilulla mattellavarku vendiyum namukku\r\n                karthavinodu prarthikkam.\r\n\r\n                Congregation:\r\n                Karthave, karunayundakaname\r\n\r\n                Rogikalkkum, kastappedunnavarkum, dukhitharkum marikkairayavarkum vendi namukku\r\n                karthavinodu prarthikkam.\r\n\r\n                Congregation:\r\n                Karthave, karunayundakaname\r\n\r\n                Agathikalkum, visannirikkunnavarkum, anadharkum vidhavamarkum, peeda anubhavikkunnavarkum vendi namukku\r\n                karthavinodu prarthikam.\r\n\r\n                Congregation:\r\n                Karthave, karunayundakaname\r\n\r\n                Andhakarathil ninnu thante athbhutha prakasathilekku namme vilichavante sathgunangale khoshippan\r\n                thakkavannam namukku vendiyum kristhuvinte namam ettuparayunna evarku vendiyum namukku karthavinodu\r\n                prarthikkam.\r\n\r\n                Congregation:\r\n                Karthave, karunayundakaname\r\n\r\n                Ee bhoomiyil daivathe sevichu, eppol visramikkuna ella daivabhruthyarodumkoode thante anthamillatha\r\n                santhoshanthinte poornathayilekku pravesikkunnathinayi namukku karthavinodu prarthikkam\r\n\r\n                Congregation:\r\n                Karthave, karunayundakaname\r\n\r\n\r\n                After the Litany the Presbyter says\r\n\r\n                Namukku prathikkam\r\n                Sarvasakthanaya karthave, ninte athmavu sareeramakunna sabhaye muzhuvanum bharichu\r\n                sudheekarikkunnuvallo. Ninte visudha sabhayile ella vidhathilulla janangalkum vendi njangal\r\n                kazhikkunnathaya apekshakalyum prarthana-keleyum kaikkollaname. Athilulla oruruthanum avanavante\r\n                viliyilum sushrooshayilum ninne sathyathodum bhakthiyodum sevikkendathinu njangalude karthavum\r\n                rakshithavumaya yesukristhu moolam krupa arulename. AMEN.\r\n\r\n                Nammude karthavaya yesukristhuvinte krupayum daivathinte snehavum, parishudhathmavinte kootaimayum\r\n                ningalellavarodum koode eirkkumarakatte. AMEN.\r\n\r\n                BREAKING OF THE BREAD\r\n\r\n                ALL STAND\r\n\r\n                Etha, sahodaranmar orumichu vasikkunnathu ethra subhavum ethra manoharavum akunnu. Appam onnakakondu\r\n                palaraya nam oru sarreeram akunnu. Nam ellavarum aa oru appathil amsikalakunnuvallo.\r\n\r\n                Congregation:\r\n                Njan avante koodarathil jayaghosha yagangale arppikkum. Njan karthavinu padi keerthanam\r\n                cheyyum.\r\n\r\n                KISS OF PEACE\r\n                </pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"accordion\" id=\"accordionExample3\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingThree\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\r\n                    aria-expanded=\"true\" aria-controls=\"collapseThree\">\r\n                    OFFERTORY, BRINGING OF ELEMENTS\r\n                </button>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collapseThree\" class=\"collapse hide\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample3\">\r\n            <div class=\"card-body\">\r\n                <pre>\r\n                Presbyter:\r\n                Ninte priyaputhrante rakthathal ninte krupasananthilekkulla puthu vazhiye prathishttichirikkunna\r\n                parishudha pithave, avan mukhanthiram ayogyaraya njangal ningalekku aduthu varunnu. Swargathilum\r\n                bhoomiyilumullathellam nina-kkullathallo. Ninte kayilninnu vangi njangal ninakku tharunnatheyullu.\r\n                Njangaleyum njangalude ee danangaleyum nee kaikkondu ninte mahathvathinayi upayogikkanamennu thazhmayode\r\n                njangal ninnadu apekshikkunnu. AMEN.\r\n\r\n                ALL KNEEL\r\n\r\n\r\n                Congregation:\r\n                Yesuve, nalla mahapurohi-thanayullove, ninte sishyanmarude naduvil nee sannihithanayirunnathupole\r\n                njangalude madhyathilum vannu appam nurukkunnathil ninnethanne njangalkku velippeduthi tharenammenu\r\n                pithavinodum, parishudhathmavinodum\r\n                koode eka daivamayi kalavasanam koodathe jeevichu vazhunna ninnodu njangal apekshikkunnu. AMEN.\r\n\r\n                Presbyter:\r\n                Karthavu ningalodukoode yirikkatte.\r\n\r\n                Congregation:\r\n                Ningalude athmavodu koodeyum.\r\n\r\n                Presbyter:\r\n                Ningalude hridayangale uyarthuvin.\r\n\r\n                Congregation:\r\n                Njangal avaye karthavingalekku uyarthunnu\r\n\r\n                Presbyter:\r\n                Nammude daivamaya karthavinnu namakku sthothram cheyyam.\r\n\r\n                Congregation:\r\n                Angane cheeyunnathu yukthavum nyayavum akunnu.\r\n\r\n                Presbyter:\r\n                Parisudha karthave, sarvasakthanaya pithave, nithya daivame, njangal ella kalangalilum ella\r\n                sthalangalilum ninakku sthothram cheyyunnathu ettavum yukthavum nyayavum njangal cheyyendunna\r\n                murayumakunnu. Ninte puthranum njangalude karthavumaya yesu kristhu moolamayittu thanne, avan\r\n                mukhanthiram nee aakasatheyum bhoomiyeyum avayilulla sakalatheyum undakki, manushyane ninte swantha\r\n                sadrushyathil nirmikkayum cheithu. Avan paapathil veenapol puthiya shrishtiyude adyaphala-makendathinu\r\n                avane veendedukkukayaum cheiythu.\r\n\r\n                Congregation:\r\n                Athukondu daivadoodan-marodum pradhana daivadoodanmarodum swargathile sakala sangathodumkoode njangal\r\n                eppozhum nine sthuthichum sainyangalude daivamaya karthavu parishudhan, parishudhan, parishudhan;\r\n                akashavum bhoomiyum ninte mahathvam kondu niranjirikkunnu. Mahonnathanaya karthave, ninakku mahathavam\r\n                ennu cholliyum, ninte mahathvamulla namathe pukazhthi mahathvappeduthunnu. AMEN.\r\n\r\n                Karthavinte namathil vannavanum, varuvanirikkunnavanum vazhthappettavanakunnu. Unnathangalil sthuthi.\r\n\r\n                Presbyter:\r\n                Swargasthapithave, nee sathyamayi parishudhanakunnu. Nee sathyamayi vazhthappettavanakunnu. Manushya\r\n                vargathodulla ninte ardrasneham kondu ninte eka puthranaya yesukristhuvine njangalkulla swabhavathe\r\n                eduppanum njangalude veendeduppinayi kurisinmel maranam anubhavippanum thannuvallo. Avan orikalayi\r\n                thannethanne eka vazhipadayi arpichathinal sarva lokathinteyum papangalkayittu thikavayi, poornamayi,\r\n                mathiyakunna yagavum vazhipadum prathisanthiyum thikekayum, than veendum\r\n                varuvolam thante aa vilayeriya maranathekurichu edavidathulla ormaye niyamikkayum, athine eppozhum\r\n                acharikkenamennu thante visudha suvisheshathil njangalodu kalpikayim cheiduvallo. Avan than kanichu\r\n                kodukkapetta aa rathriyil thanne appam eduthu, sthothram cholli, athine nurukki, thante sishyanmarku\r\n                koduthu paranju, vangi bhakshippin. Ethu ningalku vendi nalkappedunna ente sareeramakunnu. Ente ormakayi\r\n                ethu cheivin. Athazam kazhinjathinte sesham aprakaram thanne avan panapethram eduthu, sthothram cholli\r\n                avarku koduthu paranju, Ningal ellavarum ethilninnu kudippin. Enthennal ethu ningalku vendiyum palarku\r\n                vendiyum papamochanathinayittu choriyappedunna puthiyaniyamathinulla ente rakthamakunnu. Ethine ningal\r\n                kudikkumpozhokkeyum ente ormakayi cheivin.\r\n\r\n                Congregation:\r\n                Amen, karthave, ninte maranathe njangal kondadunnu. Ninte uyirppine njangal ettuparayunnu. Ninte\r\n                randamathe varavine njangal kathiri-kkunnu. Kristhuve ninneku mahathwam-undakatte.\r\n\r\n                Presbyter:\r\n                Athukondu pithave, njangalude karthavaya ninte puthrante vilayeriya maranatheyum, kashtappadineyum\r\n                avante mahathvamulla punarudhanatheyum swarga-rohanatheyum orthukondum, avanil nee njangalkai\r\n                sampathicha poorna veendeduppinayi njangal ninakku sthothram cheithukondum avan kalpichaprakaram avan\r\n                varuvolam avante ormakayi ninte dasaraya njangal ethine cheyyunnu.\r\n\r\n                Congregation:\r\n                Karthavaya daivame, njangal ninakku sthothram cheyyunnu. Njangal ninne sthuthikkunnu. Njangal ninne\r\n                mahimappeduthunnu.\r\n\r\n                Presbyter:\r\n                Karunayulla pithave, njangaleyum ninte ee danangalaya appatheyum veenjineyum ninte parishudhathmavinal\r\n                sudheekarichu, njangal murikkunna ee appam kristhuvinte sareerathinte kootaimayum njangal vazhthunna ee\r\n                panapathram kristhuvinte rakthathinte kootaimayum akendathinu krupa nalkenammennu njangal thazhmayode\r\n                apekshikkunnu. Angane avanil yojippikkappettu, njangal ellavarurn viswasathinte aikyatha prapichu\r\n                njangalude karthavakunna masiha enna thalayakunna avangalekku sakalathilum valarendathinu krupa\r\n                nalkename. Avan moolamayum avanodu koodeyum parisudhathmavinte aikyathil sarvasakthanaya pithave,\r\n                ninakku sakala bahumanavum mahathvamum kalavasanam koodathe undayirikkatte. AMEN.\r\n\r\n                Presbyter:\r\n                Nammude rakshithavaya kristhu agnyapikayum pattippikayum cheithaprakaram nam dhairyathode chollunnathu.\r\n\r\n\r\n                Congregation\r\n                Swargasthanaya njangalude pithave, ninte naman visudheekarikha-ppedename. Ninte rajyam varename, ninte\r\n                ishtam swargathileppole bhoomiyilum akename. Njangalku avasyamulla aharam ennu tharename; njangalude\r\n                kadakkarodu njangal kshamichirikkunnathupole, njangalude kadangale njangalodum kshamikkename; njangale\r\n                pareekshayil kadathathe dushtangal ninnu njangale, viduvikkename; rajyavum, sakthiyum, mahathvamum\r\n                ennekum ninakkullathallo. AMEN.\r\n\r\n                All say together\r\n                Karunayulla karthave, njangal ninte palavidhamayulla valiya karunakalil allathe njangalude swantha\r\n                neethiyil asrayichukondu ninte ee meshayingalekku varuvan thuniyunnilla. Njangal ninte meshakku\r\n                keezhilulla appanurukkukal-e polum kootuvan yogyathayullavaralla. Ennal nee eppozhum karuna cheyyunna\r\n                lakshanamulla karthavuthanne akunnu. Athukondu krupayulla karthave, njangalude papa sareerangalum\r\n                athinakkalum ninte eshtaputhranaya yesukristhuvinte ettavum vilayeriya sareerathalum, rakthathalum\r\n                sudheekarikkappeduvanum, njangal avanilum, avan njangalilum eppozhum vasippanum thakkavannam, njangal\r\n                avante mamsathe bhakshikkukayum, avante rakthathe kudikkayum cheyyendathinnu krupa tharaname. AMEN.\r\n\r\n                Presbyter:\r\n                Nam nurukkunna appam kristhuvinte sareerathinte kootaima allayo.\r\n\r\n                Congregation:\r\n                Lokathinte papathe chumannedukkunnavanaya daivathinte kunjade, njangalodu karuna undakaname. Lokathinte\r\n                papathe chumann-edukkunnavanaya daivathinte kunjade, njangalodu karuna undakaname. Lokathinte papathe\r\n                chumann-edukkunavanaya daivathinte kunjade, ninte samadhanam njangalku nalkename.\r\n\r\n                Presbyter:\r\n                Jeevante appamakunna nammude karthavaya yesukristhuvinte sareeram.\r\n                Sathyamunthiri-valliaya nammude karthavaya yesukristhuvinte raktham.\r\n                </pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"accordion\" id=\"accordionExample4\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingFour\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseFour\"\r\n                    aria-expanded=\"true\" aria-controls=\"collapseFour\">\r\n                    RECEIVING OF COMMUNION\r\n                </button>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collapseFour\" class=\"collapse hide\" aria-labelledby=\"headingFour\" data-parent=\"#accordionExample4\">\r\n            <div class=\"card-body\">\r\n                <pre>\r\n                Presbyter (After the Communion) \r\n                Eppol kristhuvinte sareerathinteyum rakthathinteyum sakramenthu viswasathal kaikonda namukku daivathinu \r\n                sthothram cheyyam.\r\n\r\n                Congregation (All Kneel) \r\n                Sarvasakthanum, nithyanumaya daivame, ee visudha marmangale kramamayi kaikkondirikkunna njangale ninte puthranum, \r\n                njangalude rakshithavumaya yesu masihayude maha vilayeriya sareeravum rakthavumakunna athmeeya aharam kondu \r\n                poshippippan ninakku ishtam thonnuka kondu njangal ninakku sthothram cheyyunnu. Athinal njangalilekku \r\n                ninakkulla krupayayum, nanmayeyum kurichu nee njangalku urappu nalkiyirikkunnathinayum njangal ninne vazhthunnu. \r\n                Njangal sakala viswasikaiudeyum anugrahikkapetta kottamaya ninte puthrante njana sareerathilekku cherkkappetta \r\n                sakshal avayavangalakunnuvallo. Ninte ishta puthrante mahavilayeriya maranathinteyum, kashtappadinteyum punyangal \r\n                moolam aasayal njangal ninte nithyarajyathinu avakasikalumakunnu.Ee nischayam njangalku nalkiyirikkunnathinai njangal \r\n                ninakku manapporvamai sthothram cheyyunnu. Athukondu karthave, ivide njangal njangale thane, njangalude athmakaleyum \r\n                sareerangaleyum, vivekavum vishdhiyum jeevanumulla yagamai ninakku samarpikkunnu. Swargasthapithave, aa vishudha \r\n                kootaimayil njangal nila-nilpanayittum, njangal cheyyendathinai nee orukkiyirikkunna sakala salkriyakaleyum \r\n                pravarthippanayittum, ninte krupakondu njangalku sahayikkenamennu njangal ninnodu apekshikkunnu. Avanu ninnodum \r\n                parishudhathmavinodum koode sakala bahumanavum mahathvavum kalavasanam koodathe undayirikatte.\r\n\r\n                Amen, nammude daivathinu ennanekkum sthuthiyum, mahathvaum, njanavum, sthothravum, bahumanavum, sakthiyum, balavum \r\n                undayirikkatte. AMEN.\r\n                \r\n                Presbyter: \r\n                Sakala budhiyeyum kaviyunna daiva samadhanam daivatheyum avante puthranum nammude karthavumaya yesukristhuvineyum \r\n                kurichulla arivilum snehathilum ningalude hridayangaleyum manassukaleyum kakkatte. Pithavum, puthranum, \r\n                parisudhathmavumayulla sarva sakthanaya daivathinte anugrahavum ningalude edayil undai, ellaipozhum ningalode koode \r\n                erikkatte. AMEN.\r\n                </pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"accordion\" id=\"accordionExample5\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingFiver\">\r\n            <h5 class=\"mb-0\">\r\n                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseFive\"\r\n                    aria-expanded=\"true\" aria-controls=\"collapseFive\">\r\n                    RECESSION Prayer – Presbyter\r\n                </button>\r\n            </h5>\r\n        </div>\r\n        <div id=\"collapseFive\" class=\"collapse hide\" aria-labelledby=\"headingFive\" data-parent=\"#accordionExample5\">\r\n            <div class=\"card-body\">\r\n                <pre>\r\n                    Presbyter: \r\n                    Karthavu ningalodu koode irikatte \r\n                        \r\n                    Congregation: \r\n                    Ningalude athmavodukoodeyum \r\n                        \r\n                    Presbyter: \r\n                    Namukku samadhanathode pokam\r\n                            \r\n                    Congregation: \r\n                    Karthavinte namathil thanne. AMEN \r\n                        \r\n                    (Congregation kneel, have silent prayer and quietly go out)    \r\n                </pre>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/worship/worship.component.ts":
/*!**********************************************!*\
  !*** ./src/app/worship/worship.component.ts ***!
  \**********************************************/
/*! exports provided: WorshipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorshipComponent", function() { return WorshipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorshipComponent = /** @class */ (function () {
    function WorshipComponent() {
    }
    WorshipComponent.prototype.ngOnInit = function () {
    };
    WorshipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-worship',
            template: __webpack_require__(/*! ./worship.component.html */ "./src/app/worship/worship.component.html"),
            styles: [__webpack_require__(/*! ./worship.component.css */ "./src/app/worship/worship.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorshipComponent);
    return WorshipComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDnhXW4gJ8NIJkkok6prL7rh2dFz4dZTOY",
        authDomain: "manglish-98178.firebaseapp.com",
        databaseURL: "https://manglish-98178.firebaseio.com",
        projectId: "manglish-98178",
        storageBucket: "manglish-98178.appspot.com",
        messagingSenderId: "614430430674"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/service/common.service.ts":
/*!***************************************!*\
  !*** ./src/service/common.service.ts ***!
  \***************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonService = /** @class */ (function () {
    function CommonService(firedb) {
        this.firedb = firedb;
    }
    CommonService.prototype.getPrayerList = function () {
        this.prayersList = this.firedb.list("/prayers");
        return this.prayersList.snapshotChanges();
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\KASHMIRA\projects\manglish\app\manglish\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map