import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {
  title ='Manager Login';
  displayvalue =''
  count=0
  getValue(val:string){
    console.warn(val);
    this.displayvalue=val;
  }

  counter(type:string)
  {
    type === 'add'?this.count++:this.count--;
    
  }

  
}
