import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantCreateComponent } from './plant-create/plant-create.component';
import { PlantEditComponent } from './plant-edit/plant-edit.component';
import { PlantListComponent } from './plant-list/plant-list.component';

const routes: Routes = [
  {
    path: '',
    component: PlantListComponent,
  },
  {
    path: 'crear',
    component: PlantCreateComponent,
  },
  {
    path: 'editar/:id',
    component: PlantEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantRoutingModule { }
