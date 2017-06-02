import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
  
constructor(private _usersService: UsersService) { }

  ngOnInit() {
    
  }

  Question(id){
    this._usersService.findQuestion(id)
  }

  addVote1(id){
    this._usersService.addVote1(id)
  }

  addVote2(id){
    this._usersService.addVote2(id)
  }
    addVote3(id){
    this._usersService.addVote3(id)
  }
    addVote4(id){
    this._usersService.addVote4(id)
  }

  canceling(){
      this._usersService.canceling()
  }

}
