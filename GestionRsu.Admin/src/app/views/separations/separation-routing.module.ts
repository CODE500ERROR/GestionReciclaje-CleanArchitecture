import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from '../articles/category-create/category-create.component';
import { CategoryEditComponent } from '../articles/category-edit/category-edit.component';
import { SeparationCreateComponent } from './separation-create/separation-create.component';
import { SeparationEditComponent } from './separation-edit/separation-edit.component';
import { SeparationListComponent } from './separation-list/separation-list.component';

const routes: Routes = [
  {
    path: '',
    component: SeparationListComponent,
  },
  {
    path: 'crear',
    component: SeparationCreateComponent,
  },
  {
    path: 'editar/:id',
    component: SeparationEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeparationRoutingModule { }
