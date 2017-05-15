import { Component, OnInit } from '@angular/core';
import { Poll } from "app/user/create-poll/poll";
import { UserService } from "app/user/user.service";

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {
  newPoll: Poll= new Poll()
  
  constructor(private _userService: UserService) { }

  ngOnInit() {

  }

  createPoll(){
    this._userService.createPoll(this.newPoll)
    this.newPoll = new Poll()
  }
}
