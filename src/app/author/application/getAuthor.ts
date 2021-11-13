import { AuthorService } from "../infrastructure/authorService";

export function getUSer(id: string, service: AuthorService){
    return service.get(id);
}