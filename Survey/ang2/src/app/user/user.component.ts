import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService:UserService) { }

  ngOnInit() {
  }

}
