import { Observable } from "rxjs";
import { IList } from "../../../../user/domain/IList";
import { IBook } from "../../domain/IBook";

export abstract class AbstractBookService {

    abstract get(id: string): Observable<IBook>;

    abstract update(user: IBook): Observable<IBook>;

    abstract createUser(user: IBook): Observable<IBook>;

    abstract search(params: any): Observable<IList<IBook>>;

    abstract getExternalBook(isbn:string): Observable<any>;
}