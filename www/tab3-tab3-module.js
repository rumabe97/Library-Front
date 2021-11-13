(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "+RIh":
/*!***************************************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/resolver/createUpdateBookResolverService.ts ***!
  \***************************************************************************************/
/*! exports provided: createUpdateBookResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUpdateBookResolverService", function() { return createUpdateBookResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_author_application_searchAuthor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/author/application/searchAuthor */ "kIV6");
/* harmony import */ var src_app_author_infrastructure_authorService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/author/infrastructure/authorService */ "NrWR");
/* harmony import */ var src_app_editorial_application_searchEditorial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/editorial/application/searchEditorial */ "7r71");
/* harmony import */ var src_app_editorial_infrastructure_EditorialService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/editorial/infrastructure/EditorialService */ "pcr+");
/* harmony import */ var src_app_location_application_searchLocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/location/application/searchLocation */ "hQv5");
/* harmony import */ var src_app_location_infrastructure_LocationService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/location/infrastructure/LocationService */ "gTrX");
/* harmony import */ var _application_getExternalBook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../application/getExternalBook */ "mf2X");
/* harmony import */ var _application_searchBook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../application/searchBook */ "gSq0");
/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/BookService */ "YBHC");













let createUpdateBookResolverService = class createUpdateBookResolverService {
    constructor(_service, _editorialService, _authorService, _locationService) {
        this._service = _service;
        this._editorialService = _editorialService;
        this._authorService = _authorService;
        this._locationService = _locationService;
    }
    resolve(route, state) {
        const $editorial = Object(src_app_editorial_application_searchEditorial__WEBPACK_IMPORTED_MODULE_6__["searchEditorial"])({}, this._editorialService);
        const $author = Object(src_app_author_application_searchAuthor__WEBPACK_IMPORTED_MODULE_4__["searchAuthor"])({}, this._authorService);
        const $location = Object(src_app_location_application_searchLocation__WEBPACK_IMPORTED_MODULE_8__["searchLocation"])({}, this._locationService);
        const $book = Object(_application_searchBook__WEBPACK_IMPORTED_MODULE_11__["searchBook"])({ id: route.queryParams['id'] }, this._service);
        const $bookIsbn = Object(_application_searchBook__WEBPACK_IMPORTED_MODULE_11__["searchBook"])({ ISBN: route.queryParams['id'] }, this._service);
        const $externalBook = Object(_application_getExternalBook__WEBPACK_IMPORTED_MODULE_10__["getexternalBook"])(route.queryParams['id'], this._service);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])($editorial, $author, $location, $book, $externalBook, $bookIsbn).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => ({
            data: {
                editorial: response[0],
                author: response[1],
                location: response[2],
                book: response[3],
                bookIsbn: response[5],
                externalBook: response[4]
            }
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                data: null,
                error: err,
                message: 'Error on book  resolver, data couldn\'t be fetched'
            });
        }));
    }
};
createUpdateBookResolverService.ctorParameters = () => [
    { type: _services_BookService__WEBPACK_IMPORTED_MODULE_12__["BookService"] },
    { type: src_app_editorial_infrastructure_EditorialService__WEBPACK_IMPORTED_MODULE_7__["EditorialService"] },
    { type: src_app_author_infrastructure_authorService__WEBPACK_IMPORTED_MODULE_5__["AuthorService"] },
    { type: src_app_location_infrastructure_LocationService__WEBPACK_IMPORTED_MODULE_9__["LocationService"] }
];
createUpdateBookResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], createUpdateBookResolverService);



/***/ }),

/***/ "7r71":
/*!**********************************************************!*\
  !*** ./src/app/editorial/application/searchEditorial.ts ***!
  \**********************************************************/
/*! exports provided: searchEditorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEditorial", function() { return searchEditorial; });
function searchEditorial(query, service) {
    return service.search(query);
}


/***/ }),

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page.ctorParameters = () => [];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_books_infrastructure_ngComponents_create_update_book_create_update_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab1/books/infrastructure/ngComponents/create-update-book/create-update-book.component */ "smOq");
/* harmony import */ var _tab1_books_infrastructure_resolver_createUpdateBookResolverService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab1/books/infrastructure/resolver/createUpdateBookResolverService */ "+RIh");





const routes = [
    {
        path: '',
        component: _tab1_books_infrastructure_ngComponents_create_update_book_create_update_book_component__WEBPACK_IMPORTED_MODULE_3__["CreateUpdateBookComponent"],
        resolve: { response: _tab1_books_infrastructure_resolver_createUpdateBookResolverService__WEBPACK_IMPORTED_MODULE_4__["createUpdateBookResolverService"] }
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "abXc":
/*!**********************************************************************!*\
  !*** ./src/app/editorial/infrastructure/AbstractEditorialService.ts ***!
  \**********************************************************************/
/*! exports provided: AbstractEditorialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEditorialService", function() { return AbstractEditorialService; });
class AbstractEditorialService {
}


/***/ }),

/***/ "cpzu":
/*!********************************************************************!*\
  !*** ./src/app/location/infrastructure/AbstractLocationService.ts ***!
  \********************************************************************/
/*! exports provided: AbstractLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractLocationService", function() { return AbstractLocationService; });
class AbstractLocationService {
}


/***/ }),

/***/ "gTrX":
/*!************************************************************!*\
  !*** ./src/app/location/infrastructure/LocationService.ts ***!
  \************************************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AbstractLocationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractLocationService */ "cpzu");




let LocationService = class LocationService extends _AbstractLocationService__WEBPACK_IMPORTED_MODULE_3__["AbstractLocationService"] {
    constructor(http) {
        super();
        this.http = http;
        this.BASE_URL = 'http://192.168.43.68:8080/';
    }
    get(id) {
        return this.http
            .get(`${this.BASE_URL}location/${id}`);
    }
    update(location) {
        return this.http
            .put(`${this.BASE_URL}location/${location.id}`, location);
    }
    createLocation(location) {
        return this.http
            .post(`${this.BASE_URL}location/create`, location);
    }
    search(params) {
        return this.http
            .get(`${this.BASE_URL}location/search`, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: this._clean(params) }) });
    }
    _clean(object) {
        const cleaned = {};
        const keys = Object.keys(object);
        keys.forEach(key => {
            if (object[key]) {
                cleaned[key] = object[key];
            }
        });
        return cleaned;
    }
};
LocationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'any',
    })
], LocationService);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 3\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 3</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Tab 3 page\"></app-explore-container>\n</ion-content>\n");

/***/ }),

/***/ "hQv5":
/*!********************************************************!*\
  !*** ./src/app/location/application/searchLocation.ts ***!
  \********************************************************/
/*! exports provided: searchLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchLocation", function() { return searchLocation; });
function searchLocation(query, service) {
    return service.search(query);
}


/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "mf2X":
/*!***********************************************************!*\
  !*** ./src/app/tab1/books/application/getExternalBook.ts ***!
  \***********************************************************/
/*! exports provided: getexternalBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getexternalBook", function() { return getexternalBook; });
function getexternalBook(isbn, service) {
    return service.getExternalBook(isbn);
}


/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "pcr+":
/*!**************************************************************!*\
  !*** ./src/app/editorial/infrastructure/EditorialService.ts ***!
  \**************************************************************/
/*! exports provided: EditorialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorialService", function() { return EditorialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AbstractEditorialService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractEditorialService */ "abXc");




let EditorialService = class EditorialService extends _AbstractEditorialService__WEBPACK_IMPORTED_MODULE_3__["AbstractEditorialService"] {
    constructor(http) {
        super();
        this.http = http;
        this.BASE_URL = 'http://192.168.43.68:8080/';
    }
    get(id) {
        return this.http
            .get(`${this.BASE_URL}editorial/${id}`);
    }
    update(editorial) {
        return this.http
            .put(`${this.BASE_URL}editorial/${editorial.id}`, editorial);
    }
    createEditorial(editorial) {
        return this.http
            .post(`${this.BASE_URL}editorial/create`, editorial);
    }
    search(params) {
        return this.http
            .get(`${this.BASE_URL}editorial/search`, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: this._clean(params) }) });
    }
    _clean(object) {
        const cleaned = {};
        const keys = Object.keys(object);
        keys.forEach(key => {
            if (object[key]) {
                cleaned[key] = object[key];
            }
        });
        return cleaned;
    }
};
EditorialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EditorialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'any',
    })
], EditorialService);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map