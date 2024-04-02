import { Component , Input, Output , EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from './message.model';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  @Input() messageVarClasse : Message = new Message("", "");

  @Output() outputMessage = new EventEmitter<string>();

  onEdit(){
    this.outputMessage.emit("Texto retornado: Venho de message(child) para o app (pai)")
  }

}
