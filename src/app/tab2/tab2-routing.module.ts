import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from '../tab1/books/infrastructure/ngComponents/book-detail/book-detail.component';
import { getBookResolverService } from '../tab1/books/infrastructure/resolver/getBookResolverService';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'book-detail/:id',
    component: BookDetailComponent,
    resolve: {response: getBookResolverService}
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
