import { EditorialService } from "../infrastructure/EditorialService";

export function searchEditorial(query: any, service: EditorialService){
    return service.search(query);
}