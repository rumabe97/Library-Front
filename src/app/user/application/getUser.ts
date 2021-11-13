import { UserService } from "../infrastructure/services/UserService";

export function getUSer(id: string, service: UserService){
    return service.get(id);
}