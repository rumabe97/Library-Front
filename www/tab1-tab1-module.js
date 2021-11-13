(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "52Cw":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamic-filters/auto-complete/auto-complete.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\">\n  <mat-form-field class=\"{{filterField}}\" appearance=\"{{appearance}}\">\n      <mat-label>{{matLabel}}</mat-label>\n      <input type=\"text\"\n             placeholder=\"{{placeholder}}\"\n             aria-label=\"label\"\n             matInput\n             formControlName=\"input\"\n             [matAutocomplete]=\"auto\" (keyup)=\"emptySelection($event)\">\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"setValue($event.option.value)\">\n          <mat-option *ngFor=\"let option of filteredOptions | async\"\n                      [value]=\"option\" [matTooltip]=\"option\" matTooltipPosition=\"after\">\n              {{option}}\n          </mat-option>\n      </mat-autocomplete>\n      <mat-icon *ngIf=\"icon\" matSuffix matTooltip=\"{{icon.matToolTip}}\" style=\"{{icon.style}}\" (click)=\"iconClicked.emit()\">{{icon.icon}}</mat-icon>\n      <button mat-icon-button matSuffix *ngIf=\"form.controls['input'].value && !icon\" (click)=\"clear()\" matTooltip=\"clear\">\n          <mat-icon>clear</mat-icon>\n      </button>\n  </mat-form-field>\n</form>");

/***/ }),

/***/ "7fs7":
/*!*******************************************************************************!*\
  !*** ./src/app/tab1/books/infrastructure/resolver/allBooksResolverService.ts ***!
  \*******************************************************************************/
/*! exports provided: allBooksResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allBooksResolverService", function() { return allBooksResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _application_searchBook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../application/searchBook */ "gSq0");
/* harmony import */ var _services_BookService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/BookService */ "YBHC");






let allBooksResolverService = class allBooksResolverService {
    constructor(_service) {
        this._service = _service;
    }
    resolve(route, state) {
        return Object(_application_searchBook__WEBPACK_IMPORTED_MODULE_4__["searchBook"])({ page: 0, size: 10 }, this._service)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => ({
            data: res,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
                data: null,
                error: err,
                message: 'Error on book  resolver, data couldn\'t be fetched'
            });
        }));
    }
};
allBooksResolverService.ctorParameters = () => [
    { type: _services_BookService__WEBPACK_IMPORTED_MODULE_5__["BookService"] }
];
allBooksResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], allBooksResolverService);



/***/ }),

/***/ "8Fa1":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamic-filters/autoselect/autoselect.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field [class]=\"config.class\" [appearance]=\"config.appearance\">\n  <mat-label>{{config.label}}</mat-label>\n  <input #input type=\"text\"\n         [placeholder]=\"config.placeholder\" aria-label=\"label\" matInput\n         [formControl]=\"form\"\n         [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedItem($event)\">\n      <mat-option *ngFor=\"let option of config.options\" [value]=\"option\"\n                  [matTooltip]=\"option[shownField]\" matTooltipPosition=\"after\">\n          {{option[shownField]}}\n      </mat-option>\n  </mat-autocomplete>\n  <button mat-icon-button matSuffix *ngIf=\"form.value && !searching\" (click)=\"clearAutoselect()\" matTooltip=\"clear\">\n      <mat-icon>clear</mat-icon>\n  </button>\n  <mat-spinner diameter=\"20\" matSuffix *ngIf=\"searching\"></mat-spinner>\n</mat-form-field>\n");

/***/ }),

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Books\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<div class=\"book-cell\" *ngFor=\"let book of books\">\n  <div class=\"book-img\">\n   <img src={{book.imageLink}} alt=\"\" class=\"book-photo\">\n   <div class=\"book-see\" (click)=\"generateBarCode(book)\">Create QR</div>\n  </div>\n  <div class=\"book-content\">\n   <div class=\"book-title\">{{book.title}}</div>\n   <div class=\"book-author\"> by {{book.author.name}} {{book.author.surname}}</div>\n   <div class=\"book-sum\">{{book.description}} </div>\n   <div class=\"book-editorial\">Editorial: {{book.editorial.name}}</div>\n   <div class=\"book-sum\"><ion-icon name=\"location-outline\"></ion-icon>\n    {{book.location.building}} {{book.location.floor}} floor shelving {{book.location.shelving}}, {{book.location.city}} </div>\n   <!--<div class=\"book-see\" (click)=\"goToBookDetail(book)\">See The Book</div>-->\n  </div>\n </div>\n</ion-content>");

/***/ }),

/***/ "G3Pg":
/*!****************************************************************************!*\
  !*** ./src/app/dynamic-filters/auto-complete/auto-complete.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===== FONTS (Major Third) ===== */\n/* ===== PALETTE ===== */\n/* ===== WEIGHT ===== */\n/* ===== TEMPLATE 1 ===== */\n.c-card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n}\n.c-card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.c-card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.filters-plus-config {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.filters-plus-config .dyn-filters {\n  flex-grow: 1;\n  overflow-x: auto;\n  margin: 0 40px 0 0;\n}\n.filters-plus-config .dyn-filters ::ng-deep mat-form-field {\n  width: 150px;\n}\n.filters-plus-config .configButton {\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n  max-height: 88%;\n}\n.card-component .card-content, .card-component .title-component {\n  margin: 0;\n}\n.card-component ::ng-deep mat-tab-group mat-tab-header {\n  margin-bottom: 0.5rem !important;\n}\n.card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.card-component .title-component button {\n  background-color: #DE7373;\n  border-radius: 2rem;\n  height: 2.3rem;\n  color: #efefef;\n}\n::ng-deep .mat-select-value {\n  color: #191919;\n}\n.filter {\n  align-items: center;\n  margin-left: 0.5em;\n  margin-bottom: 20px;\n}\n.mat-form-field {\n  width: 100%;\n}\nmat-form-field mat-select {\n  max-width: 10em;\n  margin-right: 5em;\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n.table-responsive .mat-table {\n  width: 100%;\n  max-width: 100%;\n  display: table;\n}\n.scrollbar-style::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.scrollbar-style::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.table-responsive::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.mat-header-row {\n  background-color: black;\n  border-radius: 0.5rem;\n  color: #8b8b8b;\n}\n.idCell:first-of-type, .idHeader:first-of-type {\n  padding-left: 0;\n}\n.idHeader {\n  justify-content: center;\n  color: white;\n}\n.idCell {\n  text-align: center;\n  justify-content: center;\n  word-break: break-all;\n  margin-right: 10px;\n}\nmat-card-content {\n  margin: 0 34px;\n}\n/* ===== PRIORITY ===== */\n.priority {\n  color: #ffffff;\n  padding: 5px 10px;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  font-weight: 500;\n  text-transform: capitalize;\n  background-color: #c2c2c2;\n}\n.priority-muyalta {\n  background-color: #d84855;\n}\n.priority-alta {\n  background-color: #e97171;\n}\n.priority-normal {\n  background-color: #ffcb8e;\n}\n.priority-baja {\n  background-color: #a3d69d;\n}\n.priority-ninguna {\n  background-color: #c2c2c2;\n}\n.red-date {\n  color: #eb4141;\n}\n/* MAT TAB */\n::ng-deep mat-tab-group {\n  margin-left: 20px;\n}\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: black;\n}\n::ng-deep .mat-tab-label .mat-tab-label-content {\n  font-size: 13px;\n}\n::ng-deep .mat-tab-label-content span {\n  margin-right: 5px;\n}\n::ng-deep .mat-tab-header {\n  border-bottom: 0 solid rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3N0YWZmaXQtc3R5bGUtMS5zY3NzIiwiLi4vLi4vLi4vLi4vYXV0by1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBQTtBQVFBLHdCQUFBO0FBUUEsdUJBQUE7QUFHQSwyQkFBQTtBQUVBO0VBQ0UsNkJBQUE7QUNoQkY7QURrQkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ2hCSjtBRGtCSTtFQUNFLG1CQTNCUTtFQTRCUixnQkFBQTtFQUNBLGNBQUE7QUNoQk47QURzQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNuQkY7QURxQkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHFCSTtFQUNFLFlBQUE7QUNuQk47QURzQkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNwQko7QUR3QkE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUNyQkY7QUR1QkU7RUFDRSxTQUFBO0FDckJKO0FEd0JFO0VBQ0UsZ0NBQUE7QUN0Qko7QUR5QkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ3ZCSjtBRHlCSTtFQUNFLG1CQTNFUTtFQTRFUixnQkFBQTtFQUNBLGNBQUE7QUN2Qk47QUQwQkk7RUFDRSx5QkE1RWlCO0VBNkVqQixtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDeEJOO0FENkJBO0VBQ0UsY0FsRm1CO0FDd0RyQjtBRDZCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQzFCRjtBRDZCQTtFQUNFLFdBQUE7QUMxQkY7QUQ2QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUMxQkY7QUQ2QkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDMUJGO0FENEJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDMUJKO0FEOEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUMzQkY7QUQ4QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDM0JGO0FEOEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUMzQkY7QUQ4QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDM0JGO0FEOEJBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUMzQkY7QUQ4QkE7RUFDRSxlQUFBO0FDM0JGO0FEOEJBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUMzQkY7QURrQ0E7RUFDRSxjQUFBO0FDL0JGO0FEa0NBLHlCQUFBO0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDaENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx5QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHlCQUFBO0FDbENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx5QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLGNBQUE7QUNsQ0Y7QURxQ0EsWUFBQTtBQUVBO0VBQ0UsaUJBQUE7QUNuQ0Y7QURzQ0E7RUFDRSx1QkFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxpQkFBQTtBQ25DRjtBRHNDQTtFQUNFLDBDQUFBO0FDbkNGIiwiZmlsZSI6ImF1dG8tY29tcGxldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PSBGT05UUyAoTWFqb3IgVGhpcmQpID09PT09ICovXHJcbiRzbWFsbDogMC44cmVtO1xyXG4kbWVkaXVtOiAxcmVtO1xyXG4kbGFyZ2U6IDEuMjVyZW07XHJcbiRleHRyYS1sYXJnZTogMS41NjNyZW07XHJcbiRodWdlOiAxLjk1M3JlbTtcclxuJGV4dHJhLWh1Z2U6IDIuNDQxcmVtO1xyXG5cclxuLyogPT09PT0gUEFMRVRURSA9PT09PSAqL1xyXG4kY29sb3ItcGFsZXR0ZS0xLW1haW46ICNERTczNzM7XHJcbiRjb2xvci1wYWxldHRlLTEtc2Vjb25kOiAjQUJBQkZGO1xyXG4kY29sb3ItcHJpbWFyeS1saWdodDogI0VGRUZFRjtcclxuJGNvbG9yLXByaW1hcnktZGFyazogIzE5MTkxOTtcclxuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjMzMzMzMzO1xyXG4kY29sb3Itc2Nyb2xsYmFyLXRodW1iOiAjOEM4QzhDO1xyXG5cclxuLyogPT09PT0gV0VJR0hUID09PT09ICovXHJcblxyXG5cclxuLyogPT09PT0gVEVNUExBVEUgMSA9PT09PSAqL1xyXG5cclxuLmMtY2FyZC1jb21wb25lbnQge1xyXG4gIG1hcmdpbjogMy41cmVtIDEuNWVtIDAgMS41cmVtO1xyXG5cclxuICAudGl0bGUtY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6ICRleHRyYS1sYXJnZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmZpbHRlcnMtcGx1cy1jb25maWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5keW4tZmlsdGVycyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDQwcHggMCAwO1xyXG5cclxuICAgIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbmZpZ0J1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb21wb25lbnQge1xyXG4gIG1hcmdpbjogMy41cmVtIDEuNWVtIDAgMS41cmVtO1xyXG4gIG1heC1oZWlnaHQ6IDg4JTtcclxuXHJcbiAgLmNhcmQtY29udGVudCwgLnRpdGxlLWNvbXBvbmVudCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbWF0LXRhYi1ncm91cCBtYXQtdGFiLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGV4dHJhLWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGFsZXR0ZS0xLW1haW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIGhlaWdodDogMi4zcmVtO1xyXG4gICAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIG1hdC1zZWxlY3Qge1xyXG4gIG1heC13aWR0aDogMTBlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDVlbTtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgLy8gbWF4LWhlaWdodDogODAwcHg7XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjb2xvcjogIzhiOGI4YjtcclxufVxyXG5cclxuLmlkQ2VsbDpmaXJzdC1vZi10eXBlLCAuaWRIZWFkZXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaWRIZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlkQ2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW46IDAgMzRweDtcclxufVxyXG5cclxuLyogPT09PT0gUFJJT1JJVFkgPT09PT0gKi9cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xyXG59XHJcblxyXG4vLyBAVE9ETzogY2hhbmdlIGNvbG9yIHRvIHZhcmlhYmxlc1xyXG5cclxuLnByaW9yaXR5LW11eWFsdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkODQ4NTU7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1hbHRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk3MTcxO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbm9ybWFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjhlO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYmFqYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzZDY5ZDtcclxufVxyXG5cclxuLnByaW9yaXR5LW5pbmd1bmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7XHJcbn1cclxuXHJcbi5yZWQtZGF0ZSB7XHJcbiAgY29sb3I6ICNlYjQxNDE7XHJcbn1cclxuXHJcbi8qIE1BVCBUQUIgKi9cclxuXHJcbjo6bmctZGVlcCBtYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG4iLCIvKiA9PT09PSBGT05UUyAoTWFqb3IgVGhpcmQpID09PT09ICovXG4vKiA9PT09PSBQQUxFVFRFID09PT09ICovXG4vKiA9PT09PSBXRUlHSFQgPT09PT0gKi9cbi8qID09PT09IFRFTVBMQVRFIDEgPT09PT0gKi9cbi5jLWNhcmQtY29tcG9uZW50IHtcbiAgbWFyZ2luOiAzLjVyZW0gMS41ZW0gMCAxLjVyZW07XG59XG4uYy1jYXJkLWNvbXBvbmVudCAudGl0bGUtY29tcG9uZW50IHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jLWNhcmQtY29tcG9uZW50IC50aXRsZS1jb21wb25lbnQgaDIge1xuICBmb250LXNpemU6IDEuNTYzcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDAuNXJlbTtcbn1cblxuLmZpbHRlcnMtcGx1cy1jb25maWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmZpbHRlcnMtcGx1cy1jb25maWcgLmR5bi1maWx0ZXJzIHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW46IDAgNDBweCAwIDA7XG59XG4uZmlsdGVycy1wbHVzLWNvbmZpZyAuZHluLWZpbHRlcnMgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmZpbHRlcnMtcGx1cy1jb25maWcgLmNvbmZpZ0J1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uY2FyZC1jb21wb25lbnQge1xuICBtYXJnaW46IDMuNXJlbSAxLjVlbSAwIDEuNXJlbTtcbiAgbWF4LWhlaWdodDogODglO1xufVxuLmNhcmQtY29tcG9uZW50IC5jYXJkLWNvbnRlbnQsIC5jYXJkLWNvbXBvbmVudCAudGl0bGUtY29tcG9uZW50IHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtY29tcG9uZW50IDo6bmctZGVlcCBtYXQtdGFiLWdyb3VwIG1hdC10YWItaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1jb21wb25lbnQgLnRpdGxlLWNvbXBvbmVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2FyZC1jb21wb25lbnQgLnRpdGxlLWNvbXBvbmVudCBoMiB7XG4gIGZvbnQtc2l6ZTogMS41NjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMC41cmVtO1xufVxuLmNhcmQtY29tcG9uZW50IC50aXRsZS1jb21wb25lbnQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RFNzM3MztcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgaGVpZ2h0OiAyLjNyZW07XG4gIGNvbG9yOiAjZWZlZmVmO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogIzE5MTkxOTtcbn1cblxuLmZpbHRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIG1hdC1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwZW07XG4gIG1hcmdpbi1yaWdodDogNWVtO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi50YWJsZS1yZXNwb25zaXZlIC5tYXQtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4uc2Nyb2xsYmFyLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi50YWJsZS1yZXNwb25zaXZlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGNvbG9yOiAjOGI4YjhiO1xufVxuXG4uaWRDZWxsOmZpcnN0LW9mLXR5cGUsIC5pZEhlYWRlcjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uaWRIZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaWRDZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW46IDAgMzRweDtcbn1cblxuLyogPT09PT0gUFJJT1JJVFkgPT09PT0gKi9cbi5wcmlvcml0eSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAxLjk1cHggMS45NXB4IDIuNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcbn1cblxuLnByaW9yaXR5LW11eWFsdGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDg0ODU1O1xufVxuXG4ucHJpb3JpdHktYWx0YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTcxNzE7XG59XG5cbi5wcmlvcml0eS1ub3JtYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjhlO1xufVxuXG4ucHJpb3JpdHktYmFqYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2Q2OWQ7XG59XG5cbi5wcmlvcml0eS1uaW5ndW5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcbn1cblxuLnJlZC1kYXRlIHtcbiAgY29sb3I6ICNlYjQxNDE7XG59XG5cbi8qIE1BVCBUQUIgKi9cbjo6bmctZGVlcCBtYXQtdGFiLWdyb3VwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */");

/***/ }),

/***/ "GL9N":
/*!**************************************************************************!*\
  !*** ./src/app/dynamic-filters/auto-complete/auto-complete.component.ts ***!
  \**************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auto_complete_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auto-complete.component.html */ "52Cw");
/* harmony import */ var _auto_complete_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auto-complete.component.scss */ "G3Pg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






/**
 * This component serves as an abstraction for a mat autocomplete
 * It will only return a value when an option is selected, it will NOT return anything if none of the values
 * have been selected
 *
 * @input matLabel: string, value for the label shown in the mat-input
 * @input placeholder: string, value for the placeholder shown in the mat-input
 * @input appearance: string, value for the appearance of the mat-form-field, only default values are supported
 * @input defaultValue: string, default value for the autocomplete
 * (see https://material.angular.io/components/form-field/api for more details)
 * @input options: string[], values used to display options by the mat-autocomplete
 *
 * @output selectedValue: EventEmitter<string>(), emitted value when an option is selected
 * */
let AutocompleteComponent = class AutocompleteComponent {
    constructor(_fb) {
        this._fb = _fb;
        this.selectedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.searchValue = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.iconClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isValid = true;
        this.filterField = 'filter-field';
    }
    ngOnInit() {
        this.started = true;
        this._initForm();
        this._setFilter();
    }
    _initForm() {
        this.form = this._fb.group({ input: { value: this.defaultValue ? this.defaultValue : '', disabled: this.edit } });
    }
    _setFilter() {
        this.filteredOptions = this.form.controls.input.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => this
            .options
            .filter(option => option.toLowerCase().includes(value.toString().toLowerCase()))));
    }
    isEditDialog() {
        if (this.edit) {
            this.filterField = '';
        }
    }
    setValue(value) {
        this.isValid = true;
        this.form.controls.input.setValue(value);
        this.selectedValue.emit(value);
    }
    emptySelection(event) {
        if (event.key === "Backspace") {
            this.selectedValue.emit('');
            this.searchValue.emit(event.target.value);
        }
        else {
            const filtOptions = this.options.filter(opt => opt.toLowerCase().includes(event.target.value));
            if (filtOptions.length < 10) {
                this.searchValue.emit(event.target.value);
            }
            // this.filteredOptions.subscribe(options => {
            //   if(options.length === 0){
            //     this.searchValue.emit(event.target.value);
            //   }
            // })
        }
    }
    clear() {
        this.form.controls['input'].setValue('');
        this.selectedValue.emit('');
    }
    ngOnChanges(data) {
        if (this.started) {
            this._setFilter();
            this.isEditDialog();
        }
    }
};
AutocompleteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AutocompleteComponent.propDecorators = {
    matLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    defaultValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    edit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    searchValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    iconClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
AutocompleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-autocomplete',
        template: _raw_loader_auto_complete_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auto_complete_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AutocompleteComponent);



/***/ }),

/***/ "Gec5":
/*!********************************************************************!*\
  !*** ./src/app/dynamic-filters/autoselect/autoselect.component.ts ***!
  \********************************************************************/
/*! exports provided: AutoselectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoselectComponent", function() { return AutoselectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_autoselect_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./autoselect.component.html */ "8Fa1");
/* harmony import */ var _autoselect_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autoselect.component.scss */ "w81a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dynamic */ "O7pt");







/**
 * This component is intended to deal with unlimited sets
 * updating each time options input is reset
 */
let AutoselectComponent = class AutoselectComponent extends _dynamic__WEBPACK_IMPORTED_MODULE_6__["Auto"] {
    constructor() {
        super();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.selectedValue = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.cleared = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.searching = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
    }
    ngOnInit() {
        this.form = this.config.form ? this.config.form : this.form;
        this.form.setValue(this.config.defaultValue);
        this.shownField = this.config.prop;
        this.form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.searching = true))
            .subscribe(value => this.search.emit(value));
    }
    ngOnChanges(changes) {
        this.searching = false;
    }
    clearAutoselect() {
        this.form.setValue('');
        this.cleared.emit(this.config.searchValue);
    }
    selectedItem(event) {
        this.form.setValue(event.option.value[this.shownField]);
        this.selectedValue.emit(event.option.value);
    }
};
AutoselectComponent.ctorParameters = () => [];
AutoselectComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    cleared: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
AutoselectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-autoselect',
        template: _raw_loader_autoselect_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_autoselect_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AutoselectComponent);



/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "WdVq");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");







let Tab1Page = class Tab1Page {
    constructor(_route, scanner, _router, _emailComposer) {
        this._route = _route;
        this.scanner = scanner;
        this._router = _router;
        this._emailComposer = _emailComposer;
        this.filters = [];
        this.queryPagination = { page: 0, size: 10 };
        this.queryOrder = { orderField: '', order: '' };
        this.queryFilters = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this._resolved = this._route.snapshot.data['response'];
        if (this._resolved.error) {
            console.error(this._resolved.error.message, this._resolved.error.error);
            const { error: { message, id } } = this._resolved.error;
        }
        if (this._resolved.data) {
            this.books = this._resolved.data.content;
        }
    }
    goToBookDetail(book) {
        this._router.navigate([`book-detail/${book.id}`], { relativeTo: this._route });
    }
    generateBarCode(book) {
        this.scanner.encode(this.scanner.Encode.TEXT_TYPE, book.id).then(res => {
            console.log(res);
        }, error => {
            alert(error);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__["EmailComposer"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "O7pt":
/*!********************************************!*\
  !*** ./src/app/dynamic-filters/dynamic.ts ***!
  \********************************************/
/*! exports provided: Field, Auto, DynForm, parseTableFiltersConfig, createTableFiltersConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auto", function() { return Auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynForm", function() { return DynForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTableFiltersConfig", function() { return parseTableFiltersConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTableFiltersConfig", function() { return createTableFiltersConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


/**
 * Classes
 */
class Field {
    constructor() {
        var _a, _b;
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.myControl.setValue((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '');
    }
    emit(value) {
        this.myControl.setValue(value);
        this.value.emit(value);
    }
    clear() {
        this.myControl.reset("");
        this.value.emit("");
    }
}
Field.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
class Auto extends Field {
    constructor() {
        var _a, _b;
        super();
        this.options = [];
        const config = this.config;
        this.shownField = (_a = config === null || config === void 0 ? void 0 : config.prop) !== null && _a !== void 0 ? _a : '';
        this.retField = (_b = config === null || config === void 0 ? void 0 : config.retProp) !== null && _b !== void 0 ? _b : '';
    }
    setValue() {
        const selected = this.options.find((item) => item[this.shownField] === this.myControl.value)[this.retField];
        this.emit(selected);
    }
}
Auto.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
class DynForm {
    constructor() {
        this.query = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectQuery = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    search(value) {
        this.selectQuery.emit(value);
    }
    set(field, value) {
        this.form.controls[field].setValue(value);
        let query = {};
        let formKeys = Object.keys(this.form.value);
        formKeys.forEach(key => { if (this.form.value[key]) {
            query[key] = this.form.value[key];
        } });
        this.query.emit(query);
    }
}
DynForm.propDecorators = {
    query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    selectQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*
* Functions
*/
function parseTableFiltersConfig(tableFiltersConfig, tableConfig, filtersConfig) {
    if (!tableFiltersConfig)
        return;
    tableConfig.columns.sort((a, b) => {
        return tableFiltersConfig.columns.findIndex(configItem => configItem.name === a.name)
            < tableFiltersConfig.columns.findIndex(configItem => configItem.name === b.name) ? -1 : 1;
    });
    tableConfig.columns.map(col => {
        var _a, _b;
        col.shown = (_b = (_a = tableFiltersConfig.columns.find(configItem => configItem.name === col.name)) === null || _a === void 0 ? void 0 : _a.shown) !== null && _b !== void 0 ? _b : false;
    });
    filtersConfig.sort((a, b) => {
        return tableFiltersConfig.filters.findIndex(configItem => configItem.name === a.label)
            < tableFiltersConfig.filters.findIndex(configItem => configItem.name === b.label) ? -1 : 1;
    });
    filtersConfig.map(filter => {
        var _a, _b;
        filter.shown = (_b = (_a = tableFiltersConfig.filters.find(configItem => configItem.name === filter.label)) === null || _a === void 0 ? void 0 : _a.shown) !== null && _b !== void 0 ? _b : false;
    });
}
function createTableFiltersConfig(tableConfig, filtersConfig) {
    return {
        columns: tableConfig.columns.map(col => { return { name: col.name, shown: col.shown }; }),
        filters: filtersConfig.map(auto => { return { name: auto.label, shown: auto.shown }; })
    };
}


/***/ }),

/***/ "VmCo":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dynamic-filters/dynamic-filters.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"form\" *ngIf=\"showFilters\" class=\"filters scrollbar-style\">\n  <ion-content *ngFor=\"let item of filters\">\n     <!-- <app-autocomplete *ngIf=\"showAutocomplete(item)\"\n                        class=\"filter\"\n                        [placeholder]=\"item.placeholder\"\n                        [matLabel]=\"item.label\"\n                        [appearance]=\"'standard'\"\n                        [defaultValue]=\"item.value\"\n                        [options]=\"item.options\"\n                        (selectedValue)=\"setAutocompleteValue({formFilter: item.searchValue, value: $event, type: 'autocomplete'})\">\n      </app-autocomplete>\n\n      <app-autoselect *ngIf=\"showAutoSelect(item)\"\n                      class=\"filter\"\n                      [config]=\"this.buildFilter(item)\"\n                      (search)=\"search.emit({searchValue: item.searchValue, value: $event})\"\n                      (selectedValue)=\"selectedItem({searchValue: item.searchValue, value: $event, type: 'autoselect'})\"\n                      (cleared)=\"clear({formFilter: item.searchValue})\">\n      </app-autoselect>-->\n\n      <div *ngIf=\"showInput(item)\" class=\"filter\" appearance=\"{{'standard'}}\">\n          <ion-label>{{item.label}}</ion-label>\n          <ion-input \n                 [id]=\"item.label\"\n                 aria-label=\"input\"\n                 [placeholder]=\"item.placeholder\"\n                 [formControlName]=\"item.prop\"\n                 (keyup)=\"setInputValue({formFilter: item.prop, value: $event, type: 'input'})\">\n          <button mat-icon-button matSuffix *ngIf=\"hasValue(item.prop)\" (click)=\"clear({formFilter: item.prop})\" matTooltip=\"clear\"></button>\n              <ion-icon>clear</ion-icon>\n          </ion-input>\n        </div>\n  </ion-content>\n</form>\n");

/***/ }),

/***/ "WjbW":
/*!****************************************************************!*\
  !*** ./src/app/dynamic-filters/dynamic-filters.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===== FONTS (Major Third) ===== */\n/* ===== PALETTE ===== */\n/* ===== WEIGHT ===== */\n/* ===== TEMPLATE 1 ===== */\n.c-card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n}\n.c-card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.c-card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.filters-plus-config {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.filters-plus-config .dyn-filters {\n  flex-grow: 1;\n  overflow-x: auto;\n  margin: 0 40px 0 0;\n}\n.filters-plus-config .dyn-filters ::ng-deep mat-form-field {\n  width: 150px;\n}\n.filters-plus-config .configButton {\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n  max-height: 88%;\n}\n.card-component .card-content, .card-component .title-component {\n  margin: 0;\n}\n.card-component ::ng-deep mat-tab-group mat-tab-header {\n  margin-bottom: 0.5rem !important;\n}\n.card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.card-component .title-component button {\n  background-color: #DE7373;\n  border-radius: 2rem;\n  height: 2.3rem;\n  color: #efefef;\n}\n::ng-deep .mat-select-value {\n  color: #191919;\n}\n.filter {\n  align-items: center;\n  margin-left: 0.5em;\n  margin-bottom: 20px;\n}\n.mat-form-field {\n  width: 100%;\n}\nmat-form-field mat-select {\n  max-width: 10em;\n  margin-right: 5em;\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n.table-responsive .mat-table {\n  width: 100%;\n  max-width: 100%;\n  display: table;\n}\n.scrollbar-style::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.scrollbar-style::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.table-responsive::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.mat-header-row {\n  background-color: black;\n  border-radius: 0.5rem;\n  color: #8b8b8b;\n}\n.idCell:first-of-type, .idHeader:first-of-type {\n  padding-left: 0;\n}\n.idHeader {\n  justify-content: center;\n  color: white;\n}\n.idCell {\n  text-align: center;\n  justify-content: center;\n  word-break: break-all;\n  margin-right: 10px;\n}\nmat-card-content {\n  margin: 0 34px;\n}\n/* ===== PRIORITY ===== */\n.priority {\n  color: #ffffff;\n  padding: 5px 10px;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  font-weight: 500;\n  text-transform: capitalize;\n  background-color: #c2c2c2;\n}\n.priority-muyalta {\n  background-color: #d84855;\n}\n.priority-alta {\n  background-color: #e97171;\n}\n.priority-normal {\n  background-color: #ffcb8e;\n}\n.priority-baja {\n  background-color: #a3d69d;\n}\n.priority-ninguna {\n  background-color: #c2c2c2;\n}\n.red-date {\n  color: #eb4141;\n}\n/* MAT TAB */\n::ng-deep mat-tab-group {\n  margin-left: 20px;\n}\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: black;\n}\n::ng-deep .mat-tab-label .mat-tab-label-content {\n  font-size: 13px;\n}\n::ng-deep .mat-tab-label-content span {\n  margin-right: 5px;\n}\n::ng-deep .mat-tab-header {\n  border-bottom: 0 solid rgba(0, 0, 0, 0.12);\n}\n.filters {\n  display: flex;\n  margin-bottom: 0.5rem;\n  margin-left: 0.75rem;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n.filter {\n  max-width: 10rem;\n  margin: 0.5rem;\n}\n:host ::ng-deep .mat-form-field-label {\n  font-size: 0.8rem;\n}\n:host ::ng-deep .mat-input-element {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3N0YWZmaXQtc3R5bGUtMS5zY3NzIiwiLi4vLi4vLi4vZHluYW1pYy1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFBO0FBUUEsd0JBQUE7QUFRQSx1QkFBQTtBQUdBLDJCQUFBO0FBRUE7RUFDRSw2QkFBQTtBQ2hCRjtBRGtCRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDaEJKO0FEa0JJO0VBQ0UsbUJBM0JRO0VBNEJSLGdCQUFBO0VBQ0EsY0FBQTtBQ2hCTjtBRHNCQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ25CRjtBRHFCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJKO0FEcUJJO0VBQ0UsWUFBQTtBQ25CTjtBRHNCRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQ3BCSjtBRHdCQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQ3JCRjtBRHVCRTtFQUNFLFNBQUE7QUNyQko7QUR3QkU7RUFDRSxnQ0FBQTtBQ3RCSjtBRHlCRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDdkJKO0FEeUJJO0VBQ0UsbUJBM0VRO0VBNEVSLGdCQUFBO0VBQ0EsY0FBQTtBQ3ZCTjtBRDBCSTtFQUNFLHlCQTVFaUI7RUE2RWpCLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUN4Qk47QUQ2QkE7RUFDRSxjQWxGbUI7QUN3RHJCO0FENkJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDMUJGO0FENkJBO0VBQ0UsV0FBQTtBQzFCRjtBRDZCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQzFCRjtBRDZCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUMxQkY7QUQ0QkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUMxQko7QUQ4QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDhCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUMzQkY7QUQ4QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDhCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUMzQkY7QUQ4QkE7RUFDRSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQzNCRjtBRDhCQTtFQUNFLGVBQUE7QUMzQkY7QUQ4QkE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUMzQkY7QUQ4QkE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQzNCRjtBRGtDQTtFQUNFLGNBQUE7QUMvQkY7QURrQ0EseUJBQUE7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNoQ0Y7QURxQ0E7RUFDRSx5QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHlCQUFBO0FDbENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx5QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHlCQUFBO0FDbENGO0FEcUNBO0VBQ0UsY0FBQTtBQ2xDRjtBRHFDQSxZQUFBO0FBRUE7RUFDRSxpQkFBQTtBQ25DRjtBRHNDQTtFQUNFLHVCQUFBO0FDbkNGO0FEc0NBO0VBQ0UsZUFBQTtBQ25DRjtBRHNDQTtFQUNFLGlCQUFBO0FDbkNGO0FEc0NBO0VBQ0UsMENBQUE7QUNuQ0Y7QUFsTUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFxTUo7QUFsTUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFxTUo7QUFsTUE7RUFDSSxpQkRmSTtBQ29OUjtBQWxNQTtFQUNJLGlCRG5CSTtBQ3dOUiIsImZpbGUiOiJkeW5hbWljLWZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PSBGT05UUyAoTWFqb3IgVGhpcmQpID09PT09ICovXHJcbiRzbWFsbDogMC44cmVtO1xyXG4kbWVkaXVtOiAxcmVtO1xyXG4kbGFyZ2U6IDEuMjVyZW07XHJcbiRleHRyYS1sYXJnZTogMS41NjNyZW07XHJcbiRodWdlOiAxLjk1M3JlbTtcclxuJGV4dHJhLWh1Z2U6IDIuNDQxcmVtO1xyXG5cclxuLyogPT09PT0gUEFMRVRURSA9PT09PSAqL1xyXG4kY29sb3ItcGFsZXR0ZS0xLW1haW46ICNERTczNzM7XHJcbiRjb2xvci1wYWxldHRlLTEtc2Vjb25kOiAjQUJBQkZGO1xyXG4kY29sb3ItcHJpbWFyeS1saWdodDogI0VGRUZFRjtcclxuJGNvbG9yLXByaW1hcnktZGFyazogIzE5MTkxOTtcclxuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjMzMzMzMzO1xyXG4kY29sb3Itc2Nyb2xsYmFyLXRodW1iOiAjOEM4QzhDO1xyXG5cclxuLyogPT09PT0gV0VJR0hUID09PT09ICovXHJcblxyXG5cclxuLyogPT09PT0gVEVNUExBVEUgMSA9PT09PSAqL1xyXG5cclxuLmMtY2FyZC1jb21wb25lbnQge1xyXG4gIG1hcmdpbjogMy41cmVtIDEuNWVtIDAgMS41cmVtO1xyXG5cclxuICAudGl0bGUtY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6ICRleHRyYS1sYXJnZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmZpbHRlcnMtcGx1cy1jb25maWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5keW4tZmlsdGVycyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDQwcHggMCAwO1xyXG5cclxuICAgIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbmZpZ0J1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb21wb25lbnQge1xyXG4gIG1hcmdpbjogMy41cmVtIDEuNWVtIDAgMS41cmVtO1xyXG4gIG1heC1oZWlnaHQ6IDg4JTtcclxuXHJcbiAgLmNhcmQtY29udGVudCwgLnRpdGxlLWNvbXBvbmVudCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbWF0LXRhYi1ncm91cCBtYXQtdGFiLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGV4dHJhLWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGFsZXR0ZS0xLW1haW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIGhlaWdodDogMi4zcmVtO1xyXG4gICAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIG1hdC1zZWxlY3Qge1xyXG4gIG1heC13aWR0aDogMTBlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDVlbTtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgLy8gbWF4LWhlaWdodDogODAwcHg7XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjb2xvcjogIzhiOGI4YjtcclxufVxyXG5cclxuLmlkQ2VsbDpmaXJzdC1vZi10eXBlLCAuaWRIZWFkZXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaWRIZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlkQ2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW46IDAgMzRweDtcclxufVxyXG5cclxuLyogPT09PT0gUFJJT1JJVFkgPT09PT0gKi9cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xyXG59XHJcblxyXG4vLyBAVE9ETzogY2hhbmdlIGNvbG9yIHRvIHZhcmlhYmxlc1xyXG5cclxuLnByaW9yaXR5LW11eWFsdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkODQ4NTU7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1hbHRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk3MTcxO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbm9ybWFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjhlO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYmFqYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzZDY5ZDtcclxufVxyXG5cclxuLnByaW9yaXR5LW5pbmd1bmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7XHJcbn1cclxuXHJcbi5yZWQtZGF0ZSB7XHJcbiAgY29sb3I6ICNlYjQxNDE7XHJcbn1cclxuXHJcbi8qIE1BVCBUQUIgKi9cclxuXHJcbjo6bmctZGVlcCBtYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9zdGFmZml0LXN0eWxlLTEuc2Nzcyc7XG5cbi5maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uZmlsdGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIG1hcmdpbjogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBmb250LXNpemU6ICRzbWFsbDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgZm9udC1zaXplOiAkc21hbGw7XG59XG4iXX0= */");

/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _books_infrastructure_resolver_allBooksResolverService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./books/infrastructure/resolver/allBooksResolverService */ "7fs7");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");





const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_4__["Tab1Page"],
        resolve: { response: _books_infrastructure_resolver_allBooksResolverService__WEBPACK_IMPORTED_MODULE_3__["allBooksResolverService"] }
    },
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "g5g6":
/*!**************************************************************!*\
  !*** ./src/app/dynamic-filters/dynamic-filters.component.ts ***!
  \**************************************************************/
/*! exports provided: DynamicFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFiltersComponent", function() { return DynamicFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dynamic_filters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dynamic-filters.component.html */ "VmCo");
/* harmony import */ var _dynamic_filters_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-filters.component.scss */ "WjbW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");






let DynamicFiltersComponent = class DynamicFiltersComponent {
    constructor(_fb, dialog) {
        this._fb = _fb;
        this.dialog = dialog;
        this.query = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        let controlsConfig = {};
        this.filters.forEach(filter => {
            if (filter.searchValue) {
                controlsConfig[filter.searchValue] = [filter.value];
            }
            else {
                controlsConfig[filter.prop] = [filter.value];
            }
        });
        this.form = this._fb.group(controlsConfig);
    }
    setAutocompleteValue(entry) {
        this.form.controls[entry.formFilter].setValue(entry.value);
        this.emit();
    }
    setInputValue(entry) {
        this.form.controls[entry.formFilter].setValue(entry.value.target.value);
        this.emit();
    }
    clearDate(entry) {
        this.form.controls[entry.formFilter].setValue(null);
        this.emit();
    }
    filterDate(entry) {
        this.form.controls[entry.formFilter].setValue(entry.event.value);
        this.emit();
    }
    hasValue(formFilter) {
        return this.form.controls[formFilter].value;
    }
    selectedItem(entry) {
        this.form.controls[entry.searchValue].setValue(entry.value.id);
        this.emit();
    }
    clear(entry) {
        this.form.controls[entry.formFilter].setValue('');
        this.emit();
    }
    emit() {
        let query = {};
        let formKeys = Object.keys(this.form.value);
        formKeys.forEach(key => {
            if (this.form.value[key]) {
                query[key] = this.form.value[key];
            }
        });
        this.query.emit(query);
    }
    buildFilter(item) {
        return {
            options: item.options,
            prop: item.prop,
            retProp: item.retProp,
            class: item.class,
            appearance: item.appearance,
            label: item.label,
            placeholder: item.placeholder,
            searchValue: item.searchValue,
            defaultValue: item.defaultValue
        };
    }
    showAutocomplete(item) {
        return item.shown === true && item.type === 'autocomplete';
    }
    showAutoSelect(item) {
        return item.shown && item.type === 'autoselect';
    }
    showDate(item) {
        return item.shown === true && item.type === 'date';
    }
    showInput(item) {
        return item.shown === true && item.type === 'input';
    }
};
DynamicFiltersComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
DynamicFiltersComponent.propDecorators = {
    filters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showFilters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
DynamicFiltersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dynamic-filters',
        template: _raw_loader_dynamic_filters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dynamic_filters_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DynamicFiltersComponent);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===== FONTS (Major Third) ===== */\n/* ===== PALETTE ===== */\n/* ===== WEIGHT ===== */\n/* ===== TEMPLATE 1 ===== */\n.c-card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n}\n.c-card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.c-card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.filters-plus-config {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.filters-plus-config .dyn-filters {\n  flex-grow: 1;\n  overflow-x: auto;\n  margin: 0 40px 0 0;\n}\n.filters-plus-config .dyn-filters ::ng-deep mat-form-field {\n  width: 150px;\n}\n.filters-plus-config .configButton {\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n  max-height: 88%;\n}\n.card-component .card-content, .card-component .title-component {\n  margin: 0;\n}\n.card-component ::ng-deep mat-tab-group mat-tab-header {\n  margin-bottom: 0.5rem !important;\n}\n.card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.card-component .title-component button {\n  background-color: #DE7373;\n  border-radius: 2rem;\n  height: 2.3rem;\n  color: #efefef;\n}\n::ng-deep .mat-select-value {\n  color: #191919;\n}\n.filter {\n  align-items: center;\n  margin-left: 0.5em;\n  margin-bottom: 20px;\n}\n.mat-form-field {\n  width: 100%;\n}\nmat-form-field mat-select {\n  max-width: 10em;\n  margin-right: 5em;\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n.table-responsive .mat-table {\n  width: 100%;\n  max-width: 100%;\n  display: table;\n}\n.scrollbar-style::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.scrollbar-style::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.table-responsive::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.mat-header-row {\n  background-color: black;\n  border-radius: 0.5rem;\n  color: #8b8b8b;\n}\n.idCell:first-of-type, .idHeader:first-of-type {\n  padding-left: 0;\n}\n.idHeader {\n  justify-content: center;\n  color: white;\n}\n.idCell {\n  text-align: center;\n  justify-content: center;\n  word-break: break-all;\n  margin-right: 10px;\n}\nmat-card-content {\n  margin: 0 34px;\n}\n/* ===== PRIORITY ===== */\n.priority {\n  color: #ffffff;\n  padding: 5px 10px;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  font-weight: 500;\n  text-transform: capitalize;\n  background-color: #c2c2c2;\n}\n.priority-muyalta {\n  background-color: #d84855;\n}\n.priority-alta {\n  background-color: #e97171;\n}\n.priority-normal {\n  background-color: #ffcb8e;\n}\n.priority-baja {\n  background-color: #a3d69d;\n}\n.priority-ninguna {\n  background-color: #c2c2c2;\n}\n.red-date {\n  color: #eb4141;\n}\n/* MAT TAB */\n::ng-deep mat-tab-group {\n  margin-left: 20px;\n}\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: black;\n}\n::ng-deep .mat-tab-label .mat-tab-label-content {\n  font-size: 13px;\n}\n::ng-deep .mat-tab-label-content span {\n  margin-right: 5px;\n}\n::ng-deep .mat-tab-header {\n  border-bottom: 0 solid rgba(0, 0, 0, 0.12);\n}\n.book-cell {\n  position: relative;\n  display: flex;\n  padding: 25px;\n  width: 100%;\n  margin-bottom: 10%;\n  height: 250px;\n  margin-right: 1px;\n  border-bottom: 0.1px solid #80808026;\n  color: gray;\n}\n.book-img {\n  flex-shrink: 0;\n}\n.book-photo {\n  width: 180px;\n  flex-shrink: 0;\n  bottom: -35px;\n  left: 35px;\n  border-radius: 2px;\n  box-shadow: -2px 6px 19px 0px #7f818e;\n  transition: 0.3s ease;\n}\n.book-photo:hover {\n  transform: scale(1.03);\n}\n.book-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.book-title {\n  font-weight: 600;\n}\n.book-author {\n  margin-top: 3px;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.book-content {\n  padding: 0 20px;\n  overflow: hidden;\n}\n.book-voters {\n  vertical-align: sub;\n  font-size: 13px;\n  margin-left: 7px;\n  white-space: nowrap;\n  margin-top: 7px;\n}\n.book-sum {\n  margin-top: 20px;\n  font-size: 14px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n.book-editorial {\n  margin: 1rem 0;\n  font-weight: 600;\n}\n.book-see {\n  margin-top: 25px;\n  text-align: center;\n  background: #ffb0b0f0;\n  color: white;\n  font-weight: 600;\n  padding: 8px;\n  font-size: 14px;\n  width: 160px;\n  border-radius: 20px;\n}\n.book-see:hover {\n  color: #ff6e72;\n}\n.book-see.book-blue {\n  color: #a4e0eb;\n}\n.book-see.book-blue:hover {\n  color: #22cdec;\n}\n.book-see.book-pink {\n  color: #edb9d6;\n}\n.book-see.book-pink:hover {\n  color: #ff6dbe;\n}\n.book-see.book-yellow {\n  color: #fdca95;\n}\n.book-see.book-yellow:hover {\n  color: #fb9124;\n}\n.book-see.book-purple {\n  color: #cbb5e2;\n}\n.book-see.book-purple:hover {\n  color: #a764ec;\n}\n@media (max-width: 1103px) {\n  .book-cell {\n    width: 100%;\n  }\n}\n@media (max-width: 765px) {\n  .book-cell {\n    width: 100%;\n  }\n}\n@media (max-width: 575px) {\n  .book-cell {\n    width: 100%;\n  }\n}\n@media (max-width: 458px) {\n  .book-photo {\n    width: 90px;\n  }\n\n  .book-voters {\n    display: none;\n  }\n}\n@media (max-width: 420px) {\n  .book-see {\n    width: 90px;\n    font-size: 13px;\n  }\n\n  .book-photo {\n    width: 5rem;\n  }\n\n  .main-wrapper {\n    margin-top: 50px;\n  }\n\n  .book-cell {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 360px) {\n  .rating > label:before {\n    font-size: 0.8em;\n  }\n}\n@media (max-width: 1220px) {\n  .card-vote {\n    display: none;\n  }\n}\n@media (max-width: 1085px) {\n  .book-rate > label {\n    font-size: 0.7em;\n  }\n}\n@media (max-width: 1045px) {\n  .books-of {\n    display: none;\n  }\n}\n@media (max-width: 725px) {\n  .browse-category, .search-bar {\n    display: none;\n  }\n\n  .header-title {\n    margin-right: auto;\n  }\n\n  .book-cards {\n    grid-template-columns: 1fr;\n  }\n\n  .book-types {\n    display: none;\n  }\n}\n@media (max-width: 372px) {\n  .card-content {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RoZW1lL3N0YWZmaXQtc3R5bGUtMS5zY3NzIiwiLi4vLi4vLi4vdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQUE7QUFRQSx3QkFBQTtBQVFBLHVCQUFBO0FBR0EsMkJBQUE7QUFFQTtFQUNFLDZCQUFBO0FDaEJGO0FEa0JFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUNoQko7QURrQkk7RUFDRSxtQkEzQlE7RUE0QlIsZ0JBQUE7RUFDQSxjQUFBO0FDaEJOO0FEc0JBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDbkJGO0FEcUJFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNuQko7QURxQkk7RUFDRSxZQUFBO0FDbkJOO0FEc0JFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDcEJKO0FEd0JBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FDckJGO0FEdUJFO0VBQ0UsU0FBQTtBQ3JCSjtBRHdCRTtFQUNFLGdDQUFBO0FDdEJKO0FEeUJFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUN2Qko7QUR5Qkk7RUFDRSxtQkEzRVE7RUE0RVIsZ0JBQUE7RUFDQSxjQUFBO0FDdkJOO0FEMEJJO0VBQ0UseUJBNUVpQjtFQTZFakIsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ3hCTjtBRDZCQTtFQUNFLGNBbEZtQjtBQ3dEckI7QUQ2QkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUMxQkY7QUQ2QkE7RUFDRSxXQUFBO0FDMUJGO0FENkJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQzFCRjtBRDRCRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzFCSjtBRDhCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDM0JGO0FEOEJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzNCRjtBRDhCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDM0JGO0FEOEJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzNCRjtBRDhCQTtFQUNFLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDM0JGO0FEOEJBO0VBQ0UsZUFBQTtBQzNCRjtBRDhCQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDM0JGO0FEa0NBO0VBQ0UsY0FBQTtBQy9CRjtBRGtDQSx5QkFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ2hDRjtBRHFDQTtFQUNFLHlCQUFBO0FDbENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx5QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHlCQUFBO0FDbENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBLFlBQUE7QUFFQTtFQUNFLGlCQUFBO0FDbkNGO0FEc0NBO0VBQ0UsdUJBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxlQUFBO0FDbkNGO0FEc0NBO0VBQ0UsaUJBQUE7QUNuQ0Y7QURzQ0E7RUFDRSwwQ0FBQTtBQ25DRjtBQWxNQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFxTUo7QUFsTUE7RUFDSSxjQUFBO0FBcU1KO0FBbE1BO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQkFBQTtBQXFNSjtBQXBNSTtFQUNDLHNCQUFBO0FBc01MO0FBbE1BO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBcU1KO0FBbE1HO0VBQ0MsZ0JBQUE7QUFxTUo7QUFsTUc7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXFNSjtBQWxNRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQXFNSjtBQWxNRztFQUNDLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBcU1KO0FBbE1HO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFxTUo7QUFsTUc7RUFDQyxjQUFBO0VBQ0EsZ0JBQUE7QUFxTUo7QUFsTUc7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXFNSjtBQXBNSTtFQUNDLGNBQUE7QUFzTUw7QUFwTUk7RUFDQyxjQUFBO0FBc01MO0FBck1LO0VBQ0MsY0FBQTtBQXVNTjtBQXBNSTtFQUNDLGNBQUE7QUFzTUw7QUFyTUs7RUFDQyxjQUFBO0FBdU1OO0FBcE1JO0VBQ0MsY0FBQTtBQXNNTDtBQXJNSztFQUNDLGNBQUE7QUF1TU47QUFwTUk7RUFDQyxjQUFBO0FBc01MO0FBck1LO0VBQ0MsY0FBQTtBQXVNTjtBQWxNRztFQUNDO0lBQ0UsV0FBQTtFQXFNSjtBQUNGO0FBbE1HO0VBQ0M7SUFDRSxXQUFBO0VBb01KO0FBQ0Y7QUFqTUc7RUFDQztJQUNFLFdBQUE7RUFtTUo7QUFDRjtBQWhNRztFQUNDO0lBQ0MsV0FBQTtFQWtNSDs7RUFoTUU7SUFDQyxhQUFBO0VBbU1IO0FBQ0Y7QUFoTUc7RUFDQztJQUNDLFdBQUE7SUFDQSxlQUFBO0VBa01IOztFQWhNRTtJQUNDLFdBQUE7RUFtTUg7O0VBak1FO0lBQ0MsZ0JBQUE7RUFvTUg7O0VBbE1FO0lBQ0UsZ0JBQUE7RUFxTUo7QUFDRjtBQWxNRztFQUNDO0lBQ0MsZ0JBQUE7RUFvTUg7QUFDRjtBQWpNRztFQUNDO0lBQ0MsYUFBQTtFQW1NSDtBQUNGO0FBaE1HO0VBQ0M7SUFDQyxnQkFBQTtFQWtNSDtBQUNGO0FBL0xHO0VBQ0M7SUFDQyxhQUFBO0VBaU1IO0FBQ0Y7QUE5TEc7RUFDQztJQUNDLGFBQUE7RUFnTUg7O0VBOUxFO0lBQ0Msa0JBQUE7RUFpTUg7O0VBL0xFO0lBQ0MsMEJBQUE7RUFrTUg7O0VBaE1FO0lBQ0MsYUFBQTtFQW1NSDtBQUNGO0FBaE1HO0VBQ0M7SUFDQyxhQUFBO0VBa01IO0FBQ0YiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PSBGT05UUyAoTWFqb3IgVGhpcmQpID09PT09ICovXHJcbiRzbWFsbDogMC44cmVtO1xyXG4kbWVkaXVtOiAxcmVtO1xyXG4kbGFyZ2U6IDEuMjVyZW07XHJcbiRleHRyYS1sYXJnZTogMS41NjNyZW07XHJcbiRodWdlOiAxLjk1M3JlbTtcclxuJGV4dHJhLWh1Z2U6IDIuNDQxcmVtO1xyXG5cclxuLyogPT09PT0gUEFMRVRURSA9PT09PSAqL1xyXG4kY29sb3ItcGFsZXR0ZS0xLW1haW46ICNERTczNzM7XHJcbiRjb2xvci1wYWxldHRlLTEtc2Vjb25kOiAjQUJBQkZGO1xyXG4kY29sb3ItcHJpbWFyeS1saWdodDogI0VGRUZFRjtcclxuJGNvbG9yLXByaW1hcnktZGFyazogIzE5MTkxOTtcclxuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiAjMzMzMzMzO1xyXG4kY29sb3Itc2Nyb2xsYmFyLXRodW1iOiAjOEM4QzhDO1xyXG5cclxuLyogPT09PT0gV0VJR0hUID09PT09ICovXHJcblxyXG5cclxuLyogPT09PT0gVEVNUExBVEUgMSA9PT09PSAqL1xyXG5cclxuLmMtY2FyZC1jb21wb25lbnQge1xyXG4gIG1hcmdpbjogMy41cmVtIDEuNWVtIDAgMS41cmVtO1xyXG5cclxuICAudGl0bGUtY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6ICRleHRyYS1sYXJnZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmZpbHRlcnMtcGx1cy1jb25maWcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIC5keW4tZmlsdGVycyB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDQwcHggMCAwO1xyXG5cclxuICAgIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbmZpZ0J1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb21wb25lbnQge1xyXG4gIG1hcmdpbjogMy41cmVtIDEuNWVtIDAgMS41cmVtO1xyXG4gIG1heC1oZWlnaHQ6IDg4JTtcclxuXHJcbiAgLmNhcmQtY29udGVudCwgLnRpdGxlLWNvbXBvbmVudCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgbWF0LXRhYi1ncm91cCBtYXQtdGFiLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGV4dHJhLWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcGFsZXR0ZS0xLW1haW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICAgIGhlaWdodDogMi4zcmVtO1xyXG4gICAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIG1hdC1zZWxlY3Qge1xyXG4gIG1heC13aWR0aDogMTBlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDVlbTtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgLy8gbWF4LWhlaWdodDogODAwcHg7XHJcbiAgLm1hdC10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxufVxyXG5cclxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuLnNjcm9sbGJhci1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTJweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjb2xvcjogIzhiOGI4YjtcclxufVxyXG5cclxuLmlkQ2VsbDpmaXJzdC1vZi10eXBlLCAuaWRIZWFkZXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaWRIZWFkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlkQ2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICBtYXJnaW46IDAgMzRweDtcclxufVxyXG5cclxuLyogPT09PT0gUFJJT1JJVFkgPT09PT0gKi9cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xyXG59XHJcblxyXG4vLyBAVE9ETzogY2hhbmdlIGNvbG9yIHRvIHZhcmlhYmxlc1xyXG5cclxuLnByaW9yaXR5LW11eWFsdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkODQ4NTU7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1hbHRhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk3MTcxO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbm9ybWFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYjhlO1xyXG59XHJcblxyXG4ucHJpb3JpdHktYmFqYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzZDY5ZDtcclxufVxyXG5cclxuLnByaW9yaXR5LW5pbmd1bmEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7XHJcbn1cclxuXHJcbi5yZWQtZGF0ZSB7XHJcbiAgY29sb3I6ICNlYjQxNDE7XHJcbn1cclxuXHJcbi8qIE1BVCBUQUIgKi9cclxuXHJcbjo6bmctZGVlcCBtYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHNwYW4ge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAwIHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZS9zdGFmZml0LXN0eWxlLTEuc2Nzcyc7XG5cbi5ib29rLWNlbGwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcHggc29saWQgIzgwODA4MDI2O1xuICAgIGNvbG9yOiBncmF5O1xufVxuXG4uYm9vay1pbWcge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYm9vay1waG90byB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJvdHRvbTogLTM1cHg7XG4gICAgbGVmdDogMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogLTJweCA2cHggMTlweCAwcHggIzdmODE4ZTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB9XG4gICB9XG5cbi5ib29rLXRpdGxlIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICB9XG4gICBcbiAgIC5ib29rLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgfVxuICAgXG4gICAuYm9vay1hdXRob3Ige1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgfVxuICAgXG4gICAuYm9vay1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIH1cblxuICAgLmJvb2stdm90ZXJzIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgfVxuXG4gICAuYm9vay1zdW0ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICB9XG4gICBcbiAgIC5ib29rLWVkaXRvcmlhbHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgfVxuXG4gICAuYm9vay1zZWUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmIwYjBmMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICY6aG92ZXIge1xuICAgICBjb2xvcjogI2ZmNmU3MjtcbiAgICB9XG4gICAgJi5ib29rLWJsdWUge1xuICAgICBjb2xvcjogI2E0ZTBlYjtcbiAgICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzIyY2RlYztcbiAgICAgfVxuICAgIH1cbiAgICAmLmJvb2stcGluayB7XG4gICAgIGNvbG9yOiAjZWRiOWQ2O1xuICAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmY2ZGJlO1xuICAgICB9XG4gICAgfVxuICAgICYuYm9vay15ZWxsb3cge1xuICAgICBjb2xvcjogI2ZkY2E5NTtcbiAgICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZiOTEyNDtcbiAgICAgfVxuICAgIH1cbiAgICAmLmJvb2stcHVycGxlIHtcbiAgICAgY29sb3I6ICNjYmI1ZTI7XG4gICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNhNzY0ZWM7XG4gICAgIH1cbiAgICB9XG4gICB9XG5cbiAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAzcHgpIHtcbiAgICAuYm9vay1jZWxsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2NXB4KSB7XG4gICAgLmJvb2stY2VsbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICB9XG4gICBcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIC5ib29rLWNlbGwge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgfVxuICAgXG4gICBAbWVkaWEgKG1heC13aWR0aDogNDU4cHgpIHtcbiAgICAuYm9vay1waG90byB7XG4gICAgIHdpZHRoOiA5MHB4O1xuICAgIH1cbiAgICAuYm9vay12b3RlcnMge1xuICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgLmJvb2stc2VlIHtcbiAgICAgd2lkdGg6IDkwcHg7XG4gICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLmJvb2stcGhvdG8ge1xuICAgICB3aWR0aDogNXJlbTtcbiAgICB9XG4gICAgLm1haW4td3JhcHBlciB7XG4gICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5ib29rLWNlbGx7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLnJhdGluZyA+IGxhYmVsOmJlZm9yZSB7XG4gICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICAgfVxuICAgXG4gICBAbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgLmNhcmQtdm90ZSB7XG4gICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgfVxuICAgXG4gICBAbWVkaWEgKG1heC13aWR0aDogMTA4NXB4KSB7XG4gICAgLmJvb2stcmF0ZSA+IGxhYmVsIHtcbiAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgfVxuICAgfVxuICAgXG4gICBAbWVkaWEgKG1heC13aWR0aDogMTA0NXB4KSB7XG4gICAgLmJvb2tzLW9mIHtcbiAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cbiAgIH1cbiAgIFxuICAgQG1lZGlhIChtYXgtd2lkdGg6IDcyNXB4KSB7XG4gICAgLmJyb3dzZS1jYXRlZ29yeSwgLnNlYXJjaC1iYXIge1xuICAgICBkaXNwbGF5OiBub25lO1xuICAgfVxuICAgIC5oZWFkZXItdGl0bGUge1xuICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICAgIC5ib29rLWNhcmRzIHtcbiAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIC5ib29rLXR5cGVzIHtcbiAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICB9XG4gICBcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNzJweCkgIHtcbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICB9Il19 */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _dynamic_filters_dynamic_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dynamic-filters/dynamic-filters.component */ "g5g6");
/* harmony import */ var _dynamic_filters_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dynamic-filters/auto-complete/auto-complete.component */ "GL9N");
/* harmony import */ var _dynamic_filters_autoselect_autoselect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dynamic-filters/autoselect/autoselect.component */ "Gec5");











let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _dynamic_filters_dynamic_filters_component__WEBPACK_IMPORTED_MODULE_8__["DynamicFiltersComponent"], _dynamic_filters_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteComponent"], _dynamic_filters_autoselect_autoselect_component__WEBPACK_IMPORTED_MODULE_10__["AutoselectComponent"]],
        exports: [
            _dynamic_filters_dynamic_filters_component__WEBPACK_IMPORTED_MODULE_8__["DynamicFiltersComponent"],
            _dynamic_filters_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_9__["AutocompleteComponent"],
            _dynamic_filters_autoselect_autoselect_component__WEBPACK_IMPORTED_MODULE_10__["AutoselectComponent"]
        ]
    })
], Tab1PageModule);



/***/ }),

/***/ "w81a":
/*!**********************************************************************!*\
  !*** ./src/app/dynamic-filters/autoselect/autoselect.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===== FONTS (Major Third) ===== */\n/* ===== PALETTE ===== */\n/* ===== WEIGHT ===== */\n/* ===== TEMPLATE 1 ===== */\n.c-card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n}\n.c-card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.c-card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.filters-plus-config {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.filters-plus-config .dyn-filters {\n  flex-grow: 1;\n  overflow-x: auto;\n  margin: 0 40px 0 0;\n}\n.filters-plus-config .dyn-filters ::ng-deep mat-form-field {\n  width: 150px;\n}\n.filters-plus-config .configButton {\n  margin-bottom: 10px;\n  flex-shrink: 0;\n}\n.card-component {\n  margin: 3.5rem 1.5em 0 1.5rem;\n  max-height: 88%;\n}\n.card-component .card-content, .card-component .title-component {\n  margin: 0;\n}\n.card-component ::ng-deep mat-tab-group mat-tab-header {\n  margin-bottom: 0.5rem !important;\n}\n.card-component .title-component {\n  padding: 0;\n  display: flex;\n  flex-flow: row;\n  justify-content: space-between;\n}\n.card-component .title-component h2 {\n  font-size: 1.563rem;\n  font-weight: 500;\n  margin: 0.5rem;\n}\n.card-component .title-component button {\n  background-color: #DE7373;\n  border-radius: 2rem;\n  height: 2.3rem;\n  color: #efefef;\n}\n::ng-deep .mat-select-value {\n  color: #191919;\n}\n.filter {\n  align-items: center;\n  margin-left: 0.5em;\n  margin-bottom: 20px;\n}\n.mat-form-field {\n  width: 100%;\n}\nmat-form-field mat-select {\n  max-width: 10em;\n  margin-right: 5em;\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n.table-responsive .mat-table {\n  width: 100%;\n  max-width: 100%;\n  display: table;\n}\n.scrollbar-style::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.scrollbar-style::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.table-responsive::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n.table-responsive::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 14px;\n}\n.mat-header-row {\n  background-color: black;\n  border-radius: 0.5rem;\n  color: #8b8b8b;\n}\n.idCell:first-of-type, .idHeader:first-of-type {\n  padding-left: 0;\n}\n.idHeader {\n  justify-content: center;\n  color: white;\n}\n.idCell {\n  text-align: center;\n  justify-content: center;\n  word-break: break-all;\n  margin-right: 10px;\n}\nmat-card-content {\n  margin: 0 34px;\n}\n/* ===== PRIORITY ===== */\n.priority {\n  color: #ffffff;\n  padding: 5px 10px;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  font-weight: 500;\n  text-transform: capitalize;\n  background-color: #c2c2c2;\n}\n.priority-muyalta {\n  background-color: #d84855;\n}\n.priority-alta {\n  background-color: #e97171;\n}\n.priority-normal {\n  background-color: #ffcb8e;\n}\n.priority-baja {\n  background-color: #a3d69d;\n}\n.priority-ninguna {\n  background-color: #c2c2c2;\n}\n.red-date {\n  color: #eb4141;\n}\n/* MAT TAB */\n::ng-deep mat-tab-group {\n  margin-left: 20px;\n}\n::ng-deep .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: black;\n}\n::ng-deep .mat-tab-label .mat-tab-label-content {\n  font-size: 13px;\n}\n::ng-deep .mat-tab-label-content span {\n  margin-right: 5px;\n}\n::ng-deep .mat-tab-header {\n  border-bottom: 0 solid rgba(0, 0, 0, 0.12);\n}\n::ng-deep .mat-form-field-outline .mat-form-field-outline-thick .ng-tns-c87-37 .ng-star-inserted {\n  color: yellow !important;\n}\n.filter {\n  max-width: 10rem;\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3N0YWZmaXQtc3R5bGUtMS5zY3NzIiwiLi4vLi4vLi4vLi4vYXV0b3NlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBQTtBQVFBLHdCQUFBO0FBUUEsdUJBQUE7QUFHQSwyQkFBQTtBQUVBO0VBQ0UsNkJBQUE7QUNoQkY7QURrQkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ2hCSjtBRGtCSTtFQUNFLG1CQTNCUTtFQTRCUixnQkFBQTtFQUNBLGNBQUE7QUNoQk47QURzQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNuQkY7QURxQkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHFCSTtFQUNFLFlBQUE7QUNuQk47QURzQkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNwQko7QUR3QkE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUNyQkY7QUR1QkU7RUFDRSxTQUFBO0FDckJKO0FEd0JFO0VBQ0UsZ0NBQUE7QUN0Qko7QUR5QkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ3ZCSjtBRHlCSTtFQUNFLG1CQTNFUTtFQTRFUixnQkFBQTtFQUNBLGNBQUE7QUN2Qk47QUQwQkk7RUFDRSx5QkE1RWlCO0VBNkVqQixtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDeEJOO0FENkJBO0VBQ0UsY0FsRm1CO0FDd0RyQjtBRDZCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQzFCRjtBRDZCQTtFQUNFLFdBQUE7QUMxQkY7QUQ2QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUMxQkY7QUQ2QkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDMUJGO0FENEJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDMUJKO0FEOEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUMzQkY7QUQ4QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDM0JGO0FEOEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUMzQkY7QUQ4QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDM0JGO0FEOEJBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUMzQkY7QUQ4QkE7RUFDRSxlQUFBO0FDM0JGO0FEOEJBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUMzQkY7QURrQ0E7RUFDRSxjQUFBO0FDL0JGO0FEa0NBLHlCQUFBO0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDaENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx5QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHlCQUFBO0FDbENGO0FEcUNBO0VBQ0UseUJBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx5QkFBQTtBQ2xDRjtBRHFDQTtFQUNFLGNBQUE7QUNsQ0Y7QURxQ0EsWUFBQTtBQUVBO0VBQ0UsaUJBQUE7QUNuQ0Y7QURzQ0E7RUFDRSx1QkFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxpQkFBQTtBQ25DRjtBRHNDQTtFQUNFLDBDQUFBO0FDbkNGO0FBbE1BO0VBQ0Usd0JBQUE7QUFxTUY7QUFsTUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFxTUYiLCJmaWxlIjoiYXV0b3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09IEZPTlRTIChNYWpvciBUaGlyZCkgPT09PT0gKi9cclxuJHNtYWxsOiAwLjhyZW07XHJcbiRtZWRpdW06IDFyZW07XHJcbiRsYXJnZTogMS4yNXJlbTtcclxuJGV4dHJhLWxhcmdlOiAxLjU2M3JlbTtcclxuJGh1Z2U6IDEuOTUzcmVtO1xyXG4kZXh0cmEtaHVnZTogMi40NDFyZW07XHJcblxyXG4vKiA9PT09PSBQQUxFVFRFID09PT09ICovXHJcbiRjb2xvci1wYWxldHRlLTEtbWFpbjogI0RFNzM3MztcclxuJGNvbG9yLXBhbGV0dGUtMS1zZWNvbmQ6ICNBQkFCRkY7XHJcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjRUZFRkVGO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrOiAjMTkxOTE5O1xyXG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6ICMzMzMzMzM7XHJcbiRjb2xvci1zY3JvbGxiYXItdGh1bWI6ICM4QzhDOEM7XHJcblxyXG4vKiA9PT09PSBXRUlHSFQgPT09PT0gKi9cclxuXHJcblxyXG4vKiA9PT09PSBURU1QTEFURSAxID09PT09ICovXHJcblxyXG4uYy1jYXJkLWNvbXBvbmVudCB7XHJcbiAgbWFyZ2luOiAzLjVyZW0gMS41ZW0gMCAxLjVyZW07XHJcblxyXG4gIC50aXRsZS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGV4dHJhLWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uZmlsdGVycy1wbHVzLWNvbmZpZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgLmR5bi1maWx0ZXJzIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgNDBweCAwIDA7XHJcblxyXG4gICAgOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29uZmlnQnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWNvbXBvbmVudCB7XHJcbiAgbWFyZ2luOiAzLjVyZW0gMS41ZW0gMCAxLjVyZW07XHJcbiAgbWF4LWhlaWdodDogODglO1xyXG5cclxuICAuY2FyZC1jb250ZW50LCAudGl0bGUtY29tcG9uZW50IHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBtYXQtdGFiLWdyb3VwIG1hdC10YWItaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAkZXh0cmEtbGFyZ2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wYWxldHRlLTEtbWFpbjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgICAgaGVpZ2h0OiAyLjNyZW07XHJcbiAgICAgIGNvbG9yOiAjZWZlZmVmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogJGNvbG9yLXByaW1hcnktZGFyaztcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQgbWF0LXNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiAxMGVtO1xyXG4gIG1hcmdpbi1yaWdodDogNWVtO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICAvLyBtYXgtaGVpZ2h0OiA4MDBweDtcclxuICAubWF0LXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGNvbG9yOiAjOGI4YjhiO1xyXG59XHJcblxyXG4uaWRDZWxsOmZpcnN0LW9mLXR5cGUsIC5pZEhlYWRlcjpmaXJzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5pZEhlYWRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaWRDZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMCAzNHB4O1xyXG59XHJcblxyXG4vKiA9PT09PSBQUklPUklUWSA9PT09PSAqL1xyXG5cclxuLnByaW9yaXR5IHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7XHJcbn1cclxuXHJcbi8vIEBUT0RPOiBjaGFuZ2UgY29sb3IgdG8gdmFyaWFibGVzXHJcblxyXG4ucHJpb3JpdHktbXV5YWx0YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4NDg1NTtcclxufVxyXG5cclxuLnByaW9yaXR5LWFsdGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTcxNzE7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1ub3JtYWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNiOGU7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1iYWphIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNkNjlkO1xyXG59XHJcblxyXG4ucHJpb3JpdHktbmluZ3VuYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyYzJjMjtcclxufVxyXG5cclxuLnJlZC1kYXRlIHtcclxuICBjb2xvcjogI2ViNDE0MTtcclxufVxyXG5cclxuLyogTUFUIFRBQiAqL1xyXG5cclxuOjpuZy1kZWVwIG1hdC10YWItZ3JvdXAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQgc3BhbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDAgc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG59XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3N0YWZmaXQtc3R5bGUtMS5zY3NzJztcblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIC5uZy10bnMtYzg3LTM3IC5uZy1zdGFyLWluc2VydGVkIHtcbiAgY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyIHtcbiAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luOiAwLjVyZW07XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map