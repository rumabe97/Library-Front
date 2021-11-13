import { LocationService } from "../infrastructure/LocationService";

export function searchLocation(query: any, service: LocationService){
    return service.search(query);
}