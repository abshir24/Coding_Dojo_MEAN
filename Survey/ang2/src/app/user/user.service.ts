import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from "@angular/http";

import "rxjs";
import { User } from "app/user/user";
import { Poll } from "app/user/create-poll/poll";

@Injectable()
export class UserService {
  user:User;
  poll:Poll;
  pollFind:String;
  loggedUser: User;
  USERS: User[] = []
  POLLS: any[] = []
  access: Boolean = false
  showPoll: Boolean = false
  loggedIn: Boolean = false

  
  constructor(private http:Http) {}

  // getStringPolls(){
  //   this.http.get('/getstringpolls')
  //     .map((response: Response) => response.json())
  //     .subscribe(data => console.log("string polls:",data))
  // }

  get_users(){
    this.http.get('/users')
      .map((response: Response) => response.json())
      .subscribe(
      data => {this.USERS=data},
      (e) => {console.log(e)},
      () => {console.log("Continue?")}
      )
  }

  get_polls(){
    this.http.get('/getpolls')
      .map((response: Response) => response.json())
      .subscribe(data => this.POLLS = data )
  }

  create(user:User){
    const headers = new Headers({"Content-Type": "application/json"})
    const options = new RequestOptions({headers: headers})
    this.http.post("/create", user,options)
      .map((response: Response)=> response.json())
      .subscribe(userinfo =>{console.log("Server returned this userinfo.body: ",userinfo);
        
        this.loggedUser = userinfo;
        this.loggedIn = true
        this.access = true
      })
    }

    delete(id: string){
    this.http.delete("/delete/"+id)
        .subscribe(response => this.get_polls())
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

    accessOn(){
      this.access = true
      this.showPoll = false
    }

    accessOff(){
      this.access = false
    }

     createPoll(poll:Poll){
      console.log("addTopic userService")
      const headers = new Headers({"Content-Type": "application/json"})
      const options = new RequestOptions({headers: headers})
      this.http.post('/createpoll', poll,options)
          .map((response: Response) =>response.json())
          .subscribe(polls => this.POLLS = polls)
      this.access = true
    }

    findPoll(id: string){

      this.pollFind = id
      console.log(this.pollFind)
      this.showPoll = true
    }

    addVote1(id:string){
      // const headers = new Headers({"Content-Type": "application/json"})
      // const options = new RequestOptions({headers: headers})
      console.log("add vote1")
      this.http.get('/addvote1/'+id)
          .map((response: Response) =>response.json())
          .subscribe(polls=> this.POLLS = polls);
    }

    addVote2(id:string){
      this.http.get('/addvote2/'+id)
          .map((response: Response) =>response.json())
          .subscribe(polls => this.POLLS = polls);
    }

    addVote3(id:string){
      this.http.get('/addvote3/'+id)
          .map((response: Response) =>response.json())
          .subscribe(polls => this.POLLS = polls);
    }

    addVote4(id:string){
      this.http.get('/addvote4/'+id)
          .map((response: Response) =>response.json())
          .subscribe(polls => this.POLLS = polls);
    }
 
    logOut(){
      console.log("hitting logout service")
      this.http.get("/logout")
          .map((response: Response) => response.json())
          .subscribe()
          this.loggedIn = false
    }
  }

 

  