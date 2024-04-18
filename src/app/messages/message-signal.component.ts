import { Component , Input , input , Output , EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Message } from './message.model';

@Component({
  selector: 'app-message-signal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message-signal.component.html',
  styleUrl: './message-signal.component.css'
})
export class MessageComponentSignal {

  color = 'yellow';

  messageVarClasse = input<Message>(new Message("", ""));

  @Output() outputMessage = new EventEmitter<string>();

  onEdit(){
    this.outputMessage.emit("Texto retornado componente com Signal: Venho de message(child) para o app (pai)")
  }
  
}
