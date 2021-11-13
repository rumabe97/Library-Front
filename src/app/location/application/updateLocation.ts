import { ILocation } from "../domain/ILocation";
import { LocationService } from "../infrastructure/LocationService";

export function updateLocation(location: ILocation, service: LocationService){
    return service.update(location);
}