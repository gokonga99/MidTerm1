import { Component, Input, Output } from '@angular/core';
import { ChildUser } from '../child-user';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  @Input() inputUser:any = "User"; 

  ChildUsers:ChildUser[]=[
    {
      id: '2123',
      FirstName: 'soso',
      LastName: 'sosodze',
      DateOfBirth: '15/12/1900',
      PhoneNumber: '59955555',
      Email: 'soso@mail.com'
    },
    {
      id: '1234',
      FirstName: 'vaso',
      LastName: 'vasadze',
      DateOfBirth: '15/10/2000',
      PhoneNumber: '5596156',
      Email: 'vaso@mail.com'
    },
  ];

@Output() newEmitter = new EventEmitter();

  editUser(user:ChildUser){
    this.newEmitter.emit(user);
  }



}
