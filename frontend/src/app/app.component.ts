import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageComponent } from './messages/message.component';
import { MessageComponentSignal } from './messages/message-signal.component';
import { Message } from './messages/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageComponent, MessageComponentSignal, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  // Switch Case

  valorNgSwitch: number = 0;

  // If Else 
  mostrarElemento: boolean = true;

  onMudaMostrarElemento(){
    this.mostrarElemento = !this.mostrarElemento;
  }
  
  // For

  messageS: Message[] = [
    new Message('Texto 01 mensagem', 'Vinicius'),
    new Message('Texto 02 mensagem', 'Rosalen'),
    new Message('Texto 03 mensagem', 'Luiz'),
  ];

  // @Input ou Signal Input

  messageBinding: Message = new Message(
    'Texto da Mensagem Input',
    'Luiz Fernando'
  );

  
}
