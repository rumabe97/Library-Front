import { EditorialService } from "../infrastructure/EditorialService";

export function getEditorial(id: string, service: EditorialService){
    return service.get(id);
}