import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IList } from "../../user/domain/IList";
import { ILocation } from "../domain/ILocation";
import { AbstractLocationService } from "./AbstractLocationService";

@Injectable({
    providedIn: 'any',
})
export class LocationService extends AbstractLocationService {

    private BASE_URL: string = 'http://192.168.43.68:8080/';
    constructor(private http: HttpClient) {
        super();
    }

    get(id: string): Observable<ILocation> {
        return this.http
            .get<ILocation>(`${this.BASE_URL}location/${id}`);
    }

    update(location: ILocation): Observable<ILocation> {
        return this.http
        .put<ILocation>(`${this.BASE_URL}location/${location.id}`, location);
    }

    createLocation(location: ILocation): Observable<ILocation> {
        return this.http
            .post<ILocation>(`${this.BASE_URL}location/create`, location);
    }

    search(params: any): Observable<IList<ILocation>> {
        return this.http
            .get<IList<ILocation>>(`${this.BASE_URL}location/search`, {params: new HttpParams({fromObject: this._clean(params)})});
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