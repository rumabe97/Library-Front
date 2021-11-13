import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IList } from "../../domain/IList";
import { IUser } from "../../domain/IUser";
import { AbstractUserService } from "./AbstractUserService";

@Injectable({
    providedIn: 'any',
})
export class UserService extends AbstractUserService {

    private BASE_URL: string = 'http://192.168.43.68:8080/';
    constructor(private http: HttpClient) {
        super();
    }

    get(id: string): Observable<IUser> {
        return this.http
            .get<IUser>(`${this.BASE_URL}user/${id}`);
    }

    update(user: IUser): Observable<IUser> {
        return this.http
        .put<IUser>(`${this.BASE_URL}user/${user.id}`, user);
    }

    createUser(user: IUser): Observable<IUser> {
        return this.http
            .post<IUser>(`${this.BASE_URL}user/create`, user);
    }

    search(params: any): Observable<IList<IUser>> {
        return this.http
            .get<IList<IUser>>(`${this.BASE_URL}user/search`, {params: new HttpParams({fromObject: this._clean(params)})});
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