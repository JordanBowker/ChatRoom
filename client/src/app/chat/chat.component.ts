import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service';

import { Action } from './shared/model/action';
import { Event } from './shared/model/event';
import { Message } from './shared/model/message';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'chat-room-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  action = Action;
  messages: Message[] = [];

  constructor(private readonly _socketService: SocketService) { }

  ngOnInit() {
    this.initIoConnection();
    this.sendMessage("asdasd");
  }

  ngOnDestroy(){
  }

  private initIoConnection(): void {
    this._socketService.initSocket();

    this._socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
      });

    this._socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });
      
    this._socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }

    this._socketService.send({
      content: message
    });
  }

  public sendNotification(params: any, action: Action): void {
    let message: Message;

    if (action === Action.JOINED) {
      message = {
        action: action
      }
    } 

    this._socketService.send(message);
  }

}
