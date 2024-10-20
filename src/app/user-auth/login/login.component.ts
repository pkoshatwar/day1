import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  getName(name:string,lastName:string)
  {
    alert(name);
    
    console.log(name,lastName);
  }
  getEvent(eve:any){
    console.error(eve);
    
  }
}
