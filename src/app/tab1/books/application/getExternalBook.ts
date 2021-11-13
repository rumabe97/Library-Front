import { BookService } from "../infrastructure/services/BookService";

export function getexternalBook(isbn: string, service: BookService){
    return service.getExternalBook(isbn);
}