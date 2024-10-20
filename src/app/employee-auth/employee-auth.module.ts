import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpLoginComponent } from './emp-login/emp-login.component';



@NgModule({
  declarations: [
    EmpLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmpLoginComponent
  ]
})
export class EmployeeAuthModule { }
