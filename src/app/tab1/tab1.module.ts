import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AppModule } from '../app.module';
import { DynamicFiltersComponent } from '../dynamic-filters/dynamic-filters.component';
import { AutocompleteComponent } from '../dynamic-filters/auto-complete/auto-complete.component';
import { AutoselectComponent } from '../dynamic-filters/autoselect/autoselect.component';
import { Auto } from '../dynamic-filters/dynamic';
import { CreateUpdateBookComponent } from './books/infrastructure/ngComponents/create-update-book/create-update-book.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page, DynamicFiltersComponent,AutocompleteComponent,AutoselectComponent],
  exports:[
    DynamicFiltersComponent,
    AutocompleteComponent,
    AutoselectComponent]
})
export class Tab1PageModule {}
