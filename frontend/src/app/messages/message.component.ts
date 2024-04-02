import { Component , Input , input } from '@angular/core';
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

  message = {
    content: 'Teste',
    author: 'teste',
  }


}
