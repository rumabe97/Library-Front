import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularMaterialModule} from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { BookDetailComponent } from './tab1/books/infrastructure/ngComponents/book-detail/book-detail.component';
import { CreateUpdateBookComponent } from './tab1/books/infrastructure/ngComponents/create-update-book/create-update-book.component';
import { CreateAuthorComponent } from './author/infrastructure/ng-components/create-author/create-author.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, BookDetailComponent,CreateUpdateBookComponent, CreateAuthorComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,AngularMaterialModule,HttpClientModule],
  providers: [ BarcodeScanner,EmailComposer,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
