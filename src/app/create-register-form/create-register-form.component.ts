import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-create-register-form',
  templateUrl: './create-register-form.component.html',
  styleUrls: ['./create-register-form.component.css']
})
export class CreateRegisterFormComponent implements OnInit {
  username: string = ""
  password: string = ""
  Repassword: string = ""
  isPasswordMatch: boolean = false
  myNumber: number = 123456
  //name = 'Jquery Integration With Angular!';
  isJqueryWorking: any;
  isCorrect: boolean = true
  users: string[] = ["Farhad", "Reza", "Mehdy", "Milad"]
  userObj: any = [
    {
      id: 1,
      name: "Farhad"
    },
    {
      id: 2,
      name: "Mehdy"
    },
    {
      id: 3,
      name: "Mostafa"
    },
    {
      id: 4,
      name: "Elahe"
    },
    {
      id: 5,
      name: "Ashraf"
    },
  ]

  public addNewUser() {

    this.userObj = [
      {
        id: 1,
        name: "Farhad"
      },
      {
        id: 2,
        name: "Mehdy"
      },
      {
        id: 3,
        name: "Mostafa"
      },
      {
        id: 4,
        name: "Elahe"
      },
      {
        id: 5,
        name: "Ashraf"
      }, {
        id: 6,
        name: "Ario"
      },
    ]
  }

  public trackByFunc(index: number, el: any) {
    
    //--در اینجا لازم است برای هر رکورد چیزی را معرفی کنید که برای هر المنت یونیک باشد
    return el.id;
  }

  styles = {};
  ngOnInit() {
    $(document).ready(() => {

      this.styles = {
        "font-size": "35px",
        "color": "green"
      }

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

  public onchangeStyleColor(e: Event) {
    // debugger
    // console.log((<HTMLInputElement>e.target).value)
    if ((<HTMLInputElement>e.target).value == "2") {
      this.isCorrect = false
    }
    else {
      this.isCorrect = true



    }
  }
  public onNumberChnage(e: Event) {
    this.myNumber = parseInt((<HTMLInputElement>e.target).value)
  }

}
