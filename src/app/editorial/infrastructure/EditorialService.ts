import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IList } from "../../user/domain/IList";
import { IEditorial } from "../domain/IEditorial";
import { AbstractEditorialService } from "./AbstractEditorialService";

@Injectable({
    providedIn: 'any',
})
export class EditorialService extends AbstractEditorialService {
    
    private BASE_URL: string = 'http://192.168.43.68:8080/';
    constructor(private http: HttpClient) {
        super();
    }

    get(id: string): Observable<IEditorial> {
        return this.http
            .get<IEditorial>(`${this.BASE_URL}editorial/${id}`);
    }

    update(editorial: IEditorial): Observable<IEditorial> {
        return this.http
        .put<IEditorial>(`${this.BASE_URL}editorial/${editorial.id}`, editorial);
    }

    createEditorial(editorial: IEditorial): Observable<IEditorial> {
        return this.http
            .post<IEditorial>(`${this.BASE_URL}editorial/create`, editorial);
    }

    search(params: any): Observable<IList<IEditorial>> {
        return this.http
            .get<IList<IEditorial>>(`${this.BASE_URL}editorial/search`, {params: new HttpParams({fromObject: this._clean(params)})});
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