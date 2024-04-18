import { Component, OnInit, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MessageService } from './message-services';
import { MessageComponentSignal } from './message-signal.component';
import { Message } from './message.model';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [FormsModule, MessageComponentSignal],
  template: `<div class="col-md-8 col-md-offset-2">
    @for (msg of messageS; track $index) {
    <app-message-signal
      [messageVarClasse]="msg"
      (outputMessage)="msg.content = $event"
    ></app-message-signal>
    }

    <br />
    <br />
  </div>`,
})
export class MessageListComponent implements OnInit {
  messageS: Message[] = [
    new Message('Texto 01 mensagem', 'Vinicius'),
    new Message('Texto 02 mensagem', 'Rosalen'),
    new Message('Texto 03 mensagem', 'Luiz'),
  ];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageS = this.messageService.getMessages();
  }
}
