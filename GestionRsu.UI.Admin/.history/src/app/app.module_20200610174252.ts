
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './auth/login/login.component';
import { MatInputModule, MatDialogModule } from '@angular/material';
import { HasRoleDirective } from './shared/directives/hasRole.directive';
import { ToastrModule } from 'ngx-toastr';
import { ModalOkComponent } from './shared/helpers/modal-ok/modal-ok.component';
import { ModalConfirmComponent } from './shared/helpers/modal-confirm/modal-confirm.component';
import { ErrorInterceptorProvider } from './shared/helpers/error.interceptor';
import { NgxLoadingModule } from 'ngx-loading';
import { LoaderService } from './shared/services/loader.service';
import { LoaderInterceptor } from './shared/helpers/loader.interceptor';

export function token() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    LoginComponent,
    HasRoleDirective,
    ModalOkComponent,
    ModalConfirmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot({
      progressBar: true,
      positionClass: 'toast-bottom-right'
    }),
    RouterModule.forRoot(AppRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: token,
        whitelistedDomains: ['http://gestionrsu.api.devlights.com'],
        blacklistedRoutes: ['localhost:52676/api/auth']
      }
    }),
  ],
  providers: [
    ErrorInterceptorProvider,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  entryComponents: [ModalOkComponent, ModalConfirmComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
