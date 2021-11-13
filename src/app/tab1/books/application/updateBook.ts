import { IBook } from "../domain/IBook";
import { BookService } from "../infrastructure/services/BookService";

export function updateBook(book: IBook, service: BookService){
    return service.update(book);
}