import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { getexternalBook} from '../tab1/books/application/getExternalBook';
import { BookService } from '../tab1/books/infrastructure/services/BookService';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { searchBook } from '../tab1/books/application/searchBook';
import { ActivatedRoute, Router } from '@angular/router';
import { getBook } from '../tab1/books/application/getBook';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private scanner: BarcodeScanner,
              private _bookService :BookService,
              private emailComposer: EmailComposer,
              private _router: Router,
              private _route: ActivatedRoute,) {

    this.encodedData = "Programming isn't about what you know";
    
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    
  }
  ngOnInit(): void {
    this.scanBRcode();
  }

  scanBRcode() {
    let book:any;
    this.scanner.scan().then(res => {
        this.scannedBarCode = res;
        this._router.navigate([`../tab3/`], {relativeTo: this._route , queryParams:{id:res.text}});
      }).catch(err => {
        alert(err);
      });
  }
}
