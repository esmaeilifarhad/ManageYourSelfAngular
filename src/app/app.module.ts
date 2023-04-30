import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypeCallComponent } from './type-call/type-call.component';
import { CreateRegisterFormComponent } from './create-register-form/create-register-form.component';
import { SwitchCase1Component } from './switch-case1/switch-case1.component';
import { SwitchCase2Component } from './switch-case2/switch-case2.component';
import { SwitchCase3Component } from './switch-case3/switch-case3.component';
import { StarComponent } from './star/star.component';
import { DecouplingComponentComponent } from './decoupling-component/decoupling-component.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsertableComponent } from './usertable/usertable.component';
import { IncComponent } from './inc/inc.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeCallComponent,
    CreateRegisterFormComponent,
    SwitchCase1Component,
    SwitchCase2Component,
    SwitchCase3Component,
    StarComponent,
    DecouplingComponentComponent,
    AdduserComponent,
    UsertableComponent,
    IncComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
