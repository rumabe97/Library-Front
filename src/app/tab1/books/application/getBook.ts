import { BookService } from "../infrastructure/services/BookService";

export function getBook(id: string, service: BookService){
    return service.get(id);
}