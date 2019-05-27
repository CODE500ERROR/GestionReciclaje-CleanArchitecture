import {Routes} from '@angular/router';
import { ListUserComponent } from './users/list-user/list-user.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DetailUserResolver } from './_resolvers/detail-user-resolvers';
import { ListUserResolver } from './_resolvers/list-user-resolvers';
import { HomeComponent } from './home/home.component';
import { ListPlantResolver } from './_resolvers/list-plant-resolvers';
import { CreatePlantComponent } from './plant/create-plant/create-plant.component';
import { EditPlantComponent } from './plant/edit-plant/edit-plant.component';
import { ListPlantComponent } from './plant/list-plant/list-plant.component';
import { DetailPlantResolver } from './_resolvers/detail-plant-resolvers';
import { DetailCategoryResolver } from './_resolvers/detail-category-resolvers';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ListCategoryResolver } from './_resolvers/list-category-resolvers';
import { ListSubCategoryResolver } from './_resolvers/list-subCategory-resolvers';
import { ListSubCategoryComponent } from './subCategory/list-subCategory/list-subCategory.component';
import { CreateSubCategoryComponent } from './subCategory/create-subCategory/create-subCategory.component';
import { EditSubCategoryComponent } from './subCategory/edit-subCategory/edit-subCategory.component';
import { DetailSubCategoryResolver } from './_resolvers/detail-subCategory-resolvers';



export const appRoutes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {
      path: '',
        runGuardsAndResolvers: 'pathParamsChange',
       // runGuardsAndResolvers: () => false,
       canActivate: [AuthGuard],
        children: [

            // ******************** USERS *******************
            {path: 'users', component: ListUserComponent, resolve: {users: ListUserResolver}},
            {path: 'user/edit/:id', component: EditUserComponent, resolve: {user: DetailUserResolver} },
            {path: 'user/create', component: CreateUserComponent},

            // ******************** PLANT *******************
            {path: 'Plant', component: ListPlantComponent , resolve: {plants: ListPlantResolver} },
            {path: 'Plant/create', component: CreatePlantComponent  },
            {path: 'Plant/edit/:id', component: EditPlantComponent , resolve: {plant: DetailPlantResolver} },


            // ******************** CATEGORY *******************
            {path: 'category', component: ListCategoryComponent , resolve: {categories: ListCategoryResolver} },
            {path: 'category/create', component: CreateCategoryComponent  },
            {path: 'category/edit/:id', component: EditCategoryComponent , resolve: {category: DetailCategoryResolver} },

            // ******************** SUBCATEGORY *******************
            {path: 'subCategory', component: ListSubCategoryComponent , resolve: {subCategories: ListSubCategoryResolver} },
            {path: 'subCategory/create', component: CreateSubCategoryComponent  },
            {path: 'subCategory/edit/:id', component: EditSubCategoryComponent , resolve: {subCategory: DetailSubCategoryResolver} },
        ]
     },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
];
