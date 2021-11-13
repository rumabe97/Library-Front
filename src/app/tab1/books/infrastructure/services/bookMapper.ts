import { Injectable } from "@angular/core";
import { createAuthor } from "src/app/author/application/createAuthor";
import { searchAuthor } from "src/app/author/application/searchAuthor";
import { IAuthor } from "src/app/author/domain/IAuthor";
import { AuthorService } from "src/app/author/infrastructure/authorService";
import { IBook } from "../../domain/IBook";

@Injectable({
    providedIn:'any'
})
export class bookMapper{
    constructor(private _authorService:AuthorService){}

    mapTo(params:any) : IBook{
        return{
            isbn:params.volumeInfo?.industryIdentifiers[1]?.identifier,
            area:'',//no
            country:params?.saleInfo?.country,
            description:params.volumeInfo?.description,
            edition:'',//no
            idAuthor:'',//no
            idEditorial:'',//no
            idLocation:'',//no
            imageLink:'',
            title:params.volumeInfo?.title,
            type:params.volumeInfo?.categories[0],
            author:this.addAuthor(params.volumeInfo)
        }
    }

    addAuthor(author:any): IAuthor{

        if(!author.authors) return;
        const a = author.authors[0].split(' ');
        const n = a[0];
        const sr = a[1];
  
        const au:IAuthor={
            name:n,
            surname:sr
        }
  
        searchAuthor({...au},this._authorService).subscribe(res =>{
            if(res.content.length===0){
                createAuthor(au,this._authorService).subscribe(res=> 
                  {
                    return res})
            }
            if(res.content.length!==0) { 
              return res.content[0]; 
            }
        })
    }
}