import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { IAuto } from '../dynamic-filters/dynamic';
import { IBook } from './books/domain/IBook';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{
    _resolved:any;
    filters: IAuto[] = [];
    books:IBook[];
    
    queryPagination = { page: 0, size: 10 };
    queryOrder = {orderField: '', order: ''};
    queryFilters = {};
    
  constructor(private _route: ActivatedRoute,
              private scanner: BarcodeScanner,
              private _router: Router,
              private _emailComposer: EmailComposer) {}


  ngOnInit(): void {
    
  }

  ionViewWillEnter() {
    this._resolved = this._route.snapshot.data['response'];
    if (this._resolved.error) {
        console.error(this._resolved.error.message, this._resolved.error.error);
        const {error: {message, id}} = this._resolved.error;
    }

    if (this._resolved.data) {
        this.books=this._resolved.data.content;
    }
  }
  goToBookDetail(book: IBook){
    this._router.navigate([`book-detail/${book.id}`], {relativeTo: this._route});
  }

  generateBarCode(book:any) {
      this.scanner.encode(this.scanner.Encode.TEXT_TYPE, book.id).then(
        res => {
          console.log(res)
        }, error => {
          alert(error);
        }
      );
  }
}
