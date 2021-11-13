import { LocationService } from "../infrastructure/LocationService";

export function getLocation(id: string, service: LocationService){
    return service.get(id);
}