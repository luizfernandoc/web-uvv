import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './messages/message.component';
import { MessageComponentSignal } from './messages/message-signal.component';
import { Message } from './messages/message.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent, MessageComponentSignal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'frontend';

  messageBinding: Message = new Message("Texto da Mensagem Input", "Luiz Fernando");

  
}
