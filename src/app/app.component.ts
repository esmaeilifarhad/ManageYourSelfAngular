import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'ManageYourSelf'
  isEnabled:boolean=true;

  public onInputChnaged(e: Event) {
    this.name = (<HTMLInputElement>e.target).value;
  }


}
