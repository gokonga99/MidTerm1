import { Component } from '@angular/core';
import { ParentUser } from './parent-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gocha';



data = [
  {
  firstname:'gocha',
  lastname:'gogishvili',
  age:25,
},
{
  firstname:'gogi',
  lastname:'giorgadze',
  age:24,

},
{
  firstname:'nika',
  lastname:'tsulaia',
  age:22,

},
{
  firstname:'nini',
  lastname:'naxucrishvili',
  age :19,

},
{
  firstname:'john',
  lastname:'jhonson',
  age:2,

},
];

User:ParentUser[]=[
  {
    id: '1561',
    FirstName: 'vano',
    LastName: 'vanoshvili',
    DateOfBirth: '15/12/2000',
    PhoneNumber: '599559955',
    Email: 'vano@mail.com'
  },
  {
    id: '15261',
    FirstName: 'gela',
    LastName: 'gelaia',
    DateOfBirth: '15/12/2001',
    PhoneNumber: '59923455',
    Email: 'gela@mail.com'
  }
];

childuser: any[]=[];

eventcatcher(any:any){

  this.childuser.push(any);

}




}




