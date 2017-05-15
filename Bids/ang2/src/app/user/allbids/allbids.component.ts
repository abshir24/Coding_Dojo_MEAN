import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user/user.service";
import { User } from "app/user/user";
import { Bids } from "app/user/allbids/bids";

 

@Component({
  selector: 'app-allbids',
  templateUrl: './allbids.component.html',
  styleUrls: ['./allbids.component.css']
})

export class AllbidsComponent implements OnInit {
  newBid: Bids = new Bids()
  newBid2: Bids = new Bids()
  newBid3: Bids = new Bids()
  users:User[] = this._userService.USERS

  search_string: string = ""
  
  constructor(private _userService: UserService) { }

   ngOnInit() {
    this.getBids1()
    this.getBids2()
    this.getBids3()
  }

  endBids(){
    console.log("inside end bids")
    this._userService.endBids();
  }

  addbid1(){
    
    this._userService.addbid1(this.newBid);
    this.newBid = new Bids()
  }

  addbid2(){
    this._userService.addbid2(this.newBid2);
    this.newBid2 = new Bids()
  }

  addbid3(){
    this._userService.addbid3(this.newBid3);
    this.newBid3 = new Bids()
  }

  getBids1(){
    this._userService.get_bids1()
  }

  getBids2(){
    this._userService.get_bids2()
  }

  getBids3(){
    this._userService.get_bids3()
  }

  // filter_users_array(){
  //   return this._userService.USERS.filter(user => user.Name.indexOf(this.search_string) > -1)
  // }
}
