import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'ManageYourSelf'
  isEnabled:boolean=true;
  switchProperty: string = "c"
  ratings: number[] = [3.5, 5, 2.5, 1, 4, 0.6]

  public onInputChnaged(e: Event) {
    this.name = (<HTMLInputElement>e.target).value;
  }

  public onStarClicked(rating: number) {
    debugger
    console.log(`the rating ${rating} is clicked`)

  }


}
