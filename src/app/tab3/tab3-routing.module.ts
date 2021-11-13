import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateBookComponent } from '../tab1/books/infrastructure/ngComponents/create-update-book/create-update-book.component';
import { createUpdateBookResolverService } from '../tab1/books/infrastructure/resolver/createUpdateBookResolverService';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: CreateUpdateBookComponent,
    resolve: {response: createUpdateBookResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
