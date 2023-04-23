import { Component } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-create-register-form',
  templateUrl: './create-register-form.component.html',
  styleUrls: ['./create-register-form.component.css']
})
export class CreateRegisterFormComponent {
  username: string = ""
  password: string = ""
  Repassword: string = ""
  isPasswordMatch: boolean = false
  myNumber: number = 123456
  //name = 'Jquery Integration With Angular!';
  isJqueryWorking: any;
  isCorrect: boolean = true
  ngOnInit() {
    $(document).ready(() => {
      this.isJqueryWorking = 'Jquery is working !!!';

      $("h5").click(function () {
        $("h5").hide();
      });

    });
  }
  public onUsernameInputChnage(e: Event) {
    this.username = (<HTMLInputElement>e.target).value
  }

  public onPasswordInputChnage(e: Event) {
    this.password = (<HTMLInputElement>e.target).value
  }
  public onRePasswordInputChnage(e: Event) {
    this.Repassword = (<HTMLInputElement>e.target).value
    if (this.password != this.Repassword) {
      this.isPasswordMatch = false
    }
    else {
      this.isPasswordMatch = true

    }
  }
  public onNumberChnage(e: Event) {
    this.myNumber = parseInt((<HTMLInputElement>e.target).value)
  }

}
