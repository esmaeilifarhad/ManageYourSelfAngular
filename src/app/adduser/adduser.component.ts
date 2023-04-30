import { Component, EventEmitter, Output } from '@angular/core';
import { user } from '../decoupling-component/app-interface';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  users: user[] = [
    {
      email: "farhad@info.com",
      password: "86112",
      address: "123  as"
    },
    {
      email: "ario@info.com",
      password: "86112",
      address: "123  as"
    },
    {
      email: "elahe@info.com",
      password: "9853",
      address: "123  as"
    },
    {
      email: "davood@info.com",
      password: "3698",
      address: "123  as"
    },
  ]

  @Output() onAddUserClicked=new EventEmitter<user[] >();

  public onAddUser(email: string, password: string, address: string, e: Event) {
    e.preventDefault();
    let u: user = {
      email: email,
      password: password,
      address: address
    }
    this.users.push(u)
    this.onAddUserClicked.emit(this.users);
  }
}
