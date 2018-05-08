import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from './../user';
@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  inputs: ['user'],
  outputs: ['closeEditEvent','editUserEvent']
})
export class EditUserComponent implements OnInit {

  user: User;
  oldUser: User;
  private closeEditEvent = new EventEmitter();
  private editUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.oldUser = JSON.parse(JSON.stringify(this.user));
    console.log(this.oldUser);
  }
  
  closePanel(){
    this.user.username = this.oldUser.username;
    this.user.address = this.oldUser.address;
    this.user.contact = this.oldUser.contact;
    this.user.email = this.oldUser.email;
    this.closeEditEvent.emit();
   
  }

  onSubmitEditUser(user: User){
    this.editUserEvent.emit(user);
    console.log(this.oldUser);
  }
}
