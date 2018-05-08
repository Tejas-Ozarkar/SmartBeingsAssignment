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
  selectedUser: User;

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
    this._userService.addUser(user)
    .subscribe(resNewUser=>{
      this.users.push(resNewUser);
    });
  }
  showEditUser(user: User){
    this.toggleEditUser();
    this.selectedUser = user;
  }
  toggleEditUser(){
    this.flagEditUser = (this.flagEditUser==true)?false:true;
  }

  editUser(user: User){
    this.toggleEditUser();
    this._userService.updateUser(user)
    .subscribe(resUpdatedUser=>{
      console.log('updated');
    });
  }
  deleteUser(user: User){
    let usersArray = this.users;
    this._userService.deleteUser(user)
      .subscribe(resDeletedUser => {
          for(let i=0;i<usersArray.length;i++){
            if(usersArray[i]._id === user._id){
              usersArray.splice(i,1);
            }
          }

      });
  }
  
}
