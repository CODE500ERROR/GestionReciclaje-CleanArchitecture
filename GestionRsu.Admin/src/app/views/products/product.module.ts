import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../shared/shared.module';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgSelectModule } from '@ng-select/ng-select'; 


@NgModule({
  declarations: [ProductListComponent, ProductCreateComponent, ProductEditComponent ],
  imports: [

    ProductRoutingModule,
    CommonModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(), 
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgSelectModule ,
  ],
})
export class ProductModule { }
