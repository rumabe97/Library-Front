import { IAuthor } from "../domain/IAuthor";
import { AuthorService } from "../infrastructure/authorService";

export function createAuthor(author: IAuthor, service: AuthorService){
    return service.createAuthor(author);
}

