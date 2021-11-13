import { BookService } from "../infrastructure/services/BookService";

export function searchBook(query: any, service: BookService){
    return service.search(query);
}