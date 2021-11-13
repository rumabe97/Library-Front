import { UserService } from "../infrastructure/services/UserService";

export function searchUser(query: any, service: UserService){
    return service.search(query);
}