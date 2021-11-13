import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './books/infrastructure/ngComponents/book-detail/book-detail.component';
import { allBooksResolverService } from './books/infrastructure/resolver/allBooksResolverService';
import { getBookResolverService } from './books/infrastructure/resolver/getBookResolverService';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    resolve: {response: allBooksResolverService}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
