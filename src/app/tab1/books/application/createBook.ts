import { IBook } from "../domain/IBook";
import { BookService } from "../infrastructure/services/BookService";

export function createBook(book: IBook, service: BookService){
    return service.createUser(book);
}

