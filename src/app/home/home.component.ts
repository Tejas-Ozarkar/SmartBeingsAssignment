import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  users: Array<User>;

  constructor(private _userService: UserService) { }

  ngOnInit() { 
    this._userService.getUsers()
    .subscribe(resUserData => this.users = resUserData);
  }

}
