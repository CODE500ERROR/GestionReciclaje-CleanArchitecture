import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteCreateComponent } from './quote-create/quote-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';
import { SortableHeaderDirective } from '../shared/directives/sortable.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [QuoteListComponent, QuoteCreateComponent,QuoteEditComponent],
  imports: [
    CommonModule,
    QuoteRoutingModule, 
    PaginationModule.forRoot(),
    ModalModule.forRoot(), 
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
})
export class QuoteModule { }
