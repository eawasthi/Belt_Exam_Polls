import { UsersService } from './users/users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { CurrentPollsComponent } from './users/current-polls/current-polls.component';
import { NewPollsComponent } from './users/new-polls/new-polls.component';
import { ShowQuestionComponent } from './users/show-question/show-question.component';
import { NameFilterPipe } from './name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    CurrentPollsComponent,
    NewPollsComponent,
    ShowQuestionComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
