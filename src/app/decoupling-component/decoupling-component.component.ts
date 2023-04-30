import { Component } from '@angular/core';
import { user } from './app-interface';


@Component({
  selector: 'app-decoupling-component',
  templateUrl: './decoupling-component.component.html',
  styleUrls: ['./decoupling-component.component.css']
})
export class DecouplingComponentComponent {

  users2: user[] = [];
  public userAdded(users: user[]) {

    this.users2 = users;
  }

}
