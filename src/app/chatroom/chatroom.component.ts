import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ChatroomService} from './chatroom.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent {
  constructor(private chatroomService: ChatroomService) { }

	message: string;

	sendMessage(){
		this.chatroomService.newMessage.next(this.message);
	}

}
