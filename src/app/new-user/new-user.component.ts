import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from './../user';
import * as $ from "jquery";
@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  outputs: ['closePanelEvent','addUserEvent']
})
export class NewUserComponent implements OnInit {

  private closePanelEvent = new EventEmitter();
  private addUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closePanel(){
    this.closePanelEvent.emit();
  }
  onSubmitAddUser(user: User){
    console.log(user);
    $(".email").next(".validation").remove(); 
    $(".contact").next(".validation").remove(); 

    if(this.validateEmail(user.email)&&this.validateContact(user.contact)){
     
      this.addUserEvent.emit(user);  
    }
    else{
      if(!this.validateEmail(user.email)){
        $(".email").after("<div class='validation' style='color: red;'>Please Enter Valid Email</div>");
      }
      if(!this.validateContact(user.contact)){
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
