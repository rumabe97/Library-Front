import { IAuthor } from "src/app/author/domain/IAuthor";
import { IEditorial } from "src/app/editorial/domain/IEditorial";
import { ILocation } from "src/app/location/domain/ILocation";

export interface IBook {
    id?: string;
    isbn: string;
    title: string;
    country: string;
    type: String;
    idEditorial: string;
    idLocation: string;
    idAuthor: string;
    edition: string;
    area: string;
    description: string;
    imageLink: string;

    author?: IAuthor;
    location?: ILocation;
    editorial?: IEditorial;
}