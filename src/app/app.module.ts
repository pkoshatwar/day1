import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { EmployeeAuthModule } from './employee-auth/employee-auth.module';
import { ManagerAuthModule } from './manager-auth/manager-auth.module';

@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    AdminAuthModule,
    EmployeeAuthModule,
    ManagerAuthModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
