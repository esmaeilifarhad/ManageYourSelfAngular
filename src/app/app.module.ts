import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypeCallComponent } from './type-call/type-call.component';
import { CreateRegisterFormComponent } from './create-register-form/create-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeCallComponent,
    CreateRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
