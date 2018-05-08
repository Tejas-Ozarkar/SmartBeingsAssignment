import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  users: Array<User>;
  flagNewUser: boolean = false;
  flagEditUser: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit() { 
    this._userService.getUsers()
    .subscribe(resUserData => this.users = resUserData);
  }

  toggleNewUser(){
    this.flagNewUser = (this.flagNewUser==true)?false:true;
  }

  addUser(user: User){
    this.toggleNewUser();
    console.log(user);
  }
  editUser(user: User){
    this.toggleEditUser();
    console.log(user);
  }
  toggleEditUser(){
    this.flagEditUser = (this.flagEditUser==true)?false:true;
  }
}
