import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: 'crear',
    component: CategoryCreateComponent,
  },
  {
    path: 'editar/:id',
    component: CategoryEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
