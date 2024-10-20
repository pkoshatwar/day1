import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerLoginComponent } from './manager-login/manager-login.component';



@NgModule({
  declarations: [
    ManagerLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ManagerLoginComponent
  ]
})
export class ManagerAuthModule { }
