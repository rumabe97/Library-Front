import { Observable } from "rxjs";
import { IList } from "../../user/domain/IList";
import { IAuthor } from "../domain/IAuthor";

export abstract class AbstractAuthorService {

    abstract get(id: string): Observable<IAuthor>;

    abstract update(author: IAuthor): Observable<IAuthor>;

    abstract createAuthor(author: IAuthor): Observable<IAuthor>;

    abstract search(params: any): Observable<IList<IAuthor>>;
}