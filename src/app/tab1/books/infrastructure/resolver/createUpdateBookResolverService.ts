import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { forkJoin, Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { searchAuthor } from "src/app/author/application/searchAuthor";
import { AuthorService } from "src/app/author/infrastructure/authorService";
import { searchEditorial } from "src/app/editorial/application/searchEditorial";
import { EditorialService } from "src/app/editorial/infrastructure/EditorialService";
import { searchLocation } from "src/app/location/application/searchLocation";
import { LocationService } from "src/app/location/infrastructure/LocationService";
import { getBook } from "../../application/getBook";
import { getexternalBook } from "../../application/getExternalBook";
import { getExtraExternalBook } from "../../application/getExtraExternalBook";
import { searchBook } from "../../application/searchBook";
import { BookService } from "../services/BookService";

@Injectable({
    providedIn: 'root'
  })
  export class createUpdateBookResolverService implements Resolve<any> {
  
    constructor(
        private _service: BookService,
        private _editorialService:EditorialService,
        private _authorService:AuthorService,
        private _locationService:LocationService
    ) {
    }
  
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      const $editorial = searchEditorial({},this._editorialService);
      const $author = searchAuthor({},this._authorService);
      const $location = searchLocation({},this._locationService);
      const $book = searchBook({id:route.queryParams['id']},this._service);
      const $bookIsbn = searchBook({ISBN:route.queryParams['id']},this._service);
      const $externalBook = getexternalBook(route.queryParams['id'],this._service)
      
      return forkJoin($editorial, $author, $location, $book, $externalBook,$bookIsbn).pipe(
          map(response => ({
              data:{
                editorial:response[0],
                author:response[1],
                location:response[2],
                book:response[3],
                bookIsbn:response[5],
                externalBook:response[4]
              }
          })),catchError(err => {
            return of({
              data: null,
              error: err,
              message: 'Error on book  resolver, data couldn\'t be fetched'
            });
          })
      )
  }
}