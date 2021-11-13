import { IAuthor } from "../domain/IAuthor";
import { AuthorService } from "../infrastructure/authorService";

export function updateAuthor(author: IAuthor, service: AuthorService){
    return service.update(author);
}