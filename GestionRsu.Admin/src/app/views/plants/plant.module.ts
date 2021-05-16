import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantRoutingModule } from './plant-routing.module';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantCreateComponent } from './plant-create/plant-create.component';
import { PlantEditComponent } from './plant-edit/plant-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select'; 

@NgModule({
  declarations: [
    PlantListComponent,
    PlantCreateComponent,
    PlantEditComponent 
  ],
  imports: [
    CommonModule,
    PlantRoutingModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(), 
    ReactiveFormsModule, 
    FormsModule,
    SharedModule,
    NgSelectModule 
    
  ]
})
export class PlantModule { }
