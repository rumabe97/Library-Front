import { Observable } from "rxjs";
import { IList } from "../../domain/IList";
import { IUser } from "../../domain/IUser";

export abstract class AbstractUserService {

    abstract get(id: string): Observable<IUser>;

    abstract update(user: IUser): Observable<IUser>;

    abstract createUser(user: IUser): Observable<IUser>;

    abstract search(params: any): Observable<IList<IUser>>;
}