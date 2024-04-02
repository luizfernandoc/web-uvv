import { Component , Input , input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from './message.model';

@Component({
  selector: 'app-message-signal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-signal.component.html',
  styleUrl: './message-signal.component.css'
})
export class MessageComponentSignal {

 //  @Input() messageVarClasse : Message = new Message("", "");
    messageVarClasse = input<Message>(new Message("", ""));

}
