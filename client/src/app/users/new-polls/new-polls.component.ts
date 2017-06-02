import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { Question } from "app/users/new-polls/question";

@Component({
  selector: 'app-new-polls',
  templateUrl: './new-polls.component.html',
  styleUrls: ['./new-polls.component.css']
})
export class NewPollsComponent implements OnInit {
 questioncreate: Question = new Question()

constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.loggedIn()
    // this._usersService.newQuestion(this.questioncreate)
  }

newQuestion(){
  console.log("this.questioncreate",this.questioncreate)
  this._usersService.newQuestion(this.questioncreate)
}

canceling(){
    this._usersService.canceling()
}


}
