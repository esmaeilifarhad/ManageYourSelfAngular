import { Component, Input } from '@angular/core';
import { user } from '../decoupling-component/app-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent {
@Input() users1:user[]=[]
}
