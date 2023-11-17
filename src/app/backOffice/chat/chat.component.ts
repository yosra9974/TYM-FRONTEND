import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketServiceService } from 'src/app/services/web-socket-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  message !: string ;
  receivedMessages: any[] = [];
  private messageSubscription   ! : Subscription;

  constructor(private webSocketService: WebSocketServiceService) { }

  ngOnInit(): void {
    this.webSocketService.sendMessage('Hello from Angular!'); // You can send an initial message if needed
    this.messageSubscription = this.webSocketService.getMessage().subscribe(
      (message) => {
        this.receivedMessages.push(message);
      }
    );
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
    this.webSocketService.closeConnection();
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.webSocketService.sendMessage(this.message);
      this.message = '';
    }
  }
}
