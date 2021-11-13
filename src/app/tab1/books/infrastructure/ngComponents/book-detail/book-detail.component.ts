import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/user/domain/IUser';
import { IBook } from '../../../domain/IBook';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {

  private _resolved: any;
  book:IBook;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._resolved = this._route.snapshot.data['response'];
    this.book = this._resolved.data;
    console.log(this.book)
  }

}
