import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent {
  title ='Manager Login';
  displayvalue =''
  display=''
  count1=0
  count=0
  getValue(val:string){
    console.warn(val);
    this.displayvalue=val;
  }

  counter(type:string)
  {
    type === 'add'?this.count++:this.count--;
    
  }

  
  counter1(type:string){
    type === 'add1'?this.count1++:this.count1--;
  }
  
  name="pk"
  disable=false;
}
