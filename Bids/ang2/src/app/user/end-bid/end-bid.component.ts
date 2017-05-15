import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";
import { User } from "app/user/user";

@Component({
  selector: 'app-end-bid',
  templateUrl: './end-bid.component.html',
  styleUrls: ['./end-bid.component.css']
})
export class EndBidComponent implements OnInit {
  users: User[] = this._userService.USERS
  constructor(private _userService: UserService) { }

  startBid(){
    this._userService.startBid();
  }
  ngOnInit() {
  }

}
