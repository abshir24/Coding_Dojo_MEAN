import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";
import { User } from "app/user/user";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  newUser: User = new User();
  constructor(private _userService:UserService) { }

  ngOnInit() {
  }

  find(){
    this._userService.find(this.newUser)
    this.newUser = new User()
  }   
}
