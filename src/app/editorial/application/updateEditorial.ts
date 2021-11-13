import { IEditorial } from "../domain/IEditorial";
import { EditorialService } from "../infrastructure/EditorialService";

export function updateEditorial(editorial: IEditorial, service: EditorialService){
    return service.update(editorial);
}