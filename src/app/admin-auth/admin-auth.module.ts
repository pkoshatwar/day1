import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



@NgModule({
  declarations: [
    AdminloginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdminloginComponent
  ]
})
export class AdminAuthModule { }
