import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
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
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { FileUploadModule } from 'ng2-file-upload';
import { FilterIsDeletedPipe } from '../shared/helpers/filter-isDeleted';
import { QuillModule } from 'ngx-quill';

import { ListUserComponent } from './users/list-user/list-user.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { MatTreeModule, MatDatepickerModule, MAT_DATE_LOCALE, MatRadioButton } from '@angular/material';
// ***** GESTION RSU ****/
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { ListPlantComponent } from './plant/list-plant/list-plant.component';
import { CreatePlantComponent } from './plant/create-plant/create-plant.component';
import { EditPlantComponent } from './plant/edit-plant/edit-plant.component';
import { ListProductComponent } from './product/product-list/list-product.component';
import { CreateProductComponent } from './product/product-create/create-product.component';
import { EditProductComponent } from './product/product-edit/edit-product.component';
import { CreateSeparationComponent } from './separation/create-separation/create-separation.component';
import { EditSeparationComponent } from './separation/edit-separation/edit-separation.component';
import { ListSeparationComponent } from './separation/list-separation/list-separation.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartReportComponent } from './reports/bar-chart-report/bar-chart-report.component';
import { PieChartComponent } from './reports/pie-chart/pie-chart.component';
import { ReportComponent } from './reports/report/report.component';


@NgModule({
  imports: [
    CommonModule,
    MatDatepickerModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatTreeModule,
    ChartsModule,
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean'],                                         // remove formatting button
        ]
      }
    }),
    FileUploadModule,
  ],

  exports: [
    MatDatepickerModule,
  ],
  providers: [ MatDatepickerModule, DatePipe, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    FilterIsDeletedPipe,

    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ListUserComponent,
    CreateUserComponent,
    EditUserComponent,
    
    ListPlantComponent,
    CreatePlantComponent,
    EditPlantComponent,

    ListCategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent,

    ListProductComponent,
    CreateProductComponent,
    EditProductComponent,

    CreateSeparationComponent,
    EditSeparationComponent,
    ListSeparationComponent,

    CreateUserComponent,
    EditUserComponent,
    ListUserComponent,
    BarChartReportComponent,
    PieChartComponent,
    ReportComponent,
  ]
})
export class ComponentsModule { }
