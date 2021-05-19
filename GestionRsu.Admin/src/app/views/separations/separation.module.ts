import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeparationRoutingModule } from './separation-routing.module';
import { SeparationEditComponent } from './separation-edit/separation-edit.component';
import { SeparationCreateComponent } from './separation-create/separation-create.component';
import { SeparationListComponent } from './separation-list/separation-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select'; 

@NgModule({
  declarations: [
    SeparationEditComponent,
    SeparationCreateComponent,
    SeparationListComponent
  ],
  imports: [
    CommonModule,
    SeparationRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(), 
    ReactiveFormsModule,
    FormsModule,
    SharedModule ,
    NgSelectModule ,

  ]
})
export class SeparationModule { }
