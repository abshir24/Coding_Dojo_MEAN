import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {
  Vote1: number = 0;
  Vote2: number = 0;
  Vote3: number = 0;
  Vote4: number = 0;
  constructor(private _userService: UserService) {}

  ngOnInit() {
  }

  addVote1(id){
   this._userService.addVote1(id);
  }

  addVote2(id){
    this._userService.addVote2(id);
  }

  addVote3(id){
    this._userService.addVote3(id);
  }

  addVote4(id){
    this._userService.addVote4(id);
  }
}
