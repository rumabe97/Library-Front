import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { updateBook } from '../../../application/updateBook';
import { IBook } from '../../../domain/IBook';
import { bookMapper } from '../../services/bookMapper';
import { BookService } from '../../services/BookService';
import Swal from 'sweetalert2'
import { createBook } from '../../../application/createBook';
import { NavController } from '@ionic/angular';
import { getExtraExternalBook } from '../../../application/getExtraExternalBook';
import { AuthorService } from 'src/app/author/infrastructure/authorService';
import { createAuthor } from 'src/app/author/application/createAuthor';
import { IAuthor } from 'src/app/author/domain/IAuthor';
import { searchAuthor } from 'src/app/author/application/searchAuthor';

@Component({
  selector: 'app-create-update-book',
  templateUrl: './create-update-book.component.html',
  styleUrls: ['./create-update-book.component.scss'],
})
export class CreateUpdateBookComponent implements OnInit {
  _resolved:any;
  book:IBook;
  aux: string[];
  form:FormGroup;
  count:number=0;
  
  constructor(private _route: ActivatedRoute,
              private scanner: BarcodeScanner,
              private _router: Router,
              private _bookMapper:bookMapper,
              private _fb: FormBuilder,
              private _service :BookService,
              private _authorService :AuthorService) { }

  ngOnInit() {
    this._resolved = this._route.snapshot.data['response'];
    if(this._resolved.data.book?.content.length===1)this.book= this._resolved.data.book.content[0];
    if(this._resolved.data.bookIsbn?.content.length===1)this.book=this._resolved.data.bookIsbn.content[0];
    if(this._resolved.data.externalBook.items && !this.book) this.book=this._bookMapper.mapTo(this._resolved.data.externalBook.items[0]);
    this.initForm();
  }

   ionViewDidEnter() {
     this.count++;
     if(this.count>1){
          this.book=null;
          this._resolved = this._route.snapshot.data['response'];
          if(this._resolved.data.book?.content.length===1)this.book= this._resolved.data.book.content[0];
          if(this._resolved.data.bookIsbn?.content.length===1)this.book=this._resolved.data.bookIsbn.content[0];
          if(this._resolved.data.externalBook.items && !this.book)  this.book=this._bookMapper.mapTo(this._resolved.data.externalBook.items[0]);
         this.initForm();
   }
  }

  initForm(){
    const defaultLocation = this.book?.location ? `${this.book?.location?.building} ${this.book?.location?.floor} floor shelving ${this.book?.location?.shelving}, ${this.book?.location?.city}` : '';
    const defaultAuthor = this.book?.author ? `${this.book?.author?.name} ${this.book?.author?.surname}` : '';

    this.form = this._fb.group({
      isbn:[this.book?.isbn ?? ''],
      title:[this.book?.title ?? ''],
      country:[this.book?.country ?? ''],
      description:[this.book?.description ?? ''],
      editorial: [this.book?.editorial?.name ?? ''],
      location: [defaultLocation],
      author:[ defaultAuthor],
      type : [this.book?.type ?? ''],
      imageLink: [this.book?.imageLink ?? '']
    })
  }

  onSubmit(){
    let updatedBook:IBook;

    const idEditorial = this._resolved.data.editorial.content.find(e => e.name===this.form.get('editorial').value)?.id;
    const idAuthor = this._resolved.data.author.content.find(e => `${e.name} ${e.surname}` === this.form.get('author').value)?.id;
    const idLocation= this._resolved.data.location.content.find(e=> `${e.building} ${e.floor} floor shelving ${e.shelving}, ${e.city}` ===this.form.get('location').value)?.id;
    updatedBook=this.form.value;
    updatedBook.idEditorial=idEditorial;
    updatedBook.idAuthor=idAuthor;
    updatedBook.idLocation=idLocation;

    if(this.book?.id){
      updatedBook.id=this.book.id;
      updateBook(updatedBook,this._service).subscribe(res => {
        Swal.fire({
          icon:'success',
          title:'success',
          text:'Changes where saved',
          timer:1500,
          confirmButtonColor:'#db5e5e'
        });
        this._router.navigate([`../tab1/`], {relativeTo: this._route,  replaceUrl : true});
      })
    }

    if(!this.book?.id){
      createBook(updatedBook,this._service).subscribe(res=> {
        Swal.fire({
          icon:'success',
          title:'success',
          text:'Book where created',
          timer:1500,
          confirmButtonColor:'#db5e5e'
        });
        this._router.navigate([`../tab1/`], {relativeTo: this._route,  replaceUrl : true});
      })
    }
  }

}
