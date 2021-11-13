import { ILocation } from "../domain/ILocation";
import { LocationService } from "../infrastructure/LocationService";

export function createUser(location: ILocation, service: LocationService){
    return service.createLocation(location);
}

