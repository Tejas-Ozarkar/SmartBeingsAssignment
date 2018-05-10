import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from './../user';
import * as $ from "jquery";
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

  onSubmitEditUser(){
   
    $(".email").next(".validation").remove(); 
    $(".contact").next(".validation").remove(); 

    if(this.validateEmail(this.user.email)&&this.validateContact(this.user.contact)){
     
      this.editUserEvent.emit(this.user);

    }
    else{
      if(!this.validateEmail(this.user.email)){
        $(".email").after("<div class='validation' style='color: red;'>Please Enter Valid Email</div>");
      }
      if(!this.validateContact(this.user.contact)){
        $(".contact").after("<div class='validation' style='color: red;'>Please Enter Valid Contact</div>");
      }
    }
   
  }

  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validateContact(contact) {
    var re = /(^[0-9-]*$)/;
    return re.test(contact);
  }
}
