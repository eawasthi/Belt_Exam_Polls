import { User } from './login/user';
import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from "@angular/http";
import "rxjs";
import { Question } from "app/users/new-polls/question";

@Injectable()
export class UsersService {
  POLLS: any;
  Question: any;
  mainpage = false;
  AnyUserQuestion: any;
  questionId: string;
  Questions: any;
  user: User;
  loggedUser: User;
  USERS: User[] = []
  loggedin = false
  New_pollPage = false
  show_Question = false
 
  constructor(private http:Http) {}

get_users(){
    this.http.get('/users')
      .map((response: Response) => response.json())
      .subscribe(
      data => {this.USERS=data},
      )}

  loggedIn(){
    this.http.get('/loggedin')
      .map((response: Response) => response.json())
      .subscribe(user=>{if(user){{this.loggedin = true; this.loggedUser=user}}else{this.loggedin = false}},
      )
  }

  create(user:User){
    this.http.post("/create", user)
      .map((response: Response)=> response.json())
      .subscribe(userinfo =>{(userinfo);
        this.loggedUser = userinfo;
        this.loggedin = true
        this.mainpage = true
      })
    }


    find(user:User){
      this.http.post("/find", user)
          .map((response: Response) => response.json())
          .subscribe(data2 =>{
            if(data2==null){
              this.create(user);
            }else{ 
              this.loggedUser = data2
              this.loggedin = true
              this.mainpage = true
          }
        })
    }

    logOut(){
      this.http.get("/logout")
          .map((response: Response) => response.json())
          .subscribe()
          this.loggedin = false  
    }

    create_newPoll(){
        this.loggedin = true
        this.show_Question = false
        this.mainpage=false
        this.New_pollPage = true
        
    }


  newQuestion(questioncreate:Question){
  console.log("awesome message",questioncreate,"awesome is it")
    this.http.post("/questioncreate", questioncreate)
        .map((response: Response) => response.json())
        .subscribe()
         this.loggedin = true
        this.show_Question = false
        this.mainpage=true
        this.New_pollPage = false  
  }

  canceling(){
    this.loggedin=true
    this.New_pollPage = false
    this.show_Question = false
    this.mainpage = true
  }

  get_allQuestions(){
  this.http.get('/getAll_Questions')
    .map((response: Response) => response.json())
   .subscribe(data => { this.Questions = data })
   console.log("inside get_allQuestion", this.Questions)

  }

  findQuestion(id: string) {
  this.questionId = id
  // this.http.get("/getAnyUserQuestion/" + id)
  //   .map((response: Response) => response.json())
  //   .subscribe(data => { this.AnyUserQuestion = data })
  this.loggedin=true
  this.mainpage = false
  this.New_pollPage = false
  this.show_Question = true
}

  deleteQuestion(id){
      this.http.get("/delete/"+id)
          .map((response: Response) => response.json())
          .subscribe(data => {this.Question = data})
    this.http.get('/getAll_Questions')
    .map((response: Response) => response.json())
   .subscribe(data => { this.Questions = data })
    }

    addVote1(id:string){
      console.log("add vote1")
      this.http.get('/addvote1/'+id)
          .map((response: Response) =>response.json())
          .subscribe(polls=> this.Questions = polls);

    }

    addVote2(id:string){
      this.http.get('/addvote2/'+id)
          .map((response: Response) =>response.json())
          .subscribe(polls => this.Questions = polls);
    }

    addVote3(id:string){
      this.http.get('/addvote3/'+id)
          .map((response: Response) =>response.json())
          .subscribe(polls => this.Questions = polls);
    }

    addVote4(id:string){
      this.http.get('/addvote4/'+id)
          .map((response: Response) =>response.json())
          .subscribe(polls => this.Questions = polls);
    }

}