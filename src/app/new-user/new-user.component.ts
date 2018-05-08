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
    this.addUserEvent.emit(user);
  }
}
