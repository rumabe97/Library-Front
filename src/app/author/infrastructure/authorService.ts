import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IList } from "../../user/domain/IList";
import { IAuthor } from "../domain/IAuthor";
import { AbstractAuthorService } from "./AbstractAuthorService";

@Injectable({
    providedIn: 'any',
})
export class AuthorService extends AbstractAuthorService {

    private BASE_URL: string = 'http://192.168.43.68:8080/';
    constructor(private http: HttpClient) {
        super();
    }

    get(id: string): Observable<IAuthor> {
        return this.http
            .get<IAuthor>(`${this.BASE_URL}author/${id}`);
    }

    update(author: IAuthor): Observable<IAuthor> {
        return this.http
        .put<IAuthor>(`${this.BASE_URL}author/${author.id}`, author);
    }

    createAuthor(author: IAuthor): Observable<IAuthor> {
        return this.http
            .post<IAuthor>(`${this.BASE_URL}author/create`, author);
    }

    search(params: any): Observable<IList<IAuthor>> {
        return this.http
            .get<IList<IAuthor>>(`${this.BASE_URL}author/search`, {params: new HttpParams({fromObject: this._clean(params)})});
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