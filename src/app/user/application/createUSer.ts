import { IUser } from "../domain/IUser";
import { UserService } from "../infrastructure/services/UserService";

export function createUser(user: IUser, service: UserService){
    return service.createUser(user);
}

