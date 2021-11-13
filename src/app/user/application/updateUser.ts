import { IUser } from "../domain/IUser";
import { UserService } from "../infrastructure/services/UserService";

export function updateUser(user: IUser, service: UserService){
    return service.update(user);
}