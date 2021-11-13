import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IList } from "../../../../user/domain/IList"
import { IBook } from "../../domain/IBook";
import { AbstractBookService } from "./AbstractBookService";

@Injectable({
    providedIn: 'any',
})

export class BookService extends AbstractBookService {

    private BASE_URL: string = 'http://192.168.43.68:8080/';
    private BASE_URL_EXTERNAL:string ='https://www.googleapis.com/';

    constructor(private http: HttpClient) {
        super();
    }

    get(id: string): Observable<IBook> {
        return this.http
            .get<IBook>(`${this.BASE_URL}Book/${id}`);
    }

    update(book: IBook): Observable<IBook> {
        return this.http
        .put<IBook>(`${this.BASE_URL}book/${book.id}`, book);
    }

    createUser(book: IBook): Observable<IBook> {
        return this.http
        .post<IBook>(`${this.BASE_URL}book/create`, book);
    }

    search(params: any): Observable<IList<IBook>> {
        return this.http
            .get<IList<IBook>>(`${this.BASE_URL}Book/search`, {params: new HttpParams({fromObject: this._clean(params)})});
    }

        
    getExternalBook(isbn: string): Observable<any> {
        return this.http
            .get<IList<any>>(`${this.BASE_URL_EXTERNAL}books/v1/volumes?q=isbn:${isbn}`, {});
    }

    getExtraExternalBook(url:string) : Observable<any>{
        return this.http.get<IList<any>>(url,{});
    }

    private _clean(object): any { 
        const cleaned = {}; 
        const keys = Object.keys(object); 
        keys.forEach(key => { 
            if (object[key]) { cleaned[key] = object[key]; } 
        }); 
        return cleaned; 
    }
}