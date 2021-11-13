(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+KKG":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/books/infrastructure/ngComponents/book-detail/book-detail.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Book Detail\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<div class=\"book-cell\">\n  <div class=\"book-img\">\n   <img src={{book.imageLink}} alt=\"\" class=\"book-photo\">\n  </div>\n  <div class=\"book-content\">\n   <div class=\"book-title\">{{book.title}}</div>\n   <div class=\"book-author\"> by {{book.author.name}} {{book.author.surname}}</div>\n   <div class=\"book-state\">State: \n        <div class=\"circle-content\">\n              <div class=\"circle\" style=\"--tooltip-color: red;\"></div>\n        </div> \n  </div>\n   <div class=\"book-sum\"><ion-icon name=\"location-outline\"></ion-icon>\n    {{book.location.building}} {{book.location.floor}} floor shelving {{book.location.shelving}}, {{book.location.city}} </div>\n   <div class=\"book-see\">Book Now</div>\n  </div>\n </div>\n\n<div class=\"introduction\">\n  <p>Introduction:</p>\n <p>{{book.description}}</p> \n</div>\n</ion-content>");

/***/ }),

/***/ "/j88":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/books/infrastructure/ngComponents/create-update-book/create-update-book.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Book management\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-card class=\"content\">\n  <form class=\"content__form\" [formGroup]=\"form\">\n    <input class=\"content__input\" placeholder=\"title\" formControlName=\"title\">\n    <input class=\"content__input\" placeholder=\"ISBN\" formControlName=\"isbn\">\n    <input class=\"content__input\"placeholder=\"country\" formControlName=\"country\">\n    \n    <input class=\"content__input\"placeholder=\"description\" formControlName=\"description\">\n\n    <input class=\"content__input\"list=\"editorials\"  placeholder=\"Editorial\" formControlName=\"editorial\">\n    <datalist id=\"editorials\">\n        <option *ngFor=\"let editorial of _resolved.data.editorial.content\">{{editorial.name}}</option>\n    </datalist>\n\n    <input class=\"content__input\" list=\"locations\"  placeholder=\"Location\" formControlName=\"location\">\n    <datalist id=\"locations\">\n        <option *ngFor=\"let location of _resolved.data.location.content\">{{location.building}} {{location.floor}} floor shelving {{location.shelving}}, {{location.city}}</option>\n    </datalist>\n\n    <input class=\"content__input\" list=\"authors\"  placeholder=\"Author\" formControlName=\"author\">\n    <datalist id=\"authors\">\n      <option *ngFor=\"let author of _resolved.data.author.content\">{{author.name}} {{author.surname}}</option>\n    </datalist>\n\n    <input class=\"content__input\" placeholder=\"Type\" formControlName=\"type\">\n    <input class=\"content__input\" placeholder=\"Image\" formControlName=\"imageLink\">\n    <button class=\"content__button\" (click)=\"onSubmit()\">Save</button>\n  </form>\n</ion-card>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ruben/Escritorio/frontTFG/src/main.ts */"zUnb");


/***/ }),

/***/ "1Ee0":
/*!**********************************************************************************************!*\
  !*** ./src/app/author/infrastructure/ng-components/create-author/create-author.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CreateAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAuthorComponent", function() { return CreateAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_author_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-author.component.html */ "Faa0");
/* harmony import */ var _create_author_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-author.component.scss */ "kCf5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CreateAuthorComponent = class CreateAuthorComponent {
    constructor() { }
    ngOnInit() { }
};
CreateAuthorComponent.ctorParameters = () => [];
CreateAuthorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-author',
        template: _raw_loader_create_author_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_author_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateAuthorComponent);



/***/ }),

/***/ "23M1":
/*!****************************************************!*\
  !*** ./src/app/author/application/createAuthor.ts ***!
  \****************************************************/
/*! exports provided: createAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAuthor", function() { return createAuthor; });
function createAuthor(author, service) {
    return service.createAuthor(author);
}


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "Faa0":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/author/infrastructure/ng-components/create-author/create-author.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  create-author works!\n</p>\n");

/***/ }),

/***/ "GXa0":
/*!*********************************************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/ngComponents/book-detail/book-detail.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_book_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./book-detail.component.html */ "+KKG");
/* harmony import */ var _book_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-detail.component.scss */ "H7J3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let BookDetailComponent = class BookDetailComponent {
    constructor(_route) {
        this._route = _route;
    }
    ngOnInit() {
        this._resolved = this._route.snapshot.data['response'];
        this.book = this._resolved.data;
        console.log(this.book);
    }
};
BookDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
BookDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-book-detail',
        template: _raw_loader_book_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_book_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookDetailComponent);



/***/ }),

/***/ "H7J3":
/*!***********************************************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/ngComponents/book-detail/book-detail.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===== FONTS (Major Third) ===== */\n/* ===== PALETTE ===== */\n/* ===== WEIGHT ===== */\n/* ===== TEMPLATE 1 ===== */\n.c-card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n}\n.c-card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.c-card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.filters-plus-config {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.filters-plus-config .dyn-filters {\n  flex-grow: 1;\n  overflow-x: auto;\n  margin: 0 40px 0 0;\n}\n.filters-plus-config .dyn-filters ::ng-deep mat-form-field {\n  width: 150px;\n}\n.filters-plus-config .configButton {\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n  max-height: 88%;\n}\n.card-component .card-content, .card-component .title-component {\n  margin: 0;\n}\n.card-component ::ng-deep mat-tab-group mat-tab-header {\n  margin-bottom: 0.5rem !important;\n}\n.card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.card-component .title-component button {\n  background-color: #DE7373;\n  border-radius: 2rem;\n  height: 2.3rem;\n  color: #efefef;\n}\n::ng-deep .mat-select-value {\n  color: #191919;\n}\n.filter {\n  align-items: center;\n  margin-left: 0.5em;\n  margin-bottom: 20px;\n}\n.mat-form-field {\n  width: 100%;\n}\nmat-form-field mat-select {\n  max-width: 10em;\n  margin-right: 5em;\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n.table-responsive .mat-table {\n  width: 100%;\n  max-width: 100%;\n  display: table;\n}\n.scrollbar-style::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.scrollbar-style::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.table-responsive::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.mat-header-row {\n  background-color: black;\n  border-radius: 0.5rem;\n  color: #8b8b8b;\n}\n.idCell:first-of-type, .idHeader:first-of-type {\n  padding-left: 0;\n}\n.idHeader {\n  justify-content: center;\n  color: white;\n}\n.idCell {\n  text-align: center;\n  justify-content: center;\n  word-break: break-all;\n  margin-right: 10px;\n}\nmat-card-content {\n  margin: 0 34px;\n}\n/* ===== PRIORITY ===== */\n.priority {\n  color: #ffffff;\n  padding: 5px 10px;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  font-weight: 500;\n  text-transform: capitalize;\n  background-color: #c2c2c2;\n}\n.priority-muyalta {\n  background-color: #d84855;\n}\n.priority-alta {\n  background-color: #e97171;\n}\n.priority-normal {\n  background-color: #ffcb8e;\n}\n.priority-baja {\n  background-color: #a3d69d;\n}\n.priority-ninguna {\n  background-color: #c2c2c2;\n}\n.red-date {\n  color: #eb4141;\n}\n/* MAT TAB */\n::ng-deep mat-tab-group {\n  margin-left: 20px;\n}\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: black;\n}\n::ng-deep .mat-tab-label .mat-tab-label-content {\n  font-size: 13px;\n}\n::ng-deep .mat-tab-label-content span {\n  margin-right: 5px;\n}\n::ng-deep .mat-tab-header {\n  border-bottom: 0 solid rgba(0, 0, 0, 0.12);\n}\n.book-cell {\n  position: relative;\n  display: flex;\n  padding: 25px;\n  width: 100%;\n  margin-bottom: 10%;\n  height: 250px;\n  margin-right: 1px;\n  border-bottom: 0.1px solid #80808026;\n  color: gray;\n}\n.book-img {\n  flex-shrink: 0;\n}\n.book-state {\n  display: flex;\n  flex-direction: row;\n  margin-top: 6%;\n  gap: 1rem;\n}\n.book-photo {\n  width: 180px;\n  flex-shrink: 0;\n  bottom: -35px;\n  left: 35px;\n  border-radius: 2px;\n  box-shadow: -2px 6px 19px 0px #7f818e;\n  transition: 0.3s ease;\n}\n.book-photo:hover {\n  transform: scale(1.03);\n}\n.book-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.book-title {\n  font-weight: 600;\n}\n.book-author {\n  margin-top: 3px;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.book-content {\n  padding: 0 20px;\n  overflow: hidden;\n}\n.book-voters {\n  vertical-align: sub;\n  font-size: 13px;\n  margin-left: 7px;\n  white-space: nowrap;\n  margin-top: 7px;\n}\n.book-sum {\n  margin-top: 20px;\n  font-size: 14px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n.book-see {\n  margin-top: 25px;\n  text-align: center;\n  background: #ffb0b0f0;\n  color: white;\n  font-weight: 600;\n  padding: 8px;\n  font-size: 14px;\n  width: 160px;\n  border-radius: 20px;\n}\n.book-see:hover {\n  color: #ff6e72;\n}\n.book-see.book-blue {\n  color: #a4e0eb;\n}\n.book-see.book-blue:hover {\n  color: #22cdec;\n}\n.book-see.book-pink {\n  color: #edb9d6;\n}\n.book-see.book-pink:hover {\n  color: #ff6dbe;\n}\n.book-see.book-yellow {\n  color: #fdca95;\n}\n.book-see.book-yellow:hover {\n  color: #fb9124;\n}\n.book-see.book-purple {\n  color: #cbb5e2;\n}\n.book-see.book-purple:hover {\n  color: #a764ec;\n}\n.introduction {\n  width: 90%;\n  word-break: break-word;\n  margin: 5%;\n  text-align: justify;\n  font-size: 1rem;\n  margin-top: 5rem;\n  line-height: 1.5rem;\n  color: gray;\n}\n.circle-content {\n  position: relative;\n}\n/* \n    --------------\n    DYNAMIC CIRCLE\n    --------------\n*/\n.circle {\n  width: 30px;\n  height: 30px;\n  border: 0px solid #c2c2c2;\n  border-radius: 120px;\n  line-height: 200px;\n  text-align: center;\n  color: #ddd;\n  font-size: 25px;\n  font-weight: 600;\n  position: absolute;\n  overflow: hidden;\n  z-index: 1;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.circle:before {\n  content: \"\";\n  position: absolute;\n  width: 85px;\n  height: 85px;\n  background-color: var(--tooltip-color);\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 40%;\n  animation: fill 3s ease-in-out;\n  z-index: -1;\n}\n@keyframes fill {\n  from {\n    top: 30px;\n    transform: translateX(-50%) rotate(0deg);\n  }\n  to {\n    top: -50px;\n    transform: translateX(-50%) rotate(360deg);\n  }\n}\n@media (max-width: 1103px) {\n  .book-cell {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n}\n@media (max-width: 765px) {\n  .book-cell {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n}\n@media (max-width: 575px) {\n  .book-cell {\n    width: 100%;\n    margin-bottom: 10%;\n  }\n}\n@media (max-width: 458px) {\n  .book-photo {\n    width: 180px;\n  }\n\n  .book-voters {\n    display: none;\n  }\n}\n@media (max-width: 420px) {\n  .book-see {\n    width: 120px;\n    font-size: 13px;\n  }\n\n  .book-photo {\n    width: 5rem;\n  }\n\n  .main-wrapper {\n    margin-top: 50px;\n  }\n\n  .introduction {\n    margin-top: 0px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 360px) {\n  .rating > label:before {\n    font-size: 0.8em;\n  }\n}\n@media (max-width: 1220px) {\n  .card-vote {\n    display: none;\n  }\n}\n@media (max-width: 1085px) {\n  .book-rate > label {\n    font-size: 0.7em;\n  }\n}\n@media (max-width: 1045px) {\n  .books-of {\n    display: none;\n  }\n}\n@media (max-width: 725px) {\n  .browse-category, .search-bar {\n    display: none;\n  }\n\n  .header-title {\n    margin-right: auto;\n  }\n\n  .book-cards {\n    grid-template-columns: 1fr;\n  }\n\n  .book-types {\n    display: none;\n  }\n}\n@media (max-width: 372px) {\n  .card-content {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3N0YWZmaXQtc3R5bGUtMS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYm9vay1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQUE7QUFRQSx3QkFBQTtBQVFBLHVCQUFBO0FBR0EsMkJBQUE7QUFFQTtFQUNFLDZCQUFBO0FDaEJGO0FEa0JFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUNoQko7QURrQkk7RUFDRSxtQkEzQlE7RUE0QlIsZ0JBQUE7RUFDQSxjQUFBO0FDaEJOO0FEc0JBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDbkJGO0FEcUJFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNuQko7QURxQkk7RUFDRSxZQUFBO0FDbkJOO0FEc0JFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDcEJKO0FEd0JBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FDckJGO0FEdUJFO0VBQ0UsU0FBQTtBQ3JCSjtBRHdCRTtFQUNFLGdDQUFBO0FDdEJKO0FEeUJFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUN2Qko7QUR5Qkk7RUFDRSxtQkEzRVE7RUE0RVIsZ0JBQUE7RUFDQSxjQUFBO0FDdkJOO0FEMEJJO0VBQ0UseUJBNUVpQjtFQTZFakIsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ3hCTjtBRDZCQTtFQUNFLGNBbEZtQjtBQ3dEckI7QUQ2QkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0FDMUJGO0FENkJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzFCRjtBRDRCRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzFCSjtBRDhCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDM0JGO0FEOEJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzNCRjtBRDhCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDM0JGO0FEOEJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzNCRjtBRDhCQTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDM0JGO0FEOEJBO0VBQ0UsZUFBQTtBQzNCRjtBRDhCQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDM0JGO0FEa0NBO0VBQ0UsY0FBQTtBQy9CRjtBRGtDQSx5QkFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ2hDRjtBRHFDQTtFQUNFLHlCQUFBO0FDbENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx5QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHlCQUFBO0FDbENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBLFlBQUE7QUFFQTtFQUNFLGlCQUFBO0FDbkNGO0FEc0NBO0VBQ0UsdUJBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxlQUFBO0FDbkNGO0FEc0NBO0VBQ0UsaUJBQUE7QUNuQ0Y7QURzQ0E7RUFDRSwwQ0FBQTtBQ25DRjtBQWxNQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFxTUo7QUFsTUE7RUFDSSxjQUFBO0FBcU1KO0FBbE1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFxTUo7QUFsTUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FBcU1KO0FBcE1JO0VBQ0Msc0JBQUE7QUFzTUw7QUFsTUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFxTUo7QUFsTUc7RUFDQyxnQkFBQTtBQXFNSjtBQWxNRztFQUNDLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBcU1KO0FBbE1HO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBcU1KO0FBbE1HO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFxTUo7QUFsTUc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQXFNSjtBQWxNRztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcU1KO0FBcE1JO0VBQ0MsY0FBQTtBQXNNTDtBQXBNSTtFQUNDLGNBQUE7QUFzTUw7QUFyTUs7RUFDQyxjQUFBO0FBdU1OO0FBcE1JO0VBQ0MsY0FBQTtBQXNNTDtBQXJNSztFQUNDLGNBQUE7QUF1TU47QUFwTUk7RUFDQyxjQUFBO0FBc01MO0FBck1LO0VBQ0MsY0FBQTtBQXVNTjtBQXBNSTtFQUNDLGNBQUE7QUFzTUw7QUFyTUs7RUFDQyxjQUFBO0FBdU1OO0FBbE1HO0VBQ0MsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBcU1KO0FBbE1BO0VBQ0ksa0JBQUE7QUFxTUo7QUFsTUE7Ozs7Q0FBQTtBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHFEQUFBO0FBb01KO0FBak1BO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBb01KO0FBak1BO0VBQ0k7SUFDSSxTQUFBO0lBQ0Esd0NBQUE7RUFvTU47RUFsTUU7SUFDSSxVQUFBO0lBQ0EsMENBQUE7RUFvTU47QUFDRjtBQWpNRztFQUNDO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VBbU1KO0FBQ0Y7QUFoTUc7RUFDQztJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQWtNSjtBQUNGO0FBL0xHO0VBQ0M7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUFpTUo7QUFDRjtBQTlMRztFQUNDO0lBQ0MsWUFBQTtFQWdNSDs7RUE5TEU7SUFDQyxhQUFBO0VBaU1IO0FBQ0Y7QUE5TEc7RUFDQztJQUNDLFlBQUE7SUFDQSxlQUFBO0VBZ01IOztFQTlMRTtJQUNDLFdBQUE7RUFpTUg7O0VBL0xFO0lBQ0MsZ0JBQUE7RUFrTUg7O0VBaE1FO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUFtTU47QUFDRjtBQWhNRztFQUNDO0lBQ0MsZ0JBQUE7RUFrTUg7QUFDRjtBQS9MRztFQUNDO0lBQ0MsYUFBQTtFQWlNSDtBQUNGO0FBOUxHO0VBQ0M7SUFDQyxnQkFBQTtFQWdNSDtBQUNGO0FBN0xHO0VBQ0M7SUFDQyxhQUFBO0VBK0xIO0FBQ0Y7QUE1TEc7RUFDQztJQUNDLGFBQUE7RUE4TEg7O0VBNUxFO0lBQ0Msa0JBQUE7RUErTEg7O0VBN0xFO0lBQ0MsMEJBQUE7RUFnTUg7O0VBOUxFO0lBQ0MsYUFBQTtFQWlNSDtBQUNGO0FBOUxHO0VBQ0M7SUFDQyxhQUFBO0VBZ01IO0FBQ0YiLCJmaWxlIjoiYm9vay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PSBGT05UUyAoTWFqb3IgVGhpcmQpID09PT09ICovXHJcbiRzbWFsbDogMC44cmVtO1xyXG4kbWVkaXVtOiAxcmVtO1xyXG4kbGFyZ2U6IDEuMjVyZW07XHJcbiRleHRyYS1sYXJnZTogMS41NjNyZW07XHJcbiRodWdlOiAxLjk1M3JlbTtcclxuJGV4dHJhLWh1Z2U6IDIuNDQxcmVtO1xyXG5cclxuLyogPT09PT0gUEFMRVRURSA9PT09PSAqL1xyXG4kY29sb3ItcGFsZXR0ZS0xLW1haW46ICNERTczNzM7XHJcbiRjb2xvci1wYWxldHRlLTEtc2Vjb25kOiAjQUJBQkZGO1xyXG4kY29sb3ItcHJpbWFyeS1saWdodDogI0VGRUZFRjtcclxuJGNvbG9yLXByaW1hcnktZGFyazogIzE5MTkxOTtcclxuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjMzMzMzMzO1xyXG4kY29sb3Itc2Nyb2xsYmFyLXRodW1iOiAjOEM4QzhDO1xyXG5cclxuLyogPT09PT0gV0VJR0hUID09PT09ICovXHJcblxyXG5cclxuLyogPT09PT0gVEVNUExBVEUgMSA9PT09PSAqL1xyXG5cclxuLmMtY2FyZC1jb21wb25lbnQge1xyXG4gIG1hcmdpbjogMy41cmVtIDEuNWVtIDAgMS41cmVtO1xyXG5cclxuICAudGl0bGUtY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6ICRleHRyYS1sYXJnZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmZpbHRlcnMtcGx1cy1jb25maWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5keW4tZmlsdGVycyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDQwcHggMCAwO1xyXG5cclxuICAgIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbmZpZ0J1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb21wb25lbnQge1xyXG4gIG1hcmdpbjogMy41cmVtIDEuNWVtIDAgMS41cmVtO1xyXG4gIG1heC1oZWlnaHQ6IDg4JTtcclxuXHJcbiAgLmNhcmQtY29udGVudCwgLnRpdGxlLWNvbXBvbmVudCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbWF0LXRhYi1ncm91cCBtYXQtdGFiLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGV4dHJhLWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGFsZXR0ZS0xLW1haW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIGhlaWdodDogMi4zcmVtO1xyXG4gICAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIG1hdC1zZWxlY3Qge1xyXG4gIG1heC13aWR0aDogMTBlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDVlbTtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgLy8gbWF4LWhlaWdodDogODAwcHg7XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjb2xvcjogIzhiOGI4YjtcclxufVxyXG5cclxuLmlkQ2VsbDpmaXJzdC1vZi10eXBlLCAuaWRIZWFkZXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaWRIZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlkQ2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW46IDAgMzRweDtcclxufVxyXG5cclxuLyogPT09PT0gUFJJT1JJVFkgPT09PT0gKi9cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xyXG59XHJcblxyXG4vLyBAVE9ETzogY2hhbmdlIGNvbG9yIHRvIHZhcmlhYmxlc1xyXG5cclxuLnByaW9yaXR5LW11eWFsdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkODQ4NTU7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1hbHRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk3MTcxO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbm9ybWFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjhlO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYmFqYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzZDY5ZDtcclxufVxyXG5cclxuLnByaW9yaXR5LW5pbmd1bmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7XHJcbn1cclxuXHJcbi5yZWQtZGF0ZSB7XHJcbiAgY29sb3I6ICNlYjQxNDE7XHJcbn1cclxuXHJcbi8qIE1BVCBUQUIgKi9cclxuXHJcbjo6bmctZGVlcCBtYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi90aGVtZS9zdGFmZml0LXN0eWxlLTEuc2Nzcyc7XG5cbi5ib29rLWNlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgIzgwODA4MDI2O1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4uYm9vay1pbWcge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYm9vay1zdGF0ZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogNiU7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uYm9vay1waG90byB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJvdHRvbTogLTM1cHg7XG4gICAgbGVmdDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogLTJweCA2cHggMTlweCAwcHggIzdmODE4ZTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB9XG4gICB9XG5cbi5ib29rLXRpdGxlIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB9XG4gICBcbiAgIC5ib29rLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgfVxuICAgXG4gICAuYm9vay1hdXRob3Ige1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgfVxuICAgXG4gICAuYm9vay1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIH1cblxuICAgLmJvb2stdm90ZXJzIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgfVxuXG4gICAuYm9vay1zdW0ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICB9XG4gICBcbiAgIC5ib29rLXNlZSB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmYjBiMGYwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgIGNvbG9yOiAjZmY2ZTcyO1xuICAgIH1cbiAgICAmLmJvb2stYmx1ZSB7XG4gICAgIGNvbG9yOiAjYTRlMGViO1xuICAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMjJjZGVjO1xuICAgICB9XG4gICAgfVxuICAgICYuYm9vay1waW5rIHtcbiAgICAgY29sb3I6ICNlZGI5ZDY7XG4gICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZjZkYmU7XG4gICAgIH1cbiAgICB9XG4gICAgJi5ib29rLXllbGxvdyB7XG4gICAgIGNvbG9yOiAjZmRjYTk1O1xuICAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmI5MTI0O1xuICAgICB9XG4gICAgfVxuICAgICYuYm9vay1wdXJwbGUge1xuICAgICBjb2xvcjogI2NiYjVlMjtcbiAgICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2E3NjRlYztcbiAgICAgfVxuICAgIH1cbiAgIH1cblxuICAgLmludHJvZHVjdGlvbntcbiAgICB3aWR0aDogOTAlO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgbWFyZ2luOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5jaXJjbGUtY29udGVudHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4gXG4vKiBcbiAgICAtLS0tLS0tLS0tLS0tLVxuICAgIERZTkFNSUMgQ0lSQ0xFXG4gICAgLS0tLS0tLS0tLS0tLS1cbiovXG4gXG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAwcHggc29saWQgI2MyYzJjMjtcbiAgICBib3JkZXItcmFkaXVzOjEyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OjIwMHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGNvbG9yOiNkZGQ7XG4gICAgZm9udC1zaXplOjI1cHg7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcbn1cbiBcbi5jaXJjbGU6YmVmb3JlIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6ODVweDtcbiAgICBoZWlnaHQ6ODVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b29sdGlwLWNvbG9yKTtcbiAgICBsZWZ0OjUwJTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3JkZXItcmFkaXVzOjQwJTtcbiAgICBhbmltYXRpb246ZmlsbCAzcyBlYXNlLWluLW91dDtcbiAgICB6LWluZGV4Oi0xO1xufVxuIFxuQGtleWZyYW1lcyBmaWxsIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdG9wOjMwcHg7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0b3A6LTUwcHg7XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDNweCkge1xuICAgIC5ib29rLWNlbGwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgfVxuICAgfVxuICAgXG4gICBAbWVkaWEgKG1heC13aWR0aDogNzY1cHgpIHtcbiAgICAuYm9vay1jZWxsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgLmJvb2stY2VsbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICB9XG4gICB9XG4gICBcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NThweCkge1xuICAgIC5ib29rLXBob3RvIHtcbiAgICAgd2lkdGg6IDE4MHB4O1xuICAgIH1cbiAgICAuYm9vay12b3RlcnMge1xuICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgLmJvb2stc2VlIHtcbiAgICAgd2lkdGg6IDEyMHB4O1xuICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC5ib29rLXBob3RvIHtcbiAgICAgd2lkdGg6IDVyZW07XG4gICAgfVxuICAgIC5tYWluLXdyYXBwZXIge1xuICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbiAgICAuaW50cm9kdWN0aW9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICB9XG4gICBcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC5yYXRpbmcgPiBsYWJlbDpiZWZvcmUge1xuICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgIC5jYXJkLXZvdGUge1xuICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODVweCkge1xuICAgIC5ib29rLXJhdGUgPiBsYWJlbCB7XG4gICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwNDVweCkge1xuICAgIC5ib29rcy1vZiB7XG4gICAgIGRpc3BsYXk6IG5vbmU7XG4gICB9XG4gICB9XG4gICBcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MjVweCkge1xuICAgIC5icm93c2UtY2F0ZWdvcnksIC5zZWFyY2gtYmFyIHtcbiAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cbiAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAuYm9vay1jYXJkcyB7XG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAuYm9vay10eXBlcyB7XG4gICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgfVxuICAgXG4gICBAbWVkaWEgKG1heC13aWR0aDogMzcycHgpICB7XG4gICAgLmNhcmQtY29udGVudCB7XG4gICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgfVxuXG4iXX0= */");

/***/ }),

/***/ "NrWR":
/*!********************************************************!*\
  !*** ./src/app/author/infrastructure/authorService.ts ***!
  \********************************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AbstractAuthorService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractAuthorService */ "umJ1");




let AuthorService = class AuthorService extends _AbstractAuthorService__WEBPACK_IMPORTED_MODULE_3__["AbstractAuthorService"] {
    constructor(http) {
        super();
        this.http = http;
        this.BASE_URL = 'http://192.168.43.68:8080/';
    }
    get(id) {
        return this.http
            .get(`${this.BASE_URL}author/${id}`);
    }
    update(author) {
        return this.http
            .put(`${this.BASE_URL}author/${author.id}`, author);
    }
    createAuthor(author) {
        return this.http
            .post(`${this.BASE_URL}author/create`, author);
    }
    search(params) {
        return this.http
            .get(`${this.BASE_URL}author/search`, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: this._clean(params) }) });
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
AuthorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'any',
    })
], AuthorService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "Vc0P":
/*!******************************************************!*\
  !*** ./src/app/tab1/books/application/updateBook.ts ***!
  \******************************************************/
/*! exports provided: updateBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBook", function() { return updateBook; });
function updateBook(book, service) {
    return service.update(book);
}


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "YBHC":
/*!*******************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/services/BookService.ts ***!
  \*******************************************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AbstractBookService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractBookService */ "nJ1o");




let BookService = class BookService extends _AbstractBookService__WEBPACK_IMPORTED_MODULE_3__["AbstractBookService"] {
    constructor(http) {
        super();
        this.http = http;
        this.BASE_URL = 'http://192.168.43.68:8080/';
        this.BASE_URL_EXTERNAL = 'https://www.googleapis.com/';
    }
    get(id) {
        return this.http
            .get(`${this.BASE_URL}Book/${id}`);
    }
    update(book) {
        return this.http
            .put(`${this.BASE_URL}book/${book.id}`, book);
    }
    createUser(book) {
        return this.http
            .post(`${this.BASE_URL}book/create`, book);
    }
    search(params) {
        return this.http
            .get(`${this.BASE_URL}Book/search`, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: this._clean(params) }) });
    }
    getExternalBook(isbn) {
        return this.http
            .get(`${this.BASE_URL_EXTERNAL}books/v1/volumes?q=isbn:${isbn}`, {});
    }
    getExtraExternalBook(url) {
        return this.http.get(url, {});
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
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BookService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'any',
    })
], BookService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");
/* harmony import */ var _tab1_books_infrastructure_ngComponents_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tab1/books/infrastructure/ngComponents/book-detail/book-detail.component */ "GXa0");
/* harmony import */ var _tab1_books_infrastructure_ngComponents_create_update_book_create_update_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tab1/books/infrastructure/ngComponents/create-update-book/create-update-book.component */ "smOq");
/* harmony import */ var _author_infrastructure_ng_components_create_author_create_author_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./author/infrastructure/ng-components/create-author/create-author.component */ "1Ee0");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _tab1_books_infrastructure_ngComponents_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_13__["BookDetailComponent"], _tab1_books_infrastructure_ngComponents_create_update_book_create_update_book_component__WEBPACK_IMPORTED_MODULE_14__["CreateUpdateBookComponent"], _author_infrastructure_ng_components_create_author_create_author_component__WEBPACK_IMPORTED_MODULE_15__["CreateAuthorComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
        providers: [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_11__["BarcodeScanner"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_12__["EmailComposer"], { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZTFi":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.section {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f2f2f2;\n}\n\n.frame {\n  width: 370px;\n  height: 720px;\n  position: relative;\n  border-radius: 40px;\n  border: 8px solid #2d2d2d;\n  overflow: hidden;\n  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.47);\n}\n\n.login {\n  width: 100%;\n  height: 100%;\n  border-radius: 30px;\n}\n\n.login--bg {\n  width: 100%;\n  height: 100%;\n}\n\n.login--bg img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.login__header {\n  position: absolute;\n  width: 100%;\n  height: 70px;\n  top: 0;\n  background: rgba(255, 255, 255, 0.84);\n  border-radius: 30px 30px 0 0;\n}\n\n.login__header--cont {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 20px 8px 20px;\n}\n\n.login__content {\n  width: 92%;\n  height: 460px;\n  background: rgba(4, 4, 4, 0.42);\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 8px 8px 13px 13px;\n  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.27);\n}\n\n.login--profile {\n  display: inline-flex;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: #828181;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  border: 4px solid #616161;\n  position: relative;\n  left: 50%;\n  color: #eaeaea;\n  top: -60px;\n  transform: translateX(-50%);\n}\n\n.login--title {\n  text-align: center;\n  font-size: 21px;\n  margin-top: -40px;\n  padding: 10px;\n  color: #ffffff;\n  position: relative;\n}\n\n.login--title:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  width: 30px;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.3);\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 4px;\n}\n\n.login--form {\n  padding: 20px;\n}\n\n.login--button {\n  width: 100%;\n  height: 40px;\n  border-radius: 30px;\n  margin-top: 20px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #f2f2f2;\n  outline: none;\n  border: none;\n  background: rgba(0, 128, 0, 0.9);\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.login--button:hover {\n  background: green;\n}\n\n.login__pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n}\n\n.login--icon {\n  opacity: 0.4;\n}\n\n.register--social {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\n.register--or {\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 10px;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.register--or:before {\n  content: \"\";\n  position: absolute;\n  width: 50px;\n  height: 1px;\n  background: #ffffff;\n  left: 90px;\n  opacity: 0.3;\n}\n\n.register--or:after {\n  content: \"\";\n  position: absolute;\n  width: 50px;\n  height: 1px;\n  background: #ffffff;\n  right: 90px;\n  opacity: 0.3;\n}\n\n.register--container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.register--item {\n  width: 50px;\n  height: 30px;\n  border-radius: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  color: #ffffff;\n  margin: 0 12px;\n  cursor: pointer;\n}\n\n.register--item:nth-child(1) {\n  background: #3B5998;\n}\n\n.register--item:nth-child(2) {\n  background: #00B2FF;\n}\n\n.input__content {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n\n.input--item {\n  margin-bottom: 30px;\n}\n\n.input--item:last-child {\n  margin-bottom: 0;\n}\n\n.input--error {\n  color: red;\n}\n\n.remember--check {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.remember--check--box {\n  background: white;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-right: 10px;\n  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);\n}\n\n.remember--check--box-in {\n  width: 16px;\n  height: 16px;\n  background: green;\n  border-radius: 50%;\n  opacity: 0;\n  transition: all ease-in-out 0.3s;\n}\n\n.remember--check--box-in.active {\n  opacity: 1;\n}\n\n.remember--check--txt {\n  font-size: 16px;\n  color: #f2f2f2;\n}\n\n.pagination--item {\n  width: 10px;\n  height: 10px;\n  background: #ffffff;\n  border-radius: 10px;\n  margin: 0 5px;\n  opacity: 0.2;\n}\n\n.pagination--item.active {\n  width: 20px;\n  opacity: 0.4;\n}\n\n.form__input {\n  width: 100%;\n  height: 40px;\n  border-radius: 30px;\n  border: 1px solid #c3c3c3;\n  background: none;\n  padding-left: 15px;\n  outline: none;\n  color: #ffffff;\n  font-size: 14px;\n}\n\n.form__input::placeholder {\n  color: #b4b4b4;\n  font-size: 14px;\n}\n\n.form__input.active {\n  border: 1px solid #ff2d25;\n}\n\n.form__input:focus {\n  border: 2px solid #c3c3c3;\n}\n\n.back-button {\n  font-size: 20px;\n}\n\n.logo {\n  font-size: 36px;\n  margin-bottom: 6px;\n}\n\n.user {\n  font-size: 18px;\n}\n\n.header-icon {\n  opacity: 1;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.header-icon:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNSOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0FBRE47O0FBR007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFEUjs7QUFNSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRDQUFBO0FBSk47O0FBT0k7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FBTE47O0FBUUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFOTjs7QUFRTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFVSTtFQUNFLGFBQUE7QUFSTjs7QUFXSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBVE47O0FBV007RUFDRSxpQkFBQTtBQVRSOztBQWFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVhOOztBQWNJO0VBQ0UsWUFBQTtBQVpOOztBQWtCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBZk47O0FBaUJJO0VBQ0UsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQWZOOztBQWlCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWZSOztBQWtCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCUjs7QUFtQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWpCTjs7QUFvQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBbEJOOztBQW9CTTtFQUNFLG1CQUFBO0FBbEJSOztBQXFCTTtFQUNFLG1CQUFBO0FBbkJSOztBQXlCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBdEJOOztBQXlCSTtFQUNFLG1CQUFBO0FBdkJOOztBQXdCTTtFQUNFLGdCQUFBO0FBdEJSOztBQTBCSTtFQUNFLFVBQUE7QUF4Qk47O0FBNEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBekJKOztBQTJCSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQXpCTjs7QUEyQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUF6QlI7O0FBMkJRO0VBQ0UsVUFBQTtBQXpCVjs7QUE4Qkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQTVCTjs7QUFpQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQTlCTjs7QUFnQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTlCUjs7QUFtQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBaENKOztBQWtDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBaENOOztBQW1DSTtFQUNFLHlCQUFBO0FBakNOOztBQW9DSTtFQUNFLHlCQUFBO0FBbENOOztBQXNDRTtFQUNFLGVBQUE7QUFuQ0o7O0FBc0NFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBbkNKOztBQXNDRTtFQUNFLGVBQUE7QUFuQ0o7O0FBc0NFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQW5DSjs7QUFxQ0k7RUFDRSxZQUFBO0FBbkNOIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5zZWN0aW9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICB9XG4gIFxuICAuZnJhbWV7XG4gICAgd2lkdGg6IDM3MHB4O1xuICAgIGhlaWdodDogNzIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgYm9yZGVyOiA4cHggc29saWQgIzJkMmQyZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNDcpO1xuICB9XG4gIFxuICAubG9naW57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIFxuICAgICYtLWJne1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIFxuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICZfX2hlYWRlcntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XG4gIFxuICAgICAgJi0tY29udHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDIwcHggOHB4IDIwcHg7XG4gIFxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgJl9fY29udGVudHtcbiAgICAgIHdpZHRoOiA5MiU7XG4gICAgICBoZWlnaHQ6IDQ2MHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg0LCA0LCA0LCAwLjQyKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMTNweCAxM3B4O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4gICAgfVxuICBcbiAgICAmLS1wcm9maWxle1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICM4MjgxODE7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBib3JkZXI6IDRweCBzb2xpZCAjNjE2MTYxO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgY29sb3I6ICNlYWVhZWE7XG4gICAgICB0b3A6IC02MHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cbiAgXG4gICAgJi0tdGl0bGV7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAmLS1mb3Jte1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gIFxuICAgICYtLWJ1dHRvbntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgY29sb3I6ICNmMmYyZjI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMjgsIDAsIDAuOSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICBcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTI4LCAwLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICZfX3BhZ2luYXRpb257XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gIFxuICAgICYtLWljb257XG4gICAgICBvcGFjaXR5OiAuNDtcbiAgICB9XG4gIFxuICB9XG4gIFxuICAucmVnaXN0ZXJ7XG4gICAgJi0tc29jaWFse1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAmLS1vcntcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgXG4gICAgICAmOmJlZm9yZXtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGxlZnQ6IDkwcHg7XG4gICAgICAgIG9wYWNpdHk6IC4zO1xuICAgICAgfVxuICBcbiAgICAgICY6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICByaWdodDogOTBweDtcbiAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgICB9XG4gICAgfVxuICAgICYtLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICBcbiAgICAmLS1pdGVte1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIFxuICAgICAgJjpudGgtY2hpbGQoMSl7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzQjU5OTg7XG4gICAgICB9XG4gIFxuICAgICAgJjpudGgtY2hpbGQoMil7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMEIyRkY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuaW5wdXR7XG4gICAgJl9fY29udGVudHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIFxuICAgICYtLWl0ZW17XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtLWVycm9ye1xuICAgICAgY29sb3I6cmVkO1xuICAgIH1cbiAgfVxuICBcbiAgLnJlbWVtYmVyLS1jaGVja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgICAmLS1ib3h7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggMXB4IHJnYmEoMCwwLDAsLjMpO1xuICBcbiAgICAgICYtaW57XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTI4LCAwLCAxKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xuICBcbiAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgJi0tdHh0e1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICNmMmYyZjI7XG4gICAgfVxuICB9XG4gIFxuICAucGFnaW5hdGlvbntcbiAgICAmLS1pdGVte1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICBvcGFjaXR5OiAuMjtcbiAgXG4gICAgICAmLmFjdGl2ZXtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmZvcm1fX2lucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIFxuICAgICY6OnBsYWNlaG9sZGVye1xuICAgICAgY29sb3I6ICNiNGI0YjQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICBcbiAgICAmLmFjdGl2ZXtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjJkMjU7XG4gICAgfVxuICBcbiAgICAmOmZvY3Vze1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2MzYzNjMztcbiAgICB9XG4gIH1cbiAgXG4gIC5iYWNrLWJ1dHRvbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgXG4gIC5sb2dve1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbiAgXG4gIC51c2Vye1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICBcbiAgLmhlYWRlci1pY29ue1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gIFxuICAgICY6aG92ZXJ7XG4gICAgICBvcGFjaXR5OiAuODtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "ZzhL":
/*!******************************************************!*\
  !*** ./src/app/tab1/books/application/createBook.ts ***!
  \******************************************************/
/*! exports provided: createBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBook", function() { return createBook; });
function createBook(book, service) {
    return service.createUser(book);
}


/***/ }),

/***/ "cBJx":
/*!*************************************************************!*\
  !*** ./src/app/user/infrastructure/services/UserService.ts ***!
  \*************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _AbstractUserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractUserService */ "zYRf");




let UserService = class UserService extends _AbstractUserService__WEBPACK_IMPORTED_MODULE_3__["AbstractUserService"] {
    constructor(http) {
        super();
        this.http = http;
        this.BASE_URL = 'http://192.168.43.68:8080/';
    }
    get(id) {
        return this.http
            .get(`${this.BASE_URL}user/${id}`);
    }
    update(user) {
        return this.http
            .put(`${this.BASE_URL}user/${user.id}`, user);
    }
    createUser(user) {
        return this.http
            .post(`${this.BASE_URL}user/create`, user);
    }
    search(params) {
        return this.http
            .get(`${this.BASE_URL}user/search`, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: this._clean(params) }) });
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
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'any',
    })
], UserService);



/***/ }),

/***/ "dLMD":
/*!************************************************!*\
  !*** ./src/app/user/application/searchUser.ts ***!
  \************************************************/
/*! exports provided: searchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchUser", function() { return searchUser; });
function searchUser(query, service) {
    return service.search(query);
}


/***/ }),

/***/ "fY2p":
/*!*************************************************************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/ngComponents/create-update-book/create-update-book.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  height: 100%;\n  margin: 1rem;\n}\n.content__form {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem;\n}\n.content__input {\n  width: 90%;\n  height: 40px;\n  border-radius: 30px;\n  border: 1px solid #c3c3c3;\n  background: none;\n  padding-left: 15px;\n  outline: none;\n  font-size: 14px;\n}\n.content__input-especial {\n  width: 85%;\n}\n.content__button {\n  width: 100%;\n  height: 40px;\n  border-radius: 30px;\n  margin-top: 20px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #f2f2f2;\n  outline: none;\n  border: none;\n  background: rgba(0, 128, 0, 0.9);\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.content__button:hover {\n  background: green;\n}\n.content__add {\n  width: 100%;\n  padding-left: 5%;\n  gap: 1rem;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NyZWF0ZS11cGRhdGUtYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ1I7QUFFSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRVE7RUFDRSxVQUFBO0FBQVY7QUFJSTtFQUNRLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBRlo7QUFJWTtFQUNFLGlCQUFBO0FBRmQ7QUFNRztFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSiIsImZpbGUiOiJjcmVhdGUtdXBkYXRlLWJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAxcmVtO1xuXG4gICAgJl9fZm9ybXtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAmX19pbnB1dHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAmLWVzcGVjaWFse1xuICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19idXR0b257XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTI4LCAwLCAwLjkpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgXG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyOCwgMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAmX19hZGR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBnYXA6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgfVxufSJdfQ== */");

/***/ }),

/***/ "fp+v":
/*!******************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/services/bookMapper.ts ***!
  \******************************************************************/
/*! exports provided: bookMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookMapper", function() { return bookMapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_author_application_createAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/author/application/createAuthor */ "23M1");
/* harmony import */ var src_app_author_application_searchAuthor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/author/application/searchAuthor */ "kIV6");
/* harmony import */ var src_app_author_infrastructure_authorService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/author/infrastructure/authorService */ "NrWR");





let bookMapper = class bookMapper {
    constructor(_authorService) {
        this._authorService = _authorService;
    }
    mapTo(params) {
        var _a, _b, _c, _d, _e, _f;
        return {
            isbn: (_b = (_a = params.volumeInfo) === null || _a === void 0 ? void 0 : _a.industryIdentifiers[1]) === null || _b === void 0 ? void 0 : _b.identifier,
            area: '',
            country: (_c = params === null || params === void 0 ? void 0 : params.saleInfo) === null || _c === void 0 ? void 0 : _c.country,
            description: (_d = params.volumeInfo) === null || _d === void 0 ? void 0 : _d.description,
            edition: '',
            idAuthor: '',
            idEditorial: '',
            idLocation: '',
            imageLink: '',
            title: (_e = params.volumeInfo) === null || _e === void 0 ? void 0 : _e.title,
            type: (_f = params.volumeInfo) === null || _f === void 0 ? void 0 : _f.categories[0],
            author: this.addAuthor(params.volumeInfo)
        };
    }
    addAuthor(author) {
        if (!author.authors)
            return;
        const a = author.authors[0].split(' ');
        const n = a[0];
        const sr = a[1];
        const au = {
            name: n,
            surname: sr
        };
        Object(src_app_author_application_searchAuthor__WEBPACK_IMPORTED_MODULE_3__["searchAuthor"])(Object.assign({}, au), this._authorService).subscribe(res => {
            if (res.content.length === 0) {
                Object(src_app_author_application_createAuthor__WEBPACK_IMPORTED_MODULE_2__["createAuthor"])(au, this._authorService).subscribe(res => {
                    return res;
                });
            }
            if (res.content.length !== 0) {
                return res.content[0];
            }
        });
    }
};
bookMapper.ctorParameters = () => [
    { type: src_app_author_infrastructure_authorService__WEBPACK_IMPORTED_MODULE_4__["AuthorService"] }
];
bookMapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'any'
    })
], bookMapper);



/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login\">\n    <div class=\"login--bg\">\n        <img src=\"../../assets/img/login.jpeg\" alt=\"\">\n    </div>\n\n    <div class=\"login__content\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-person-circle login--profile\" viewBox=\"0 0 16 16\">\n                <path d=\"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z\"/>\n                <path fill-rule=\"evenodd\" d=\"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z\"/>\n          </svg>\n        <h3 class=\"login--title\">LOGİN</h3>\n        <form [formGroup]=\"form\" action=\"\" class=\"login--form\">\n\n        <div class=\"input--item\">\n            <div class=\"js-input__content input__content has-error\">\n                <input type=\"text\" class=\"form__input js-input js-input-error\" formControlName=\"email\" placeholder=\"User email\">\n            </div>\n        </div>\n\n        <div class=\"input--item\">\n            <div class=\"js-input__content input__content has-error\">\n                <input type=\"password\" class=\"form__input js-input js-input-error\" formControlName=\"password\" placeholder=\"Password\">\n            </div>\n            <p class=\"input--error\" *ngIf=\"notLogin\">User email or password is not correct</p>\n        </div>\n        <button class=\"login--button\" (click)=\"log()\">LOGİN</button>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "kCf5":
/*!************************************************************************************************!*\
  !*** ./src/app/author/infrastructure/ng-components/create-author/create-author.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYXV0aG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "kIV6":
/*!****************************************************!*\
  !*** ./src/app/author/application/searchAuthor.ts ***!
  \****************************************************/
/*! exports provided: searchAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAuthor", function() { return searchAuthor; });
function searchAuthor(query, service) {
    return service.search(query);
}


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "nJ1o":
/*!***************************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/services/AbstractBookService.ts ***!
  \***************************************************************************/
/*! exports provided: AbstractBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractBookService", function() { return AbstractBookService; });
class AbstractBookService {
}


/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");





































let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__["MatTreeModule"],
        ],
        exports: [
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_31__["MatStepperModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__["MatTreeModule"],
        ],
    })
], AngularMaterialModule);



/***/ }),

/***/ "smOq":
/*!***********************************************************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/ngComponents/create-update-book/create-update-book.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CreateUpdateBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUpdateBookComponent", function() { return CreateUpdateBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_update_book_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-update-book.component.html */ "/j88");
/* harmony import */ var _create_update_book_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-update-book.component.scss */ "fY2p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _application_updateBook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../application/updateBook */ "Vc0P");
/* harmony import */ var _services_bookMapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/bookMapper */ "fp+v");
/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/BookService */ "YBHC");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _application_createBook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../application/createBook */ "ZzhL");
/* harmony import */ var src_app_author_infrastructure_authorService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/author/infrastructure/authorService */ "NrWR");













let CreateUpdateBookComponent = class CreateUpdateBookComponent {
    constructor(_route, scanner, _router, _bookMapper, _fb, _service, _authorService) {
        this._route = _route;
        this.scanner = scanner;
        this._router = _router;
        this._bookMapper = _bookMapper;
        this._fb = _fb;
        this._service = _service;
        this._authorService = _authorService;
        this.count = 0;
    }
    ngOnInit() {
        var _a, _b;
        this._resolved = this._route.snapshot.data['response'];
        if (((_a = this._resolved.data.book) === null || _a === void 0 ? void 0 : _a.content.length) === 1)
            this.book = this._resolved.data.book.content[0];
        if (((_b = this._resolved.data.bookIsbn) === null || _b === void 0 ? void 0 : _b.content.length) === 1)
            this.book = this._resolved.data.bookIsbn.content[0];
        if (this._resolved.data.externalBook.items && !this.book)
            this.book = this._bookMapper.mapTo(this._resolved.data.externalBook.items[0]);
        this.initForm();
    }
    ionViewDidEnter() {
        var _a, _b;
        this.count++;
        if (this.count > 1) {
            this.book = null;
            this._resolved = this._route.snapshot.data['response'];
            if (((_a = this._resolved.data.book) === null || _a === void 0 ? void 0 : _a.content.length) === 1)
                this.book = this._resolved.data.book.content[0];
            if (((_b = this._resolved.data.bookIsbn) === null || _b === void 0 ? void 0 : _b.content.length) === 1)
                this.book = this._resolved.data.bookIsbn.content[0];
            if (this._resolved.data.externalBook.items && !this.book)
                this.book = this._bookMapper.mapTo(this._resolved.data.externalBook.items[0]);
            this.initForm();
        }
    }
    initForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
        const defaultLocation = ((_a = this.book) === null || _a === void 0 ? void 0 : _a.location) ? `${(_c = (_b = this.book) === null || _b === void 0 ? void 0 : _b.location) === null || _c === void 0 ? void 0 : _c.building} ${(_e = (_d = this.book) === null || _d === void 0 ? void 0 : _d.location) === null || _e === void 0 ? void 0 : _e.floor} floor shelving ${(_g = (_f = this.book) === null || _f === void 0 ? void 0 : _f.location) === null || _g === void 0 ? void 0 : _g.shelving}, ${(_j = (_h = this.book) === null || _h === void 0 ? void 0 : _h.location) === null || _j === void 0 ? void 0 : _j.city}` : '';
        const defaultAuthor = ((_k = this.book) === null || _k === void 0 ? void 0 : _k.author) ? `${(_m = (_l = this.book) === null || _l === void 0 ? void 0 : _l.author) === null || _m === void 0 ? void 0 : _m.name} ${(_p = (_o = this.book) === null || _o === void 0 ? void 0 : _o.author) === null || _p === void 0 ? void 0 : _p.surname}` : '';
        this.form = this._fb.group({
            isbn: [(_r = (_q = this.book) === null || _q === void 0 ? void 0 : _q.isbn) !== null && _r !== void 0 ? _r : ''],
            title: [(_t = (_s = this.book) === null || _s === void 0 ? void 0 : _s.title) !== null && _t !== void 0 ? _t : ''],
            country: [(_v = (_u = this.book) === null || _u === void 0 ? void 0 : _u.country) !== null && _v !== void 0 ? _v : ''],
            description: [(_x = (_w = this.book) === null || _w === void 0 ? void 0 : _w.description) !== null && _x !== void 0 ? _x : ''],
            editorial: [(_0 = (_z = (_y = this.book) === null || _y === void 0 ? void 0 : _y.editorial) === null || _z === void 0 ? void 0 : _z.name) !== null && _0 !== void 0 ? _0 : ''],
            location: [defaultLocation],
            author: [defaultAuthor],
            type: [(_2 = (_1 = this.book) === null || _1 === void 0 ? void 0 : _1.type) !== null && _2 !== void 0 ? _2 : ''],
            imageLink: [(_4 = (_3 = this.book) === null || _3 === void 0 ? void 0 : _3.imageLink) !== null && _4 !== void 0 ? _4 : '']
        });
    }
    onSubmit() {
        var _a, _b, _c, _d, _e;
        let updatedBook;
        const idEditorial = (_a = this._resolved.data.editorial.content.find(e => e.name === this.form.get('editorial').value)) === null || _a === void 0 ? void 0 : _a.id;
        const idAuthor = (_b = this._resolved.data.author.content.find(e => `${e.name} ${e.surname}` === this.form.get('author').value)) === null || _b === void 0 ? void 0 : _b.id;
        const idLocation = (_c = this._resolved.data.location.content.find(e => `${e.building} ${e.floor} floor shelving ${e.shelving}, ${e.city}` === this.form.get('location').value)) === null || _c === void 0 ? void 0 : _c.id;
        updatedBook = this.form.value;
        updatedBook.idEditorial = idEditorial;
        updatedBook.idAuthor = idAuthor;
        updatedBook.idLocation = idLocation;
        if ((_d = this.book) === null || _d === void 0 ? void 0 : _d.id) {
            updatedBook.id = this.book.id;
            Object(_application_updateBook__WEBPACK_IMPORTED_MODULE_7__["updateBook"])(updatedBook, this._service).subscribe(res => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'Changes where saved',
                    timer: 1500,
                    confirmButtonColor: '#db5e5e'
                });
                this._router.navigate([`../tab1/`], { relativeTo: this._route, replaceUrl: true });
            });
        }
        if (!((_e = this.book) === null || _e === void 0 ? void 0 : _e.id)) {
            Object(_application_createBook__WEBPACK_IMPORTED_MODULE_11__["createBook"])(updatedBook, this._service).subscribe(res => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                    icon: 'success',
                    title: 'success',
                    text: 'Book where created',
                    timer: 1500,
                    confirmButtonColor: '#db5e5e'
                });
                this._router.navigate([`../tab1/`], { relativeTo: this._route, replaceUrl: true });
            });
        }
    }
};
CreateUpdateBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_bookMapper__WEBPACK_IMPORTED_MODULE_8__["bookMapper"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_BookService__WEBPACK_IMPORTED_MODULE_9__["BookService"] },
    { type: src_app_author_infrastructure_authorService__WEBPACK_IMPORTED_MODULE_12__["AuthorService"] }
];
CreateUpdateBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-update-book',
        template: _raw_loader_create_update_book_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_update_book_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateUpdateBookComponent);



/***/ }),

/***/ "umJ1":
/*!****************************************************************!*\
  !*** ./src/app/author/infrastructure/AbstractAuthorService.ts ***!
  \****************************************************************/
/*! exports provided: AbstractAuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractAuthorService", function() { return AbstractAuthorService; });
class AbstractAuthorService {
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");




const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then(m => m.TabsPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "ZTFi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_application_searchUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/application/searchUser */ "dLMD");
/* harmony import */ var _user_infrastructure_services_UserService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/infrastructure/services/UserService */ "cBJx");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let LoginComponent = class LoginComponent {
    constructor(router, _userService, fb, _route, _navCtrl) {
        this.router = router;
        this._userService = _userService;
        this.fb = fb;
        this._route = _route;
        this._navCtrl = _navCtrl;
        this.notLogin = false;
    }
    ngOnInit() {
        this.formInit();
    }
    formInit() {
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    log() {
        if (this.form.valid) {
            Object(_user_application_searchUser__WEBPACK_IMPORTED_MODULE_6__["searchUser"])(this.form.value, this._userService).subscribe(r => {
                if (r.content.length > 0)
                    this.router.navigate([`./tabs/tabs/tab1`], { relativeTo: this._route });
                if (r.content.length === 0)
                    this.notLogin = true;
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _user_infrastructure_services_UserService__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zYRf":
/*!*********************************************************************!*\
  !*** ./src/app/user/infrastructure/services/AbstractUserService.ts ***!
  \*********************************************************************/
/*! exports provided: AbstractUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractUserService", function() { return AbstractUserService; });
class AbstractUserService {
}


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map