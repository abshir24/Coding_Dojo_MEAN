import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";
import { Poll } from "app/user/create-poll/poll";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  poll:Poll;
  findPoll:Poll = new Poll();
 
  search_string: string = ""
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getPolls()
    this._userService.get_users()
  }

  getPolls(){
    this._userService.get_polls()
  }

  Poll(id){
    this._userService.findPoll(id)
  }
  
  delete(id){
    this._userService.delete(id);
  }
}

