import { Observable } from "rxjs";
import { IList } from "../../user/domain/IList";
import { IEditorial } from "../domain/IEditorial";

export abstract class AbstractEditorialService {

    abstract get(id: string): Observable<IEditorial>;

    abstract update(user: IEditorial): Observable<IEditorial>;

    abstract createEditorial(user: IEditorial): Observable<IEditorial>;

    abstract search(params: any): Observable<IList<IEditorial>>;
}