import { AuthorService } from "../infrastructure/authorService";

export function searchAuthor(query: any, service: AuthorService){
    return service.search(query);
}