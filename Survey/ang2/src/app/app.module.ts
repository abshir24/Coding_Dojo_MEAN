import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from "app/user/user.service";
import { UserCreateComponent } from './user/user-create/user-create.component';
import { MainpageComponent } from './user/mainpage/mainpage.component';
import { CreatePollComponent } from './user/create-poll/create-poll.component';
import { ShowPollComponent } from './user/show-poll/show-poll.component';
import { NameFilterPipe } from './name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCreateComponent,
    MainpageComponent,
    CreatePollComponent,
    ShowPollComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
