import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatroomService } from './chatroom/chatroom.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
