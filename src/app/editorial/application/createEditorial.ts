import { IEditorial } from "../domain/IEditorial";
import { EditorialService } from "../infrastructure/EditorialService";

export function createEditorial(editorial: IEditorial, service: EditorialService){
    return service.createEditorial(editorial);
}

