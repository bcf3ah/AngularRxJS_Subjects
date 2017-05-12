import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatroomService } from './chatroom/chatroom.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	constructor(private chatRoomService: ChatroomService){}
  posts: string[] = [];
	subscription: Subscription;

	ngOnInit(){
		this.subscription = this.chatRoomService.newMessage.subscribe((message: string) => {
			this.posts.push(message);
		})
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
