import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxEditorModule } from 'ngx-editor';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [CategoryListComponent, CategoryCreateComponent, CategoryEditComponent ],
  imports: [

    CategoryRoutingModule,
    CommonModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(), 
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(), 
    FormsModule,
    SharedModule
    
  ],
  providers:[[DatePipe]]
})
export class CategoryModule { }
