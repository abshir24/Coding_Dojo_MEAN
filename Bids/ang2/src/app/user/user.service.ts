import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from "@angular/http";

import "rxjs";
import { User } from "app/user/user";
import { Bids } from "app/user/allbids/bids";




@Injectable()
export class UserService {
  user:User;
  bid:Bids;
  loggedUser: User;
  USERS: User[] = []
  Bids1: Bids[] = []
  Bids2: Bids[] = []
  Bids3: Bids[] = []
  bid1High: Bids;
  bid2High: Bids;
  bid3High: Bids;
  endBid: Boolean = false
  access: Boolean = false
  loggedIn: Boolean = false

  
  constructor(private http:Http) {this.get_users() }

  get_users(){
    this.http.get('/users')
      .map((response: Response) => response.json())
      .subscribe(
      data => {this.USERS=data},
      (e) => {console.log(e)},
      () => {console.log("Continue?")}
      )
  }
  get_bids1(){
    this.http.get('/getbids1')
      .map((response: Response) => response.json())
      .subscribe(data => {this.Bids1=data})
  }
  get_bids2(){
    this.http.get('/getbids2')
      .map((response: Response) => response.json())
      .subscribe(data => {this.Bids2=data})
  }

  get_bids3(){
    this.http.get('/getbids3')
      .map((response: Response) => response.json())
      .subscribe(data => {this.Bids3=data})
  }

  checkBids(){
    if(this.Bids1.length == 0 || this.Bids2.length == 0 || this.Bids3.length == 0){
      alert("Cannot end the bid. One product does not have any bid yet")
      return false
    }else{
      return true
    }
  }

  endBids(){
    if(this.checkBids()){
      console.log("inside end bids service")
      this.bid1High = this.Bids1[this.Bids1.length - 1]
      console.log("bids1High",this.bid1High )
      this.bid2High = this.Bids2[this.Bids2.length - 1]
      console.log("bids2High",this.bid2High )
      this.bid3High = this.Bids3[this.Bids3.length - 1]
      console.log("bids3High",this.bid3High )
      this.endBid = true
      this.access = false
    }
  }
  startBid(){
    this.http.get('/startbid')
      .map((response: Response) => response.json())
      .subscribe()
      this.endBid = false
      this.access = true
      this.Bids1 = []
      this.Bids2 = []
      this.Bids3 = []
  }
  create(user:User){
    const headers = new Headers({"Content-Type": "application/json"})
    const options = new RequestOptions({headers: headers})
    this.http.post("/create", user,options)
      .map((response: Response)=> response.json())
      .subscribe(userinfo =>{
        console.log("Server returned this userinfo.body: ",userinfo);
        
        this.loggedUser = userinfo;
        this.loggedIn = true
        this.access = true
      })
    }
  
  find(user:User){
    const headers = new Headers({"Content-Type": "application/json"})
    const options = new RequestOptions({headers: headers})
    this.http.post("/find", user,options)
        .map((response: Response) => response.json())
        .subscribe(data2 =>{
          if(data2==null){
            console.log("User was not found"); 
            this.create(user);
          }else{ 
            console.log("User was found: ", data2);
            this.loggedUser = data2
            this.access = true
            this.loggedIn = true
        }
      })
    } 

     addbid1(bid:Bids){
      const headers = new Headers({"Content-Type": "application/json"})
      const options = new RequestOptions({headers: headers})
      this.http.post('/addbid1', bid,options)
          .map((response: Response) =>response.json())
          .subscribe(bids => this.Bids1 = bids)
    } 

    addbid2(bid:Bids){
      const headers = new Headers({"Content-Type": "application/json"})
      const options = new RequestOptions({headers: headers})
      this.http.post("/addbid2", bid,options)
          .map((response: Response) =>response.json())
          .subscribe(bids => this.Bids2 = bids)
    }

    addbid3(bid:Bids){
      const headers = new Headers({"Content-Type": "application/json"})
      const options = new RequestOptions({headers: headers})
      this.http.post("/addbid3", bid,options)
          .map((response: Response) =>response.json())
          .subscribe(bids=> this.Bids3 = bids)       
    }
    
    logOut(){
      console.log("hitting logout service")
      this.http.get("/logout")
          .map((response: Response) => response.json())
          .subscribe()
          this.loggedIn = false
          this.endBid = false
    }
  }

 

  
