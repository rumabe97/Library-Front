import { BookService } from "../infrastructure/services/BookService";

export function getExtraExternalBook(url: string, service: BookService){
    return service.getExtraExternalBook(url);
}