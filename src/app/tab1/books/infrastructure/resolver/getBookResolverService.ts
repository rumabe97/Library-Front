import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { getBook } from "../../application/getBook";
import { searchBook } from "../../application/searchBook";
import { BookService } from "../services/BookService";

@Injectable({
    providedIn: 'root'
  })
  export class getBookResolverService implements Resolve<any> {
  
    constructor(
        private _service: BookService,
    ) {
    }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      
      
      return getBook(route.params['id'], this._service)
          .pipe(
              map(res => ({
                data: res,
              })),
              catchError(err => {
                return of({
                  data: null,
                  error: err,
                  message: 'Error on book  resolver, data couldn\'t be fetched'
                });
              })
          );
    }
  }