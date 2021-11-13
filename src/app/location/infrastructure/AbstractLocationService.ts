import { Observable } from "rxjs";
import { IList } from "../../user/domain/IList";
import { ILocation } from "../domain/ILocation";

export abstract class AbstractLocationService {

    abstract get(id: string): Observable<ILocation>;

    abstract update(location: ILocation): Observable<ILocation>;

    abstract createLocation(location: ILocation): Observable<ILocation>;

    abstract search(params: any): Observable<IList<ILocation>>;
}