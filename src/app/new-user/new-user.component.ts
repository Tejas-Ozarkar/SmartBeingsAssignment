import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from './../user';
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
    if(user.username==""&&user.address==""&&user.contact==""&&user.email==""){
      alert('Please fill all the details');
    }else if(!this.validateEmail(user.email)){
      alert('Invalid email');
    }else if(!this.validateContact(user.contact)){
      alert('Invalid contact');
    }else{
      this.addUserEvent.emit(user);  
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
