import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-polls',
  templateUrl: './current-polls.component.html',
  styleUrls: ['./current-polls.component.css']
})
export class CurrentPollsComponent implements OnInit {

constructor(private _usersService: UsersService) { }

    search_string: string = ""

  ngOnInit() {
   this._usersService.loggedIn()
   this._usersService.get_users()
   this._usersService.get_allQuestions()   
  }

  allQuestions(){
    this._usersService.get_allQuestions()
  }

Question(id){
    this._usersService.findQuestion(id)
  }
}
