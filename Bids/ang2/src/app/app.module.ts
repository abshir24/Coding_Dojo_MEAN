import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from "app/user/user.service";
import { UserCreateComponent } from './user/user-create/user-create.component';
import { AllbidsComponent } from './user/allbids/allbids.component';
import { EndBidComponent } from './user/end-bid/end-bid.component';


 


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserCreateComponent,
    AllbidsComponent,
    EndBidComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
