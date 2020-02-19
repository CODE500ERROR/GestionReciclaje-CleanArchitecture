import { NgModule } from '@angular/core';
import { MenuItems } from './menu-items/menu-items';
import { AlertifyService } from './services/alertify.service';
import { ListUserResolver } from './resolvers/list-user-resolvers';
import { DetailUserResolver } from './resolvers/detail-user-resolvers';
import { AuthGuard } from './guards/auth.guard';
import { RolesListResolver } from './resolvers/list-roles-resolvers';
import { DetailRoleResolver } from './resolvers/detail-role-resolvers';
import { ClaimsListResolver } from './resolvers/list-claims-resolvers';
import { ListBreachResolver } from './resolvers/list-breach-resolvers';
import { DetailBreachResolver } from './resolvers/detail-breach-resolvers';
import { ListHolidayResolver } from './resolvers/list-holiday-resolvers';
import { DetailCategoryResolver } from './resolvers/detail-category-resolvers';
import { ListCategoryResolver } from './resolvers/list-category-resolvers';



@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [],

  providers: [ MenuItems ,
    AlertifyService,
    ClaimsListResolver,
    DetailUserResolver,
    ListUserResolver,
    RolesListResolver,
    DetailRoleResolver,
    DetailBreachResolver,
    ListBreachResolver,
    ListHolidayResolver,
    AuthGuard,

    ListCategoryResolver,
    DetailCategoryResolver,


  ],
  entryComponents: [],
})
export class SharedModule { }
