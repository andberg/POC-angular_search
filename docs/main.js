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

module.exports = ".container {\n    max-width: 689px;\n    margin: 0 auto;\n    padding: 50px 10px;\n}\n\nh1 {\n    margin: 20px 0; \n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n\n  <h1>\n    Min filmlista\n  </h1>\n  <p>Sök och lägg till filmer i din lista. </p>\n  <app-search></app-search>\n  <app-result-list></app-result-list>\n\n</div>\n\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/result-list/result-list.component */ "./src/app/components/result-list/result-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_6__["ResultListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/result-list/result-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/result-list/result-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    margin: 10px 0px;\n}\n\nli {\n    padding: 10px 8px;\n}\n\nli:nth-child(odd) {\n    background-color: #eee;\n}\n\nh3 {\n   display: flex;\n   flex-direction: row;\n   align-items: center; \n}\n\n.remove-btn {\n    background-color: #FF0000;\n    border-radius: 3px;\n    border:none;\n    margin: 5px;\n    cursor: pointer;\n    margin-left: auto;\n}\n\n.remove-btn:hover {\n    background-color: #ff6666;\n}"

/***/ }),

/***/ "./src/app/components/result-list/result-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/result-list/result-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"movieList?.length > 0\">\n  <h2>Mina filmer</h2>\n  <ul>\n    <li *ngFor=\"let item of movieList; let i = index\">\n      <h3>{{ item.name }} <button class=\"remove-btn\" (click)=\"removeItem(i)\"> X </button></h3>\n      <p>Lades till i listan: {{ item.timestamp | date:'yyyy-MM-dd, hh:mm' }}</p>\n    </li>\n  </ul>\n</section>\n"

/***/ }),

/***/ "./src/app/components/result-list/result-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/result-list/result-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultListComponent", function() { return ResultListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultListComponent = /** @class */ (function () {
    function ResultListComponent(messageService) {
        var _this = this;
        this.messageService = messageService;
        this.movieList = [];
        this.subscription = this.messageService.getNewMovies().subscribe(function (movie) {
            if (!_this.isDuplicate(movie)) {
                _this.movieList.push(movie);
                sessionStorage.setItem('movieList', JSON.stringify(_this.movieList));
            }
        });
    }
    ResultListComponent.prototype.ngOnInit = function () {
        var list = sessionStorage.getItem('movieList');
        var parsedList = JSON.parse(list);
        if (parsedList && parsedList.length > 0) {
            this.movieList = parsedList;
        }
    };
    ResultListComponent.prototype.removeItem = function (index) {
        this.movieList.splice(index, 1);
        sessionStorage.setItem('movieList', JSON.stringify(this.movieList));
    };
    ResultListComponent.prototype.isDuplicate = function (newMovie) {
        var isDuplicate = false;
        this.movieList.forEach(function (movie) {
            if (movie.name.indexOf(newMovie.name) !== -1) {
                isDuplicate = true;
            }
        });
        return isDuplicate;
    };
    ResultListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result-list',
            template: __webpack_require__(/*! ./result-list.component.html */ "./src/app/components/result-list/result-list.component.html"),
            styles: [__webpack_require__(/*! ./result-list.component.css */ "./src/app/components/result-list/result-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], ResultListComponent);
    return ResultListComponent;
}());



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <input type=\"search\">\n  </section>\n"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
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

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-section {\n    margin: 40px 0; \n}\n\n.search-control {\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n}\n\ninput {\n\tdisplay: flex;\n\tflex-grow: 5;\n\twidth: 100%;\n\theight: 40px;\n\tpadding: 3px 8px;\n\tborder: 2px solid #eee;\t\n    font-size: 20px;\n    border-radius: 3px;\n    border-right: none;\n}\n\ninput:focus {\n    outline: #eee auto 5px;\n}\n\nbutton {\n\tdisplay:flex;\n\tflex-grow: 1;\n\theight: 40px;\n    font-size: 20px;\n    border-radius: 3px;\n    background-color: #ABE886;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #ABE843;\n}\n\nbutton:active, button:focus {\n    outline: #eee auto 5px;\n}\n\n.search-result li {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n}\n\n.search-result li:nth-child(odd){\n    background-color: #eee;\n}\n\n.search-result li:nth-child(even){\n    border-right: 1px solid #eee;\n    border-left: 1px solid #eee;\n}\n\n.search-result li:last-of-type{\n    border-bottom: 1px solid #eee;\n}\n\n.search-result p {\n    display: flex;\n    flex-grow: 1;\n}\n\n.search-result button {\n    font-size: 14px;\n    padding: 5px 9px;\n    background-color: transparent;\n    border: none;\n}\n\n.search-result button:hover {\n    background-color: #D3D3D3;\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"search-section\">\n\n  <form role=\"search\">\n    <div class=\"search-control\">\n      <input type=\"search\" id=\"movie-search\" name=\"search-movie\" placeholder=\"Sök film\" \n        aria-label=\"Sök filmnamn på IMDB\" (keyup)=\"onKeyUp($event)\" #searchInput\n        autocomplete=\"off\">\n      <button>Sök</button>\n    </div>\n  </form>\n\n  <section class=\"search-result\">\n    <ul>\n      <li *ngFor=\"let result of resultList | slice:0:5; let i=index\">\n        <button (click)=\"addToMyMovies(result.name)\">{{ result.name }}</button>\n      </li>\n    </ul>\n  </section>\n\n</section>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/models */ "./src/app/models/models.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService, messageService) {
        this.searchService = searchService;
        this.messageService = messageService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.onKeyUp = function (event) {
        var _this = this;
        if (event.srcElement.value.length < 2) {
            return;
        }
        this.searchService.searchMovies(event.srcElement.value).subscribe(function (res) {
            _this.handleResponse(res);
        });
    };
    SearchComponent.prototype.handleResponse = function (resObj) {
        if (resObj.Response.indexOf('True') !== -1) {
            var movies = resObj.Search.map(function (imdbMovie) {
                return new _models_models__WEBPACK_IMPORTED_MODULE_2__["Movie"](new Date(), imdbMovie.Title);
            });
            this.resultList = movies;
        }
        else {
            this.resultList = [];
        }
    };
    SearchComponent.prototype.resetList = function () {
        this.searchInput.nativeElement.value = '';
        this.resultList = [];
    };
    SearchComponent.prototype.addToMyMovies = function (nameOfMovie) {
        var movie = new _models_models__WEBPACK_IMPORTED_MODULE_2__["Movie"](new Date(), nameOfMovie);
        this.resetList();
        this.messageService.addNewMovie(movie);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SearchComponent.prototype, "searchInput", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"], _services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/models/models.ts":
/*!**********************************!*\
  !*** ./src/app/models/models.ts ***!
  \**********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(timestamp, name) {
        this.timestamp = timestamp;
        this.name = name;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.newMovieAdded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    MessageService.prototype.addNewMovie = function (movie) {
        this.newMovieAdded.next(movie);
    };
    MessageService.prototype.getNewMovies = function () {
        return this.newMovieAdded.asObservable();
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.KEY = 'b55daa5e';
        this.url = 'http://www.omdbapi.com/?apikey=' + this.KEY + '&s=';
    }
    SearchService.prototype.searchMovies = function (name) {
        return this.http.get(this.url + name);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andreaberglund/Documents/Development/POC-angular_search/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map