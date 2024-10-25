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

  show = "yesd"; 
//else-if or multiple conditions
  color = "red";
//Switch Case
  switchColor="brown"
 
//For Loop
  user =["Prathamesh","Rohit","Rohan","Tushar","Yash"]
  userdetails=[
  {username:"Prathamesh", contact:"85296"},
  {username:"Rohit", contact:"85296"},
  {username:"Rohan", contact:"85262"},
  {username:"Tushar", contact:"98474"},
  {username:"Yash", contact:"57477"},
  ]

//nested for loop

users=[
{username:"Prakash", contact:"85296",socialmedia:["youtube","facebook"]},
{username:"Rajesh", contact:"85296",socialmedia:["linkedIn","twitter"]},
{username:"Shyam", contact:"85262",socialmedia:["twitch","facebook"]},
{username:"Baburao", contact:"98474",socialmedia:["youtube","Instagram"]},
{username:"Raju", contact:"57477",socialmedia:["snapchat","telegram"]},
]

// Style / Dynamic Binding
color1 = "Red";
bgColor="Skyblue"
updateColor(){
  this.color1="green"
  this.bgColor="Yellow"
}
}
