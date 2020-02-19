import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ListRoleComponent } from './role/list-role/list-role.component';
import { RolesListResolver } from '../shared/resolvers/list-roles-resolvers';
import { ListUserComponent } from './users/list-user/list-user.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { DetailRoleResolver } from '../shared/resolvers/detail-role-resolvers';
import { ClaimsListResolver } from '../shared/resolvers/list-claims-resolvers';
import { ListUserResolver } from '../shared/resolvers/list-user-resolvers';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DetailUserResolver } from '../shared/resolvers/detail-user-resolvers';
import { ListBreachResolver } from '../shared/resolvers/list-breach-resolvers';
import { CreateBreachComponent } from './breach/create-breach/create-breach/create-breach.component';
import { EditBreachComponent } from './breach/edit-breach/edit-breach/edit-breach.component';
import { DetailBreachResolver } from '../shared/resolvers/detail-breach-resolvers';
import { ListBreachComponent } from './breach/list-breach/list-breach.component';
import { ListHolidayComponent } from './holiday/list-holiday/list-holiday/list-holiday.component';
import { ListHolidayResolver } from '../shared/resolvers/list-holiday-resolvers';
import { ClientCreateComponent } from './client/client-create/client-create/client-create.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ListCategoryResolver } from '../shared/resolvers/list-category-resolvers';

export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'lists',
    component: ListsComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'expansion',
    component: ExpansionComponent
  },
  {
    path: 'chips',
    component: ChipsComponent
  },
  {
    path: 'toolbar',
    component: ToolbarComponent
  },
  {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'dialog',
    component: DialogComponent
  },
  {
    path: 'tooltip',
    component: TooltipComponent
  },
  {
    path: 'snackbar',
    component: SnackbarComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },

  // *USERS*/
  {
    path: 'usuarios',
    component: ListUserComponent,
    resolve: { users: ListUserResolver },
  },

  {
    path: 'usuarios/crear',
    component: CreateUserComponent,
  },


  {
    path: 'usuarios/editar/:id',
    component: EditUserComponent,
     resolve: { user: DetailUserResolver },
  },


  // **********ROLES***********/
  {
    path: 'roles',
    component: ListRoleComponent,
    resolve: { roles: RolesListResolver },
  },
  {
    path: 'roles/crear',
    component: CreateRoleComponent,
     // resolve: { claims: ClaimsListResolver },
  },
  {
    path: 'roles/editar/:id',
    component: EditRoleComponent,
     resolve: { role: DetailRoleResolver },
  },


  // ******************** CATEGORY *******************
{
  path: 'category',
  component: ListCategoryComponent,
  resolve: { categories: ListCategoryResolver },
  // data: { roles: ['Admin', 'Super Admin'] }
},

  // *****INCUMPLIMIENTOS****** /
  {
    path: 'incumplimientos',
    component: ListBreachComponent,
    resolve: { breachs: ListBreachResolver },
  },
  {
    path: 'incumplimiento/editar/:id',
    component: EditBreachComponent,
    resolve: { breach: DetailBreachResolver },
  },
  {
    path: 'incumplimiento/crear',
    component: CreateBreachComponent,
  },
   // *****HOLIDAYS****** /
   {
    path: 'feriados',
    component: ListHolidayComponent,
    resolve: { holidays: ListHolidayResolver },
  },

  // *****CLIENTS****** /
  {
    path: 'cliente/crear',
    component: ClientCreateComponent,
  },
];
